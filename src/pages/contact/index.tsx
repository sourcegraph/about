import { FunctionComponent } from 'react'

import EmailIcon from 'mdi-react/EmailIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import Link from 'next/link'

import { Layout, ContentSection, ContentPage } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const title = 'Sourcegraph - Contact Sourcegraph'
const description = 'Contact a real human being on our team.'

const ContactHome: FunctionComponent = () => (
    <Layout
        meta={{
            title,
            description,
        }}
    >
        <ContentPage title={title} description={description}>
            <ContentSection className="tw-pt-3xl tw-pb-xxs">
                <div className="row">
                    <div className="tw-pb-1 mb-4 col-md-6">
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
                                    rel="noreferrer"
                                    title="File a public issue"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <GithubIcon className="tw-inline" /> File a public issue
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:support@sourcegraph.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Email support@sourcegraph.com"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <EmailIcon className="tw-inline" /> Email support@sourcegraph.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tw-pb-1 mb-4 col-md-6">
                        <div className="card">
                            <h5 className="card-header">Sales</h5>
                            <div className="card-body">
                                <p className="card-text tw-mb-2">For information about products and purchasing:</p>
                                <Link
                                    href="/demo"
                                    className="btn btn-outline-primary stretched-link"
                                    title="Contact sales"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Contact sales
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="tw-pb-1 mb-4 col-md-6">
                        <div className="card">
                            <h5 className="card-header">Jobs</h5>
                            <div className="card-body">
                                <p className="card-text tw-mb-2">For information about joining our team:</p>
                                <a
                                    href="https://boards.greenhouse.io/sourcegraph91"
                                    className="btn btn-outline-primary stretched-link"
                                    title="See career opportunities"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    See career opportunities
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="tw-pb-1 mb-4 col-md-6">
                        <div className="card">
                            <h5 className="card-header">Everything else</h5>
                            <div className="list-group list-group-flush">
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="mailto:hi@sourcegraph.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="hi@sourcegraph.com"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <EmailIcon className="tw-inline" /> hi@sourcegraph.com
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    href="https://twitter.com/sourcegraph"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="@sourcegraph"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <TwitterIcon className="tw-inline" /> @sourcegraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://github.com/sourcegraph"
                                    rel="noreferrer"
                                    title="github.com/sourcegraph"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <GithubIcon className="tw-inline" /> github.com/sourcegraph
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    target="_blank"
                                    href="https://www.linkedin.com/company/sourcegraph"
                                    rel="noreferrer"
                                    title="Sourcegraph on LinkedIn"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <LinkedinIcon className="tw-inline" /> Sourcegraph on LinkedIn
                                </a>
                                <div className="list-group-item tw-flex p-relative">
                                    <MapMarkerIcon className="tw-inline tw-mr-1" />
                                    <div>
                                        Sourcegraph
                                        <br />
                                        548 Market St PMB 20739
                                        <br />
                                        San Francisco, CA 94104-5401 (USA)
                                        <br />
                                        <small>
                                            <a
                                                target="_blank"
                                                href="https://goo.gl/maps/6YT8WWAFQBPotMt77"
                                                rel="noreferrer"
                                                title="View on Google Maps"
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.body}
                                                data-button-type="cta"
                                            >
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
)

export default ContactHome
