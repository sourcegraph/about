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
            <div className="tw-py-md tw-px-6 xl:tw-px-0 tw-max-w-screen-xl tw-mx-auto">
                <h1 className="tw-mb-3">
                    <strong>Get started</strong>
                </h1>
                <p className="tw-text-lg">From GE to Uber, the world's best developers use Sourcegraph every day.</p>
            </div>
        }
    >
        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <div className="lg:tw-grid lg:tw-grid-cols-12">
                <div className="lg:tw-col-span-6 lg:tw-pr-14">
                    <h2 className="tw-mb-sm">Sourcegraph Self-Hosted</h2>

                    <p className="tw-text-lg">
                        Deploy and control Sourcegraph in your own infrastructure, or use Docker to install locally. Get
                        started for free.
                    </p>

                    <div className="tw-my-sm">
                        <h6>Designed For</h6>
                        <p className="tw-text-lg">Teams and enterprises</p>
                    </div>

                    <p className="tw-text-lg">
                        Collaborate with your team on any code host (including private hosts) and access advanced
                        security functionality.
                    </p>
                </div>

                <div className="lg:tw-col-span-6 tw-mt-16 lg:tw-mt-0">
                    <div className="tw-mb-8">
                        <Install />
                    </div>

                    <a
                        title="Talk to an engineer"
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                        href="https://info.sourcegraph.com/talk-to-a-developer"
                    >
                        Talk to an engineer <ArrowRightIcon className="tw-inline" />
                    </a>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default SelfHostedPage
