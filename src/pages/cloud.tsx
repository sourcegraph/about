import { FunctionComponent } from 'react'

import { FaGitAlt, FaLocationArrow } from 'react-icons/fa'
import { MdOutlineAvTimer, MdBarChart } from 'react-icons/md'

import { Layout, Hero, ContentSection, CtaSection, TwoColumnSection, Blockquote } from '../components'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { buttonLocation } from '../data/tracking'

const Cloud: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Cloud',
            description:
                'Sourcegraph Cloud’s dedicated, single-tenant SaaS solution is the easiest way to get Sourcegraph in the cloud. Get full code intelligence for your codebase quickly, securely, and without having to host.',
        }}
        className="navbar-purple"
        hero={
            <Hero
                product="sourcegraph cloud"
                variant="radialSpace"
                title="Find, understand, & fix code faster than ever"
                titleClassName="tw-text-transparent tw-block tw-bg-clip-text tw-bg-gradient-to-l tw-from-white/10 tw-to-violet-200"
                subtitle="Sourcegraph Cloud’s dedicated, single-tenant SaaS solution is the easiest way to get Sourcegraph in the cloud. Get full code intelligence for your codebase quickly, securely, and without having to host."
                centerContent={true}
                cta={<StandardCallToAction buttonLocation={buttonLocation.hero} center={true} dark={true} />}
                floatingImg="/code-intelligence-platform-illustration.svg"
                displayUnderNav={true}
            />
        }
    >
        <ContentSection background="white">
            <div className="lg:tw-flex tw-flex-row">
                <h2 className="lg:tw-basis-1/3 tw-min-w-[400px] tw-max-w-3xl tw-mb-md">
                    Get in flow with a private, fully-featured Sourcegraph instance
                </h2>

                <div className="tw-basis-2/3 tw-max-w-full">
                    <TwoColumnSection
                        blockOnMdAndDown={true}
                        leftColumn={
                            <div className="tw-mb-md">
                                <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                    <FaGitAlt size={32} className="tw-text-violet-400" />
                                </div>
                                <p className="tw-max-w-sm">
                                    Search all your code, all in one place. Sourcegraph connects to any Git-based code
                                    host so you can view your entire codebase in a single unified view.
                                </p>
                            </div>
                        }
                        rightColumn={
                            <div className="tw-mb-md">
                                <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                    <FaLocationArrow size={32} className="tw-p-1 tw-text-violet-400" />
                                </div>
                                <p className="tw-max-w-sm">
                                    Navigate your codebase with IDE-level code navigation that works across
                                    repositories, so you can track references, definitions, and implementations with
                                    perfect accuracy.
                                </p>
                            </div>
                        }
                    />
                    <TwoColumnSection
                        blockOnMdAndDown={true}
                        leftColumn={
                            <div>
                                <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                    <MdOutlineAvTimer size={45} className="tw-text-violet-400" />
                                </div>
                                <p className="tw-max-w-sm">
                                    Fix and update code across your entire codebase in hours rather than weeks with
                                    Batch Changes.
                                </p>
                            </div>
                        }
                        rightColumn={
                            <div>
                                <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                    <MdBarChart size={32} className="tw-text-violet-400" />
                                </div>
                                <p className="tw-max-w-sm">
                                    Track migrations, measure goals, and visualize changes in your code with Code
                                    Insights.
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2>Start searching and stay in flow, no maintenance necessary</h2>
                        <ul className="tw-ml-md tw-mt-sm">
                            <li>
                                Get a dedicated Sourcegraph Cloud instance with no manual deployment required. Simply
                                connect to your code hosts and start searching, navigating, and automating your code.
                            </li>

                            <li>
                                Spend less time maintaining your dev tools and more time shipping great code. Upgrades
                                and scaling are fully automated.
                            </li>

                            <li>Reduce your total cost of ownership and increase time to value.</li>
                        </ul>
                    </>
                }
                rightColumn={
                    <div className="tw-border-l tw-border-gray-300 tw-py-2">
                        <Blockquote
                            headline="Sourcegraph Cloud was the right fit for Codecov’s growing team"
                            quote="Sourcegraph Cloud was an unlock for us. We didn't feel like Sourcegraph was a product that we needed to run on our own infrastructure."
                            author="Jerrod Engelberg, CEO at Codecov"
                            border={false}
                            center={false}
                            logo={{
                                src: 'external-logos/codecov-logo.svg',
                                alt: 'Codecov',
                                href: 'https://about.codecov.io/',
                            }}
                            link={{
                                text: 'Read the case study',
                                href: '/case-studies/codecov-uses-sourcegraph-to-resolve-incidents-faster',
                            }}
                        />
                    </div>
                }
            />
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                reverseOnMobile={true}
                centerContent={true}
                leftColumn={
                    <div className="tw-flex tw-justify-center">
                        <span className="tw-h-px tw-mt-[40px] tw-bg-gray-300 tw-w-1/5" />
                        <div className="tw-ml-sm tw-text-center">
                            <img src="/security/ccpa.svg" alt="CCPA badge" />
                            <p className="tw-text-gray-400 tw-mt-xxs tw-mb-0">CCPA</p>
                        </div>
                        <div className="tw-mx-sm tw-text-center">
                            <img src="/security/gdpr.svg" alt="GDPR badge" />
                            <p className="tw-text-gray-400 tw-mt-xxs tw-mb-0">GDPR</p>
                        </div>
                        <div className="tw-mr-sm tw-text-center">
                            <img src="/security/soc2.svg" alt="SOC2 Type 2 badge" />
                            <p className="tw-text-gray-400 tw-mt-xxs tw-mb-0">SOC2 TYPE 2</p>
                        </div>
                        <span className="tw-h-px tw-mt-[40px] tw-bg-gray-300 tw-w-1/5" />
                    </div>
                }
                rightColumn={
                    <>
                        <h2>Safeguard your data with single-tenant, security-first instances</h2>
                        <ul className="tw-ml-md tw-mt-sm">
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
                                See our security portal for more information.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <CtaSection />
    </Layout>
)

export default Cloud
