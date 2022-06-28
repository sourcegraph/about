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
        ChiliPiper?: ChiliPiperAPIProps
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

interface CreateHubSpotFormProps {
    [index: number]: HTMLFormElement
    formId: string
    onFormReady?: ($form: HTMLFormElement) => void
    onFormSubmitted?: () => void
    chiliPiper?: boolean
}

export interface HubSpotFormProps {
    formId?: string
    masterFormName?: 'demoMulti' | 'demoEmail' | 'gatedMulti' | 'gatedEmail'
    onFormSubmitted?: () => void
    chiliPiper?: boolean
}

interface ChiliPiperAPIProps {
    submit: (
        domain: string,
        router: string,
        options?: {
            lead: { [key: string]: string | number }
            handleSubmit?: boolean
            formId?: string
            debug?: boolean
            map?: boolean
            domain?: string
            router?: string
            title?: string
            titleStyle?: string
            onSuccess?: () => void
            onError?: () => void
            onClose?: () => void
            onRouted?: () => void
            closeOnOutside?: boolean
            dynamicRedirectLink?: string
            mobileRedirectLink?: string
            injectRootCss?: boolean
            locale?: string
            webHook?: string
        }
    ) => void
}

interface HubSpotEventProps {
    type: string
    eventName: string
    data: { name: string; value: string }[]
}

/**
 * These are our Master Forms that are used throughout our codebase. Each
 * masterFormName is used as an identifier to map to a specific master form id.
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

// Third party script integrations for HubSpot forms
const hubSpotScript = '//js.hsforms.net/forms/v2.js'
const jQueryScript = '//ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
const clearbitScript =
    '!function(e){var o=document.getElementsByTagName("script")[0];if("object"==typeof e.ClearbitForHubspot)return console.log("Clearbit For HubSpot included more than once"),!1;e.ClearbitForHubspot={},e.ClearbitForHubspot.forms=[],e.ClearbitForHubspot.addForm=function(o){var t=o[0];"function"==typeof e.ClearbitForHubspot.onFormReady?e.ClearbitForHubspot.onFormReady(t):e.ClearbitForHubspot.forms.push(t)};var t=document.createElement("script");t.async=!0,t.src="https://hubspot.clearbit.com/v1/forms/pk_a66b9ed76e62c713c06aab39bfae7234/forms.js",o.parentNode.insertBefore(t,o),e.addEventListener("message",function(o){if("hsFormCallback"===o.data.type&&"onFormReady"===o.data.eventName)if(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0)e.ClearbitForHubspot.addForm(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'));else if(document.querySelectorAll("iframe.hs-form-iframe").length>0){document.querySelectorAll("iframe.hs-form-iframe").forEach(function(t){t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0&&e.ClearbitForHubspot.addForm(t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'))})}})}(window);'
const chiliPiperScript = '//js.chilipiper.com/marketing.js'

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
            newScriptElement.setAttribute('async', '')
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

/**
 * This creates the HubSpot form with the configuration options.
 * See: https://legacydocs.hubspot.com/docs/methods/forms/advanced_form_options
 *
 * @param CreateHubSpotFormProps - object props passed to createHubSpotForm
 * @param CreateHubSpotFormProps.formId - the form's id
 * @param CreateHubSpotFormProps.onFormReady - callback after form is built
 * @param CreateHubSpotFormProps.onFormSubmitted - callback after data is sent
 * @param CreateHubSpotFormProps.chiliPiper - option to enable ChiliPiper
 */
async function createHubSpotForm({
    formId,
    onFormReady,
    onFormSubmitted,
    chiliPiper,
}: CreateHubSpotFormProps): Promise<void> {
    // Load third party script integrations sequentially
    const script = await loadScriptElement('hubspot', hubSpotScript)
    await loadScriptElement('jquery', jQueryScript)
    await loadScriptElement('clearbit', clearbitScript, true)

    /**
     * If ChiliPiper is enabled, load the script and add an event
     * listener to map the lead data to the ChiliPiper scheduler.
     */
    if (chiliPiper) {
        await loadScriptElement('chilipiper', chiliPiperScript)

        const cpTenantDomain = 'sourcegraph'
        const cpRouterName = 'contact-sales'

        window.addEventListener('message', event => {
            const data = event.data as HubSpotEventProps

            if (data.type === 'hsFormCallback' && data.eventName === 'onFormSubmit') {
                const lead = data.data.reduce((object, item) => Object.assign(object, { [item.name]: item.value }), {})
                const chilipiper = window.ChiliPiper

                chilipiper?.submit(cpTenantDomain, cpRouterName, {
                    map: true,
                    lead,
                })
            }
        })
    }

    // When the HubSpot script is loaded, create the form with the config
    script?.addEventListener('load', () => {
        window.hbspt?.forms.create({
            region: 'na1',
            portalId: '2762526',
            formId,
            target: '#form-target',
            onFormReady: (form: CreateHubSpotFormProps) => {
                if (onFormReady) {
                    onFormReady(form[0])
                }
            },
            onFormSubmitted,
        })
    })
}

// This gets called when the HubSpot form is ready
const onFormReady = (form: HTMLFormElement): void => {
    /**
     * This allows you to populate hidden form fields with values
     *
     * @param formField - the form field name
     * @param value - the value to populate
     */
    const populateHiddenFormField = (formField: string, value: string): void => {
        const input = form[0].querySelector(`input[name="${formField}"]`) as HTMLInputElement
        if (input && input.value === '') {
            input.value = value || ''
        }
    }

    /**
     * If the form is ready and visible in the DOM, gather all cookie and
     * session data and populate hidden form fields.
     */
    if (form) {
        const getAllCookies: { [index: string]: string } = document.cookie
            .split(';')
            .reduce((key, string) => Object.assign(key, { [string.split('=')[0].trim()]: string.split('=')[1] }), {})
        const { sourcegraphAnonymousUid, sourcegraphSourceUrl } = getAllCookies
        const landingSource: string = sessionStorage.getItem('landingSource') || ''
        const firstSourceURL: string = sourcegraphSourceUrl?.includes('redacted') ? landingSource : sourcegraphSourceUrl

        populateHiddenFormField('anonymous_user_id', sourcegraphAnonymousUid)
        populateHiddenFormField('first_source_url', firstSourceURL)
        populateHiddenFormField('form_submission_source', window.location.href)
    }
}

/**
 * The HubSpot form component.
 *
 * @param options - option props
 * @param options.formId - an optional form id
 * @param options.masterFormName - an optional master form name
 * @param options.onFormSubmitted - a callback that runs after a form submission
 * @param options.chiliPiper - a boolean prop to enable/disable ChiliPiper
 * @returns - a div element with an id where the HubSpot form renders
 */
export const HubSpotForm: FunctionComponent<HubSpotFormProps> = ({
    formId,
    masterFormName,
    onFormSubmitted,
    chiliPiper,
}: HubSpotFormProps) => {
    useEffect(() => {
        let masterFormId = ''
        if (masterFormName) {
            masterFormId = masterForms[masterFormName]
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        createHubSpotForm({
            formId: formId || masterFormId,
            onFormReady,
            onFormSubmitted,
            chiliPiper,
        })

        return () => {
            removeScriptElement('jquery')
            removeScriptElement('clearbit')
            removeScriptElement('hubspot')
            removeScriptElement('chilipiper')
        }
    }, [formId, masterFormName, onFormSubmitted, chiliPiper])

    return <div id="form-target" />
}
