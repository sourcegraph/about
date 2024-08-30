import posthog, { CaptureResult } from 'posthog-js'

import { ProviderType } from '../components/cta/ExternalProvider'
import { GITHUB, GITLAB, VSCODE, JETBRAINS } from '../pages/constants'

interface EventData {
    current_page?: string
    page_position?: string
}

export const copy = async (text: string): Promise<void> => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
    } else {
        /**
         * Warning: execCommand is deprecated but we use it as a fallback.
         * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
         */
        const element = document.createElement('textarea')
        document.body.append(element)
        element.value = text
        element.select()
        // eslint-disable-next-line etc/no-deprecated
        document.execCommand('copy')
        element.remove()
    }
}

/**
 * Converts a string to start case where the first letter of each word is capitalized.
 *
 * @param input - The input string.
 * @returns The start case string.
 */
export const startCase = (input: string): string => {
    if (!input) {
        return ''
    }

    const words = input.split(' ')
    const capitalizedWords = words.map(word => capitalize(word))

    return capitalizedWords.join(' ')
}

/**
 * Capitalizes the first letter of a word and converts the rest of the letters to lowercase.
 *
 * @param word - The word to capitalize.
 * @returns The capitalized word.
 */
export const capitalize = (word: string): string => {
    if (!word) {
        return ''
    }

    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

/**
 * Truncates a string up to a specified length, adding an ellipsis at the end if it exceeds the limit.
 *
 * @param input - The input string to truncate.
 * @param [length=30] - The maximum length of the truncated string. Default is 30.
 * @param [ellipsis='...'] - The ellipsis string to append at the end. Default is '...'.
 * @returns The truncated string.
 */
export const truncate = (input: string, length: number = 30, ellipsis: string = '...'): string => {
    if (input.length <= length) {
        return input
    }

    return input.slice(0, length) + ellipsis
}

/**
 * Converts a string to kebab case by replacing spaces and capital letters with hyphens.
 *
 * @param input - The input string to convert.
 * @returns  The kebab-cased string.
 */
export const kebabCase = (input: string): string => {
    if (!input) {
        return ''
    }

    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphens between lowercase and uppercase letters
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .toLowerCase()
}

export const debounce = <F extends (...args: any[]) => void>(
    func: F,
    delay: number
): ((...args: Parameters<F>) => void) => {
    let timerId: NodeJS.Timeout

    return (...args: Parameters<F>): void => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func(...args)
        }, delay)
    }
}

interface ButtonTrackerData {
    buttonId: string
    conversionId: string
}

export const getProviderButtonsTracker = (providerType: ProviderType): ButtonTrackerData => {
    if (providerType === GITHUB) {
        return {
            buttonId: 'githubButton',
            conversionId: 'IE36JRZchpg6WWkoBm1cNN',
        }
    }
    if (providerType === GITLAB) {
        return {
            buttonId: 'gitlabButton',
            conversionId: 'sL3CVtxUlXaAvWjHZb7PTW',
        }
    }
    if (providerType === VSCODE) {
        return {
            buttonId: 'vscodeButton',
            conversionId: '',
        }
    }
    if (providerType === JETBRAINS) {
        return {
            buttonId: 'jetbrainsButton',
            conversionId: '',
        }
    }
    return {
        buttonId: 'googleButton',
        conversionId: '',
    }
}

export const captureCustomEventWithPageData = (
    eventName: string,
    pagePosition?: string,
    disableCurrentPage?: boolean
): void | CaptureResult => {
    const eventData: EventData = {}

    if (!disableCurrentPage) {
        eventData.current_page = window.location.href
    }
    if (pagePosition !== undefined) {
        eventData.page_position = pagePosition
    }

    try {
        return posthog?.capture(eventName, eventData)
    } catch (error) {
        console.error('Error capturing event in posthog:', error)
    }
}

export const formatDate = (dateString = ''): string => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
        year: 'numeric', 
        month: 'long',
        day: 'numeric'  
    };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}
