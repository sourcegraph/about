import { FunctionComponent, useEffect } from 'react'

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
                }: HubSpotAPIProps) => CreateHubSpotFormProps
            }
        }
    }
}

interface HubSpotAPIProps {
    region?: string
    portalId: string
    formId: string
    target: string
    formInstanceId?: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: CreateHubSpotFormProps) => void
    onFormSubmitted?: () => void
}

export interface CreateHubSpotFormProps {
    [index: number]: HTMLFormElement
    formId: string
    target: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HTMLFormElement) => void
    onFormSubmitted?: () => void
}

export interface HubSpotFormProps {
    formId?: string
    masterFormName?: 'demoMulti' | 'demoEmail' | 'gatedMulti' | 'gatedEmail'
    onFormSubmitted?: () => void
}

/**
 * These are our Master Form IDs that are used throughout our codebase.
 */
const masterForms: { [key: string]: string } = {
    // Demo Request Email Only
    demoEmail: 'a26c29e7-cd79-429d-a2ac-43f694734c46',

    // Demo Request Multi Field
    demoMulti: 'e090296f-84f5-4bcb-9093-a533336841b4',

    // Gated Content Email Only
    gatedEmail: '9b2539ad-feaa-4dd2-b6b4-2439c5bc98da',

    // Gated Content Multi Field
    gatedMulti: '1fb4ef6c-f233-48ba-9f43-a88f19528282',
}

// Global script integrations for HubSpot forms
const hubSpotScript = '//js.hsforms.net/forms/v2.js'
const jQueryScript = '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
const clearbitScript =
    '!function(e){var o=document.getElementsByTagName("script")[0];if("object"==typeof e.ClearbitForHubspot)return console.log("Clearbit For HubSpot included more than once"),!1;e.ClearbitForHubspot={},e.ClearbitForHubspot.forms=[],e.ClearbitForHubspot.addForm=function(o){var t=o[0];"function"==typeof e.ClearbitForHubspot.onFormReady?e.ClearbitForHubspot.onFormReady(t):e.ClearbitForHubspot.forms.push(t)};var t=document.createElement("script");t.async=!0,t.src="https://hubspot.clearbit.com/v1/forms/pk_a66b9ed76e62c713c06aab39bfae7234/forms.js",o.parentNode.insertBefore(t,o),e.addEventListener("message",function(o){if("hsFormCallback"===o.data.type&&"onFormReady"===o.data.eventName)if(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0)e.ClearbitForHubspot.addForm(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'));else if(document.querySelectorAll("iframe.hs-form-iframe").length>0){document.querySelectorAll("iframe.hs-form-iframe").forEach(function(t){t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0&&e.ClearbitForHubspot.addForm(t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'))})}})}(window);'

// Gets a script element by its id
const getScriptElement = (id: string): HTMLScriptElement | Element | null => document.querySelector(`#${id}`)

// Removes a script element by its id
const removeScriptElement = (id: string): void => {
    const scriptElement: HTMLScriptElement | Element | null = getScriptElement(id)
    scriptElement?.remove()
}

/**
 * This loads a script element and appends it to the document head
 *
 * @param id - a unique identifier for the script element
 * @param script - the script src (whether it's used for the script tag's src or innerHTML)
 * @param innerHTML - whether or not to assign the script to the script tag's src attribute or append to it's innerHTML
 * @returns - an HTML Script Element
 */
const loadScriptElement = (
    id: string,
    script: string,
    innerHTML?: boolean
): Promise<HTMLScriptElement | Element | null> =>
    new Promise(resolve => {
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
            resolve(newScriptElement)
        }

        resolve(scriptElement)
    })

async function createHubSpotForm({
    formId,
    target,
    onFormSubmit,
    onFormSubmitted,
    onFormReady,
}: CreateHubSpotFormProps): Promise<void> {
    const getAllCookies: { [index: string]: string } = document.cookie
        .split(';')
        .reduce((key, string) => Object.assign(key, { [string.split('=')[0].trim()]: string.split('=')[1] }), {})
    const anonymousId = getAllCookies.sourcegraphAnonymousUid
    const firstSourceURL = getAllCookies.sourcegraphSourceUrl

    const script = await loadScriptElement('hubspot', hubSpotScript)
    await loadScriptElement('jQuery', jQueryScript)
    await loadScriptElement('clearbit', clearbitScript, true)

    script?.addEventListener('load', () => {
        window.hbspt?.forms.create({
            region: 'na1',
            portalId: '2762526',
            formId,
            target: `#${target}`,
            onFormSubmit,
            onFormSubmitted,
            onFormReady: (form: CreateHubSpotFormProps) => {
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

export const HubSpotForm: FunctionComponent<HubSpotFormProps> = ({
    formId,
    masterFormName,
    onFormSubmitted,
}: HubSpotFormProps) => {
    const target = 'form-target'

    useEffect(() => {
        let masterFormId = ''
        if (masterFormName) {
            masterFormId = masterForms[masterFormName]
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        createHubSpotForm({
            formId: formId || masterFormId,
            target,
            onFormSubmitted,
        })

        return () => {
            removeScriptElement('jQuery')
            removeScriptElement('clearbit')
            removeScriptElement('hubspot')
        }
    }, [formId, onFormSubmitted, masterFormName])

    return <div id={target} />
}
