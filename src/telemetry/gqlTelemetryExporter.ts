import type { TelemetryEventInput, TelemetryExporter } from '@sourcegraph/telemetry'

/**
 * GraphQLTelemetryExporter exports events via the new Sourcegraph telemetry
 * framework: https://sourcegraph.com/docs/dev/background-information/telemetry
 */
export class GraphQLTelemetryExporter implements TelemetryExporter {
    private sourcegraphURL: string | undefined

    constructor(sourcegraphURL: string) {
        this.sourcegraphURL = sourcegraphURL
    }

    public async exportEvents(events: TelemetryEventInput[]): Promise<void> {
        await fetch(`${this.sourcegraphURL}/.api/graphql?ExportTelemetryEventsFromAbout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                query: `
                    mutation ExportTelemetryEventsFromAbout($events: [TelemetryEventInput!]!) {
                        telemetry {
                            recordEvents(events: $events) {
                                alwaysNil
                            }
                        }
                    }`,
                variables: { events },
            }),
        }).catch(() => {
            // Swallow errors. This should not be necessary for the Sourcegraph Cloud GraphQL API (that
            // this file logs to), which should always be up to date, but end users should not be subjected
            // to error messages.
        })
    }
}
