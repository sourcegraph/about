import { FunctionComponent } from 'react'

import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import {
    ContentSection,
    IntegrationsSection,
    Layout,
    TwoColumnSection,
    Heading,
    CustomerLogos,
    Video,
} from '../components'

export const CodeSearchPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Code Search',
            description:
                'Code Search helps devs explore their codebase, make large-scale migrations, and fix security issues faster—especially in large, distributed codebases.',
            image: 'https://about.sourcegraph.com/code-search/code-search-og.png',
        }}
        hero={
            <>
                <ContentSection
                    parentClassName="!py-0 !px-sm overflow-x-clip"
                    className="grid grid-cols-1 pb-8 pt-20 md:grid-cols-2 md:pt-28 md:pb-16"
                >
                    <div className="flex w-full flex-col">
                        <Heading size="h1" className="text-white md:text-start md:!text-[52px]">
                            Find, understand, and fix your code
                        </Heading>

                        <p className="pt-6 pb-5 text-3xl text-gray-200">
                            Code Search, along with complementary tools, helps devs find, fix, and onboard to new code
                            quickly.
                        </p>

                        <Link href="/contact/request-info" className="btn btn-inverted-primary w-fit">
                            Meet with a product expert
                        </Link>
                    </div>
                </ContentSection>

                <div className="absolute right-0 ml-9 hidden h-[579px] w-full bg-[url('/code-search/code-search-hero.svg')] bg-cover bg-center bg-no-repeat md:top-[110px] md:block md:w-[436px] lg:top-[191px] lg:w-[556px] xl:w-[726px]" />
            </>
        }
        headerColorTheme="purple"
        className="sg-bg-code-search"
    >
        <CustomerLogos className="-px-sm !bg-transparent md:pt-0 md:pb-16 lg:pt-32" monochrome={true} dark={true} />

        <ContentSection parentClassName="!pb-0 md:!pb-24" className="md:pt-12">
            <TwoColumnSection
                className="xl:!gap-x-[100px]"
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-search',
                            webm: '/animations/code-search',
                        }}
                        title="Sourcegraph Code Search"
                        loop={true}
                        className="rounded-[5px] object-cover shadow-video lg:h-[401px] lg:w-[577px]"
                    />
                }
                rightColumn={
                    <div className="">
                        <p className="text-lg font-semibold text-white">CODE SEARCH</p>
                        <h2 className="mb-6 text-white">Find and fix code in any code host, language, or repository</h2>
                        <ul className="text-lg text-gray-200">
                            <li className="mb-4">
                                Be more efficient by reusing high-quality code. Find code across thousands of
                                repositories and multiple code hosts in seconds.
                            </li>
                            <li className="mb-4">
                                Resolve issues and incidents faster by pinpointing root causes with symbol, commit, and
                                diff searches.
                            </li>
                            <li className="mb-4">
                                Discover every instance of vulnerable or buggy code in milliseconds and have complete
                                confidence in what's in your codebase.
                            </li>
                        </ul>
                        <Link
                            href="/case-studies/nutanix-fixed-log4j-with-sourcegraph"
                            className="flex font-semibold text-white"
                        >
                            Read how Nutanix used Code Search to mitigate Log4j vulnerabilities <ChevronRightIcon />
                        </Link>
                    </div>
                }
            />
        </ContentSection>

        <ContentSection parentClassName="!pb-0 md:!pb-24">
            <TwoColumnSection
                className="xl:!gap-x-[113px]"
                leftColumn={
                    <div className="">
                        <p className="text-lg font-semibold text-white">CODE NAVIGATION</p>
                        <h2 className="mb-6 text-white">Understand your code and its dependencies</h2>
                        <ul className="text-lg text-gray-200">
                            <li className="mb-4">
                                Onboard to codebases faster with cross-repository code navigation features like “Go to
                                definition” and "Find references."
                            </li>
                            <li className="mb-4">
                                Complete code reviews, get up to speed on unfamiliar code, and determine the impact of
                                code changes with the confidence of compiler-accurate code navigation.
                            </li>
                            <li className="mb-4">
                                Determine root causes quickly with precise code navigation that tracks dependencies and
                                references across repositories.
                            </li>
                        </ul>
                    </div>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-intel',
                            webm: '/animations/code-intel',
                        }}
                        title="Sourcegraph Notebooks"
                        loop={true}
                        className="rounded-[5px] object-cover shadow-video lg:h-[401px] lg:w-[577px]"
                    />
                }
            />
        </ContentSection>

        <ContentSection parentClassName="!pb-0 md:!pb-24">
            <TwoColumnSection
                className="xl:!gap-x-[100px]"
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        source={{
                            mp4: 'batch-changes/how-it-works',
                            webm: 'batch-changes/how-it-works',
                        }}
                        loop={true}
                        title="Batch Changes: How it works"
                        className="rounded-[5px] object-cover shadow-video lg:h-[324px] lg:w-[577px]"
                    />
                }
                rightColumn={
                    <div className="">
                        <p className="text-lg font-semibold text-white">BATCH CHANGES</p>
                        <h2 className="mb-6 text-white">Automate large-scale code changes</h2>
                        <ul className="text-lg text-gray-200">
                            <li className="mb-4">
                                Find all occurrences of code to change with Code Search and programmatically those
                                changes by creating a declarative specification file.
                            </li>
                            <li className="mb-4">
                                Automatically track changeset lifecycle status, like check state, reviews, and merge
                                status via the Sourcegraph UI so you can get the changesets merged.
                            </li>
                        </ul>
                        <Link
                            href="/case-studies/indeed-accelerates-development-velocity"
                            className="flex font-semibold text-white"
                        >
                            Read how Indeed uses Batch Changes to accelerate development <ChevronRightIcon />
                        </Link>
                    </div>
                }
            />
        </ContentSection>

        <ContentSection className="md:pb-4">
            <TwoColumnSection
                className="xl:!gap-x-[113px]"
                centerContent={true}
                leftColumn={
                    <div className="">
                        <p className="text-lg font-semibold text-white">CODE INSIGHTS</p>
                        <h2 className="mb-6 text-white">Track what really matters to you and your team</h2>
                        <ul className="text-lg text-gray-200">
                            <li className="mb-4">
                                Make data-driven decisions using visualizations based on the power and accuracy of
                                Sourcegraph Code Search.
                            </li>
                            <li className="mb-4">
                                Engineering teams can track migrations and deprecations, ensure removal of security
                                vulnerabilities, track code smells and health, and much more.
                            </li>
                        </ul>
                        <Link
                            href="https://about.sourcegraph.com/blog/announcing-code-insights"
                            className="flex font-semibold text-white"
                        >
                            Learn more about Code Insights <ChevronRightIcon />
                        </Link>
                    </div>
                }
                rightColumn={
                    <Video
                        source={{
                            mp4: 'code_insights/code-insights-720',
                            webm: 'code_insights/code-insights-720',
                        }}
                        title="Code Insights"
                        loop={true}
                        className="rounded-lg object-cover shadow-video lg:h-[324px] lg:w-[577px]"
                    />
                }
            />
        </ContentSection>

        <IntegrationsSection />
        <ContentSection background="white" className="py-4">
            <div className="sg-bg-code-search-cta mx-auto flex w-full max-w-[1092px] flex-col items-center justify-between gap-x-8 rounded-lg bg-no-repeat py-16  px-6 shadow-cta md:rounded-2xl md:bg-[lightgray] md:bg-[url('/code-search/cta-background.png')] md:bg-cover md:bg-center md:py-24 md:px-20 lg:flex-row">
                <div className="max-w-[516px] pb-16 md:pb-0">
                    <Heading size="h2" className="mb-2  !text-4xl text-white">
                        Try Sourcegraph on your code
                    </Heading>
                    <p className="max-w-2xl text-lg text-gray-200">
                        Experience code intelligence with a free trial for you and your team, or search millions of open
                        source repositories.
                    </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-4 md:w-fit md:flex-row md:items-center md:justify-center">
                    <Link
                        className="w-full rounded-[5px] border border-gray-200 py-2 px-6 text-center text-gray-200 hover:border-white hover:text-white md:w-fit"
                        href="/demo"
                    >
                        Meet with a product expert
                    </Link>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default CodeSearchPage
