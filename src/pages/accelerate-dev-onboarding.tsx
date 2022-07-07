/* eslint-disable unicorn/prevent-abbreviations */
import { FunctionComponent } from 'react'

import Link from 'next/link'

import { BlockquoteWithLogoBottom, Layout, FormLegal, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useHubSpot, useChiliPiper } from '@hooks'

const AccelerateDevOnboarding: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '98187d3b-d8a9-43e2-bb95-d93dd029c688',
        targetId: 'form-0',
    })
    useChiliPiper()

    return (
        <Layout
            meta={{
                title: 'Accelerating Developer Onboarding | Sourcegraph',
                description:
                    'Get sharable links to help new developers ask questions with context, and enable senior devs to share knowledge without running local searches for specific bits of code.',
            }}
        >
            <div className="container py-7">
                <div className="row">
                    <div className="col-lg-6 pr-lg-5">
                        <h1 className="mb-4 font-weight-bold">
                            Accelerate developer onboarding and decrease time to first commit
                        </h1>
                        <h4 className="font-weight-bold">
                            Self-serve onboarding, codebase exploration, and knowledge sharing
                        </h4>
                        <p>
                            With Sourcegraph, developers can find their own answers without waiting for someone to point
                            them to the relevant code. Get sharable links to help developers ask specific questions with
                            context included, and enable senior devs to share their knowledge at scale.
                        </p>

                        <div className="mt-5 max-w-400">
                            <div id="form-0" />
                            <FormLegal />
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <YouTube title="Accelerate developer onboarding with Sourcegraph" id="DgwvhRW1Cbc" />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-saturn-saturated text-center">
                <div className="container py-7 max-w-650">
                    <BlockquoteWithLogoBottom
                        header="Learn how Convoy increases the efficiency and confidence of entry level developers"
                        quote="For our new developers, Sourcegraph has been invaluable to get to know the repository
                        structure, to track down where code lives, and self-service during their
                        investigations."
                        author="Owen Kim, Senior Software Engineer at Convoy"
                        logo={{ src: '/external-logos/convoy-logo.svg', alt: 'Convoy logo' }}
                        link={{ text: 'Read the full case study', href: '/case-studies/convoy-improved-on-boarding' }}
                    />
                </div>
            </div>

            <div className="text-center">
                <div className="container py-7 max-w-650">
                    <h2 className="font-weight-bold">Ready to accelerate developer onboarding? Let's talk.</h2>

                    <div className="mt-5 max-w-400 mx-auto">
                        <Link href="/demo">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-primary mt-5 d-block d-sm-inline-block"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.bodyDemo}
                            >
                                Request a demo
                            </a>
                        </Link>
                        <FormLegal />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AccelerateDevOnboarding
