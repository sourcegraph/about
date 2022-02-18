import React, { useEffect } from 'react'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { createHubSpotForm } from '../../components/HubSpot'
import { Helmet } from 'react-helmet'

export const RequestCodeInsightsDemo: React.FunctionComponent = (props: any) => {
    useEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: 'a58be17d-86ad-4a6e-8c97-83818aafd2ab',
            targetId: 'hubspotRequestBatchChangesDemo',
        })

        // Chili Piper script
        const cpTenantDomain = 'sourcegraph'
        const cpRouterName = 'contact-sales'
        window.addEventListener('message', event => {
            if (event.data.type === 'hsFormCallback' && event.data.eventName === 'onFormSubmit') {
                var lead = event.data.data.reduce((obj, item) => Object.assign(obj, { [item.name]: item.value }), {})
                console.log(lead)
                ChiliPiper.submit(cpTenantDomain, cpRouterName, {
                    map: true,
                    lead: lead,
                })
            }
        })
    }, [])
    const title = 'Sourcegraph - Schedule a Code Insights demo.'
    const desc = 'Learn how you can track and visualize trends in your entire codebase with Sourcegraph Code Insights.'
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
                <script src="https://js.chilipiper.com/marketing.js" type="text/javascript"></script>
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

export default RequestCodeInsightsDemo
