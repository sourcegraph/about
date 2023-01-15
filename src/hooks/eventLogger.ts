import { useEffect } from 'react'

import { EventLogger } from '@sourcegraph/event-logger'

interface EventArguments {
    path: string
    [key: string]: string | null
}

let eventLogger: EventLogger

function getEventLogger(): EventLogger {
    if (!eventLogger) {
        eventLogger = new EventLogger('https://sourcegraph.com')
    }
    return eventLogger
}

export const useEventLogger = (): void => {
    useEffect(() => {
        const eventArguments: EventArguments = { path: location.pathname }
        const urlSearchParameters = new URLSearchParams(location.search)
        const utmParameters: string[] = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content']

        for (const parameter of utmParameters) {
            if (urlSearchParameters.has(parameter)) {
                eventArguments[parameter] = urlSearchParameters.get(parameter)
            }
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        getEventLogger()?.log('ViewStaticPage', eventArguments, eventArguments)
    })
}

export const useLogAllLinkClicks = (): void => {
    useEffect(() => {
        const links = document.querySelectorAll('a')
        for (const link of links) {
            link.addEventListener('click', () => {
                const eventArguments = {
                    textContent: link.textContent,
                    eventKey: link.dataset.rrUiEventKey,
                    id: link.id,
                    buttonStyle: link.dataset.buttonStyle,
                    buttonType: link.dataset.buttonType,
                    buttonLocation: link.dataset.buttonLocation,
                }

                // eslint-disable-next-line @typescript-eslint/no-floating-promises
                getEventLogger()?.log('StaticPageButtonClicked', eventArguments, eventArguments)
            })
        }
    })
}
