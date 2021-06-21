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
 * @param {HTMLTimeElement} element
 * @returns {string}
 */
function getDateTooltip(element) {
    // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#valid_datetime_values for possible values of `element.dateTime`.

    // Handle MM-DD reference
    if (/^\d\d-\d\d$/.test(element.dateTime)) {
        return new Date(`${new Date().getFullYear()}-${element.dateTime}`).toLocaleString(undefined, {
            month: 'long',
            day: 'numeric',
        })
    }

    // Handle all other possible values with a lenient parser.
    const parsed = parse(element.dateTime)[0]?.start
    if (!parsed) {
        return element.dateTime
    }
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
