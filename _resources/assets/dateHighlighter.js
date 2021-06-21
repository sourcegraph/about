import { parse } from 'https://cdn.skypack.dev/chrono-node@2'
import tippy from 'https://cdn.skypack.dev/tippy.js@6'

window.addEventListener('DOMContentLoaded', () => {
    for (const element of document.querySelectorAll('time')) {
        tippy(element, {
            content: getDateTooltip(element),
            placement: 'bottom-end',
            arrow: false,
            duration: 0,
            offset: [0, 6],
            theme: 'light',
        })
    }
})

/**
 * @param {HTMLTimeElement} timeElement
 * @returns {string}
 */
function getDateTooltip(timeElement) {
    let tooltip = formatDateTime(timeElement)
    if (timeElement.dataset.isStartOfInterval) {
        tooltip = 'Begins on ' + tooltip
    }
    return tooltip
}

/**
 * @param {HTMLTimeElement} timeElement
 * @returns {string}
 */
function formatDateTime(timeElement) {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values for possible values of `timeElement.dateTime`.

    // Handle MM-DD reference
    if (/^\d\d-\d\d$/.test(timeElement.dateTime)) {
        return new Date(`${new Date().getFullYear()}-${timeElement.dateTime}`).toLocaleString(undefined, {
            month: 'long',
            day: 'numeric',
        })
    }

    // Handle all other possible values with a lenient parser.
    const parsed = parse(timeElement.dateTime)[0]?.start
    if (!parsed) {
        return timeElement.dateTime
    }

    // Only include the parts of the date that we know about
    /** @type {Intl.DateTimeFormatOptions} */
    const options = {
        year: parsed.isCertain('year') ? 'numeric' : undefined,
        month: parsed.isCertain('month') ? 'long' : undefined,
        day: parsed.isCertain('day') ? 'numeric' : undefined,
        weekday: parsed.isCertain('day') ? 'long' : undefined,
        hour: parsed.isCertain('hour') ? 'numeric' : undefined,
        minute: parsed.isCertain('minute') ? 'numeric' : undefined,
        second: parsed.isCertain('second') ? 'numeric' : undefined,
        timeZoneName: parsed.isCertain('hour') ? 'long' : undefined,
    }
    return parsed.date().toLocaleString(undefined, options)
}
