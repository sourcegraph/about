import { FunctionComponent } from 'react'

import { Blockquote, Layout, HubSpotForm, YouTube } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const AccelerateDevOnboarding: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Accelerating Developer Onboarding | Sourcegraph',
            description:
                'Get sharable links to help new developers ask questions with context, and enable senior devs to share knowledge without running local searches for specific bits of code.',
        }}
    >
        <div className="container mx-auto grid grid-cols-1 gap-md py-24 lg:grid-cols-2">
            <div>
                <h1 className="mb-6">Accelerate developer onboarding and decrease time to first commit</h1>
                <h4>Self-serve onboarding, codebase exploration, and knowledge sharing</h4>
                <p>
                    With Sourcegraph, developers can find their own answers without waiting for someone to point them to
                    the relevant code. Get sharable links to help developers ask specific questions with context
                    included, and enable senior devs to share their knowledge at scale.
                </p>

                <div className="mt-8 max-w-[400px]">
                    <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
                </div>
            </div>

            <div>
                <YouTube title="Accelerate developer onboarding with Sourcegraph" id="DgwvhRW1Cbc" />
            </div>
        </div>

        <div className="sg-bg-gradient-saturn">
            <div className="container mx-auto max-w-[650px] py-24">
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

        <div className="container mx-auto max-w-[650px] py-24 text-center">
            <h2>Ready to accelerate developer onboarding? Let's talk.</h2>

            <div className="mx-auto mt-8 max-w-[400px]">
                <a
                    className="btn btn-primary mt-8 block sm:inline-block"
                    href="https://signup.sourcegraph.com"
                    title="Start for free"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.bodyDemo}
                    data-button-type="cta"
                >
                    Start for free
                </a>
            </div>
        </div>
    </Layout>
)

export default AccelerateDevOnboarding
