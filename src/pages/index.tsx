import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import {
    ContentSection,
    CoreFeatures,
    CallToActionContentSection,
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
        headerColorTheme="purple"
        className="bg-violet-750"
        hero={<HomeHero />}
    >
        <ContentSection background="white">
            <div className="mx-auto max-w-[700px] text-center">
                <h2 className="mb-2">
                    Over{' '}
                    <Link
                        href="/case-studies"
                        className="text-violet-400"
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

        <CallToActionContentSection />
    </Layout>
)

const HomeHero: FunctionComponent = () => (
    <div className="text-white">
        <div className="mx-auto px-sm pt-md text-center md:pt-2xl">
            <h1 className="text-4xl leading-10 sm:text-6xl md:text-[3.5rem] lg:text-[4rem] lg:leading-[1]">
                <span className="sg-bg-gradient-purple-white mb-2 bg-clip-text text-transparent">Find. Fix. Flow.</span>
            </h1>

            <Heading size="h5" as="h2" className="my-md mx-auto max-w-4xl !font-normal">
                Big codebases are less painful with Sourcegraph's&nbsp;code&nbsp;intelligence:
                <br />
                universal&nbsp;code&nbsp;search+nav and large-scale&nbsp;fixes/refactors.
            </Heading>

            <p className="my-md text-gray-200">
                Works&nbsp;alongside your code&nbsp;host and editor.
                <br />
                Built on{' '}
                <a
                    href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph"
                    target="_blank"
                    rel="noreferrer"
                    className="text-inherit underline decoration-[#ffffff55] decoration-dotted decoration-1 underline-offset-4"
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
        <SolidColorBottomHalfSection className="mt-2xl rounded-lg" bottomHalfClassName="bg-white">
            <div className="mx-sm">
                <DemoVideo
                    video="homepage-demo-202301"
                    splash={true}
                    className="mx-auto w-full max-w-4xl rounded-lg bg-violet-750"
                    splashClassName="rounded-lg"
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
    <div className={classNames('relative', className)}>
        <div className={classNames('absolute bottom-0 left-0 right-0 z-0 h-1/2', bottomHalfClassName)} />
        <div className="sticky z-10">{children}</div>
    </div>
)

export default Home
