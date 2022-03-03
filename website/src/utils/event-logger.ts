import { EventLogger } from '@sourcegraph/event-logger'

// Check if window is defined (so if in the browser or in node.js).
const isBrowser = typeof window !== 'undefined'

export const eventLogger = isBrowser ? new EventLogger('https://sourcegraph.com') : undefined
