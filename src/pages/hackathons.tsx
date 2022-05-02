import React, { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout } from '@components'
import { useHubSpot } from '@hooks'

export const Pricing: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '7d6c55af-3de3-4e57-a5df-a0de341a4814',
        targetId: 'trial-form',
        chiliPiper: true,
    })

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Set up Sourcegraph at a Hackathon',
                description: 'Set up Sourcegraph at a Hackathon',
            }}
        >
            <section className="text-center mb-0 px-5">
                <h1 className="mt-4">Set up Sourcegraph during a hackathon</h1>
                <p>
                    We'll give you access to Sourcegraph Enterprise features so you can ship code search and
                    intelligence to your team.
                </p>
            </section>
            <section className="d-flex justify-content-around flex-column flex-lg-row bg-white max-w-1100 p-4 m-auto">
                <div className="mr-lg-5 mt-0 mb-2">
                    <div className="d-flex flex-column bg-light-gray-2 rounded p-5">
                        <p>
                            Want to win your hackathon? Set up Sourcegraph and bring the power of code search and code
                            intelligence to your engineering team!
                        </p>
                        <ul>
                            <li>
                                We'll give you access to all of our{' '}
                                <Link href="/pricing" passHref={true}>
                                    Enterprise features
                                </Link>
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
                        <div className="border-top border-light-9">
                            <p className="pt-4">
                                Get started with the{' '}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://docs.sourcegraph.com/admin/install/docker"
                                >
                                    installation docs.
                                </a>
                            </p>
                            <p>
                                When you're ready to present, check out the{' '}
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://docs.sourcegraph.com/getting-started/tour"
                                >
                                    Sourcegraph tour
                                </a>{' '}
                                for example use-cases to show off.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div id="trial-form" />
                </div>
            </section>
        </Layout>
    )
}

export default Pricing
