import { FunctionComponent } from 'react'

import { FaGitAlt, FaLocationArrow } from 'react-icons/fa'
import { MdOutlineAvTimer, MdBarChart } from 'react-icons/md'

import {
    Layout,
    Hero,
    ContentSection,
    CustomerLogos,
    CtaSection,
    TwoColumnSection,
    Blockquote,
    ThreeUpText,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const Cloud: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Cloud',
            description: '',
        }}
        className="navbar-dark"
        hero={
            <Hero
                variant="radialSpace"
                title="Find, understand, & fix code faster than ever"
                subtitle="Sourcegraph Cloud’s dedicated, single-tenant SaaS solution is the easiest way to get Sourcegraph in the cloud. Get full code intelligence for your codebase quickly, securely, and without having to host."
                centerContent={true}
                cta={
                    <div className="tw-flex-col md:tw-flex-row md:tw-flex">
                        <div className="mb-3 mb-md-0">
                            <a
                                href="https://signup.sourcegraph.com"
                                className="btn tw-bg-white tw-text-blurple-400 hover:tw-bg-blurple-400 hover:tw-text-white w-100 max-w-350"
                                title="Get free trial"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                            >
                                Get free trial
                            </a>
                        </div>
                        <div className="ml-md-3">
                            <a
                                href="https://sourcegraph.com"
                                className="btn tw-text-white tw-border-white hover:tw-bg-blurple-400 hover:tw-border-blurple-400 w-100 max-w-350"
                                title="Get started"
                                data-button-style={buttonStyle.outline}
                                data-button-location={buttonLocation.hero}
                                data-button-type="cta"
                            >
                                Get started
                            </a>
                        </div>
                    </div>
                }
                displayUnderNav={true}
            />
        }
    >
        <CustomerLogos />

        <ContentSection>
            <div className="tw-flex tw-flex-col md:tw-flex-row">
                <h2 className="tw-mb-md">Get in flow with a private, fully-featured Sourcegraph instance</h2>

                <div>
                    <ThreeUpText
                        items={[
                            {
                                icon: (
                                    <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                        <FaGitAlt size={32} className="tw-p-1 tw-text-violet-400" />
                                    </div>
                                ),
                                description:
                                    'Search all your code, all in one place. Search all your code, all in one place. Sourcegraph connects to any Git-based code host so you can view your entire codebase in a single unified view.',
                            },
                            {
                                icon: (
                                    <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                        <FaLocationArrow size={32} className="tw-p-1 tw-text-violet-400" />
                                    </div>
                                ),
                                description:
                                    'Navigate your codebase with IDE-level code navigation that works across repositories, so you can track references, definitions, and implementations with perfect accuracy.',
                            },
                            {
                                icon: (
                                    <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                        <MdOutlineAvTimer size={40} className="tw-p-1 tw-text-violet-400" />
                                    </div>
                                ),
                                description:
                                    'Fix and update code across your entire codebase in hours rather than weeks with Batch Changes.',
                            },
                            {
                                icon: (
                                    <div className="tw-mb-5 tw-p-2.5 tw-rounded tw-flex tw-items-center tw-bg-violet-100 tw-max-w-[48px] tw-max-h-[48px]">
                                        <MdBarChart size={32} className="tw-p-1 tw-text-violet-400" />
                                    </div>
                                ),
                                description:
                                    'Track migrations, measure goals, and visualize changes in your code with Code Insights..',
                            },
                        ]}
                    />
                </div>
            </div>
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2>Start searching and stay in flow, no maintenance necessary Optional overline</h2>
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
                rightColumn={<img src="https://via.placeholder.com/577x342" alt="" />}
            />
        </ContentSection>

        <ContentSection>
            <Blockquote
                quote="Sourcegraph Cloud was an unlock for us..."
                author="Jerrod Engelberg, CEO at Codecov"
                logo={{
                    src: 'external-logos/codecov-logo.svg',
                    alt: 'Codecov',
                    href: 'https://about.codecov.io/',
                }}
                border={false}
                largeText={true}
            />
        </ContentSection>

        <ContentSection background="white">
            <TwoColumnSection
                reverseOnMobile={true}
                leftColumn={<img src="https://via.placeholder.com/577x342" alt="" />}
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
