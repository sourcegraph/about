import { FunctionComponent, useEffect } from 'react'

import { Layout, createHubSpotForm } from '@components'

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

const title = 'Sourcegraph - Schedule a Batch Changes demo.'
const description = 'Learn how you can automate large-scale code changes with Sourcegraph Batch Changes.'

const Contact: FunctionComponent = () => {
    useEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: 'c98d6435-f0fc-4b34-8cff-cfe7633121c8',
            targetId: 'hubspotRequestBatchChangesDemo',
        })
        if (document) {
            document.querySelectorAll('body')[0].setAttribute('style', 'background-image:none;')
        }

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
    }, [])

    return (
        <Layout
            className="pt-0"
            minimal={true}
            meta={{
                title,
                description,
            }}
            scripts={[
                { src: 'https://js.chilipiper.com/marketing.js' },
                { src: '//js.hsforms.net/forms/v2.js', strategy: 'beforeInteractive' },
            ]}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Request a demo</h1>
                            <h3 className="font-weight-light">{description}</h3>
                            <div className="form mt-5">
                                <div id="hubspotRequestBatchChangesDemo" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* <CustomerLogosSection className="full-color mt-3 mb-6" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
