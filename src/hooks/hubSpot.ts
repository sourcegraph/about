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

const hubSpotScript = '//js.hsforms.net/forms/v2.js'

const getHubSpotScript = (): Element | null => {
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
            target: `#${targetId}`,
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
            const script = getHubSpotScript()
            script?.remove()
        }
    }, [region, portalId, formId, targetId, formInstanceId, onFormSubmitted])
}
