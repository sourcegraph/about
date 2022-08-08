import { FunctionComponent } from 'react'

import Link from 'next/link'

import {
    Background,
    Blockquote,
    BlogResourceItem,
    ContentSection,
    IntegrationsSection,
    HubSpotForm,
    Layout,
    ProductHero,
    TwoColumnSection,
    Video,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

export const CodeSearchPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Search',
            description:
                'Onboard to a new codebase, find answers faster, and identify security risks with Sourcegraph Code Search. Search across all the repositories you work with.',
        }}
        hero={
            <ProductHero
                variant="lightNebulousMars"
                product="code search"
                title={'Search your code.\nAll of it.'}
                description="Onboard to a new codebase, understand code faster, and identify security risks with universal code search."
                cta={<HubSpotForm masterFormName="contactEmail" />}
                displayUnderNav={true}
            />
        }
    >
        <ContentSection color="white" className="py-7">
            <TwoColumnSection
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-search',
                            webm: '/animations/code-search',
                        }}
                        title="Sourcegraph Code Search"
                        caption="Sourcegraph Code Search"
                        loop={true}
                    />
                }
                rightColumn={
                    <>
                        <h2 className="mb-4">Find and fix code in any code host, language, or repository</h2>
                        <ul>
                            <li className="mb-3">
                                Be more efficient by reusing high-quality code. Find code across thousands of
                                repositories and multiple code hosts in seconds.
                            </li>
                            <li className="mb-3">
                                Resolve issues and incidents faster by pinpointing root causes with symbol, commit, and
                                diff searches.
                            </li>
                            <li className="mb-3">
                                Discover every instance of vulnerable or buggy code in milliseconds and have complete
                                confidence in what's in your codebase.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <div className="sg-bg-gradient-venus py-7">
            <div className="container">
                <TwoColumnSection
                    centerContent={true}
                    leftColumn={
                        <>
                            <h2 className="mb-4">Move faster with Sourcegraph</h2>

                            <h5>Onboard 2.5x quicker</h5>
                            <p>
                                Search across every repository and code host to get to know the repository structure and
                                learn from other developers' code.
                            </p>

                            <h5>Improve developer happiness and productivity</h5>
                            <p>
                                Get answers faster without waiting for context from teammates or dealing with stale
                                local clones.
                            </p>

                            <h5>Mitigate security and compliance risks</h5>
                            <p>
                                Get alerts for vulnerabilities and then automate security fixes across your entire
                                codebase.
                            </p>
                        </>
                    }
                    rightColumn={
                        <Blockquote
                            inline={false}
                            quote="At Criteo, developer happiness is our top priority-not just productivity. By providing them with the right tools, like Sourcegraph, we've found that increased productivity is a natural byproduct."
                            author="Francois Jehl, Senior Engineering Manager at Criteo"
                            logo={{
                                src: '/external-logos/criteo-logo.svg',
                                alt: 'Criteo logo',
                                href: '/case-studies/criteo-tackles-big-code',
                            }}
                            link={{
                                href: '/case-studies/criteo-tackles-big-code',
                                text: 'Read the case study',
                            }}
                        />
                    }
                />
            </div>
        </div>

        <ContentSection color="white" className="py-7">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">Understand your code and its dependencies</h2>
                        <ul>
                            <li className="mb-3">
                                Onboard to codebases faster with cross-repository code navigation features like “Go to
                                definition” and "Find references."
                            </li>
                            <li className="mb-3">
                                Complete code reviews, get up to speed on unfamiliar code, and determine the impact of
                                code changes with the confidence of compiler-accurate code navigation.
                            </li>
                            <li className="mb-3">
                                Determine root causes quickly with precise code navigation that tracks dependencies and
                                references across repositories.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/code-intel',
                            webm: '/animations/code-intel',
                        }}
                        title="Sourcegraph Code Intelligence"
                        caption="Sourcegraph Code Intelligence"
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection color="white">
            <TwoColumnSection
                centerContent={true}
                reverseOnMobile={true}
                leftColumn={
                    <Video
                        host="self"
                        source={{
                            mp4: '/animations/notebooks',
                            webm: '/animations/notebooks',
                        }}
                        title="Sourcegraph Notebooks"
                        caption="Sourcegraph Notebooks"
                        loop={true}
                    />
                }
                rightColumn={
                    <>
                        <h2 className="mb-4">Create evergreen documentation with Notebooks</h2>
                        <ul>
                            <li className="mb-3">
                                Enable engineers to commit their first line of code faster through living documentation
                                that references live code.
                            </li>
                            <li className="mb-3">
                                Resolve incidents quickly with web-based documentation that is collaborative and
                                shareable.
                            </li>
                            <li className="mb-3">
                                Spend less time updating stale docs. Embed notebooks anywhere you can embed HTML, like
                                your own internal docs tooling.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <IntegrationsSection />

        <Background variant="lightNebulousMars" className="py-7">
            <div className="container d-flex flex-column align-items-center">
                <h2 className="mb-3">Get started with Code Search</h2>
                <p>Connect your code hosts and experience universal code search.</p>

                <div className="mt-2 d-flex flex-column flex-sm-row col-12 w-100">
                    <Link href="/demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Request a demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                            className="mb-3 btn btn-primary mb-sm-0 ml-sm-auto"
                        >
                            Request a demo
                        </a>
                    </Link>
                    <Link href="/get-started/self-hosted" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Try Sourcegraph now"
                            data-button-style={buttonStyle.outline}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                            className="ml-0 btn btn-outline-primary ml-sm-3 mr-sm-auto"
                        >
                            Try Sourcegraph now
                        </a>
                    </Link>
                </div>
            </div>
        </Background>

        <ContentSection color="white" className="py-7">
            <div className="col-lg-6">
                <h2 className="mb-6">Learn more</h2>
            </div>

            {[
                {
                    title: 'Key traits of a code intelligence platform',
                    description:
                        'Sourcegraph is more than search. Engage and enable your teams by helping developers get unblocked, resolve issues faster, and gain codebase insights.',
                    type: 'Guide',
                    href: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
                },
                {
                    title: 'How we used Notebooks to make our CI more accessible and understandable',
                    description:
                        'Learn how Notebooks—Sourcegraph’s in-app living documentaiton—makes it easier to document complex codebases.',
                    type: 'Blog post',
                    href: '/blog/notebooks-ci',
                    img: {
                        src: '/blog/thumbnails/notebooks-ci.jpg',
                        alt: 'Sourcegraph Noebooks CI',
                    },
                },
                {
                    title: 'Dive into documentation',
                    description: 'Learn everything you need to know about Code Search.',
                    type: 'Docs',
                    href: 'https://docs.sourcegraph.com/code_search',
                },
            ].map(post => (
                <BlogResourceItem key={post.title} blog={post} />
            ))}
        </ContentSection>
    </Layout>
)

export default CodeSearchPage
