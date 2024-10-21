import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'

import { Badge, Blockquote, ContentSection, Hero, Layout } from '../../components'
import MoreCaseStudies from '../../components/CaseStudies/MoreCaseStudies'
import SidebarCta from '../../components/SidebarCta'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const OnePassword: FunctionComponent = () => (
    <Layout
        meta={{
            title: '1Password increases developer productivity in a distributed codebase using Sourcegraph',
            description:
                'Developers at 1Password use Code Search to make it easy to find code with a rapidly growing codebase and Cody to reduce toil of everyday tasks.',
            image: '/case-studies/1password-og.png',
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
                        <h1 className="relative -top-3 z-10 pb-16 md:-top-[2px] lg:w-[949px]">
                            1Password uses Code Search and Cody to increase productivity while working in a growing,
                            distributed codebase
                        </h1>
                        <div className="relative z-[10] -mt-3 flex w-full flex-col gap-x-8 rounded-lg border border-gray-500 bg-white px-12 py-16 shadow-lg md:-mt-[2px] md:flex-row xl:w-[1280px]">
                            <img
                                className="mb-8 w-36 object-contain md:mb-0"
                                src="/case-studies/1password-logo.png"
                                alt="1Password logo"
                            />
                            <p className="mb-0 text-[18px] font-normal leading-[27px]">
                                1Password offers identity security and access management solutions built for the way
                                people work and live today. The company is on a mission to eliminate the conflict
                                between security and productivity while securing every sign-in for every app on every
                                device. Over 150,000 businesses and millions of consumers trust 1Password to keep their
                                most important information safe.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 mt-56 h-full  w-full bg-[url('/case-studies/top-radials.svg')] bg-contain bg-right  bg-no-repeat md:hidden" />
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
                            title="7,000 hours per month"
                            content="Estimated time saved by each developer using Code Search + Cody."
                        />
                        <SidebarContent
                            title="3,900 hours"
                            content="Projected engineering time saved in the first year with Sourcegraph."
                        />
                        <SidebarCta />
                    </div>
                </div>

                {/* the main content --------------- */}
                <ContentSection className="pb-4 md:pb-0 md:pt-[35px]" parentClassName="!px-0 !py-0">
                    <CaseStudyContent
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    With a growing codebase and Engineering team, 1Password developers use Code Search
                                    to find and navigate code across multiple code hosts without relying on teammates.
                                    They also use Cody to reduce the toil of creating unit tests and making programmatic
                                    changes in code.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Working in a growing codebase"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    1Password has seen significant growth over the past several years. The Engineering
                                    team has grown to several hundred developers, and the team’s codebase has grown from
                                    two monorepos to more than 200 repositories spread across multiple GitHub and GitLab
                                    instances. This code sprawl has added complexity to the company’s Engineering
                                    organization over a short amount of time.
                                </p>
                                <p className="pb-2 text-lg">
                                    As the codebase grew, 1Password developers discovered that searching for code was
                                    becoming increasingly difficult, especially when someone needed to find code they
                                    hadn’t worked on personally. The native code search tools built into their code
                                    hosts didn’t solve the issue.
                                </p>
                                <p className="pb-2 text-lg">
                                    The native search found in GitLab and GitHub was limited to searching for
                                    repositories within each code host, so if a developer didn’t know exactly where a
                                    piece of code lived, the search function wasn’t an effective way to find it.
                                    Engineers sometimes found it faster to ask colleagues in hopes of being pointed in
                                    the right direction.
                                </p>
                                <p className="pb-2 text-lg">
                                    1Password adopted{' '}
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
                                    to help solve this. With Code Search, any engineer could now search for code across
                                    the entire codebase and all code hosts from a single place. Developers are now
                                    self-sufficient in finding code and no longer slow others or themselves down while
                                    trying to hunt for what they need.
                                </p>
                                <p className="pb-2 text-lg">
                                    James Griffin-Allwood, a Staff Developer on the 1Password Engineering Foundations
                                    team, had run into this problem previously: “Before Sourcegraph, if I didn’t know
                                    where a piece of code lived, I struggled to find it. I would use Slack to ask people
                                    if they knew about that code or if they knew someone else who might know about it.”
                                </p>
                                <div className="py-8">
                                    <Blockquote
                                        className="w-full !pr-0 pl-[46px]"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="There have been many instances when I know something exists, but I don’t know where to start. I don’t know what repo it’s defined in or if it came from Terraform or Ansible. Now I just go to Code Search, start searching, add some filters, and I’m always able to find it."
                                        author={
                                            <span>
                                                James Griffin-Allwood
                                                <span className="mt-[10px] block">Staff Developer, 1Password</span>
                                            </span>
                                        }
                                    />
                                </div>
                                <p className="pb-2 text-lg">
                                    Using Code Search, 1Password’s Engineering team can work more efficiently in their
                                    growing codebase without relying on institutional knowledge or needing to work
                                    through other developers to find what they’re looking for.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Reducing toil with Cody"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    In addition to Code Search, 1Password rolled out{' '}
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
                                    —our AI coding assistant—to their entire Engineering team to help developers with
                                    their everyday work. Developers were initially skeptical of broad claims about AI
                                    making them more productive, but since using Cody, they’ve found that it can
                                    significantly reduce toil for specific real-world use cases.
                                </p>
                                <p className="pb-2 text-lg">
                                    One use case is unit testing. Cody chat has built-in prompts to automatically
                                    generate unit tests for a selected piece of code. This feature has increased the
                                    likelihood of developers taking the time to set up unit tests because it removes the
                                    friction from setting up test cases.
                                </p>
                                <p className="pb-2 text-lg">
                                    As James put it: “Cody removes the toil for unit tests. For any function, Cody will
                                    set up 5 to 10 test cases, including test cases that I wouldn’t have thought about
                                    myself. There’s a fatigue that sets in with unit tests that I previously had to
                                    overcome, but now Cody can simply set up the test cases for me.”
                                </p>
                                <div className="py-8">
                                    <Blockquote
                                        className="w-full !pr-0 pl-[46px]"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="Sometimes, if the right thing to do—like writing unit tests—is too hard, people won’t do it. Cody's value is that it lets developers be their best selves while relieving the burden of repetitive tasks."
                                        author={
                                            <span>
                                                James Griffin-Allwood
                                                <span className="mt-[10px] block">Staff Developer, 1Password</span>
                                            </span>
                                        }
                                    />
                                </div>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Making programmatic changes with AI chat"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    The team also uses code AI to take the toil out of making programmatic edits across
                                    code. Benjamin Bruneau, senior developer, works on the design system team at
                                    1Password. As part of the design system, Benjamin frequently works on large schemas
                                    of nested JSON objects that contain tokenized values used throughout the 1Password
                                    application.
                                </p>
                                <p className="pb-2 text-lg">
                                    Making changes to these large, nested JSON objects can create lots of tedious work,
                                    mainly because it’s often not as simple as changing out one word for another. For
                                    example, Benjamin may want to change a value field across several objects to reflect
                                    the primary key of a nested object. He can now prompt Cody to make this kind of edit
                                    in natural language, and Cody will apply the change across multiple objects. “It
                                    saved me a ton of time. Without Cody, it would have just been toil.”
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Using Code Search + Cody to champion innersourcing"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    The 1Password team has also used Sourcegraph to help advance its innersourcing
                                    initiative. The Engineering Foundations team has been championing the concept of
                                    innersourcing with the goal of making any developer on any team in the company feel
                                    comfortable contributing to any codebase, sharing code, and reusing code.
                                </p>
                                <p className="pb-2 text-lg">
                                    Since 1Password’s codebase grew so quickly and exists over multiple code hosts, the
                                    innersourcing initiative became more of a challenge. Finding and navigating code in
                                    unfamiliar repositories was difficult for developers.
                                </p>
                                <p className="pb-2 text-lg">
                                    Now, with Code Search, developers can search the entire codebase for unfamiliar code
                                    in a single place. This allows them to find reusable code without knowing exactly
                                    what it looks like.
                                </p>
                                <p className="pb-2 text-lg">
                                    Meanwhile, Cody helps developers understand what unfamiliar code does and even helps
                                    them write code in languages they’re less practiced in. Developers can pull up a
                                    code and ask Cody to explain exactly how it works, and then they can ask Cody to
                                    make a change in natural language, even if they might not be experts in that
                                    language.
                                </p>
                                <p className="pb-2 text-lg">
                                    As James described it: “Anyone should feel open and comfortable contributing to any
                                    of our codebases. The combo of Cody and Code Search makes it possible. How do I find
                                    the thing? Code Search gets me there. Then, using Cody alongside a compiler means I
                                    can make changes and fix errors in code even if I don’t know the language.”
                                </p>
                            </div>
                        }
                    />
                </ContentSection>
            </div>

            <MoreCaseStudies />
        </ContentSection>
        <div className="absolute right-0 top-0 hidden h-[30%] w-[40%] bg-[url('/case-studies/side-of-page-radials.svg')] bg-contain bg-right  bg-no-repeat md:flex" />
        <div className="absolute bottom-0 left-0 hidden h-[20%] w-[100%] bg-[url('/case-studies/bottom-page-radials.svg')]  bg-cover bg-left  bg-no-repeat md:inline-block" />
    </Layout>
)

const CaseStudyContent: FunctionComponent<{
    content: string | ReactNode
    title?: string
}> = ({ content, title }) => (
    <div className="mb-[48px]">
        {title && <h2 className="mb-[24px]">{title}</h2>}
        {typeof content === 'string' ? <p className="text-lg">{content}</p> : content}
    </div>
)

const SidebarContent: FunctionComponent<{
    content: string | ReactNode
    title: string
}> = ({ content, title }) => (
    <div className="mb-8  md:w-[378px]">
        <h2 className="mb-2 text-violet-500">{title}</h2>
        {typeof content === 'string' ? <p className="text-[18px]">{content}</p> : content}
    </div>
)

export default OnePassword
