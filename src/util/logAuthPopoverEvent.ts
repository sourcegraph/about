import { getEventLogger } from '../hooks/eventLogger'

export const logAuthPopoverEvent = (source: string): void => {
    const eventArguments = {
        source,
        description: '',
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getEventLogger().log('AboutGetCodyPopover', eventArguments, eventArguments)
}
