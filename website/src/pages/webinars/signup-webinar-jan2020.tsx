import React, { useLayoutEffect } from 'react'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { createHubSpotForm } from '../../components/HubSpot'


export default ((props: any) => {
    useLayoutEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: '6170d9b0-fa5b-4240-9f47-f3a3aa9557c9',
            targetId: 'hubspotContactForm',
        })
    }, [])
    return (
        <Layout location={props.location} minimal={true}>
            <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
            <div className="bg-white text-dark">
                <div className="container-lg py-6 px-5">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-6">
                            <h1 className="display-4">Talk to a product specialist</h1>
                            <h3 className="font-weight-light text-sans-serif">
                                Let us know how we can help. We'll follow up soon.
                            </h3>
                            <div className="form mt-5">
                                <div id="hubspotContactForm" className="d-flex justify-center" />
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
