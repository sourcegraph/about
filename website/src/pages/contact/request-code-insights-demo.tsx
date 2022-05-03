import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import { CustomerLogos } from '../../components/CustomerLogos'
import { useHubSpot } from '../../hooks/hubSpot'

const title = 'Sourcegraph - Schedule a Code Insights demo.'
const description =
    'Learn how you can track and visualize trends in your entire codebase with Sourcegraph Code Insights.'

const Contact: FunctionComponent<PageProps> = props => {
    useHubSpot({
        portalId: '2762526',
        formId: 'a58be17d-86ad-4a6e-8c97-83818aafd2ab',
        targetId: 'hubspotRequestCodeInsightsDemo',
    })

    return (
        <Layout
            className="pt-0"
            location={props.location}
            minimal={true}
            meta={{
                title,
                description,
            }}
        >
            <div className="form-page bg-white text-dark">
                <div className="container-xl pt-5 px-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="display-3 font-weight-bold">Request a demo</h1>
                            <h3 className="font-weight-light">{description}</h3>
                            <div className="form mt-5">
                                <div id="hubspotRequestCodeInsightsDemo" className="d-flex justify-center" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <CustomerLogos />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact
