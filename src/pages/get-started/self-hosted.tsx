import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

import { Layout, Install, ContentSection } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

export const SelfHostedPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Get Started with Sourcegraph Self-Hosted',
            description:
                'Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally. Get started for free.',
        }}
        hero={
            <div className="py-md px-6 xl:px-0 max-w-screen-xl mx-auto">
                <h1 className="mb-3">
                    <strong>Get started</strong>
                </h1>
                <p className="text-lg">From GE to Uber, the world's best developers use Sourcegraph every day.</p>
            </div>
        }
    >
        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <div className="lg:grid lg:grid-cols-12">
                <div className="lg:col-span-6 lg:pr-14">
                    <h2 className="mb-sm">Sourcegraph Self-Hosted</h2>

                    <p className="text-lg">
                        Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally. Get
                        started for free.
                    </p>

                    <div className="my-sm">
                        <h6>Designed For</h6>
                        <p className="text-lg">Teams and enterprises</p>
                    </div>

                    <p className="text-lg">
                        Collaborate with your team on any code host (including private hosts) and access advanced
                        security functionality.
                    </p>
                </div>

                <div className="lg:col-span-6 mt-16 lg:mt-0">
                    <div className="mb-8">
                        <Install />
                    </div>

                    <a
                        title="Talk to an engineer"
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                        href="https://info.sourcegraph.com/talk-to-a-developer"
                    >
                        Talk to an engineer <ArrowRightIcon className="inline" />
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default SelfHostedPage
