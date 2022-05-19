export const convertExcerptMarkdown = (excerpt: string): string => {
    const parsedExcerpt = excerpt
        .replace(/^### (.*$)/gim, '$1')
        .replace(/^## (.*$)/gim, '$1')
        .replace(/^# (.*$)/gim, '$1')
        .replace(/^> (.*$)/gim, '$1')
        .replace(/^_ (.*$)/gim, '$1')
        .replace(/\*\*(.*)\*\*/gim, '$1')
        .replace(/\*(.*)\*/gim, '$1')
        .replace(/!\[(.*?)]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
        .replace(/\[(.*?)]\((.*?)\)/gim, '$1, $2')
        .replace(/\n$/gim, '')

    return parsedExcerpt.trim()
}
