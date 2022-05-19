import { useEffect } from 'react'

declare global {
    interface Window {
        ChiliPiper?: IChiliPiper
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

export const useChiliPiper = (): void => {
    useEffect(() => {
        const chiliPiperScript = '//js.chilipiper.com/marketing.js'
        const script = document.createElement('script')
        script.src = chiliPiperScript
        document.head.append(script)
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

        return () => {
            script?.remove()
        }
    }, [])
}
