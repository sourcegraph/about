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
