import { Link } from 'gatsby'
import EmailIcon from 'mdi-react/EmailIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import React from 'react'
import { Helmet } from 'react-helmet'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

const title = 'Sourcegraph - Contact Sourcegraph'
const desc = 'Contact a real human being on our team.'

export default ((props: any) => (
    <Layout location={props.location}>
        <Helmet>
            <title>{title}</title>
            <meta name="twitter:title" content={title} />
            <meta property="og:title" content={title} />
            <meta name="twitter:description" content={desc} />
            <meta property="og:description" content={desc} />
            <meta name="description" content={desc} />
            <link rel="icon" type="image/png" href="/favicon.png" />
        </Helmet>
        <ContentPage
            title={title}
            description={desc}
            className="text-dark"
            titleClassName="display-2 font-weight-bold"
        >
            <ContentSection className="pt-6 pb-2">
                <div className="row">
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Product support</h5>
                            <div className="card-body">
                                <p className="card-text">For help using Sourcegraph:</p>
                            </div>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://github.com/sourcegraph/sourcegraph/issues"
                                    target="_blank"
                                >
                                    <GithubIcon /> File a public issue
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:support@sourcegraph.com"
                                    target="_blank"
                                >
                                    <EmailIcon /> Email support@sourcegraph.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Sales</h5>
                            <div className="card-body">
                                <p className="card-text">For information about products and purchasing:</p>
                                <Link className="btn btn-outline-primary stretched-link" to="/contact/sales">
                                    Contact sales
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Jobs</h5>
                            <div className="card-body">
                                <p className="card-text">For information about joining our team:</p>
                                <Link className="btn btn-outline-primary stretched-link" to="https://boards.greenhouse.io/sourcegraph91">
                                    See career opportunities
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Everything else</h5>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:hi@sourcegraph.com"
                                    target="_blank"
                                >
                                    <EmailIcon /> hi@sourcegraph.com
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://twitter.com/srcgraph"
                                    target="_blank"
                                >
                                    <TwitterIcon /> @srcgraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://github.com/sourcegraph"
                                >
                                    <GithubIcon /> github.com/sourcegraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://www.linkedin.com/company/sourcegraph"
                                >
                                    <LinkedinIcon /> Sourcegraph on LinkedIn
                                </a>
                                <div className="list-group-item d-flex p-relative">
                                    <MapMarkerIcon className="mr-1" />
                                    <div>
                                        Sourcegraph
                                        <br />
                                        981 Mission St
                                        <br />
                                        San Francisco, CA 94103 (USA)
                                        <br />
                                        <small>
                                            <a target="_blank" href="https://goo.gl/maps/LqTFnekUjRb9N12q6">
                                                View on Google Maps
                                            </a>
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent<any>

/*
## Around the web

## Plans, pricing, sales

For enterprise accounts or any questions about getting Sourcegraph for your private code, <a href="/contact/sales">submit our contact form</a>, or email us at <a href="mailto:sales@sourcegraph.com">sales@sourcegraph.com</a>.

## In the real world

*/
