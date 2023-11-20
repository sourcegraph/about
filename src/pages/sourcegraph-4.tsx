import { FunctionComponent } from 'react'

import BarChartIcon from 'mdi-react/BarChartIcon'
import CloudUploadIcon from 'mdi-react/CloudUploadIcon'
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import UpdateIcon from 'mdi-react/UpdateIcon'
import Link from 'next/link'
import { TwitchPlayer } from 'react-twitch-embed'

import {
    ContentSection,
    CallToActionContentSection,
    CustomerLogos,
    Layout,
    ThreeUpText,
    Badge,
    YouTube,
    ResourceList,
} from '../components'
import { buttonLocation, buttonStyle } from '../data/tracking'

const Sourcegraph4: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Sourcegraph 4.0',
            description: 'Introducing Sourcegraph 4.0, the code intelligence platform for the modern development team.',
            image: 'https://storage.googleapis.com/sourcegraph-assets/sourcegraph.com/meta/sourcegraph-4-post-launch.png',
        }}
        heroAndHeaderClassName="bg-[url('/backgrounds/starship-launch-pills-large.svg')] bg-no-repeat bg-cover bg-center"
        headerColorTheme="dark"
        hero={
            <div className="px-sm py-3xl md:py-5xl">
                <div className="mx-auto max-w-[850px] text-center text-white">
                    <img
                        src="/sourcegraph/sourcegraph-4-starship-reflected.svg"
                        alt="Sourcegraph 4.0 Starship"
                        className="mx-auto w-full max-w-screen-md"
                    />

                    <h1 className="mb-sm mt-3xl sm:mt-36">From code search to code intelligence</h1>
                    <h3 className="mx-auto mb-5xl max-w-2xl">
                        Sourcegraph 4.0, the latest release of our code intelligence platform, is now available.
                    </h3>

                    <YouTube title="Sourcegraph 4.0" id="f9TCME0WYY8" />
                </div>
            </div>
        }
    >
        <ResourceList
            title="Learn more about Sourcegraph 4.0"
            items={[
                {
                    title: 'From code search to a code intelligence platform',
                    description:
                        'Since its inception, Sourcegraph has evolved from code search into a code intelligence platform. Our CEO and cofounder, Quinn Slack, shares what code intelligence means for the future of software development.',
                    type: 'Blog Post',
                    href: '/blog/code-search-to-code-intelligence',
                    img: {
                        src: 'https://storage.googleapis.com/sourcegraph-assets/blog/4.0/to-code-intelligence-thumb.png',
                        alt: 'Sourcegraph Code Intelligence Platform',
                    },
                },
                {
                    title: 'Sourcegraph 4.0 release post',
                    description:
                        'Sourcegraph 4.0 includes 12+ features and improvements. Check out the release post for an in-depth look at everything that shipped.',
                    type: 'Blog Post',
                    href: '/blog/release/4.0',
                    img: {
                        src: 'https://storage.googleapis.com/sourcegraph-assets/blog/4.0/release-thumb.png',
                        alt: 'Sourcegraph 4.0',
                    },
                },
                {
                    title: 'Secure and scalable Sourcegraph Cloud instances for the enterprise',
                    description:
                        'Sourcegraph Cloud, our single-tenant cloud solution for enterprise, is now generally available.',
                    type: 'Blog Post',
                    href: '/blog/enterprise-cloud',
                    img: {
                        src: 'https://storage.googleapis.com/sourcegraph-assets/blog/4.0/cloud-instances.png',
                        alt: 'Sourcegraph Cloud',
                    },
                },
            ]}
        />

        <ContentSection background="white" parentClassName="pt-0 md:pt-0">
            <div className="mb-5xl">
                <ThreeUpText
                    title={
                        <>
                            Top updates released in{' '}
                            <Link
                                href="/blog/release/4.0"
                                data-button-style={buttonStyle.text}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                Sourcegraph 4.0
                            </Link>
                        </>
                    }
                    fullWidthTitle={true}
                    items={[
                        {
                            icon: (
                                <span className="inline-block rounded-lg bg-violet-100 p-3 text-violet-400">
                                    <MagnifyIcon />
                                </span>
                            ),
                            subtitle: 'Search improvements',
                            description: 'A faster, simpler, and more streamlined search experience with a new UI',
                        },
                        {
                            icon: (
                                <span className="inline-block rounded-lg bg-violet-100 p-3 text-violet-400">
                                    <CloudUploadIcon />
                                </span>
                            ),
                            subtitle: 'Enterprise cloud deployment',
                            description: 'Secure and scalable single-tenant cloud instances',
                        },
                        {
                            icon: (
                                <span className="inline-block rounded-lg bg-violet-100 p-3 text-violet-400">
                                    <img src="/icons/batch-changes.svg" alt="" width={24} height={24} />
                                </span>
                            ),
                            subtitle: (
                                <div>
                                    Server-side Batch Changes{' '}
                                    <span className="ml-xxs">
                                        <Badge color="light-gray" size="small" text="Beta" />
                                    </span>
                                </div>
                            ),
                            description:
                                'Run large-scale batch changes and iterate faster on updates across the codebase',
                        },
                        {
                            icon: (
                                <span className="inline-block rounded-lg bg-violet-100 p-3 text-violet-400">
                                    <HeartOutlineIcon />
                                </span>
                            ),
                            subtitle: 'Improved admin experience',
                            description: 'Enhanced usage analytics, OpenTelemetry, and more',
                        },
                        {
                            icon: (
                                <span className="inline-block rounded-lg bg-violet-100 p-3 text-violet-400">
                                    <BarChartIcon />
                                </span>
                            ),
                            subtitle: 'Code Insights in the search UI',
                            description:
                                'Understand usage patterns, refine search results, and answer high-level questions',
                        },
                        {
                            icon: (
                                <span className="inline-block rounded-lg bg-violet-100 p-3 text-violet-400">
                                    <UpdateIcon />
                                </span>
                            ),
                            subtitle: 'Multi-version upgrades',
                            description: 'Upgrade from Sourcegraph 3.20 to Sourcegraph 4.0 in a few simple steps',
                        },
                    ]}
                />
            </div>

            <div className="mx-auto max-w-5xl text-center">
                <h2 className="mb-3xl">Experience 4.0 with the Sourcegraph Engineering team</h2>

                <div className="mx-auto aspect-video max-w-[800px]">
                    <TwitchPlayer video="1604525409" autoplay={false} width="100%" height="100%" />
                </div>
            </div>

            <h2 className="mx-auto mt-5xl mb-3xl max-w-[700px] text-center">
                Join these engineering orgs pushing forward modern software development
            </h2>

            <CustomerLogos />
        </ContentSection>

        <CallToActionContentSection
            cta2={{
                text: 'View pricing',
                ctaStyle: 'outlineButtonLight',
                link: '/pricing',
            }}
        />
    </Layout>
)

export default Sourcegraph4
