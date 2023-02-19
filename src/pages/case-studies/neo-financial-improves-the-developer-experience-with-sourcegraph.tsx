import { FunctionComponent } from 'react'

import {
    Blockquote,
    ContentSection,
    Hero,
    Layout,
    NewCaseStudyLayout,
    StaffSpotlight,
    ThreeUpText,
    UseChallengeSolutionResults,
} from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const threeUpTextItems = [
    {
        subtitle: 'Updated branding',
        description:
            'Updated corporate branding across all digital assets with 100% percent confidence that nothing was missed',
    },
    {
        subtitle: '100% completion',
        description:
            'Code Insights dashboards help Neo Financial ensure that large scale projects reach 100% completion before being declared “done”',
    },
    {
        subtitle: 'Attract top talent',
        description:
            'Neo Financial is able to attract and retain top engineering talent by providing a culture, and tools like Sourcegraph, that focus on improving the developer experience',
    },
]

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Neo Financial improves the developer experience with Sourcegraph',
            description:
                'Neo Financial case study. Learn how Neo Financial attacts and retains top engineering talent by providing a culture, and tools like Sourcegraph, that focus on improving the developer experience.',
            image: 'https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/meta/case-study-neo.png',
        }}
        hero={
            <Hero
                backButton={{
                    text: 'Case Studies',
                    link: '/case-studies',
                }}
                variant="venusCode"
                title={'Neo Financial improves the\n developer experience with \nSourcegraph'}
                displayUnderNav={true}
            />
        }
    >
        <NewCaseStudyLayout customer="Neo Financial">
            <ContentSection background="white" slimWidth={true}>
                <Blockquote
                    inline={true}
                    quote="With Sourcegraph, developers are more productive and it’s clear that every team is getting 1% better every day."
                    author="Ronnie Magatti, Team Lead & Principal Software Engineer at Neo Financial"
                    logo={{
                        src: '/external-logos/neo-financial.svg',
                        alt: 'Neo Financial',
                        href: 'https://neofinancial.com',
                    }}
                    border={false}
                    largeText={true}
                />
            </ContentSection>

            <ContentSection>
                <UseChallengeSolutionResults
                    useCases={[
                        {
                            text: 'Code Reuse',
                        },
                    ]}
                    challenges={[
                        {
                            text: 'Unable to understand their codebase and efficiently find code to reuse with code host’s native search functionality.',
                        },
                        {
                            text: 'Inability to search branches or tags at scale required manual effort and wasted time.',
                        },
                        {
                            text: "Local, unstructured searches through repositories were time consuming and weren't always successful.",
                        },
                    ]}
                    solutions={[
                        {
                            text: 'Search across commits quickly and make changes with confidence that nothing is missed',
                        },
                        {
                            text: 'Track and manage codebase maintenance with Code Insights and share visual dashboards with relevant teams and stakeholders',
                        },
                        {
                            text: 'Solve challenges faster with an easy and intuitive interface for code search',
                        },
                    ]}
                    results={[
                        {
                            text: 'Updated corporate branding across all digital assets with 100% percent confidence that nothing was missed',
                        },
                        {
                            text: 'Code Insights dashboards help Neo Financial ensure that large scale projects reach 100% completion before being declared “done”',
                        },
                        {
                            text: 'Neo Financial is able to attract and retain top engineering talent by providing a culture, and tools like Sourcegraph, that focus on improving the developer experience',
                        },
                    ]}
                />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="mx-auto pt-5xl">
                    <h3 className="mt-5xl mb-sm pt-5xl sm:mt-0">Improving the developer experience with Sourcegraph</h3>

                    <p>
                        Before Sourcegraph, tracking libraries manually and searching in GitHub made the process of
                        finding code difficult and time-consuming. To avoid unnecessary duplication of code or to see
                        how a service was previously set up, developers need to look at existing code–essentially,
                        searching for patterns. Unfortunately, manual pattern search with their code host’s native
                        search functionality wasted valuable time that engineering teams could use to address other
                        challenges.
                    </p>

                    <p>
                        Neo Financial’s engineering team decided to look for a better code search solution. That’s when
                        they discovered Sourcegraph.
                    </p>

                    <p>
                        Implementing Sourcegraph gave everyone in DevOps access to the new tooling. According to Ronnie
                        Magatti, Principal Software Architect at Neo Financial, “adoption has basically been organic.
                        More senior people are using it, but then someone else looks at it, like ‘oh that’s what you can
                        do? Okay, that’s pretty cool’ and then they start using it too.”
                    </p>

                    <h3 className="mt-xl mb-sm">Acting quickly with Sourcegraph</h3>

                    <p>
                        Recently, Neo Financial was rebranding their savings accounts to be called Money Accounts. The
                        engineering team needed to quickly and thoroughly identify all instances of the previous name
                        before making the update. Using Sourcegraph, Neo Financial mapped out all locations that
                        referenced the old branding. They were able to update the branding in a fraction of the time it
                        would have taken to manually search and update and the team had full confidence that they hadn’t
                        missed any instances of the old branding.
                    </p>

                    <p>
                        With Sourcegraph, Neo Financial engineers are able to streamline searching and understanding of
                        their codebase. This process improvement ultimately saves DevOps teams time and
                        resources–something that Ronnie believes is happening at Neo Financial because of Sourcegraph.
                        Incremental improvements to developer experience and productivity can add up to significant
                        results over time.
                    </p>

                    <p>
                        With this added clarity, the engineering team knows they can accomplish more in less time. “I
                        think a lot of it is the developers’ subjective perception of time…With Sourcegraph, developers
                        are more productive and it’s clear that every team is getting 1% better every day,” Ronnie said.
                    </p>
                </div>

                <div className="mx-auto my-5xl max-w-xl">
                    <Blockquote
                        inline={true}
                        quote="I want to put Code Insights on our TV in the kitchen to show all the insights dashboards so that people will just pass by and remember them."
                        author="Ronnie Magatti, Team Lead & Principal Software Engineer at Neo Financial"
                    />
                </div>

                <h3 className="mb-sm">Visualizing the codebase with Code Insights</h3>

                <p>
                    With Code Insights, you can seamlessly track and visualize everything in your codebase, with
                    analytics and real-time codebase reporting. From any search query, Code Insights gives you
                    customizable, visual dashboards showing high-level information you can use to make decisions in
                    context. For monitoring and improving code health, Code Insights provides transformational data your
                    developers can act on, eliminating guesswork and saving time.{' '}
                </p>

                <p>
                    Neo Financial’s engineering team uses Code Insights to understand codebase maintenance. Code
                    Insights tracks uptake on libraries and new Node.js versions.
                </p>

                <p>
                    “The insights are a huge benefit,” said Sean Heintz, Principal Software Developer, Team Lead at Neo
                    Financial. “Transitioning from Node 12 to Node 16, was one of the ones where we actually made use of
                    a Sourcegraph metric to watch Node 12 go down, and Node 16 come up. Once we got down to the three or
                    four repos still using Node 12, we were able to just… gently nudge people to get things taken care
                    of.”
                </p>

                <p>
                    “I want to put Code Insights on our TV in the kitchen to show all the insights dashboards so that
                    people will just pass by and remember them,” Ronnie added.
                </p>
            </ContentSection>

            <ContentSection parentClassName="sg-bg-gradient-saturn">
                <ThreeUpText items={threeUpTextItems} />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="mx-auto">
                    <h3 className="mb-6">Banking on the developer experience</h3>

                    <p>
                        Originally, developer experience and productivity teams were only found in the largest
                        organizations such as Netflix or Amazon. Today developers are an increasingly significant
                        portion of the workforce, both numerically and in terms of the role they play in organizations.
                        According to a{' '}
                        <a
                            href="https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/developer-velocity-how-software-excellence-fuels-business-performance"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            McKinsey study
                        </a>
                        , improving developer velocity typically grows company revenue between four and five times
                        faster. High-velocity teams are also 55 percent more innovative than companies with worse DX.
                        Companies of every size are recognizing the need to prioritize developer experience.
                    </p>

                    <p>
                        “Even here at Neo, we have a DX team who’s focused entirely on making sure that our developers
                        have a good experience, that they’re able to be productive. It’s just a really interesting place
                        that a lot of the tech companies that I’ve seen these days are focused on,” added Sean. “This is
                        giving developers those tools to execute even just a little more efficiently, so that every
                        team’s getting one percent better every day. That's what I really like about this; it makes me
                        just a little bit better, and it makes my life, over time, so much better.”
                    </p>

                    <p>
                        It’s important to note that engineers have a lot of choices today – where they work, which teams
                        will foster their growth, which tools they use. Developer experience centers development
                        processes around the people and culture that creates great software. Out of a strong developer
                        experience, great software and strong customer experiences are the natural conclusion. By
                        focusing on DX and bringing in tools like Sourcegraph, Neo Financial has set itself up for
                        future success.
                    </p>

                    <p>
                        Considering his overall experience using Sourcegraph, Ronnie said, "I like that Sourcegraph fits
                        into this ‘renaissance’ of DX tooling that’s coming out in the industry.”
                    </p>

                    <div className="mt-5xl">
                        <StaffSpotlight
                            customer="Neo Financial"
                            about={
                                <>
                                    <a
                                        target="_blank"
                                        rel="noreferrer"
                                        href="https://neofinancial.com"
                                        title="Neo Financial"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Neo Financial
                                    </a>
                                    {', '}a fintech company based in Calgary, Canada, offers innovative money management
                                    products to consumers with a goal of disrupting Canada’s banking industry. Neo
                                    Financial’s competitive advantage relies on transformative technology and a heavy
                                    focus on developer experience. Quick adoption of new tech and a culture of rapid
                                    talent promotion means that Neo Financial’s DevOps teams are learning more in a
                                    shorter period of time.
                                </>
                            }
                            staff={[
                                {
                                    image: '/case-studies/ronnie-magatti.png',
                                    name: 'Ronnie Magatti',
                                    title: 'Team Lead & Principal Software Engineer at Neo Financial ',
                                },
                                {
                                    image: '/case-studies/sean-heintz.png',
                                    name: 'Sean Heintz',
                                    title: 'Principal Software Developer, Team Lead at Neo Financial',
                                },
                            ]}
                        />
                    </div>
                </div>
            </ContentSection>
        </NewCaseStudyLayout>
    </Layout>
)

export default CaseStudy
