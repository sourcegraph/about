import { FunctionComponent } from 'react'

import {
    Blockquote,
    ContentSection,
    IntegrationsSection,
    Layout,
    Hero,
    TwoColumnSection,
    Video,
    ResourceList,
    CtaSection,
} from '../components'
import { StandardCallToAction } from '../components/cta/StandardCallToAction'
import { buttonLocation } from '../data/tracking'

const blogResources = [
    {
        title: 'Code search tidbits: 4 underrated features',
        description:
            "You can do some pretty wild things with Sourcegraph that you won't find in any other code search tool today. Read about 4 short-and-sweet tidbits of underrated search features that go a bit extra.",
        type: 'Blog',
        href: '/blog/code-search-tidbits-episode-1',
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
        title: 'Key traits of a code intelligence platform',
        description:
            'Sourcegraph is more than search. Engage and enable your teams by helping developers get unblocked, resolve issues faster, and gain codebase insights.',
        type: 'Guide',
        href: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
    },
]

export const CodeSearchPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Search',
            description:
                'Onboard to a new codebase, find answers faster, and identify security risks with Sourcegraph Code Search. Search across all the repositories you work with.',
        }}
        hero={
            <Hero
                variant="lightNebulousMars"
                product="code search"
                title={'Search your code.\nAll of it.'}
                subtitle="Onboard to a new codebase, understand code faster, and identify security risks with universal code search."
                cta={<StandardCallToAction buttonLocation={buttonLocation.hero} />}
                displayUnderNav={true}
            />
        }
    >
        <ContentSection background="white">
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

        <ContentSection parentClassName="sg-bg-gradient-venus">
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
                            Get answers faster without waiting for context from teammates or dealing with stale local
                            clones.
                        </p>

                        <h5>Mitigate security and compliance risks</h5>
                        <p>
                            Get alerts for vulnerabilities and then automate security fixes across your entire codebase.
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
        </ContentSection>

        <ContentSection background="white">
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
                        loop={true}
                    />
                }
            />
        </ContentSection>

        <ContentSection background="white">
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

        <CtaSection />

        <ResourceList items={blogResources} title="Learn More" />
    </Layout>
)

export default CodeSearchPage
