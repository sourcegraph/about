import { FunctionComponent, ReactNode } from 'react'

import CompassOutlineIcon from 'mdi-react/CompassOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import UploadIcon from 'mdi-react/UploadIcon'
import Link from 'next/link'

import {
    BackButtonBold,
    BlockquoteWithBorder,
    BlockquoteWithLogoBottom,
    BlogListItem,
    CustomCarousel,
    ContentSection,
    CustomerLogos,
    Layout,
    ThreeUpText,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

import styles from './useCases.module.scss'

const CarouselItem: FunctionComponent<{ header: string; text: ReactNode }> = ({ header, text }) => (
    <>
        <h2>{header}</h2>
        {text}
    </>
)

const items = [
    {
        buttonLabel: 'Make knowledge self-serve',
        text: (
            <CarouselItem
                header="Make knowledge self-serve"
                text={
                    <p>
                        With Sourcegraph, developers can find answers without waiting for a teammate to point them to
                        the relevant code. When questions arise, devs feel more confident that they're asking a more
                        focused and informed question.
                    </p>
                }
            />
        ),
        headerClass: 'active',
        itemClass: 'd-block',
    },
    {
        buttonLabel: 'Enable developers to learn by example',
        text: (
            <CarouselItem
                header="Enable developers to learn by example"
                text={
                    <p>
                        With <Link href="/code-search">Code Search</Link>, you can find examples to learn from across
                        all of your company's private repositories and the open source universe.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Get code history and ownership at a glance',
        text: (
            <CarouselItem
                header="Get code history and ownership at a glance"
                text={
                    <p>
                        Sourcegraph natively supports Git-based version control systems. Searches can quickly reveal who
                        updated code and when, helping developers find the right stakeholders to solve problems
                        effectively.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Visualize contributions and chart team progress',
        text: (
            <CarouselItem
                header="Visualize contributions and chart team progress"
                text={
                    <p>
                        <Link href="/code-insights">Code Insights</Link> allows onboarding developers to understand
                        in-process work and visualize how their contributions advance team goals.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
    {
        buttonLabel: 'Document and share actionable code snippets',
        text: (
            <CarouselItem
                header="Document and share actionable code snippets"
                text={
                    <p>
                        With <a href="https://docs.sourcegraph.com/notebooks"> Notebooks</a>, teams can create always
                        up-to-date, living documentation with familiar features like Markdown and novel capabilities
                        like embedded searches, snippets, and symbols.
                    </p>
                }
            />
        ),
        itemClass: 'd-none',
    },
]

const blogListItems = [
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
]

const threeUpTextItems = [
    {
        icon: <MagnifyIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Find answers across all repositories</h4>,
        description:
            'Codebases grow increasingly complex over time. Sourcegraph enables developers to search everything at once without needing to clone and search locally.',
    },
    {
        icon: <UploadIcon className="mb-4 text-blurple" size={40} />,
        subtitle: (
            <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">
                Share knowledge quickly with links to specific code
            </h4>
        ),
        description:
            'Knowledge sharing takes time. With Sourcegraph, developers can share links directly to specific lines of code and ask questions with context included.',
    },
    {
        icon: <CompassOutlineIcon className="mb-4 text-blurple" size={40} />,
        subtitle: <h4 className="pb-3 mx-auto max-w-300 font-weight-bold">Navigate and understand large codebases</h4>,
        description:
            "Make new codebases approachable, not aggravating. Search across all your repositories in one place with Sourcegraph's IDE-inspired features.",
    },
]

const UseCasePage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Accelerate developer onboarding | Sourcegraph',
            description:
                'Decrease time to first commit for new developers, help existing engineers master your codebase, and fast-track full codebase understanding.',
        }}
        className="use-cases-page navbar-light"
        hero={
            <>
                <div className={styles.pageHeader}>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-lg-7 mb-8 mt-7">
                                <BackButtonBold href="/use-cases" text="USE CASES" />
                                <h1 className="display-2 font-weight-bold mb-4">Accelerate developer onboarding</h1>
                                <div className="display-4 font-weight-normal mb-5">
                                    Decrease time to first commit for new developers, help existing engineers master
                                    your codebase, and fast-track full codebase understanding.
                                </div>
                                <div className="d-flex flex-column flex-lg-row pt-1">
                                    <Link href="/demo" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="btn btn-primary mr-lg-3 mb-lg-0 mb-3 w-md-100"
                                            title="Request a Demo."
                                        >
                                            Request a demo
                                        </a>
                                    </Link>
                                    <Link href="/get-started" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a className="btn btn-outline-primary w-md-100" title="Try Sourcegraph.">
                                            Try Sourcegraph now
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    >
        <ContentSection className="my-lg-5">
            <ThreeUpText title="Make your codebase accessible for your entire team" items={threeUpTextItems} />
        </ContentSection>

        <div className="bg-gradient-venus-radial">
            <ContentSection className="py-7">
                <div className="row flex-column flex-lg-row justify-content-between">
                    <div className="p-lg-0 col-lg-6 px-4">
                        <h1 className="mb-4 mw-400 font-weight-bold">Developer onboarding is slow and expensive</h1>
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
                    </div>
                    <div className="col-lg-5 mt-lg-0 mt-7">
                        <BlockquoteWithBorder
                            quote="Sourcegraph makes it possible for us to enable every team to develop autonomous practices and solve cross-coding issues. This autonomy is vital to ensure developers and their teams can accomplish their day-to-day work in isolation without being blocked."
                            author="Bjørn Hal Sørensen, Web Architect at Lunar"
                            logo={{
                                src: '/external-logos/lunar.svg',
                                alt: 'Lunar',
                            }}
                            headline="Lunar makes every developer autonomous"
                        />
                    </div>
                </div>
            </ContentSection>
        </div>

        <ContentSection>
            <div className="row mt-lg-0 mt-5 justify-content-center mb-lg-0 mb-md-0 mb-4">
                <div className="d-flex flex-column mt-lg-6 mt-4 w-100 mx-3">
                    <h1 className="font-weight-bold text-md-center text-left mb-lg-6 mb-md-3">How Sourcegraph helps</h1>
                </div>
                <div className="pb-lg-5 pb-md-8 pb-5">
                    <CustomCarousel items={items} autoAdvance={true} smallPanel={true} />
                </div>
            </div>
        </ContentSection>

        <div className="bg-gradient-saturn-saturated py-8">
            <ContentSection>
                <div className="d-flex flex-column justify-content-center text-center px-lg-8">
                    <BlockquoteWithLogoBottom
                        quote="For our new developers, Sourcegraph has been invaluable to get to know the repository structure, to track down where code lives, and self-service during their investigations."
                        header="Convoy knows its codebase inside and out"
                        author="Owen Kim, Senior Software Engineer at Convoy"
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
        </div>

        <div className="bg-light-gray-3 py-7">
            <ContentSection>
                <div className="row d-flex flex-column mx-4 mx-lg-0 align-items-lg-center align-items-left">
                    <div className="mb-5 d-flex flex-column px-lg-7 text-center">
                        <h1 className="font-weight-bold">Give your team the onboarding experience they deserve.</h1>
                        <p>
                            Enable all your devs to find the answers they need to work more efficiently, ship code more
                            confidently, and stay in flow.
                        </p>
                    </div>
                    <div className="d-flex flex-column">
                        <Link
                            href="/demo"
                            passHref={true}
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="btn btn-primary" title="Request a Demo.">
                                Request a demo
                            </a>
                        </Link>
                        <Link href="/use-cases" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className="d-flex justify-content-center mt-4 font-weight-bold">
                                Explore other use cases
                            </a>
                        </Link>
                    </div>
                </div>
            </ContentSection>

            <div className="mt-6">
                <CustomerLogos />
            </div>
        </div>

        <ContentSection className="py-lg-7 py-5">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {blogListItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="d-flex flex-wrap justify-content-center text-center mb-lg-6">
                <h2 className="w-100 font-weight-bold mb-4">Better onboarding is only a few searches away.</h2>
                <Link href="/get-started" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="btn btn-primary"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.trySourcegraph}
                        data-button-type="cta"
                    >
                        Ready to get started?
                    </a>
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default UseCasePage
