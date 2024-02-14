import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'

import { Badge, Blockquote, ContentSection, Heading, Hero, Layout } from '../../components'
import MoreCaseStudies from '../../components/CaseStudies/MoreCaseStudies'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const Qualtrics: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Qualtrics speeds up unit test creation and understanding code with Cody',
            description:
                "Qualtrics's DevX team uses Cody to speed up developers' ability to understand code and drastically reduce the time it takes to write unit tests.",
            image: 'https://sourcegraph.com/case-studies/qualtrics-og.png',
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
                            Qualtrics speeds up unit test creation and understanding code with Cody
                        </Heading>
                        <div className="relative z-[10] -mt-3 flex w-full flex-col gap-x-8 rounded-lg border border-gray-500 bg-white py-16 px-12 shadow-lg md:-mt-[2px] md:flex-row xl:w-[1280px]">
                            <img
                                className="mb-8 w-36 object-contain md:mb-0"
                                src="/case-studies/qualtrics-logo.png"
                                alt="Qualtrics logo"
                            />
                            <p className="mb-0 text-[18px] font-normal leading-[27px]">
                                Qualtrics is a global Experience Management (XM) company building software the world's
                                best brands use to deliver exceptional frontline experiences, build high-performing
                                teams, and design products people love. Qualtrics serves over 19,000 clients and has an
                                Engineering team of over 1,000 software developers.
                            </p>
                        </div>
                        <div className="absolute top-0 right-0 mt-56 h-full  w-full bg-[url('/case-studies/top-radials.svg')] bg-contain bg-right  bg-no-repeat md:hidden" />
                    </ContentSection>
                }
                displayUnderNav={true}
            />
        }
    >
        <ContentSection>
            <div className="mx-auto flex w-full flex-col-reverse gap-x-12 md:flex-row">
                <div>
                    <div className="sticky top-[54px] w-full md:w-[378px]">
                        <SidebarContent
                            title="28% fewer trips out of the IDE"
                            content="Qualtrics engineers report leaving their IDE to browse the web 28% less often using Cody."
                        />
                        <SidebarContent
                            title="25% faster code understanding"
                            content="Qualtrics engineers report they can understand code and answer questions about code 25%
                            faster."
                        />
                        <SidebarContent
                            title="Improved unit test coverage"
                            content="Engineers reported that unit tests, which took one dev day to write, now take roughly 10
minutes, leading to improved unit test coverage faster."
                        />

                        <div className="sg-bg-code-search-cta mx-auto flex w-full flex-col rounded-lg py-12 px-6 text-center sm:items-center md:w-[378px] md:items-center md:text-left">
                            <Heading size="h2" className="pb-4 !text-4xl text-white ">
                                Try Sourcegraph on your code
                            </Heading>
                            <p className="pb-1 text-lg text-gray-200">
                                Experience code intelligence with a free trial for you and your team, or search millions
                                of open source repositories.
                            </p>
                            <Link
                                className="btn btn-inverted-primary flex min-w-fit self-center rounded-md bg-white py-3 px-5 text-center text-base text-violet-500 hover:!bg-violet-400 md:self-start md:py-2 md:px-6"
                                href="/demo"
                            >
                                Meet with a product expert
                            </Link>
                        </div>
                    </div>
                </div>

                {/* the main content --------------- */}
                <ContentSection className="pb-4 md:pb-0 md:pt-[35px]" parentClassName="!px-0 !py-0">
                    <CaseStudyContent
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    With a large global Engineering organization of over 1,000 software developers,
                                    Qualtrics' Developer Experience (DevX) team is responsible for delivering solutions
                                    and processes to those developers to improve their day-to-day happiness and
                                    productivity. DevX also runs programs to raise the bar on engineering quality at
                                    Qualtrics.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Qualtrics' AI Initiative"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    When generative AI and ChatGPT quickly rose in popularity in 2023, Qualtrics' DevX
                                    team immediately saw the potential to use AI within their development teams. The
                                    team took a primary initiative to evaluate AI coding assistants in the summer of
                                    2023. Godwin Babu, Sr. Manager and leader of Qualtrics' DevX team, hypothesized that
                                    AI usage could significantly improve productivity within their engineering teams.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Why Cody?"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Qualtrics evaluated several AI solutions in the market before deciding on Cody, and
                                    security was a primary priority. Godwin stated, “When choosing a coding assistant,
                                    we prioritized DLP [data loss prevention] and assurance of the security of our
                                    intellectual property. Cody worked seamlessly with the systems we already had in
                                    place.”
                                </p>
                                <p className="pb-2 text-lg">
                                    Qualtrics' security protocols extend to their code host, which is why they run their
                                    own self-hosted GitLab instance. Cody works with all major code hosts, both
                                    self-hosted and cloud-based, so it could plug into Qualtrics' existing setup. Per
                                    Godwin, “We run our own GitLab instance within our own data centers, and Sourcegraph
                                    works seamlessly with it. That made signing up for Cody easy.”
                                </p>
                                <p className="pb-2 text-lg">
                                    DevX team also wanted a solution supporting the latest LLMs so their teams could
                                    always access the fastest and most accurate models. This led Qualtrics back to Cody,
                                    which supports several LLMs as options. “Cody's ability to switch backends, from
                                    Claude to GPT, is very attractive to us. This is a fast-moving field, and we see
                                    updates to LLMs constantly, so having a tool that can react to new LLMs quickly is
                                    important to us.”
                                </p>
                                <p className="pb-2 text-lg">
                                    Lastly, Qualtrics was already a customer of Sourcegraph with extensive usage of{' '}
                                    <Link
                                        href="/code-search"
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
                                    for their engineering teams. According to Gordon Fu, Quality Engineering Manager,
                                    Qualtrics' existing trust and confidence in Sourcegraph as a vendor led to{' '}
                                    <Link
                                        href="/cody"
                                        title="Cody"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-black underline"
                                    >
                                        Cody
                                    </Link>{' '}
                                    quickly bubbling to the top of their AI evaluation.
                                </p>
                                <p className="pb-2 text-lg">
                                    Qualtrics ultimately decided on Cody as their AI coding solution based on its
                                    security, LLM interoperability, and ability to work with their existing code host
                                    setup.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Results"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Since bringing Cody to the engineering organization, Qualtrics engineers report
                                    having to leave their IDE to find information on the web 28% less often when using
                                    Cody, and they can understand code 25% faster. The majority of their surveyed
                                    engineers also report between 10 and 30 minutes of time savings per day by using
                                    Cody, which the DevX team estimates to be roughly 10% of development time.
                                </p>

                                <p className="pb-2 text-lg">
                                    Looking forward, Godwin also sees places where Cody will drive even more progress
                                    across their engineering teams: “One of the places we're thinking of using Cody is
                                    connecting it with other initiatives. For example, in DevX, we have one program to
                                    improve code coverage: setting goals for all teams to achieve certain coverage with
                                    unit tests. We see a direct correlation with Cody here since Cody has proven adept
                                    for creating tests and improving code coverage.”
                                </p>

                                <p className="pb-2 text-lg">
                                    Brendan Doyle, Senior Software Engineer at Qualtrics, already sees value in writing
                                    unit tests with Cody. Brendan works on a team building a wrapper library for AWS
                                    Lambda and other internal Infrastructure as Code (IaC) services.
                                </p>

                                <p className="pb-2 text-lg">
                                    “It's not a secret for developers that writing unit tests is a necessary time sink
                                    in the day-to-day life of a developer for writing reliable software,” per Brendan.
                                    “Generating unit tests, by far, is my number one favorite feature and time saver for
                                    Cody. I can spend my brainpower somewhere else instead of spending it figuring out
                                    how to write tests.”
                                </p>

                                <div className="py-8">
                                    <Blockquote
                                        className="w-full pl-[46px] !pr-0"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="Something that would've taken me multiple dev days was done in an hour with Cody.
                                        Cody can generate a template for a test, and then I can prompt it to make adjustments to
                                        get the test to cover exactly what I'm looking for."
                                        author={
                                            <span>
                                                Brendan Doyle,
                                                <span className="mt-[10px] block">
                                                    Senior Software Engineer, Qualtrics
                                                </span>
                                            </span>
                                        }
                                    />
                                </div>

                                <p className="pb-2 text-lg">
                                    Brendan's team also gets value from using Cody to ramp up on big codebases and
                                    existing projects, especially for the younger engineers. “One of the most daunting
                                    things as a junior engineer is working on a large, existing codebase. There is
                                    always a ton of domain knowledge about that code that's restricted to the people who
                                    wrote it, no matter how well it's documented. There are always nuances that only the
                                    code authors know. But if developers know how to prompt Cody, Cody can find context
                                    and explain the code to them.”
                                </p>

                                <div className="py-8">
                                    <Blockquote
                                        className="w-full pl-[46px] !pr-0"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="You can get an understanding of a large codebase a lot faster with Cody."
                                        author={
                                            <span>
                                                Brendan Doyle,
                                                <span className="mt-[10px] block">
                                                    Senior Software Engineer, Qualtrics
                                                </span>
                                            </span>
                                        }
                                    />
                                </div>
                            </div>
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
        <Heading size="h2" className="mb-2 !text-[30px] !leading-snug text-violet-500">
            {title}
        </Heading>
        {typeof content === 'string' ? <p className="text-[18px]">{content}</p> : content}
    </div>
)

export default Qualtrics
