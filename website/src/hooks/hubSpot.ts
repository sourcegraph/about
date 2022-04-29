import { useEffect } from 'react'

declare global {
    interface Window {
        ChiliPiper?: IChiliPiper
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
    formInstanceId?: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HubSpotForm) => void
    onFormSubmitted?: () => void
}

interface HubSpotForm {
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
    chiliPiper: boolean
    onFormSubmitted?: () => void
}

const hubSpotScript = '//js.hsforms.net/forms/v2.js'

const getHubSpotScript = () => {
    const script = document.querySelector(`script[src="${hubSpotScript}"]`)
    return script
}

const loadHubSpotScript = (): HTMLScriptElement | Element => {
    const script = getHubSpotScript()

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

    const script = loadHubSpotScript()
    script?.addEventListener('load', () => {
        window.hbspt?.forms.create({
            region: region || 'na1',
            portalId,
            formId,
            formInstanceId,
            target: `.${targetId}`,
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
    chiliPiper,
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

        return () => {
            const script = getHubSpotScript()
            script?.remove()
        }
    }, [region, portalId, formId, targetId, chiliPiper, formInstanceId, onFormSubmitted])
}
