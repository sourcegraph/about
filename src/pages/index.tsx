import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import {
    ContentSection,
    CoreFeatures,
    CtaSection,
    Layout,
    IntegrationsSection,
    CustomerLogos,
    Heading,
} from '../components'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { DemoVideo } from '../components/DemoVideo'
import { buttonLocation, buttonStyle } from '../data/tracking'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                "Big codebases are less painful with Sourcegraph's code intelligence: universal code search+nav and large-scale fixes/refactors.",
        }}
        heroAndHeaderClassName="sg-bg-gradient-purple"
        className="navbar-transparent tw-text-white"
        hero={<HomeHero />}
    >
        <ContentSection background="white">
            <div className="tw-mx-auto tw-text-center max-w-700">
                <h2 className="tw-mb-2">
                    Over{' '}
                    <Link
                        href="/case-studies"
                        className="tw-text-violet-400"
                        title="1.8 million engineers"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.hero}
                        data-button-type="cta"
                    >
                        1.8M engineers
                    </Link>{' '}
                    use Sourcegraph to build software you rely on
                </h2>

                <Link
                    href="/case-studies"
                    title="Learn how our customers use Sourcegraph"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.hero}
                    data-button-type="cta"
                >
                    Learn how our customers use Sourcegraph
                </Link>
            </div>
            <CustomerLogos />
        </ContentSection>

        <ContentSection background="white">
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <CtaSection />
    </Layout>
)

const HomeHero: FunctionComponent = () => (
    <div>
        <div className="tw-px-sm tw-mx-auto tw-pt-md md:tw-pt-2xl tw-text-center">
            <h1 className="tw-text-4xl tw-leading-10 sm:tw-text-6xl md:tw-text-[3.5rem] lg:tw-text-[4rem] lg:tw-leading-[1]">
                <span className="mb-2 tw-text-transparent sg-bg-gradient-purple-white tw-bg-clip-text">
                    Find. Fix. Flow.
                </span>
            </h1>

            <Heading size="h5" as="h2" className="tw-my-md tw-mx-auto tw-max-w-4xl !tw-font-normal">
                Big codebases are less painful with Sourcegraph's&nbsp;code&nbsp;intelligence:
                <br />
                universal&nbsp;code&nbsp;search+nav and large-scale&nbsp;fixes/refactors.
            </Heading>

            <p className="tw-text-gray-200 tw-my-md">
                Works&nbsp;alongside your code&nbsp;host and editor.
                <br />
                Built on{' '}
                <a
                    href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph"
                    target="_blank"
                    rel="noreferrer"
                    className="tw-text-inherit tw-underline tw-decoration-1 tw-decoration-[#ffffff55] tw-decoration-dotted tw-underline-offset-4"
                >
                    open source
                </a>
                .
            </p>

            <StandardCallToAction
                center={true}
                buttonLocation={buttonLocation.hero}
                dark={true}
                chevron={true}
                size="lg"
            />
        </div>
        <SolidColorBottomHalfSection className="tw-mt-2xl tw-rounded-lg" bottomHalfClassName="tw-bg-white">
            <div className="tw-mx-sm">
                <DemoVideo
                    video="homepage-demo-202301"
                    splash={true}
                    className="tw-mx-auto w-100 tw-max-w-4xl tw-bg-violet-750 tw-rounded-lg"
                    splashClassName="tw-rounded-lg"
                />
            </div>
        </SolidColorBottomHalfSection>
    </div>
)

const SolidColorBottomHalfSection: React.FunctionComponent<{
    className?: string
    bottomHalfClassName: string
    children: React.ReactNode
}> = ({ className, bottomHalfClassName, children }) => (
    <div className={classNames('tw-relative', className)}>
        <div
            className={classNames('tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-h-1/2 tw-z-0', bottomHalfClassName)}
        />
        <div className="tw-z-10 tw-sticky">{children}</div>
    </div>
)

export default Home
