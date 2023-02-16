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
                <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-md">
                    <section className="tw-border-1 tw-rounded-lg tw-p-xs">
                        <h4>Product support</h4>
                        <p>For help using Sourcegraph:</p>
                        <ul className="tw-list-none tw-ml-0">
                            <li>
                                <a
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
                            </li>
                            <li>
                                <a
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
                            </li>
                        </ul>
                    </section>
                    <section className="tw-border-1 tw-rounded-lg tw-p-xs">
                        <h4>Sales</h4>
                        <p>For information about products and purchasing:</p>
                        <Link
                            href="/demo"
                            className="btn btn-outline-primary"
                            title="Contact sales"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Contact sales
                        </Link>
                    </section>
                    <section className="tw-border-1 tw-rounded-lg tw-p-xs">
                        <h4>Jobs</h4>

                        <p>For information about joining our team:</p>
                        <a
                            href="https://boards.greenhouse.io/sourcegraph91"
                            className="btn btn-outline-primary"
                            title="See career opportunities"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            See career opportunities
                        </a>
                    </section>
                    <section className="tw-border-1 tw-rounded-lg tw-p-xs">
                        <h4>Everything else</h4>
                        <ul className="tw-list-none tw-ml-0">
                            <li>
                                <a
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
                            </li>
                            <li>
                                <a
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
                            </li>
                            <li>
                                <a
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
                            </li>
                            <li>
                                <a
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
                            </li>
                            <li className="tw-flex p-relative">
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
                            </li>
                        </ul>
                    </section>
                </div>
            </ContentSection>
        </ContentPage>
    </Layout>
)

export default ContactHome
