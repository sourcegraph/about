import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection, Heading, InfiniteCarousel, Layout } from '../../components'
import { ContactUsCta } from '../../components/cta/ContactUsCta'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { carouselImages } from '../code-search'

interface SearchTipItemProps {
    title: string
    icon?: string
    description: string
    className?: string
}

const CodeIntelligenceForGitlab: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    return (
        <Layout
            meta={{
                title: 'Code intelligence for GitLab',
                description:
                    "Enhance your GitLab experience with Sourcegraph's Code intelligence platform. Try Cody for contextual code writing, command generation, and AI autocompletion. Get seamless integration, code search, personalized code insights, and automation for large-scale code changes. Perfect for developers looking to streamline their workflow and understand their codebase at any scale. Contact us for a demo or start an enterprise trial today.",
            }}
            className="bg-gray-50"
        >
            <ContentSection
                parentClassName="!py-md !px-sm md:!py-3xl md:!px-20"
                className="flex flex-col justify-between gap-6 md:flex-row xl:px-sm"
            >
                <div className="flex flex-col gap-0 overflow-hidden md:flex-row md:gap-2xl">
                    <div className="w-full md:w-[51%]">
                        <Heading
                            size="h1"
                            className="w-[404px] !font-['Source_Sans_Pro'] !text-5xl !font-semibold !leading-[58px] !-tracking-[1px] !text-gray-700 md:w-full md:!text-[52px] md:!leading-[62px]"
                        >
                            Code Intelligence for GitLab
                        </Heading>
                        <p className="text-wrap !mb-0 pb-md text-2xl font-normal !leading-[30px] -tracking-[0.25px] !text-gray-700">
                            Sourcegraph AI coding assistant and Code Search functionality integrates natively with
                            GitLab.
                        </p>
                        <Link
                            className="btn btn-primary flex w-3/4 justify-center bg-violet-500 xs:w-1/2 mdi:w-fit"
                            href="/contact/request-info"
                            title="Contact us"
                        >
                            Contact us
                        </Link>
                    </div>
                    {isMobile ? (
                        <img className="w-full" src="/solutions/gitlab-enterprise-context.svg" alt="Gitlab" />
                    ) : (
                        <div className="mb-0 w-full md:-mb-[42px] md:w-1/2">
                            <img className="w-full md:w-[664px]" src="/solutions/enterprise-context.svg" alt="Gitlab" />
                        </div>
                    )}
                </div>
            </ContentSection>
            <div className="py-md md:py-3xl">
                <InfiniteCarousel duration={400} images={carouselImages} />
            </div>
            <ContentSection
                parentClassName="!px-sm !py-0 md:!px-0 !py-3xl"
                className="flex max-w-[1232px] flex-col items-center gap-md px-0 md:gap-lg md:px-sm lg:px-0"
            >
                <div className="w-full text-center md:w-[508px]">
                    <Heading
                        size="h3"
                        className="!font-['Source_Sans_Pro'] !text-4xl !font-semibold !leading-[43px] !-tracking-[1px] !text-gray-700 md:!text-[40px] md:!leading-10"
                    >
                        Write code faster with AI in your GitLab environment
                    </Heading>
                </div>
                <div className="relative -ml-[192px] md:ml-0">
                    <img src="/solutions/ai-cody.png" alt="AI Cody" />
                </div>
                <div className="relative mt-0 flex flex-col gap-6 md:-mt-[134px] md:flex-row">
                    <SearchTipItem
                        title="AI personalized to your code"
                        description="Cody pulls from your entire GitLab codebase to explain and write contextually-aware code."
                        className="rounded-2xl border border-gray-200 bg-white py-3xl px-lg"
                    />
                    <SearchTipItem
                        title="Generate code with chat and commands"
                        description="Ask Cody to generate code for you or use a pre-built command to quickly generate unit tests or documentation."
                        className="rounded-2xl border border-gray-200 bg-white py-3xl px-lg"
                    />
                    <SearchTipItem
                        title="AI-assisted autocomplete"
                        description="Cody autocompletes code in any programming language, configuration file, or documention."
                        className="rounded-2xl border border-gray-200 bg-white py-3xl px-lg"
                    />
                </div>
            </ContentSection>
            <ContentSection
                parentClassName="!py-md !px-sm mdi:!py-0 mdi:!px-lg"
                className="flex max-w-[1232px] flex-col justify-between gap-6 overflow-visible rounded-2xl border-0 border-gray-200 bg-transparent md:flex-row md:overflow-hidden md:border md:bg-white xl:px-lg"
            >
                <div className="flex w-fit flex-col gap-1 px-0 pt-0 md:gap-4xl md:px-sm md:py-3xl mdi:w-[495px]">
                    <div className="p-sm md:p-0">
                        <Heading
                            size="h3"
                            className="mb-2 !font-['Source_Sans_Pro'] !text-4xl !font-semibold !leading-[43px] !-tracking-[1px] !text-gray-700 md:!text-[40px] md:!leading-[40px]"
                        >
                            Grok and understand your entire codebase
                        </Heading>
                        <p className="mb-0 text-2xl font-normal leading-[30px] -tracking-[0.25px] text-gray-500">
                            Search your entire GitLab codebase along with all other code hosts at any scale.
                        </p>
                    </div>
                    {isMobile && (
                        <div className="relative -mr-12">
                            <img className="w-full" src="/solutions/code-search-mobile.svg" alt="Code search" />
                        </div>
                    )}
                    <div className="flex flex-col gap-0 md:gap-lg">
                        <SearchTipItem
                            title="Search"
                            description="Find what you need in milliseconds with Code Search."
                            icon="/solutions/search.svg"
                            className="py-xl px-lg md:py-0 md:px-0"
                        />
                        <SearchTipItem
                            title="Navigate"
                            description="Quickly understand code with web-based cross-repository code navigation."
                            icon="/solutions/navigate.svg"
                            className="py-xl px-lg md:py-0 md:px-0"
                        />
                    </div>
                </div>
                {!isMobile && (
                    <div className="relative md:-mt-24 md:-mr-3 mdi:-mt-2 mdi:-mr-6">
                        <img className="w[700px] h-[688px]" src="/solutions/code-search.svg" alt="Code search" />
                    </div>
                )}
            </ContentSection>
            <TestimonialCard />
            <ContentSection
                parentClassName="md:!pt-3xl md:!px-lg md:!pb-md overflow-hidden !px-sm !py-md"
                className="flex flex-col gap-6 xl:px-sm"
            >
                <div className="w-full p-sm md:w-[822px]">
                    <Heading
                        size="h2"
                        className="!pb-4 !font-['Source_Sans_Pro'] !text-[43px] !font-semibold !leading-[43px] !-tracking-[1px] !text-gray-700 md:pb-0 md:!text-[40px] md:!leading-10"
                    >
                        Automate and track large scale code changes
                    </Heading>
                    <p className="mb-1 w-[394px] text-2xl font-normal leading-[30px] -tracking-[0.25px] text-gray-500 md:w-full">
                        Create batch changes for multiple repositories and code hosts in minutes, then visualize
                        patterns across your entire codebase with custom dashboards.
                    </p>
                </div>
                {isMobile && (
                    <div className="-mt-[126px] -mr-[112px]">
                        <img className="w-full" src="/solutions/tracker-graph.svg" alt="Code tracker graph" />
                    </div>
                )}
                <div className="-mr-[204px] flex flex-row pt-0 md:mr-0 mdi:pt-5">
                    <div className="z-40">
                        <img src="/solutions/batch-changes.svg" alt="Batch change" />
                    </div>
                    {!isMobile && (
                        <div className="relative -ml-[112px] -mt-[102px]">
                            <img className="h-[426px]" src="/solutions/tracker-graph.svg" alt="Code tracker graph" />
                        </div>
                    )}
                </div>
            </ContentSection>
            <ContactUsCta buttonClassNames="!max-w-full" parentClassNames="mdi:!py-5xl mdi:!px-0 !px-sm !py-md" />
        </Layout>
    )
}

const SearchTipItem: FunctionComponent<SearchTipItemProps> = ({ title, description, icon, className }) => (
    <div className={classNames('flex flex-col gap-4', className)}>
        {icon && <img src={icon} alt="Search" className="h-6 w-6" />}
        <Heading size="h5" className="!text-2xl !font-[590] !leading-[30px] !-tracking-[0.25px] !text-gray-700">
            {title}
        </Heading>
        <p className="mb-0 text-2xl font-normal leading-[30px] -tracking-[0.25px] text-gray-500">{description}</p>
    </div>
)

const TestimonialCard: FunctionComponent = () => (
    <ContentSection
        parentClassName="py-3xl mdi:!px-20 !px-sm"
        className="sg-bg-code-search-new-cta flex max-w-[1232px] flex-col justify-between rounded-3xl border border-gray-200 border-opacity-25"
    >
        <div className="flex flex-col py-3xl px-sm md:px-20">
            <div className="flex w-full flex-col gap-[70px] mdi:w-[775px]">
                <img className="h-[54.91px] w-[171.471px]" src="/solutions/qualtrics.svg" alt="Qualtrics" />
                <Heading
                    size="h5"
                    className="!text-[35px] !font-normal !leading-[43.75px] !-tracking-[0.25px] !text-white"
                >
                    "We run our own GitLab instance within our own data centers, and Sourcegraph works seamlessly with
                    it. That made signing up for Cody easy.”
                </Heading>
            </div>
            <div className="mt-sm">
                <span className="text-[16px] font-normal leading-6 -tracking-[0.25px] text-white text-opacity-80">
                    Godwin Babu
                </span>
                <div className="flex flex-col justify-between gap-5xl md:flex-row">
                    <span className="text-[14px] font-normal leading-[19.88px] text-white">
                        Sr. Manager and DevX Leader
                    </span>
                    <Link
                        href="/case-studies/qualtrics-speeds-up-unit-tests-and-code-understanding-with-cody"
                        className="flex gap-2.5 font-semibold leading-[22.4px] text-white"
                    >
                        Read the case study
                        <ChevronRightIcon />
                    </Link>
                </div>
            </div>
        </div>
    </ContentSection>
)

export default CodeIntelligenceForGitlab
