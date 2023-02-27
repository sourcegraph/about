import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
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
import { MeetWithProductExpertButton } from '../components/cta/MeetWithProductExpertButton'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { DemoVideo } from '../components/DemoVideo'
import { GetStartedButton } from '../components/GetStartedButton'
import { EXP_GET_STARTED, EXP_HIDE_SUBTEXT, EXP_SOURCEGRAPH_ENTERPRISE } from '../data/experiments'
import { buttonLocation, buttonStyle } from '../data/tracking'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                'Sourcegraph makes it easy to write, read, and fix code—even in big, complex codebases—with universal code search, large-scale refactors, and more.',
        }}
        heroAndHeaderClassName="sg-bg-gradient-purple text-white"
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
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-2 py-8 md:grid-cols-[2fr_3fr] md:px-6 md:pt-12 md:pb-16 lg:grid-cols-[3fr_5fr] lg:gap-12">
        <div className="flex flex-col items-center gap-6 text-center xl:gap-8">
            <h1 className="text-5xl leading-[2rem] lg:text-6xl xl:text-7xl">
                <span className="sg-bg-gradient-purple-white whitespace-nowrap bg-clip-text text-transparent">
                    Code intelligence
                </span>
            </h1>

            <p className="mx-auto mb-0 text-lg !font-normal md:text-base lg:text-xl">
                Sourcegraph makes it easy to read, write, and fix&nbsp;code&mdash;even in
                big,&nbsp;complex&nbsp;codebases.
            </p>

            {!EXP_HIDE_SUBTEXT && (
                <p className="mb-0 text-sm text-white/75">
                    Universal code search/nav + large-scale fixes/refactors.
                    <br />
                    Works&nbsp;alongside your code&nbsp;host and editor.
                    <br />
                    Built on{' '}
                    <a
                        href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph"
                        target="_blank"
                        rel="noreferrer"
                        className="text-inherit underline decoration-white/25 decoration-dotted decoration-1 underline-offset-4 hover:text-white hover:decoration-white hover:decoration-solid"
                    >
                        open source
                    </a>
                    .
                </p>
            )}

            <div className="max-w-sm md:w-full">
                {EXP_GET_STARTED ? (
                    <>
                        <Heading size="h6" className="mb-1 text-sm text-white/75">
                            Get started:
                        </Heading>
                        <GetStartedButton
                            buttonLocation={buttonLocation.hero}
                            className="w-full"
                            buttonGroupClassName="items-stretch"
                            otherVariantsClassName={{
                                container: 'relative mt-[15px]',
                                triangle: 'absolute right-[3px] top-[-30px] h-[50px] w-[50px]',
                            }}
                        />
                    </>
                ) : (
                    <StandardCallToAction buttonLocation={buttonLocation.hero} size="lg" dark={true} />
                )}
            </div>

            {EXP_GET_STARTED && (
                <>
                    {EXP_SOURCEGRAPH_ENTERPRISE && <EnterpriseLink />}

                    {!EXP_SOURCEGRAPH_ENTERPRISE && (
                        <div>
                            <Heading size="h6" className="mb-1 text-sm text-white/75">
                                Or:
                            </Heading>
                            <MeetWithProductExpertButton
                                buttonLocation={buttonLocation.hero}
                                dark={true}
                                buttonClassName="btn-outline-white !font-normal"
                            />
                        </div>
                    )}
                </>
            )}
        </div>
        <div className="px-4 md:px-0">
            <DemoVideo
                video="homepage-demo-202301"
                splash={true}
                className="mx-auto w-full max-w-4xl rounded-lg bg-violet-750"
                splashClassName="rounded-lg"
            />
        </div>
    </div>
)

const EnterpriseLink: React.FunctionComponent = () => (
    <div>
        <Link
            href="/pricing"
            className="flex items-center text-xl font-semibold text-violet-300 no-underline hover:text-white hover:underline"
        >
            Sourcegraph Enterprise <ChevronRightIcon />
        </Link>
        <span className="text-sm text-white/75">For organizations using Sourcegraph at scale</span>
    </div>
)

export default Home
