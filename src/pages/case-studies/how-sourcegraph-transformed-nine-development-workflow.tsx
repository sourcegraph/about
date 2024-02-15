import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'

import { Badge, Blockquote, ContentSection, Heading, Hero, Layout } from '../../components'
import MoreCaseStudies from '../../components/CaseStudies/MoreCaseStudies'
import SidebarCta from '../../components/CaseStudies/SidebarCta'
import { buttonLocation, buttonStyle } from '../../data/tracking'

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Nine empowers productivity and enhances security with Sourcegraph',
            description:
                "Learn how Sourcegraph products have revolutionized Nine's development workflow, increasing developer productivity, efficient code management, and enhanced security.",
        }}
        className="relative"
        heroAndHeaderClassName="pt-[98px] md:pt-[32px]"
        hero={
            <Hero
                className="relative"
                backButton={{
                    text: 'Back to Resources',
                    link: '/case-studies',
                }}
                variant="white"
                title={
                    <ContentSection parentClassName="!px-0 !py-0">
                        <Badge
                            color="violet"
                            text="CUSTOMER STORIES"
                            size="small"
                            className="relative -top-[24px] z-10 md:-top-[5px]"
                        />
                        <Heading
                            size="h1"
                            className="relative -top-3 z-10 pb-16 !text-[52px] md:-top-[2px] lg:w-[949px]"
                        >
                            Empowering productivity, enhancing security: How Sourcegraph transformed Nine’s development
                            workflow
                        </Heading>
                        <div className="relative z-[10] -mt-3 flex w-full flex-col gap-x-8 rounded-lg border border-gray-500 bg-white py-16 px-12 shadow-lg md:-mt-[2px] md:flex-row  xl:w-[1280px]">
                            <img
                                className="mb-8 w-[148px] md:mb-0"
                                src="/case-studies/nine-logo.svg"
                                alt="Nine 3D logo"
                            />
                            <p className="mb-0 w-full text-[18px] font-normal leading-[27px]">
                                Nine is Australia’s Media Company. They’re the home of Australia’s most loved content
                                and trusted brands across News, Sport, and Entertainment, including Channel 9, Gem, Go,
                                9Now, radio stations 2GB, 3AW, 4BC, 6PR and publications that span The Sydney Morning
                                Herald, The Australian Financial Review, to the breadth of nine.com.au.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 mt-56 h-full  w-full bg-[url('/case-studies/top-radials.svg')] bg-contain bg-right  bg-no-repeat md:hidden" />
                    </ContentSection>
                }
                displayUnderNav={true}
            />
        }
    >
        <ContentSection className="mt-[48px] px-1 lg:mt-[26.75px]" parentClassName="!py-0 relative z-10">
            <div className="mx-auto flex w-full flex-col-reverse gap-x-12 md:flex-row">
                <div>
                    <div className="sticky top-[54px] w-full md:w-[378px]">
                        <SidebarContent
                            title="$276K saved"
                            content="$276K saved in trial period: Nine's Platform Engineering team saved an estimated
                            $276,000 in time through efficient Code Search and Batch Changes."
                        />
                        <SidebarContent
                            title="1200 hours saved"
                            content="1200 hours saved annually: Batch Changes significantly reduced time by automating
                            opening changesets across many repositories and codehosts."
                        />
                        <SidebarContent
                            title="Improved security response"
                            content="Nine responded more effectively to security threats by quickly identifying
                            vulnerabilities and automating security-related changes across repositories."
                        />
                        <SidebarCta />
                    </div>
                </div>
                <ContentSection className="pb-4 md:pb-0 md:pt-[35px]" parentClassName="!px-0 !py-0">
                    <CaseStudyContent
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Conor Holmes, Engineering Manager of the Productivity team at{' '}
                                    <Link
                                        href="https://www.nine.com.au"
                                        title="Nine"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        Nine
                                    </Link>
                                    , reveals how Sourcegraph products have revolutionized their development workflow,
                                    resulting in increased developer productivity, efficient code management, and
                                    enhanced security. By leveraging advanced{' '}
                                    <Link
                                        href="https://sourcegraph.com/docs/code_search"
                                        title="Code Search"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        Code Search
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        href="https://sourcegraph.com/docs/batch_changes"
                                        title="Batch Changes"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        Batch Changes
                                    </Link>
                                    , Nine predicts Sourcegraph will save 30 developers from their Platform Engineering
                                    team up to 1200 hours annually and $276K in savings during six months of usage.
                                </p>

                                <p className="m-0 text-lg">
                                    Sourcegraph's Code Search offers valuable advantages to Nine's developers. It
                                    provides faster access to information within their extensive codebase, empowering
                                    them to make informed decisions. Additionally, Code Search plays a crucial role in
                                    identifying potential vulnerabilities, enabling rapid and scalable fixes for
                                    enhanced security and peace of mind.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Challenge"
                        content={
                            <>
                                <p className="text-lg">
                                    Before Sourcegraph, Nine’s developers weren’t able to search for code patterns and
                                    dependencies across their repositories. The search capabilities across their
                                    hundreds of repositories were limiting, making it time-consuming to find crucial
                                    information.
                                </p>

                                <p className="text-lg">
                                    Updating and maintaining the application code became increasingly challenging as
                                    Nine's platform expanded by integrating numerous microservices and tools. Engineers
                                    faced the daunting task of manually creating hundreds of pull requests to implement
                                    uniform changes across their repositories.
                                </p>

                                <p className="m-0 text-lg">
                                    Batch Changes ensured a large-scale IaC (Infrastructure as Code) and CI/CD
                                    refactoring effort at Nine’s platform and helped their developers manage significant
                                    code duplication across multiple repositories due to the distributed nature of their
                                    microservices architecture.
                                </p>
                            </>
                        }
                    />

                    <CaseStudyContent
                        title="Solution"
                        content={
                            <>
                                <p className="text-lg">
                                    Nine implemented Sourcegraph's advanced{' '}
                                    <Link
                                        href="https://sourcegraph.com/docs/code_search"
                                        title="Code Search"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        Code Search
                                    </Link>
                                    ,{' '}
                                    <Link
                                        href="https://sourcegraph.com/docs/batch_changes"
                                        title="Batch Changes"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        Batch Changes
                                    </Link>
                                    , and valuable{' '}
                                    <Link
                                        href="https://sourcegraph.com/docs/code_monitoring"
                                        title="code monitoring"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        code monitoring
                                    </Link>{' '}
                                    features to overcome these challenges.
                                </p>

                                <p className="text-lg">
                                    Sourcegraph's robust search capabilities empowered developers to pinpoint relevant
                                    code snippets, manage dependencies, and access critical information dispersed across
                                    multiple repositories and code hosts.
                                </p>

                                <p className="text-lg">
                                    Implementing Batch Changes was a paradigm shift in code maintenance for engineers.
                                    Instead of creating hundreds of PRs for uniform changes, engineers automated their
                                    workflow through scripted batch changes for repetitive tasks. This saves a
                                    substantial amount of time and reduces the risk of human errors during the process.
                                </p>

                                <p className="m-0 text-lg">
                                    The adoption of Sourcegraph resulted in a remarkable boost in developer
                                    productivity. Subject Matter Experts (SMEs) spent less time on manual tasks and
                                    gained enhanced context for their code changes, streamlining platform maintenance.
                                    Previously, disseminating vital information across the organization took time due to
                                    its scattered nature within the vast codebase. Sourcegraph bridged this gap,
                                    enabling seamless knowledge sharing.
                                </p>
                            </>
                        }
                    />

                    <CaseStudyContent
                        title="Deployment"
                        content="To deploy Sourcegraph, Nine’s platform team runs their infrastructure primarily on AWS and
                            Kubernetes. Hosting Sourcegraph with AWS cloud brings numerous benefits and results to their
                            development team. For instance, they gained a scalable and efficient environment to host
                            Sourcegraph, enabling them to spin up small clusters quickly and manage them seamlessly. The
                            integration with AWS services, like Aurora database and logging, further enhances their
                            development workflow."
                    />

                    <CaseStudyContent
                        title="Results"
                        content={
                            <>
                                <p className="text-lg">
                                    Nine's adoption of Sourcegraph is proving to be a game-changer for their platform
                                    engineering team. Implementing Sourcegraph on the AWS cloud was pretty
                                    straightforward, and deploying it to their Kubernetes cluster.
                                </p>

                                <p className="mb-[48px] text-lg">
                                    Sourcegraph's global search functionality eliminated the need for manually cloning
                                    repositories or complex scripting. The platform empowered engineers to query the
                                    entire codebase, driving efficiency and team collaboration.
                                </p>

                                <div className="py-8">
                                    <Blockquote
                                        className="w-full pl-[46px] !pr-0"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="Sourcegraph helped me answer a question in like 5 seconds flat this afternoon. Normally I probably would have bugged a bunch of people, but the overview of “here is that snippet, and the list of repos using it” made it self-served."
                                        author={
                                            <span>
                                                Todd Turner
                                                <span className=" mt-[10px] block">Platform Engineer, Nine.</span>
                                            </span>
                                        }
                                    />
                                </div>

                                <p className="mt-[48px] text-lg">
                                    The insights gained from Code Search helped them identify and fix large-scale code
                                    changes. Batch Changes significantly reduced the time by automating opening
                                    changesets across multiple repositories and codehosts.
                                </p>

                                <p className="text-lg">
                                    With Sourcegraph, Nine Engineering has enhanced developer productivity and better
                                    team collaboration.{' '}
                                    <Link
                                        href="/"
                                        title="Learn more about Sourcegraph"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        className="text-black underline"
                                    >
                                        Learn more about Sourcegraph
                                    </Link>{' '}
                                    and how we can improve your engineering operations by signing up for a{' '}
                                    <Link
                                        href="/demo"
                                        title="demo"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        className="text-black underline"
                                    >
                                        demo
                                    </Link>{' '}
                                    today!
                                </p>
                            </>
                        }
                    />
                </ContentSection>
            </div>

            <MoreCaseStudies />
        </ContentSection>
        <div className="absolute top-0 right-0 hidden h-[30%] w-[40%] bg-[url('/case-studies/side-of-page-radials.svg')] bg-contain bg-right  bg-no-repeat md:flex" />
        <div className="absolute bottom-0 left-0 hidden h-[20%] w-[100%] bg-[url('/case-studies/bottom-page-radials.svg')]  bg-cover bg-left  bg-no-repeat md:inline-block" />
    </Layout>
)

const CaseStudyContent: FunctionComponent<{
    content: string | ReactNode
    title?: string
}> = ({ content, title }) => (
    <div className="mb-[48px]">
        {title && (
            <Heading size="h2" className="mb-[24px] !text-4xl">
                {title}
            </Heading>
        )}
        {typeof content === 'string' ? <p className="text-lg">{content}</p> : content}
    </div>
)

const SidebarContent: FunctionComponent<{
    content: string | ReactNode
    title: string
}> = ({ content, title }) => (
    <div className="mb-8  md:w-[378px]">
        <Heading size="h2" className="mb-2 !text-[30px] text-violet-500">
            {title}
        </Heading>
        {typeof content === 'string' ? <p className="text-[18px]">{content}</p> : content}
    </div>
)

export default CaseStudy
