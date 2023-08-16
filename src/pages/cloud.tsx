import { FunctionComponent } from 'react'

import Link from 'next/link'
import { FaGitAlt, FaLocationArrow } from 'react-icons/fa'
import { MdOutlineAvTimer, MdBarChart } from 'react-icons/md'

import { Layout, Hero, ContentSection, TwoColumnSection, Heading } from '../components'
import { buttonLocation, buttonStyle } from '../data/tracking'

const Cloud: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Cloud',
            description:
                'Sourcegraph Cloud’s dedicated, single-tenant SaaS solution is the easiest way to get Sourcegraph in the cloud. Get full code intelligence for your codebase quickly, securely, and without having to host.',
        }}
        headerColorTheme="purple"
        hero={
            <Hero
                product="sourcegraph cloud"
                variant="radialSpace"
                className="md:h-[805px] md:!pt-[152px] lg:!mb-0"
                title="Find, understand, & fix code faster than ever"
                titleClassName="text-transparent block bg-clip-text bg-gradient-to-l sg-bg-gradient-infrared bg-clip-text text-transparent mt-4"
                subtitle="Sourcegraph Cloud’s dedicated, single-tenant SaaS solution is the easiest way to get Sourcegraph in the cloud. Get full code intelligence for your codebase quickly, securely, and without having to host."
                centerContent={true}
                cta={
                    <div className="mx-auto flex w-full flex-col items-center justify-center gap-6 sm:flex sm:flex-row md:gap-4">
                        <Link
                            className="btn btn-inverted-primary min-w-[214px] whitespace-nowrap"
                            href="/contact/request-info"
                            title="Try Sourcegraph for free"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation}
                            data-button-type="cta"
                        >
                            Try Sourcegraph for free
                        </Link>
                        <Link
                            className="btn btn-outline-white inline-flex min-w-[214px] items-center whitespace-nowrap"
                            href="/demo"
                            title="Talk to an engineer"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Talk to an engineer
                        </Link>
                    </div>
                }
                floatingImg="/code-intelligence-platform-illustration.svg"
                displayUnderNav={true}
            />
        }
    >
        <ContentSection background="white" className="pt-16 md:pt-28 md:pb-5xl lg:pt-[145px]" parentClassName="!py-0">
            <div className="flex-row lg:flex">
                <h2 className="mb-10 max-w-3xl md:mr-6 md:min-w-[400px] md:pr-4 lg:basis-1/3">
                    Get in flow with a private, fully-featured Sourcegraph instance
                </h2>

                <div className="max-w-full basis-2/3">
                    <TwoColumnSection
                        blockOnMdAndDown={true}
                        className="!gap-y-8 md:!gap-x-6"
                        leftColumn={
                            <div>
                                <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5 md:mb-5">
                                    <FaGitAlt size={32} className="text-violet-400" />
                                </div>
                                <p className="m-0">
                                    Search all your code, all in one place. Sourcegraph connects to any Git-based code
                                    host so you can view your entire codebase in a single unified view.
                                </p>
                            </div>
                        }
                        rightColumn={
                            <div className="mb-8">
                                <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5">
                                    <FaLocationArrow size={32} className="p-1 text-violet-400" />
                                </div>
                                <p className="m-0">
                                    Navigate your codebase with IDE-level code navigation that works across
                                    repositories, so you can track references, definitions, and implementations with
                                    perfect accuracy.
                                </p>
                            </div>
                        }
                    />
                    <TwoColumnSection
                        blockOnMdAndDown={true}
                        className="!gap-y-8  md:!gap-x-6"
                        leftColumn={
                            <div>
                                <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5">
                                    <MdOutlineAvTimer size={45} className="text-violet-400" />
                                </div>
                                <p className="m-0">
                                    Fix and update code across your entire codebase in hours rather than weeks with{' '}
                                    <Link href="/batch-changes" className="text-black underline">
                                        Batch Changes
                                    </Link>
                                    .
                                </p>
                            </div>
                        }
                        rightColumn={
                            <div>
                                <div className="mb-6 flex max-h-[48px] max-w-[48px] items-center rounded bg-violet-100 p-2.5">
                                    <MdBarChart size={32} className="text-violet-400" />
                                </div>
                                <p className="m-0">
                                    Track migrations, measure goals, and visualize changes in your code with{' '}
                                    <Link href="/code-insights" className="text-black underline">
                                        Code Insights
                                    </Link>
                                    .
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </ContentSection>

        <ContentSection background="white" className="pt-16 md:py-4" parentClassName="!py-0">
            <TwoColumnSection
                className="!gap-y-16 lg:!gap-x-16"
                leftColumn={
                    <div className="mr-[38px] lg:mr-0">
                        <h2>Start searching and stay in flow, no maintenance necessary</h2>
                        <ul className="ml-0 mt-6 list-none lg:max-w-[590px]">
                            <li>
                                Get a dedicated Sourcegraph Cloud instance with no manual deployment required. Simply
                                connect to your code hosts and start searching, navigating, and automating your code.
                            </li>
                        </ul>
                    </div>
                }
                rightColumn={
                    <div className="mr-[38px] lg:mr-0">
                        <h2>Reduce your total cost of ownership and increase time to value</h2>
                        <ul className="ml-0 mt-6 list-none lg:max-w-[590px]">
                            <li>
                                Spend less time maintaining your dev tools and more time shipping great code. Upgrades
                                and scaling are fully automated.
                            </li>
                        </ul>
                    </div>
                }
            />
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                reverseOnMobile={true}
                centerContent={true}
                className="!gap-y-[101px] lg:!gap-x-[83px]"
                leftColumn={
                    <div className="flex justify-center">
                        <span className="mt-[30px] h-px w-10 bg-gray-300 md:mt-[46px] md:w-20" />
                        <div className="mx-[33px] text-center">
                            <img src="/security/ccpa.svg" alt="CCPA badge" />
                            <p className="mt-xxs mb-0 font-semibold text-gray-400">CCPA</p>
                        </div>
                        <div className="mr-[36.5px] text-center">
                            <img src="/security/gdpr.svg" alt="GDPR badge" />
                            <p className="mt-xxs mb-0 font-semibold text-gray-400">GDPR</p>
                        </div>
                        <div className="mr-[36.5px] text-center">
                            <img src="/security/soc2.svg" alt="SOC2 Type 2 badge" />
                            <p className="mt-xxs mb-0 font-semibold text-gray-400">SOC2 TYPE 2</p>
                        </div>
                        <span className="mt-[30px] h-px w-10 bg-gray-300 md:mt-[46px] md:w-20" />
                    </div>
                }
                rightColumn={
                    <>
                        <h2>Safeguard your data with single-tenant, security-first instances</h2>
                        <ul className="ml-md mt-sm">
                            <li>
                                Feel secure: all instances are isolated and single-tenant, so you don’t have to
                                configure your own instance security.
                            </li>

                            <li>
                                Stay up-to-date and confident with automatic monthly upgrades, service SLAs, and backup
                                and restore capability.
                            </li>

                            <li>
                                Prioritize your data’s privacy: Sourcegraph Cloud has received a SOC 2 Type II report.
                                See our{' '}
                                <a
                                    href="https://security.sourcegraph.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-black underline"
                                >
                                    security portal
                                </a>{' '}
                                for more information.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <ContentSection background="white" className="pt-[5px] md:pt-4 md:pb-28" parentClassName="!py-0 !px-0">
            <div className="sg-bg-code-search-cta rounded-0 mx-auto flex w-full max-w-[941px] flex-col justify-between gap-x-8 bg-no-repeat py-16 px-6 shadow-cta md:items-center md:rounded-2xl md:bg-[lightgray] md:bg-[url('/code-search/cta-background.png')] md:bg-cover md:bg-right md:py-24 md:px-20 lg:flex-row">
                <div className="max-w-[516px] pb-8 lg:pb-0">
                    <Heading size="h2" className="mb-6 !text-4xl text-white">
                        Try Sourcegraph on your code
                    </Heading>
                    <p className="mb-0 max-w-2xl text-lg text-gray-200">
                        Experience code intelligence with a free trial for you and your team, or search millions of open
                        source repositories.
                    </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start gap-4 md:w-fit md:flex-row md:items-center md:justify-center lg:flex-col">
                    <Link
                        className="btn btn-inverted-primary min-w-fit bg-white px-6 text-center text-blurple-400 hover:bg-blurple-400 hover:text-white"
                        href="/contact/request-info"
                    >
                        Start for free
                    </Link>
                    <Link
                        className="btn btn-link min-w-fit px-0 text-center text-white hover:text-blurple-200  md:px-6 lg:px-4"
                        href="/demo"
                    >
                        Meet with a product expert
                    </Link>
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default Cloud
