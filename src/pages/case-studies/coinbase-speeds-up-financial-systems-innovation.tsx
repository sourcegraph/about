import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'

import { Blockquote, ContentSection, Hero, Layout } from '../../components'
import MoreCaseStudies from '../../components/CaseStudies/MoreCaseStudies'
import SidebarCta from '../../components/SidebarCta'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const OnePassword: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Coinbase speeds up financial systems innovation using Cody, the AI code assistant',
            description:
                'Coinbase developers find improved productivity gains and satisfaction using Cody, all while meeting the strict security requirements of a highly regulated industry.',
            image: '/case-studies/coinbase-og.png',
        }}
        className="relative"
        heroAndHeaderClassName="pt-[98px] md:pt-[32px]"
        hero={
            <Hero
                className="relative"
                backButton={{
                    text: 'Customer stories',
                    link: '/case-studies',
                }}
                variant="white"
                title={
                    <ContentSection parentClassName="!px-0 !py-0">
                        <h1 className="relative -top-3 z-10 pb-16 md:-top-[2px] lg:w-[949px]">
                            Coinbase speeds up financial systems innovation using Cody, the AI code assistant
                        </h1>
                        <div className="relative z-[10] -mt-3 flex w-full flex-col gap-x-8 rounded-lg border border-gray-500 bg-white px-12 py-16 shadow-lg md:-mt-[2px] md:flex-row xl:w-[1280px]">
                            <img
                                className="mb-8 w-36 object-contain md:mb-0"
                                src="/case-studies/coinbase-logo.png"
                                alt="Coinbase logo"
                            />
                            <p className="mb-0 text-[18px] font-normal leading-[27px]">
                                Coinbase is a secure online platform for buying, selling, transferring, and storing
                                cryptocurrency, and on a mission to increase economic freedom for more than 1 billion
                                people.
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
                    <div className="sticky top-[118px] w-full md:w-[378px]">
                        <SidebarContent
                            title="5-6 hours per week"
                            content="Estimated time saved by each developer using AI code assistants like Cody."
                        />
                        <SidebarContent
                            title="2x faster"
                            content="Developers self-reported AI code assistants like Cody help them accomplish their tasks 2x faster."
                        />
                        <SidebarContent
                            title="75% developer satisfaction"
                            content="75% of Coinbase developers feel they are more productive using AI code assistants like Cody."
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
                                    Coinbase, a global leader in the cryptocurrency industry with a mission to "increase
                                    economic freedom in the world," has a reputation for innovation not only with
                                    financial systems but also with technological innovation. "We want to be a leader
                                    and show we're not just thinking about crypto, we're also thinking about other
                                    innovative technologies and how they can remove friction, add speed and increase
                                    efficiency as a whole," says Roderick Randolph, a Principal Engineer with the
                                    Developer Experience team at Coinbase.
                                </p>
                                <p className="pb-2 text-lg">
                                    As the interest in AI hit a fever pitch in late 2022, it was natural that Coinbase
                                    was interested in ways they could leverage AI. "Our CEO Brian Armstrong is a big
                                    proponent of identifying ways we could adopt AI across the entire company," says
                                    Roderick, "and Coinbase has a very innovation-driven engineering culture. My job is
                                    to elevate developer productivity and enable developers to move fast with velocity,
                                    so it made sense to see how we could leverage AI code assistants to improve
                                    developer productivity."
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Balancing innovation with security"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    With this desire for innovation came security and legal challenges for Coinbase,
                                    which not only deals with customer data and digital assets but also does so in an
                                    industry where the stakes are exceptionally high. Brady Thornton, a Staff Security
                                    Engineer and Technical Lead of the Security Advisory Services team at Coinbase,
                                    says: "Our mission is to be the most trusted crypto platform. Maintaining a high
                                    security bar while innovating is essential to earning and keeping that trust."
                                </p>
                                <p className="pb-2 text-lg">
                                    These challenges were compounded by the newness of AI and the lack of information
                                    about companies adopting the technology. "We were evaluating AI code assistants at a
                                    time when there was very limited public data on their use at large organizations,”
                                    says Brady. “There were a few academic studies related to AI code assistant
                                    adoption, and even fewer related to security, so we had to be creative with our
                                    approach.”
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Why Cody?"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    To help Coinbase adopt an AI code assistant, Roderick and Brady joined forces to
                                    evaluate options that met both requirements to improve developer productivity while
                                    ensuring Coinbase's strict security standards weren't compromised.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Meeting security expectations with a low risk tolerance"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
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
                                    set itself apart from the competition around security. "Some of our code directly
                                    handles digital assets and transactions," says Brady, "and our willingness to accept
                                    risk from AI code assistants with that code is especially minimal.”
                                </p>
                                <p className="pb-2 text-lg">
                                    As a result, Brady says the team came up with a threat model to identify risks and
                                    their severities across AI code assistants in a few key areas:
                                </p>
                                <ul className="pb-8">
                                    <li>
                                        <strong className="font-bold">Code exposure:</strong> "One potential
                                        show-stopping issue was sensitive code leaving our environment," says Brady,
                                        "Without using self-hosted models, there aren’t any guarantees of what happens
                                        with that data in the backend.”
                                    </li>
                                    <li>
                                        <strong className="font-bold">Model training and data use:</strong> The risk of
                                        inadvertently using proprietary code to train external models could expose
                                        confidential information. "There's a potential impact if proprietary Coinbase
                                        code or non-public information made its way into AI models."
                                    </li>
                                    <li>
                                        <strong className="font-bold">Attack vectors:</strong> Brady also expressed
                                        concern about the potential risk that attackers could influence AI training
                                        models by inserting malicious code patterns into open source projects,
                                        potentially causing those patterns to be suggested to Coinbase developers.
                                    </li>
                                </ul>
                                <p className="pb-2 text-lg">
                                    With these considerations in mind, Brady developed a process to evaluate which tool
                                    best met their security requirements. This included a unique statistical risk
                                    analysis where code generated with AI by engineers involved in the evaluation was
                                    compared not only to those not involved, but also to the code that participants
                                    wrote before using AI. “We were interested in whether AI coding assistants produced
                                    code of equal security quality compared to code written by engineers on their own.
                                    This was our null hypothesis. If we observed no significant increase in the rate of
                                    insecure coding patterns introduced between experimental groups, we could conclude
                                    that AI assistants weren't making things worse.” says Brady. “So, we designed and
                                    conducted an experiment to look for security issues across a number of groups, per
                                    PR, per business unit and after comparing our groups we determined using AI coding
                                    assistants made no statistically significant difference in the rate of observed
                                    security issues.”
                                </p>
                                <p className="pb-2 text-lg">
                                    In addition, Brady randomly sampled PRs from these groups, again ensuring
                                    statistical significance, and had people review them for potential security issues.
                                    The reviews were blind, meaning reviewers didn’t know whether the PR was written
                                    with or without AI assistance. The team found no statistical difference in the
                                    quality of the PRs.
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Context improves productivity"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Across all of the security testing and threat modeling conducted, Cody was
                                    determined as the best fit for Coinbase’s security requirements. These requirements
                                    haven’t hampered the impact it has had on developer productivity either, with
                                    Roderick highlighting Cody’s context awareness as a critical reason why Coinbase
                                    developers are now more productive. “Cody really stood out because of its context
                                    awareness. It wasn’t just suggesting random pieces of code; it generated boilerplate
                                    code based on our internal SDKs and frameworks. It was a good signal we were on to
                                    something powerful.”
                                </p>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Support for Amazon Bedrock"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    One final decisive factor in Coinbase's selection of Cody was its support for Amazon
                                    Bedrock. Amazon Bedrock is a fully managed service that allows teams to set up Cody
                                    within their Virtual Private Cloud (VPC) and create an isolated environment where
                                    data doesn’t have to be sent over the public internet to an LLM provider.
                                </p>
                                <div className="py-8">
                                    <Blockquote
                                        className="w-full !pr-0 pl-[46px]"
                                        largeText={true}
                                        leftBorderAccent={true}
                                        quote="One of the reasons we felt confident moving forward with Cody is because it runs on Amazon Bedrock. It integrates well with our existing cloud infrastructure. We must have full control over our data and environment to keep our customer data safe."
                                        author={
                                            <span>
                                                Roderick Randolph
                                                <span className="mt-[10px] block">Principal Engineer, Coinbase</span>
                                            </span>
                                        }
                                    />
                                </div>
                            </div>
                        }
                    />

                    <CaseStudyContent
                        title="Outcomes"
                        content={
                            <div className="w-full md:w-[90%] lg:w-[85%]">
                                <p className="pb-2 text-lg">
                                    Developers at Coinbase have access to a number of AI code assistants for their daily
                                    use, but Cody’s the only one among them that prevents code from leaving Coinbase’s
                                    environment. In addition to meeting its stringent security requirements, Cody's
                                    context awareness of Coinbase’s codebase has seen tangible improvements in
                                    productivity and time saved. “We’ve found engineers are saving roughly 5-6 hours per
                                    week using AI code assistant tools like Cody,” Roderick says, “and writing code 2x
                                    faster than without it.” Coinbase developers are also feeling these benefits, with
                                    75% noting they were more productive in a recent survey.
                                </p>
                                <p className="pb-2 text-lg">
                                    Roderick believes that by using Cody, Coinbase can innovate while maintaining the
                                    security and trust of its customers. “We take security very seriously, and building
                                    and maintaining trust with our customers is incredibly important. Cody enables us to
                                    not only leverage technology that enables productivity but also keeps us secure.”
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
