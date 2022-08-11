/* eslint-disable unicorn/prevent-abbreviations */
import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Blockquote, Layout, HubSpotForm, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const AccelerateDevOnboarding: FunctionComponent = () => (
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
                    <h1 className="mb-4">Accelerate developer onboarding and decrease time to first commit</h1>
                    <h4>Self-serve onboarding, codebase exploration, and knowledge sharing</h4>
                    <p>
                        With Sourcegraph, developers can find their own answers without waiting for someone to point
                        them to the relevant code. Get sharable links to help developers ask specific questions with
                        context included, and enable senior devs to share their knowledge at scale.
                    </p>

                    <div className="mt-5 max-w-400">
                        <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
                    </div>
                </div>

                <div className="mt-4 col-lg-6 mt-lg-0">
                    <YouTube title="Accelerate developer onboarding with Sourcegraph" id="DgwvhRW1Cbc" />
                </div>
            </div>
        </div>

        <div className="sg-bg-gradient-saturn">
            <div className="container py-7 max-w-650">
                <Blockquote
                    headline="Learn how Convoy increases the efficiency and confidence of entry level developers"
                    quote="For our new developers, Sourcegraph has been invaluable to get to know the repository
                    structure, to track down where code lives, and self-service during their
                    investigations."
                    author="Owen Kim, Senior Software Engineer at Convoy"
                    border={false}
                    logo={{ src: '/external-logos/convoy-logo.svg', alt: 'Convoy logo' }}
                    link={{ text: 'Read the full case study', href: '/case-studies/convoy-improved-on-boarding' }}
                />
            </div>
        </div>

        <div className="tw-text-center">
            <div className="container py-7 max-w-650">
                <h2>Ready to accelerate developer onboarding? Let's talk.</h2>

                <div className="mx-auto mt-5 max-w-400">
                    <Link href="/demo">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="mt-5 btn btn-primary tw-block sm:tw-inline-block"
                            title="Request a demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </Layout>
)

export default AccelerateDevOnboarding
