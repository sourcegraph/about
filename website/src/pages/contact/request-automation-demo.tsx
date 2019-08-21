import React, { useLayoutEffect } from 'react'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { createHubSpotForm } from './sales'

export default ((props: any) => {
    useLayoutEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: 'fd64c0d5-627e-4176-b6f4-289571f9f212',
            targetId: 'hubspotRequestAutomationDemoForm',
        })
    }, [])
    return (
        <Layout
            meta={{
                title: 'Request a large scale code automation demo',
                description: 'We\'ll reach out to discuss a a demo and to learn more about your use cases.',
            }}
            location={props.location} minimal={true}
        >
            <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
            <div className="bg-white text-dark">
                <div className="container-lg py-6 px-5">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-6">
                            <h1 className="display-4">Request a large scale code automation demo</h1>
                            <h3 className="font-weight-light text-sans-serif">
                                We'll reach out to discuss a a demo and to learn more about your use cases.
                            </h3>
                            <div className="form mt-5">
                                <div id="hubspotRequestAutomationDemoForm" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogosSection className="mt-3 mb-6" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}) as React.FunctionComponent<any>
