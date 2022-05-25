import { useEffect } from 'react'

import { EventLogger } from '@sourcegraph/event-logger'

interface EventArguments {
    path: string
    [key: string]: string | null
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

        const eventLogger = new EventLogger('https://sourcegraph.com')
        eventLogger?.log('ViewStaticPage', eventArguments, eventArguments)
    })
}
