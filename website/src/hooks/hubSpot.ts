import { useEffect } from 'react'

declare global {
    interface Window {
        ChiliPiper?: IChiliPiper
        hbspt?: {
            forms: {
                create: ({ region, portalId, formId, target, onFormSubmit, onFormReady }: HubSpotProps) => HubSpotForm
            }
        }
    }
}

export interface MessageEventData {
    type: string
    eventName: string
    data: { name: string; value: string }[]
}

interface IChiliPiper {
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

interface HubSpotProps {
    region?: string
    portalId: string
    formId: string
    target: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HubSpotForm) => void
    onFormSubmitted?: () => void,
}

interface HubSpotForm {
    region?: string
    [index: number]: HTMLFormElement
    portalId: string
    formId: string
    targetId: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HTMLFormElement) => void
    onFormSubmitted?: () => void,
}

const loadHubSpotScript = (): HTMLScriptElement | Element => {
    const hubSpotScript = '//js.hsforms.net/forms/v2.js'
    const script = document.querySelector(`script[src="${hubSpotScript}"]`)
        
    if (!script) {
        const scriptElement = document.createElement('script')
        scriptElement.src = hubSpotScript
        document.head.append(scriptElement)
        return scriptElement
    }

    return script
}

const loadChiliPiperScript = (callback: () => void): void => {
    const chiliPiperScript = '//js.chilipiper.com/marketing.js'
    const script = document.querySelector(`script[src="${chiliPiperScript}"]`)
    
    if (!script) {
        const scriptElement = document.createElement('script')
        scriptElement.src = chiliPiperScript
        document.head.append(scriptElement)
        return callback()
    }
}

function createHubSpotForm({ region, portalId, formId, targetId, onFormSubmit, onFormSubmitted, onFormReady }: HubSpotForm): void {
    const getAllCookies: { [index: string]: string } = document.cookie
        .split(';')
        .reduce((key, string) => Object.assign(key, { [string.split('=')[0].trim()]: string.split('=')[1] }), {})
    const anonymousId = getAllCookies.sourcegraphAnonymousUid
    const firstSourceURL = getAllCookies.sourcegraphSourceUrl

    const script = loadHubSpotScript()
    script?.addEventListener('load', () => {
        ;(window as Window).hbspt?.forms.create({
            region,
            portalId,
            formId,
            target: `#${targetId}`,
            onFormSubmit,
            onFormSubmitted,
            onFormReady: (form: HubSpotForm) => {
                if (form) {
                    // We want to populate hidden fields in the form with values stored in cookies when the form loads.
                    const anonymousIdInput = form[0].querySelector(
                        'input[name="anonymous_user_id"]'
                    ) as HTMLInputElement
                    if (anonymousIdInput && anonymousIdInput.value === '') {
                        // Populate the hidden anonymous_user_id form field with the value from the sourcegraphAnonymousUid cookie.
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
                        // Populate the hidden first_source_url form field with the value from the sourcegraphSourceUrl cookie.
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

export const useHubSpot = (
    region: string,
    portalId: string,
    formId: string,
    targetId: string,
    chiliPiper: boolean,
    onFormSubmitted?: () => void,
): void => {
    useEffect(() => {
        createHubSpotForm({
            region,
            portalId,
            formId,
            targetId,
            onFormSubmitted
        })

        if (chiliPiper) {
            loadChiliPiperScript(() => {
                const cpTenantDomain = 'sourcegraph'
                const cpRouterName = 'contact-sales'
                window.addEventListener('message', event => {
                    const data = event.data as MessageEventData
                    if (data.type === 'hsFormCallback' && data.eventName === 'onFormSubmit') {
                        const lead = data.data.reduce(
                            (object, item) => Object.assign(object, { [item.name]: item.value }),
                            {}
                        )
                        const chilipiper = window.ChiliPiper
                        chilipiper?.submit(cpTenantDomain, cpRouterName, {
                            map: true,
                            lead,
                        })
                    }
                })
            })
        }
    }, [chiliPiper, portalId, formId, targetId, region, onFormSubmitted])
}
