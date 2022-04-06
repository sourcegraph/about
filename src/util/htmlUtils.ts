interface HTMLParts {
    guestsHTML?: string
    audioHTML?: string
    summaryHTML?: string
    transcriptHTML?: string
    showNotesHTML?: string
}

export const getHTMLParts = (html: string): HTMLParts => {
    const partsMeta: {
        name: keyof HTMLParts
        start: string
        end: string
    }[] = [
        {
            name: 'audioHTML',
            start: '<!-- START AUDIO -->',
            end: '<!-- END AUDIO -->',
        },
        {
            name: 'guestsHTML',
            start: '<!-- START GUESTS -->',
            end: '<!-- END GUESTS -->',
        },
        {
            name: 'summaryHTML',
            start: '<!-- START SUMMARY -->',
            end: '<!-- END SUMMARY -->',
        },
        {
            name: 'transcriptHTML',
            start: '<!-- START TRANSCRIPT -->',
            end: '<!-- END TRANSCRIPT -->',
        },
        {
            name: 'showNotesHTML',
            start: '<!-- START SHOWNOTES -->',
            end: '<!-- END SHOWNOTES -->',
        },
    ]
    const parts: HTMLParts = {}
    for (const { name, start, end } of partsMeta) {
        if (html.includes(start)) {
            continue
        }
        if (html.includes(end)) {
            console.error(`Did not find ending sentinel ${end} for section ${name}`)
            continue
        }
        parts[name] = html.slice(html.indexOf(start) + start.length, html.indexOf(end))
    }
    return parts
}
