import {
    TelemetryRecorderProvider as BaseTelemetryRecorderProvider,
    MarketingTrackingTelemetryProcessor,
    NoOpTelemetryExporter,
    type MarketingTrackingProvider,
    type TelemetryEventMarketingTrackingInput,
} from '@sourcegraph/telemetry'

import { GraphQLTelemetryExporter } from './gqlTelemetryExporter'
import { getSessionTracker } from './sessionTracker'
import { getUserTracker } from './userTracker'

function getTelemetrySourceClient(): string {
    return 'about.web'
}

/**
 * TelemetryRecorderProvider is the default provider implementation for the
 * Sourcegraph web app.
 */
export class TelemetryRecorderProvider extends BaseTelemetryRecorderProvider<'', ''> {
    constructor() {
        super(
            {
                client: getTelemetrySourceClient(),
            },
            new GraphQLTelemetryExporter('https://sourcegraph.com'),
            [new MarketingTrackingTelemetryProcessor(new TrackingMetadataProvider())],
            {
                /**
                 * Use buffer time of 100ms - some existing buffering uses
                 * 1000ms, but we use a more conservative value.
                 */
                bufferTimeMs: 100,
                bufferMaxSize: 10,
                errorHandler: error => {
                    throw new Error(error)
                },
            }
        )
    }
}

class TrackingMetadataProvider implements MarketingTrackingProvider {
    private user = getUserTracker()
    private session = getSessionTracker()

    public getMarketingTrackingMetadata(): TelemetryEventMarketingTrackingInput | null {
        return {
            cohortID: this.user.cohortID,
            deviceSessionID: this.user.deviceSessionID,
            firstSourceURL: this.session.getFirstSourceURL(),
            lastSourceURL: this.session.getLastSourceURL(),
            referrer: this.session.getReferrer(),
            sessionFirstURL: this.session.getSessionFirstURL(),
            sessionReferrer: this.session.getSessionReferrer(),
            url: window.location.href,
        }
    }
}

export class NoOpTelemetryRecorderProvider extends BaseTelemetryRecorderProvider<'', ''> {
    constructor() {
        super({ client: '' }, new NoOpTelemetryExporter(), [])
    }
}

export const noOptelemetryRecorderProvider = new NoOpTelemetryRecorderProvider()
export const noOpTelemetryRecorder = noOptelemetryRecorderProvider.getRecorder()
