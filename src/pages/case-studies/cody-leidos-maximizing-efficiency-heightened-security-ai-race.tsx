import { FunctionComponent, ReactNode } from 'react'

import { Badge, Blockquote, ContentSection, Heading, Hero, Layout } from '../../components'
import MoreCaseStudies from '../../components/CaseStudies/MoreCaseStudies'
import SidebarCta from '../../components/CaseStudies/SidebarCta'

const Leidos: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Cody + Leidos: Maximizing efficiency with heightened security in the AI race',
            description:
                "Leidos is a Fortune 500 innovation company rapidly addressing the world's most vexing challenges in national security and health. with Sourcegraph.",
            image: 'https://sourcegraph.com/case-studies/leidos-og.png',
        }}
        className="relative"
        heroAndHeaderClassName="pt-[98px] md:pt-[32px]"
        hero={
            <Hero
                className="relative"
                backButton={{ text: 'Back to Resources', link: '/case-studies' }}
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
                            Cody + Leidos: Maximizing efficiency with heightened security in the AI race
                        </Heading>
                        <div className="relative z-[10] -mt-3 flex w-full flex-col gap-x-8 rounded-lg border border-gray-500 bg-white py-16 px-12 shadow-lg md:-mt-[2px] md:flex-row xl:w-[1280px]">
                            <img
                                className="mb-8 w-36 object-contain md:mb-0"
                                src="/case-studies/leidos-logo.svg"
                                alt="Leidos logo"
                            />
                            <p className="mb-0 text-[18px] font-normal leading-[27px]">
                                Leidos is a Fortune 500 innovation company rapidly addressing the world's most vexing
                                challenges in national security and health. Leidos collaborates to create smarter
                                technology solutions for customers in heavily regulated industries, from healthcare and
                                aviation to government and defense.
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
                            title="75% reduction in time spent answering questions"
                            content="Senior Leidos engineers reduced time spent answering teammates' questions from 8 hours per week to 2 hours per week thanks to the “Ask Cody first” policy."
                        />
                        <SidebarContent
                            title="50% reduction in time spent reading and orienting on existing legacy code"
                            content="In one case, a single architect was able to use Cody to “brainstorm” a solution to 
                            a specific problem instead of setting up a meeting with other architects."
                        />
                        <SidebarContent
                            title="Value-add time on task tripled (coding, writing tests, reviewing others' code)"
                            content="This was possible due to time reduction in other value-detracting tasks (helping 
                              others, reading, documentation)."
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
                                    With the advance of AI toward the end of 2022, Leidos wanted to stay ahead of the
                                    curve. AI's potential was incredibly promising: Could it help them continue honing
                                    their technical expertise even more? Support them in helping customers adopt and use
                                    the newest technology to their advantage? Ensure digital modernization for even
                                    their most high-security customers? Rob Linger, AI Software Architect at Leidos,
                                    expanded on how they vetted AI coding assistants and the impact Cody is having on
                                    their organization and their customers.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Leidos' AI Initiative"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Before choosing a solution, they needed to tackle three key hurdles:
                                </p>

                                <ol className="pb-8">
                                    <li>
                                        <strong className="font-bold">Security:</strong> What would the coding assistant
                                        do with their data? Where would their information go? How, if at all, could the
                                        AI coding assistant protect their data from unnecessary and potentially risky
                                        exposure? Given Leidos' clientele across government and defense industries,
                                        security was the absolute highest priority.
                                    </li>
                                    <li>
                                        <strong className="font-bold">LLM lock-in:</strong> Many solutions confine you
                                        to whatever LLM they're using, even though generative AI is constantly evolving
                                        — and quickly. How could Leidos have more flexibility to iterate and keep up
                                        with the changing landscape?
                                    </li>
                                    <li>
                                        <strong className="font-bold">Context:</strong> Legacy code and massively
                                        complex systems are virtually impossible for any engineer to fully "know."
                                        Therefore, context is one of the most needed capabilities and not many AI coding
                                        assistants are up to the task. What one gets out of a coding assistant is only
                                        as good as the prompt and whatever other context it has. Which solution could
                                        “get to know” Leidos the best?
                                    </li>
                                </ol>

                                <p className="pb-2 text-lg">
                                    Leidos was committed to getting the ideal coding assistant into the hands of all of
                                    their developers, making their jobs easier and improving their mission outcomes for
                                    customers.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Why Cody?"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Leidos began with an analysis of current alternatives. What coding assistant could
                                    meet Leidos' remarkably high standards and get ahead of their customers'
                                    needs—nearly all with information security requirements ranging from sensitive to
                                    the highest levels of classification.
                                </p>
                                <p className="pb-2 text-lg">
                                    They considered a broad list of solutions, from the biggest names on the market to
                                    smaller, emerging competitors. Some were easy to eliminate due to a lack of security
                                    and privacy.
                                </p>

                                <div className="py-8">
                                    <Blockquote
                                        className="w-full pl-[46px] !pr-0"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="Sourcegraph is staying ahead of the wave."
                                        author={
                                            <span>
                                                Rob Linger,
                                                <span className="mt-[10px] block">AI Software Architect at Leidos</span>
                                            </span>
                                        }
                                    />
                                </div>

                                <p className="pb-2 text-lg">
                                    Leidos saw huge potential in Cody's context, something they found lacking in
                                    alternative solutions. Per Linger, “we noticed very quickly that the context many AI
                                    coding assistants pulled from was very limited. For the most part, it was your open
                                    tab in the editor, and that was it. But when you're working on a software
                                    development project of any type that's even slightly more complex, you're going to
                                    run into instances where you need to import data from another project or repo.”
                                </p>
                                <p className="pb-2 text-lg">
                                    And while other solutions don't have nearly enough technical documentation, Cody has
                                    code repos Leidos can sift through. It's much more transparent and open-source,
                                    offering a window into how Sourcegraph communicates with the LLMs.
                                </p>
                                <p className="pb-2 text-lg">
                                    With Cody, Leidos isn't held to a specific LLM. “The best model that's out there
                                    today may not be the best tomorrow,” says Linger. “When you're working with a lot of
                                    other solutions, you're locked in. Sourcegraph gives us more flexibility.” LLM
                                    optionality Cody also makes it possible for Leidos to cater to its customers'
                                    varying security needs — something not always possible with other AI coding
                                    assistants.
                                </p>
                                <p className="pb-2 text-lg">
                                    Ultimately, Cody empowers Leidos to focus on the work that matters most, allowing it
                                    to better serve its customers. “We have the freedom to move at the pace our
                                    customers need. That's invaluable.”
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Results"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">Leidos is using Cody in a few specific ways:</p>

                                <ol className="pb-8">
                                    <li>
                                        For its own research and development – Leidos invests over $130M in research and
                                        development. Software is critical to delivering nearly all capabilities to their
                                        customers, so the less time spent reading, interpreting and getting common
                                        software code elements to work, the more time spent building the actual
                                        solutions and technology advancements their customers need.
                                    </li>
                                    <li>
                                        To improve its products available to customers – in many cases, Leidos is hired
                                        to deliver solutions to the customer. The faster Leidos builds and advances
                                        those solutions, the greater their overall ability to be their customers' go-to
                                        provider and succeed as a business.
                                    </li>
                                    <li>
                                        To amplify existing contracts already using Cody – Many Leidos customers aren't
                                        able to invest or bring in this kind of technology on their own; they don't have
                                        the budgets or the acquisition pathways to invest or scale like Leidos can.
                                        Leidos constantly looks to transition new technology solutions developed via
                                        their research and development or being utilized on other contracts in the most
                                        economical and impactful way for existing customers.
                                    </li>
                                </ol>

                                <p className="pb-2 text-lg">
                                    Scaling was also on the engineers' minds. By capturing the needs and data flows of
                                    these three objectives, Leidos could not only leverage Cody internally within their
                                    own engineering projects, but also externally for customers in different sectors and
                                    with varying levels of security.
                                </p>

                                <p className="pb-2 text-lg">
                                    One of their bigger conversations revolves around the modernization and migration of
                                    legacy code. For example, migrating from Oracle to PostgreSQL once took a full
                                    sprint, if not longer. Cody got them 80% to 90% of the way there within minutes.
                                </p>

                                <p className="pb-2 text-lg">
                                    Technology moves fast, and Leidos leans on Cody to teach its engineers the basics of
                                    both old and new technology that they're not familiar with but need to understand
                                    for projects they're working on. Thanks to Cody, they're saving time writing
                                    documentation for their code, generating boilerplate in seconds, writing unit tests
                                    with unparalleled ease which in turn improves code quality, and debugging
                                    significantly faster than before.
                                </p>

                                <p className="pb-2 text-lg">
                                    Leidos' senior developers, in particular, have felt the difference. Guiding junior
                                    developers used to take up about eight hours of the week, easily. With Cody, they've
                                    cut this down to two. In fact, Leidos lives by one important rule of thumb:
                                </p>

                                <div className="py-8">
                                    <Blockquote
                                        className="w-full pl-[46px] !pr-0"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="If you haven't yet asked Cody, don't ask me."
                                        author={
                                            <span>
                                                Rob Linger,
                                                <span className="mt-[10px] block">AI Software Architect at Leidos</span>
                                            </span>
                                        }
                                    />
                                </div>

                                <p className="pb-2 text-lg">
                                    Linger highlights something important: “It's not just about time savings. It's about
                                    how you're able to spend your time.”
                                </p>

                                <p className="pb-2 text-lg">
                                    Cody gives Leidos engineers more space to focus on what matters — something felt by
                                    its customers. In fact, one engineer says:
                                </p>

                                <div className="py-8">
                                    <Blockquote
                                        className="w-full pl-[46px] !pr-0"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="I really can't express how blown away I am Cody. I can't go back to... whatever it was like before. I use Cody every day, all day long. No matter what I write, Cody helps improve it and it goes way beyond coding in some specific language, you can make Cody explain things to you every step of the way. Really, this is it, the future of coding."
                                        author={<span>Leidos Engineer</span>}
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

export default Leidos
