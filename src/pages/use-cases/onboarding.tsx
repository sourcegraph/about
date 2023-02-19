import { FunctionComponent, ReactNode } from 'react'

import CompassOutlineIcon from 'mdi-react/CompassOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import UploadIcon from 'mdi-react/UploadIcon'
import Link from 'next/link'

import {
    Blockquote,
    ContentSection,
    CallToActionContentSection,
    CustomCarousel,
    CustomerLogos,
    Hero,
    Layout,
    ResourceList,
    ThreeUpText,
    TwoColumnSection,
} from '../../components'
import { StandardCallToAction } from '../../components/cta/StandardCallToAction'
import { UseCasePageCallToAction } from '../../components/cta/UseCasePageCallToAction'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h3 className="mb-8 lg:mb-0">{header}</h3>
        {text}
    </>
)

const items = [
    {
        title: 'Make knowledge self-serve',
        text: (
            <CarouselItem
                header="Make knowledge self-serve"
                text={
                    <p className="py-4">
                        With Sourcegraph, developers can find answers without waiting for a teammate to point them to
                        the relevant code. When questions arise, devs feel more confident that they're asking a more
                        focused and informed question.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Enable developers to learn by example',
        text: (
            <CarouselItem
                header="Enable developers to learn by example"
                text={
                    <p className="py-4">
                        With{' '}
                        <Link
                            href="/code-search"
                            title="Code Search"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Code Search
                        </Link>
                        , you can find examples to learn from across all of your company's private repositories and the
                        open source universe.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Get code history and ownership at a glance',
        text: (
            <CarouselItem
                header="Get code history and ownership at a glance"
                text={
                    <p className="py-4">
                        Sourcegraph natively supports Git-based version control systems. Searches can quickly reveal who
                        updated code and when, helping developers find the right stakeholders to solve problems
                        effectively.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Visualize contributions and chart team progress',
        text: (
            <CarouselItem
                header="Visualize contributions and chart team progress"
                text={
                    <p className="py-4">
                        <Link
                            href="/code-insights"
                            title="Code Insights"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Code Insights
                        </Link>{' '}
                        allows onboarding developers to understand in-process work and visualize how their contributions
                        advance team goals.
                    </p>
                }
            />
        ),
    },
    {
        title: 'Document and share actionable code snippets',
        text: (
            <CarouselItem
                header="Document and share actionable code snippets"
                text={
                    <p className="py-4">
                        With{' '}
                        <a
                            href="https://docs.sourcegraph.com/notebooks"
                            title="Notebooks"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Notebooks
                        </a>
                        , teams can create always up-to-date, living documentation with familiar features like Markdown
                        and novel capabilities like embedded searches, snippets, and symbols.
                    </p>
                }
            />
        ),
    },
]

const blogResourceItems = [
    {
        title: '8 ways to implement better onboarding',
        description:
            'We spoke to engineering leaders and engineers to learn their secrets for successful, repeatable, and scalable onboarding.',
        type: 'Blog post',
        img: {
            src: 'https://sourcegraphstatic.com/better-onboarding-prevent-codebase-overwhelm.png',
            alt: '8 ways to implement better onboarding blog thumbnail',
        },
        href: '/blog/better-onboarding-how-to-prevent-codebase-overwhelm',
    },
    {
        title: 'How we built our software engineering career framework',
        description:
            'Learn how Sourcegraph built an engineering career development framework to align the entire engineering organization and create consistent, fair, and scalalabe conversations about growth.',
        type: 'Blog post',
        img: {
            src: 'https://storage.googleapis.com/sourcegraph-assets/blog/engineering-framework-images/Engineering%20career%20framework%20hero%20FINAL.png',
            alt: 'Software engineer career ladder blog thumbnail',
        },
        href: '/blog/software-engineer-career-ladder',
    },
    {
        title: '5 key traits of a code intelligence platform',
        description:
            'Sourcegraph is more than search. Learn how the code intelligence platform helps development teams quickly get unblocked, resolve issues faster, and gain insights to make better decisions.',
        type: 'Guide',
        img: {
            src: '/blog/thumbnails/dark-multi-grid.jpg',
            alt: 'Grid background with abstract blue and pink hues',
        },
        href: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
    },
]

const threeUpTextItems = [
    {
        icon: <MagnifyIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Find answers across all repositories',
        description:
            'Codebases grow increasingly complex over time. Sourcegraph enables developers to search everything at once without needing to clone and search locally.',
    },
    {
        icon: <UploadIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Share knowledge quickly with links to specific code',
        description:
            'Knowledge sharing takes time. With Sourcegraph, developers can share links directly to specific lines of code and ask questions with context included.',
    },
    {
        icon: <CompassOutlineIcon className="mb-6 inline text-blurple-400" size={40} />,
        subtitle: 'Navigate and understand large codebases',
        description:
            "Make new codebases approachable, not aggravating. Search across all your repositories in one place with Sourcegraph's IDE-inspired features.",
    },
]

const UseCasePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Accelerate developer onboarding - Sourcegraph',
            description:
                'Decrease time to first commit for new developers, help existing engineers master your codebase, and fast-track full codebase understanding.',
        }}
        className="use-cases-page"
        hero={
            <Hero
                variant="lightNebulousVenus2"
                backButton={{
                    text: 'Use Cases',
                    link: '/use-cases',
                }}
                title="Accelerate developer onboarding"
                subtitle="Decrease time to first commit for new developers, help existing engineers master your
                codebase, and fast-track full codebase understanding."
                cta={<StandardCallToAction buttonLocation={buttonLocation.hero} />}
            />
        }
    >
        <ContentSection>
            <ThreeUpText title="Make your codebase accessible for your entire team" items={threeUpTextItems} />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-venus">
            <TwoColumnSection
                leftColumn={
                    <>
                        <h2 className="mb-6 max-w-[400px]">Developer onboarding is slow and expensive</h2>
                        <p>
                            Current tools and practices don't enable teams to onboard developers effectively or
                            efficiently.
                        </p>
                        <p>
                            <strong>What does that mean for you?</strong>
                        </p>
                        <ul>
                            <li>New developers are left confused, struggling in front of an opaque codebase.</li>
                            <li>
                                Senior teammates need to break focus to answer questions while new devs wait to be
                                unblocked.
                            </li>
                            <li>
                                Existing developers onboarding to new projects struggle to maintain turnaround times as
                                they learn unfamiliar parts of the codebase.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Blockquote
                        headline="Lunar makes every developer autonomous"
                        quote="Sourcegraph makes it possible for us to enable every team to develop autonomous practices and solve cross-coding issues. This autonomy is vital to ensure developers and their teams can accomplish their day-to-day work in isolation without being blocked."
                        author="Bjørn Hal Sørensen, Web Architect at Lunar"
                        inline={false}
                        logo={{
                            src: '/external-logos/lunar.svg',
                            alt: 'Lunar',
                        }}
                    />
                }
            />
        </ContentSection>

        <ContentSection>
            <CustomCarousel items={items} autoAdvance={true} title="How Sourcegraph helps" />
        </ContentSection>

        <ContentSection parentClassName="sg-bg-gradient-saturn">
            <div className="flex flex-col justify-center lg:px-32">
                <Blockquote
                    headline="Convoy knows its codebase inside and out"
                    quote="For our new developers, Sourcegraph has been invaluable to get to know the repository structure, to track down where code lives, and self-service during their investigations."
                    author="Owen Kim, Senior Software Engineer at Convoy"
                    border={false}
                    logo={{
                        src: '/external-logos/convoy-logo.svg',
                        alt: 'Convoy',
                    }}
                    link={{
                        href: '/case-studies/convoy-improved-on-boarding',
                        text: 'Read the case study',
                    }}
                />
            </div>
        </ContentSection>

        <ContentSection parentClassName="bg-gray-100">
            <UseCasePageCallToAction
                header="Give your team the onboarding experience they deserve."
                text="Enable all your devs to find the answers they need to work more efficiently, ship code more
                confidently, and stay in flow."
                buttonLocation={buttonLocation.body}
            />
            <div className="mt-4xl">
                <CustomerLogos />
            </div>
        </ContentSection>

        <ResourceList items={blogResourceItems} />

        <CallToActionContentSection />
    </Layout>
)

export default UseCasePage
