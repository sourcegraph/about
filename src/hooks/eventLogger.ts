import { useEffect } from 'react'

import { EventLogger } from '@sourcegraph/event-logger'

interface EventArguments {
    path: string
    [key: string]: string | null
}

let eventLogger: EventLogger

export function getEventLogger(): EventLogger {
    if (!eventLogger) {
        eventLogger = new EventLogger('https://sourcegraph.com')
    }
    return eventLogger
}

export const logCodeSnippetCopied = (snippetName: string = ''): void => {
    const eventArguments = { snippetName }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getEventLogger().log(EventName.CODE_SNIPPET_COPIED, eventArguments, eventArguments)
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
        getEventLogger()?.log(EventName.VIEW_STATIC_PAGE, eventArguments, eventArguments)
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
                getEventLogger()?.log(EventName.STATIC_PAGE_BUTTON_CLICKED, eventArguments, eventArguments)
            })
        }
    })
}

export const enum EventName {
    STATIC_VIDEO_PLAYED = 'StaticVideoPlayed',
    ENROLLMENT = 'ABTestEnrolled',
    INSTALLATION = 'CodyExtensionInstallInitiated',
    DOWNLOAD_CLICK = 'DownloadApp',
    AUTH_INITIATED = 'AuthInitiated',
    CODE_SNIPPET_COPIED = 'CodeSnippetCopied',
    VIEW_STATIC_PAGE = 'ViewStaticPage',
    STATIC_PAGE_BUTTON_CLICKED = 'StaticPageButtonClicked',
    ABOUT_GET_CODY_POPOVER = 'AboutGetCodyPopover',
    VIEW_ABOUT_CODY = 'ViewAboutCody',
    CODY_GET_STARTED_CTA = 'CodyGetStartedCTA',
    RESOURCE_ITEM_CLICK = 'ResourceItemClick',
    RESOURCE_CONTENT_TYPE_FILTER = 'ResourceContentTypeFilter',
    RESOURCE_SUBJECT_FILTER = 'ResourceSubjectFilter',
    RESOURCE_FEATURED_ITEM_CLICK = 'ResourceFeaturedItemClick',
    EMPTY_RESOURCE_SEARCH_RESULT = 'EmptyResourceSearchResult',
    DOWNLOAD_APP = 'DownloadApp',
    DOWNLOAD_IDE = 'DownloadIDE',
    JOIN_IDE_WAITLIST = 'JoinIDEWaitlist',
    SEARCH_LEARN_MORE_CTA = 'SearchLearnMoreCTA',
    CODY_LEARN_MORE_CTA = 'CodyLearnMoreCTA',
    VALUE_HEADLINE_TEST_ENROLLED = 'ValueHeadlineTestEnrolled',
}
