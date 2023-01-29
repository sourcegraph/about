import React, { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, HubSpotForm } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

export const Hackathons: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Set up Sourcegraph at a Hackathon',
            description: 'Set up Sourcegraph at a Hackathon',
        }}
    >
        <section className="px-5 tw-text-center tw-mb-7">
            <h1 className="mt-4">Set up Sourcegraph during a hackathon</h1>
            <p>
                We'll give you access to Sourcegraph Enterprise features so you can ship code search and intelligence to
                your team.
            </p>
        </section>

        <section className="p-4 bg-white tw-m-auto tw-flex tw-justify-around tw-flex-col lg:tw-flex-row tw-max-w-screen-xl">
            <div className="mt-0 mb-2 mr-lg-5">
                <div className="p-5 tw-rounded tw-flex tw-flex-col tw-bg-gray-100">
                    <p>
                        Want to win your hackathon? Set up Sourcegraph and bring the power of code search and code
                        intelligence to your engineering team!
                    </p>
                    <ul>
                        <li>
                            We'll give you access to all of our <Link href="/pricing">Enterprise features</Link>
                        </li>
                        <li>We'll give you live tech support</li>
                        <li>We'll ship you a bag of stickers, shirts, socks, and other great swag!</li>
                    </ul>

                    <p>
                        Fill out the form or tweet us{' '}
                        <a href="https://twitter.com/sourcegraph" target="_blank" rel="nofollow noreferrer">
                            @sourcegraph
                        </a>
                        , and we'll get back to you ASAP on how to get started!
                    </p>
                    <div className="tw-border-t tw-mt-6 tw-border-gray-300">
                        <p className="tw-pt-sm">
                            Get started with the{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://docs.sourcegraph.com/admin/install/docker"
                            >
                                installation docs.
                            </a>
                        </p>
                        <ul>
                            <li>
                                We'll give you access to all of our{' '}
                                <Link
                                    href="/pricing"
                                    title="Enterprise features"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Enterprise features
                                </Link>
                            </li>
                            <li>We'll give you live tech support</li>
                            <li>We'll ship you a bag of stickers, shirts, socks, and other great swag!</li>
                        </ul>

                        <p>
                            Fill out the form or tweet us{' '}
                            <a
                                href="https://twitter.com/sourcegraph"
                                target="_blank"
                                rel="nofollow noreferrer"
                                title="@sourcegraph"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                @sourcegraph
                            </a>
                            , and we'll get back to you ASAP on how to get started!
                        </p>
                        <div className="tw-border-t tw-border-gray-300 tw-mt-6">
                            <p className="tw-pt-sm">
                                Get started with the{' '}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://docs.sourcegraph.com/admin/install/docker"
                                    title="Installation docs"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    installation docs
                                </a>
                                .
                            </p>
                            <p>
                                When you're ready to present, check out the{' '}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://docs.sourcegraph.com/getting-started/tour"
                                    title="Sourcegraph tour"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Sourcegraph tour
                                </a>{' '}
                                for example use-cases to show off.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <HubSpotForm
                    masterFormName="contactMulti"
                    chiliPiper={true}
                    inlineMessage={`
                        <p>Thank you for your interest in Sourcegraph. We will be in contact with you soon!</p>
                        
                        <p>Get started today:</p>

                        <ul>
                            <li><a href="https://docs.sourcegraph.com/admin/deploy/docker-single-container" target="_blank" rel="noopener noreferrer">Install Sourcegraph with Docker</a> <b>(recommended, easiest)</b></li>
                            <li><a href="https://docs.sourcegraph.com" target="_blank" rel="noopener noreferrer">Review the documentation</a></li>
                            <li>Check your email for your 30-day license key.</li>
                        </ul>
                    `}
                />
            </div>
        </section>
    </Layout>
)

export default Hackathons
