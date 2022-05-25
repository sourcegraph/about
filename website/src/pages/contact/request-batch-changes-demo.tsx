import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { createHubSpotForm } from '../../components/HubSpot'
import { Helmet } from 'react-helmet'

export const RequestBatchChangesDemo: React.FunctionComponent = (props: any) => {
    useEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: 'c98d6435-f0fc-4b34-8cff-cfe7633121c8',
            targetId: 'hubspotRequestBatchChangesDemo',
        })
    }, [])
    const title = 'Sourcegraph - Schedule a Batch Changes demo.'
    const desc = 'Learn how you can automate large-scale code changes with Sourcegraph Batch Changes.'
    return (
        <Layout location={props.location} minimal={true}>
            <Helmet>
                <title>{title}</title>
                <meta name="twitter:title" content={title} />
                <meta property="og:title" content={title} />
                <meta name="twitter:site" content="@sourcegraph" />
                <meta name="twitter:image" content="https://about.sourcegraph.com/favicon.png" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:description" content={desc} />
                <meta property="og:description" content={desc} />
                <meta name="description" content={desc} />
            </Helmet>
            <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Request a demo</h1>
                            <h3 className="font-weight-light">{desc}</h3>
                            <div className="form mt-5">
                                <div id="hubspotRequestBatchChangesDemo" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogosSection className="full-color mt-3 mb-6" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RequestBatchChangesDemo
