import { FunctionComponent } from 'react'

import EmailIcon from 'mdi-react/EmailIcon'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import MapMarkerIcon from 'mdi-react/MapMarkerIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import Link from 'next/link'

import { Layout, ContentSection, ContentPage, HubSpotForm } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const title = 'Sourcegraph - Contact Sourcegraph'
const description = 'Contact a real human being on our team.'

const ContactBookKitTestHome: FunctionComponent = () => (
    <Layout
        meta={{
            title,
            description,
        }}
    >
        <ContentPage title={title} description={description}>
            <ContentSection className="pt-3xl pb-xxs">
                <div className="mt-5 pb-[48px]">
                    <HubSpotForm formId="079b2630-456f-44be-b3db-817e2a71fad1" bookIt={true} />
                </div>
                <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                    <section className="rounded-lg border-1 p-xs">
                        <h4>Product support</h4>
                        <p>For help using Sourcegraph:</p>
                        <ul className="ml-0 list-none">
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
                                    <GithubIcon className="inline" /> File a public issue
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
                                    <EmailIcon className="inline" /> Email support@sourcegraph.com
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="rounded-lg border-1 p-xs">
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
                    <section className="rounded-lg border-1 p-xs">
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
                    <section className="rounded-lg border-1 p-xs">
                        <h4>Everything else</h4>
                        <ul className="ml-0 list-none">
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
                                    <EmailIcon className="inline" /> hi@sourcegraph.com
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
                                    <TwitterIcon className="inline" /> @sourcegraph
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
                                    <GithubIcon className="inline" /> github.com/sourcegraph
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
                                    <LinkedinIcon className="inline" /> Sourcegraph on LinkedIn
                                </a>
                            </li>
                            <li className="p-relative flex">
                                <MapMarkerIcon className="mr-1 inline" />
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

export default ContactBookKitTestHome
