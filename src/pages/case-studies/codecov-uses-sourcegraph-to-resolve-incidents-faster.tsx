import { FunctionComponent } from 'react'

import {
    StaffSpotlight,
    Hero,
    NewCaseStudyLayout,
    ContentSection,
    Blockquote,
    Layout,
    ThreeUpText,
    UseChallengeSolutionResults,
} from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const threeUpTextItems = [
    {
        subtitle: '5 minutes',
        description:
            "Codecov reviewed their entire codebase and confirmed that they weren't exposed to the Log4j vulnerability.",
    },
    {
        subtitle: '12x faster',
        description:
            "Codecov was able to resolve Log4j 12x faster than with their code host's native search functionality and report absolute confidence in that resolution to their customers.",
    },
    {
        subtitle: '100% confidence',
        description:
            'The security team at Codecov is able to complete code reviews independently and with complete confidence that their work is correct.',
    },
]

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Codecov uses Sourcegraph to resolve incidents faster',
            description:
                'Codecov case study. Learn how Codecov uses Sourcegraph to resolve incidents like Log4j 12x faster and with 100% confidence.',
        }}
        hero={
            <Hero
                backButton={{
                    text: 'Case Studies',
                    link: '/case-studies',
                }}
                variant="venusCode"
                title={'Codecov uses Sourcegraph to \n resolve incidents faster'}
                displayUnderNav={true}
            />
        }
    >
        <NewCaseStudyLayout customer="Codecov">
            <ContentSection background="white" slimWidth={true}>
                <div className="mx-auto">
                    <Blockquote
                        quote="Sourcegraph allows us to be more efficient with our time, whether it's code review, answering security-related questions from clients, or searching for things in the code much more easily than we could through our code host's native search functionality."
                        author="Jeff Holland, Lead Security Engineer at Codecov"
                        logo={{
                            src: '/external-logos/codecov-logo.svg',
                            alt: 'Codecov',
                            href: 'https://about.codecov.io/',
                        }}
                        border={false}
                        largeText={true}
                    />
                </div>
            </ContentSection>

            <ContentSection>
                <UseChallengeSolutionResults
                    useCases={[
                        { text: 'Find and fix security vulnerabilities quickly across the codebase' },
                        { text: 'Accelerate developer onboarding' },
                    ]}
                    challenges={[
                        {
                            text: 'Lack of confidence that no instances of the Log4j vulnerability existed in its codebase.',
                        },
                        {
                            text: "Deficient code reviews that weren't always comprehensive or fast, especially from a security perspective.",
                        },
                        {
                            text: 'Inefficient developer onboarding process that resulted in new developers monopolizing the time of senior developers.',
                        },
                    ]}
                    solutions={[
                        {
                            text: 'Ability to resolve Log4j 12x faster than with a native code search tool and report absolute confidence in that resolution to their customers.',
                        },
                        { text: 'Efficient code reviews are completed faster and with greater confidence.' },
                        {
                            text: 'Streamlined developer onboarding that enables new developers to answer their own questions and allows senior developers to focus on more complex problems.',
                        },
                    ]}
                    results={[
                        {
                            text: "Codecov reviewed their entire codebase in 5 minutes and confirmed that they weren't exposed to the Log4j vulnerability.",
                        },
                        {
                            text: 'Codecov was able to quickly & confidently report the absence of the Log4j vulnerability to their customers and partners.',
                        },
                        {
                            text: 'The security team at Codecov is able to complete code reviews independently and with complete confidence that their work is correct.',
                        },
                    ]}
                />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="mx-auto pt-5xl">
                    <p className="mt-5xl pt-3xl sm:mt-0">
                        In 2021, security engineers Mitchell Borrego and Jeff Holland joined Codecov with the goal of
                        creating a cutting-edge security program. Their responsibilities include security tooling,
                        compliance, and code review from a security perspective. Working with Jerrod Engelberg, CEO of
                        Codecov, the team is developing a world-class, and ever-improving, security program.
                    </p>
                    <p>
                        Key to their efforts? Sourcegraph. According to Jeff, “Sourcegraph allows us to be more
                        efficient with our time, whether it's code review, quickly answering security-related questions
                        from clients, or searching for things in the code more easily than we could through other
                        tools.”
                    </p>
                    <h3 className="mt-16 mb-6 max-w-[600px]">
                        Codecov reduced time to resolution with 100% confidence when facing Log4j
                    </h3>
                    <p>
                        In December of 2021, researchers discovered that Log4j, an otherwise nondescript open source
                        logging library, had a security vulnerability so severe it scored a 10/10 on the CVSS scale. The
                        use of the library was, as the FTC put it, "
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.ftc.gov/policy/advocacy-research/tech-at-ftc/2022/01/ftc-warns-companies-remediate-log4j-security-vulnerability"
                        >
                            ubiquitous
                        </a>
                        ."
                    </p>
                    <p>
                        Software companies the world over scrambled to figure out whether Log4j was somewhere in their
                        codebases and how fast they could patch it. For many companies, it was a stressful,
                        high-pressure event, one in which they had to ask developers to work extra hours. Despite their
                        efforts, many companies were unable to have full confidence that they had remediated all
                        affected code.
                    </p>
                    <p>
                        Not Codecov. With Sourcegraph, said Mitchell, Codecov was able to “get a quick reconnaissance
                        and understand our possible exposure by doing some simple searches.”
                    </p>
                    <p>
                        “With Sourcegraph, we confirmed in 5 minutes, and sanity-checked in another 5 minutes, with 100%
                        assurance, that we weren't exposed to Log4j in our codebase,” reported Mitchell.
                    </p>
                    <p>
                        “Confidence is everything,” said Holland. “It's extremely important, the 100% confidence that
                        you can go out in good faith to your customers and report the absence of a vulnerability.” Other
                        companies, according to Holland, instead had to temper expectations and some even had to walk
                        back assurances. “It deeply affects the trust that you can provide to customers,” Holland said.
                    </p>
                    <p>
                        Log4j was a particularly severe instance of a common pattern: companies adopt an open source
                        code component, often packaged with other components, not realizing it contains a vulnerability.
                        These kinds of vulnerabilities are on the rise but with Sourcegraph, Codecov is prepared. The
                        next time a vulnerability emerges, Codecov can find all instances of it-if any-in their codebase
                        with just a search.
                    </p>
                    <p>
                        “If Log4j version 7 comes out and all of the sudden it affects us and we've got a can of worms
                        on our hands, what do we do? Start searching with Sourcegraph,” said Jeff. “And pretty quickly,
                        we can figure out if we're vulnerable and patch. And hopefully we avoid an incident versus
                        floundering around trying to use other code search tools.”
                    </p>

                    <h3 className="mt-16 mb-6">Codecov makes code review secure and comprehensive</h3>
                    <p>
                        When he's not responding to the latest vulnerability, one of Mitchell's primary responsibilities
                        is performing security reviews on PRs and ensuring that other developers don't accidentally
                        merge insecure code.
                    </p>
                    <p>
                        Mitchell reported that before Sourcegraph, the ability to search their codebase or their PRs for
                        security flaws “was either nonexistent because it was so inefficient or there was just no
                        conceivable way to do it.”
                    </p>
                    <p>
                        Code reviews are now comprehensive, which is helpful over and above security reviews.
                        “Sourcegraph makes code reviews a lot more thorough,” Mitchell said. “And you have faith that
                        you don't have to go back and confirm, double check, and triple check.”
                    </p>
                    <p>
                        By the time he's done reviewing code, Mitchell is confident: “I have more assurance in the
                        effectiveness of my own code reviews. I have more faith that it is an accurate code review and
                        that nothing is getting past me.”
                    </p>

                    <div className="py-5xl">
                        <Blockquote
                            quote="With Sourcegraph, onboarding is certainly faster and certainly better. It provided a significant value to us in understanding our codebase at large."
                            author="Mitchell Borrego, Security Engineer, Codecov"
                            largeText={true}
                        />
                    </div>

                    <h3 className="mb-6">
                        Codecov speeds up developer onboarding and saves senior developers time and effort
                    </h3>
                    <p>
                        Having experienced the pain of onboarding in a new company without Sourcegraph, Mitchell is
                        impressed by the speed at which new developers are now able to onboard and start shipping.
                    </p>
                    <p>
                        “With Sourcegraph, onboarding is certainly faster and certainly better,” said Mitchell. Even
                        well-documented codebases aren't immediately intuitive, so Sourcegraph can help onboarding
                        developers understand the big picture as well as the nuances of their codebases. “It provided a
                        significant value to us in understanding our codebase at large,” Mitchell said.
                    </p>
                    <p>
                        Sourcegraph helps developers help themselves and each other. “I want developers to only have to
                        help each other when necessary,” said Jerrod. Sourcegraph searches have helped Codecov
                        developers answer questions ahead of time, before they have to ask for help and wait, often
                        across time zones, for a response.
                    </p>
                    <p>
                        Efficiency is only half the benefit. According to Jerrod, “We increased the interpersonal trust
                        and we increased the interpersonal dynamics in the company, making people feel more welcomed.”
                    </p>
                    <p>
                        Asking for help, of course, isn't a practice exclusive to early career developers. “Sourcegraph
                        will not only help with their onboarding,” said Mitchell. “It'll help post-onboarding,
                        increasing the developers' usability across the repositories we have.”
                    </p>
                </div>
            </ContentSection>

            <ContentSection parentClassName="sg-bg-gradient-saturn">
                <ThreeUpText items={threeUpTextItems} />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="mx-auto">
                    <h3 className="mb-6 max-w-[650px]">Sourcegraph Cloud was the right fit for a growing team</h3>
                    <p>
                        Codecov wanted something they could get up and running quickly, so they turned to Sourcegraph
                        Cloud.
                    </p>
                    <p>
                        “Sourcegraph Cloud was an unlock for us,” explained Jerrod. “We didn't feel like Sourcegraph was
                        a product that we needed to run on our own infrastructure."
                    </p>
                    <p>
                        Sourcegraph Cloud enabled the Codecov team to get started with Sourcegraph quickly and now,
                        they’re excited to expand. Already, support engineers are using Sourcegraph to quickly answer
                        customer questions and the team is looking to share Sourcegraph with new engineers to help them
                        become code search pros too.
                    </p>
                </div>

                <div className="mt-5xl">
                    <StaffSpotlight
                        customer="Codecov"
                        about={
                            <>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://about.codecov.io/"
                                    title="Codecov"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    Codecov
                                </a>{' '}
                                is a small organization making an outsized impact on the lives of over one million
                                developers. In over 29,000 companies across the globe, Codecov customers are able to
                                ship healthier code using its code coverage tool. Developers rely on Codecov to provide
                                actionable visibility into their code coverage across any tech stack.
                            </>
                        }
                        staff={[
                            {
                                image: '/case-studies/jerrod-engelberg.png',
                                name: 'Jerrod Engelberg',
                                title: 'CEO at Codecov',
                            },
                            {
                                image: '/case-studies/jeff-holland.png',
                                name: 'Jeff Holland',
                                title: 'Lead Security Engineer at Codecov',
                            },
                            {
                                image: '/case-studies/mitchell-borrego.jpg',
                                name: 'Mitchell Borrego',
                                title: 'Security Engineer at Codecov',
                            },
                        ]}
                    />
                </div>
            </ContentSection>
        </NewCaseStudyLayout>
    </Layout>
)

export default CaseStudy
