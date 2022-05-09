import React, { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { Install, buttonStyle, buttonLocation } from '@components'

export const SelfHostedSection: FunctionComponent = () => (
    <div className="self-hosted-section bg-gradient-green-blue" id="self-hosted-section">
        <div className="container">
            <h1 id="get-started" className="display-2 font-weight-bold mb-5">
                Self-hosted deployment
            </h1>

            <div className="row">
                <div className="col-lg-6 self-hosted-section__local">
                    <Install />

                    <p>
                        <a
                            className="d-inline-flex mt-5 font-weight-bold"
                            href="https://docs.sourcegraph.com"
                            data-button-style={buttonStyle.arrowWithText}
                            data-button-location={buttonLocation.trySourcegraph}
                            data-button-type="cta"
                        >
                            Deploy to a server or cluster <ArrowRightIcon className="ml-1" />
                        </a>
                    </p>

                    <h2 className="h5 d-inline-flex mt-4 mr-4">Want help?</h2>

                    <a
                        className="btn btn-primary d-inline-flex"
                        href="https://info.sourcegraph.com/talk-to-a-developer"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Talk to an engineer <ArrowRightIcon className="ml-1" />
                    </a>
                </div>

                <div className="col-lg-6 self-hosted-section__search">
                    <h2 className="self-hosted-section__search-headings">Why choose self-hosted?</h2>

                    <ul className="font-size-medium">
                        <li>Free for up to 10 users</li>
                        <li>Collaborate with your team across infinite repositories</li>
                        <li>Connect to private code hosts (and local installs)</li>
                        <li>Free trial for enterprise features</li>
                    </ul>

                    <Link
                        href="/get-started"
                        passHref={true}
                        data-button-style={buttonStyle.arrowWithText}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="d-inline-flex font-weight-bold">
                            Learn about self-hosted vs.Cloud features <ArrowRightIcon className="ml-1" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
