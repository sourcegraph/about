import { useEffect } from 'react'

declare global {
    interface Window {
        hbspt?: {
            forms: {
                create: ({
                    region,
                    portalId,
                    formId,
                    target,
                    formInstanceId,
                    onFormSubmit,
                    onFormSubmitted,
                    onFormReady,
                }: HubSpotProps) => HubSpotForm
            }
        }
    }
}

interface HubSpotProps {
    region?: string
    portalId: string
    formId: string
    target: string
    onBeforeFormInit: () => void
    formInstanceId?: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HubSpotForm) => void
    onFormSubmitted?: () => void
}

export interface HubSpotForm {
    region?: string
    [index: number]: HTMLFormElement
    portalId: string
    formInstanceId?: string
    formId: string
    targetId: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HTMLFormElement) => void
    onFormSubmitted?: () => void
}

interface HookProps {
    region?: string
    portalId: string
    formId: string
    targetId: string
    formInstanceId?: string
    onFormSubmitted?: () => void
}

// Global script integrations for this hook used for HubSpot forms
const hubSpotScript = '//js.hsforms.net/forms/v2.js'
const jQueryScript = '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
const clearbitScript = '!function(e){var o=document.getElementsByTagName("script")[0];if("object"==typeof e.ClearbitForHubspot)return console.log("Clearbit For HubSpot included more than once"),!1;e.ClearbitForHubspot={},e.ClearbitForHubspot.forms=[],e.ClearbitForHubspot.addForm=function(o){var t=o[0];"function"==typeof e.ClearbitForHubspot.onFormReady?e.ClearbitForHubspot.onFormReady(t):e.ClearbitForHubspot.forms.push(t)};var t=document.createElement("script");t.async=!0,t.src="https://hubspot.clearbit.com/v1/forms/pk_a66b9ed76e62c713c06aab39bfae7234/forms.js",o.parentNode.insertBefore(t,o),e.addEventListener("message",function(o){if("hsFormCallback"===o.data.type&&"onFormReady"===o.data.eventName)if(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0)e.ClearbitForHubspot.addForm(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'));else if(document.querySelectorAll("iframe.hs-form-iframe").length>0){document.querySelectorAll("iframe.hs-form-iframe").forEach(function(t){t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0&&e.ClearbitForHubspot.addForm(t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'))})}})}(window);'

// Gets a script element by its id
const getScriptElement = (id: string): Element | null => 
    document.querySelector(`#${id}`)

// Removes a script element by its id
const removeScriptElement = (id: string): void => {
    const scriptElement = getScriptElement(id)
    scriptElement?.remove()
}

/**
 * This loads a script element and appends it to the document's head tag.
 * 
 * @param id - a unique identifier for the script element
 * @param script - the script src (whether it's used for the script tag's src or innerHTML)
 * @param innerHTML - whether or not to assign the script to the script tag's src attribute or append to it's innerHTML
 * @returns - an HTML Script Element
 */
const loadScriptElement = (id: string, script: string, innerHTML?: boolean): HTMLScriptElement | Element => {
    const scriptElement = getScriptElement(id)

    if (!scriptElement) {
        const newScriptElement = document.createElement('script')
        newScriptElement.setAttribute('id', id)
        if (innerHTML) {
            newScriptElement.innerHTML = script
        } else {
            newScriptElement.src = script
        }
        document.head.append(newScriptElement)
        return newScriptElement
    }

    return scriptElement
}

function createHubSpotForm({
    region,
    portalId,
    formId,
    targetId,
    formInstanceId,
    onFormSubmit,
    onFormSubmitted,
    onFormReady,
}: HubSpotForm): void {
    const getAllCookies: { [index: string]: string } = document.cookie
        .split(';')
        .reduce((key, string) => Object.assign(key, { [string.split('=')[0].trim()]: string.split('=')[1] }), {})
    const anonymousId = getAllCookies.sourcegraphAnonymousUid
    const firstSourceURL = getAllCookies.sourcegraphSourceUrl

    const script = loadScriptElement('hubspot', hubSpotScript)
    script?.addEventListener('load', () => {
        window.hbspt?.forms.create({
            region: region || 'na1',
            portalId,
            formId,
            formInstanceId,
            target: `#${targetId}`,
            onBeforeFormInit: () => {
                loadScriptElement('jQuery', jQueryScript)
                loadScriptElement('clearbit', clearbitScript, true)
            },
            onFormSubmit,
            onFormSubmitted,
            onFormReady: (form: HubSpotForm) => {
                if (form) {
                    // Populate hidden form fields with values stored in cookies
                    const anonymousIdInput = form[0].querySelector(
                        'input[name="anonymous_user_id"]'
                    ) as HTMLInputElement
                    if (anonymousIdInput && anonymousIdInput.value === '') {
                        // Populate hidden anonymous_user_id form field with value from sourcegraphAnonymousUid
                        anonymousIdInput.value = anonymousId || ''
                    }

                    const firstSourceURLInput = form[0].querySelector(
                        'input[name="first_source_url"]'
                    ) as HTMLInputElement
                    const emailInput = form[0].querySelector('input[name="email"]') as HTMLInputElement
                    if (
                        firstSourceURLInput &&
                        firstSourceURLInput.value === '' &&
                        emailInput &&
                        emailInput.value === ''
                    ) {
                        // Populate hidden first_source_url form field with value from sourcegraphSourceUrl
                        firstSourceURLInput.value = firstSourceURL || ''
                    }
                }
                if (onFormReady) {
                    onFormReady(form[0])
                }
            },
        })
    })
}

export const useHubSpot = ({
    region,
    portalId,
    formId,
    targetId,
    formInstanceId,
    onFormSubmitted,
}: HookProps): void => {
    useEffect(() => {
        createHubSpotForm({
            region,
            portalId,
            formId,
            formInstanceId,
            targetId,
            onFormSubmitted,
        })

        return () => {
            removeScriptElement('jQuery')
            removeScriptElement('clearbit')
            removeScriptElement('hubspot')
        }
    }, [region, portalId, formId, targetId, formInstanceId, onFormSubmitted])
}
