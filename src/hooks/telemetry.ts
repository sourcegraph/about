import { useEffect } from 'react';

import { TelemetryRecorder } from '@sourcegraph/telemetry';

export function useRecordPageViews(telemetryRecorder: TelemetryRecorder<'', ''>): void {
    useEffect(() => {
        const privateMetadata: { [key: string]: string | null} = {path: location.pathname}
        const urlSearchParameters = new URLSearchParams(location.search)
        const utmParameters: string[] = ['utm_source', 'utm_campaign', 'utm_medium', 'utm_term', 'utm_content']

        for (const parameter of utmParameters) {
            if (urlSearchParameters.has(parameter)) {
                privateMetadata[parameter] = urlSearchParameters.get(parameter)
            }
        }
        telemetryRecorder.recordEvent('aboutPage', 'view', {privateMetadata})
    })
}

export function useRecordLinkClicks(telemetryRecorder: TelemetryRecorder<'', ''>): void {
    useEffect(() => {
        const links = document.querySelectorAll('a')
        const eventListeners: Map<HTMLAnchorElement, () => void> = new Map()
        for (const link of links) {
            const listener = (): undefined => {
                telemetryRecorder.recordEvent('aboutPage.button', 'click', { privateMetadata: {
                    textContent: link.textContent,
                    eventKey: link.dataset.rrUiEventKey,
                    id: link.id,
                    buttonStyle: link.dataset.buttonStyle,
                    buttonType: link.dataset.buttonType,
                    buttonLocation: link.dataset.buttonLocation,
                } })
                return
            }
            eventListeners.set(link, listener)
            link.addEventListener('click', listener)
        }

        return () => {
            for (const [link, listener] of eventListeners) {
                link.removeEventListener('click', listener)
            }
        }
    }, [telemetryRecorder])
}
