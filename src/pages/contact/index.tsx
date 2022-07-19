import { FunctionComponent } from 'react'

import EmailIcon from 'mdi-react/EmailIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import Link from 'next/link'

import { Layout, ContentSection, ContentPage } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const title = 'Sourcegraph - Contact Sourcegraph'
const description = 'Contact a real human being on our team.'

const ContactHome: FunctionComponent = () => (
    <Layout
        meta={{
            title,
            description,
        }}
    >
        <ContentPage
            title={title}
            description={description}
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
                                    rel="noreferrer"
                                    title="File a public issue"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <GithubIcon /> File a public issue
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
                                <Link href="/demo" passHref={true}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        className="btn btn-outline-primary stretched-link"
                                        title="Contact sales"
                                        data-button-style={buttonStyle.outline}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Contact sales
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-1">
                        <div className="card">
                            <h5 className="card-header">Jobs</h5>
                            <div className="card-body">
                                <p className="card-text">For information about joining our team:</p>
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
                    <div className="col-md-6 mb-4 pb-1">
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
                                    <EmailIcon /> hi@sourcegraph.com
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
                                    <TwitterIcon /> @sourcegraph
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
                                    <GithubIcon /> github.com/sourcegraph
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
                                            <a
                                                target="_blank"
                                                href="https://goo.gl/maps/LqTFnekUjRb9N12q6"
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
