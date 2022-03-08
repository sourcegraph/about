import { useEffect, useState } from 'react'

declare global {
    interface Window {
        ChiliPiper?: IChiliPiper
        hbspt?: {
            forms: {
                create: ({ portalId, formId, target, onFormSubmit, onFormReady }: HubSpotProps) => HubSpotForm
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
    portalId: string
    formId: string
    target: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HubSpotForm) => void
}

interface HubSpotForm {
    [index: number]: HTMLFormElement
    portalId: string
    formId: string
    targetId: string
    onFormSubmit?: (object: { data: { name: string; value: string }[] }) => void
    onFormReady?: ($form: HTMLFormElement) => void
}

function createHubSpotForm({ portalId, formId, targetId, onFormSubmit, onFormReady }: HubSpotForm): void {
    const getAllCookies: { [index: string]: string } = document.cookie
        .split(';')
        .reduce((key, string) => Object.assign(key, { [string.split('=')[0].trim()]: string.split('=')[1] }), {})
    const anonymousId = getAllCookies.sourcegraphAnonymousUid
    const firstSourceURL = getAllCookies.sourcegraphSourceUrl
    ;(window as Window).hbspt?.forms.create({
        portalId,
        formId,
        target: `#${targetId}`,
        onFormSubmit,
        onFormReady: ($form: HubSpotForm) => {
            // The `form` parameter is normally a jQuery wrapper around a form element.
            // We polyfill jQuery in gatsby-browser.js to return the form element directly.
            if ($form) {
                // We want to populate hidden fields in the form with values stored in cookies when the form loads.
                const anonymousIdInput = $form[0].querySelector('input[name="anonymous_user_id"]') as HTMLInputElement
                if (anonymousIdInput && anonymousIdInput.value === '') {
                    // Populate the hidden anonymous_user_id form field with the value from the sourcegraphAnonymousUid cookie.
                    anonymousIdInput.value = anonymousId || ''
                }

                const firstSourceURLInput = $form[0].querySelector('input[name="first_source_url"]') as HTMLInputElement
                const emailInput = $form[0].querySelector('input[name="email"]') as HTMLInputElement
                if (firstSourceURLInput && firstSourceURLInput.value === '' && emailInput && emailInput.value === '') {
                    // Populate the hidden first_source_url form field with the value from the sourcegraphSourceUrl cookie.
                    firstSourceURLInput.value = firstSourceURL || ''
                }
            }
            if (onFormReady) {
                onFormReady($form[0])
            }
        },
    })
}

export const useHubSpot = (initialPortalId: string, initialFormId: string, initialTargetId: string, initialChiliPiper: boolean): void => {
    const [portalId, setPortalId] = useState<string>(initialPortalId)
    const [formId, setFormId] = useState<string>(initialFormId)
    const [targetId, setTargetId] = useState<string>(initialTargetId)
    const [chiliPiper, setChiliPiper] = useState<boolean>(initialChiliPiper)

    useEffect(() => {
        createHubSpotForm({
            portalId,
            formId,
            targetId,
        })

        if (chiliPiper) {
            // Chili Piper script
            const cpTenantDomain = 'sourcegraph'
            const cpRouterName = 'contact-sales'
            window.addEventListener('message', event => {
                const data = event.data as MessageEventData
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
    }, [chiliPiper, portalId, formId, targetId])
}
