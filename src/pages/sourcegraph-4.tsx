import { FunctionComponent } from 'react'

import BarChartIcon from 'mdi-react/BarChartIcon'
import CloudUploadIcon from 'mdi-react/CloudUploadIcon'
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import UpdateIcon from 'mdi-react/UpdateIcon'
import Link from 'next/link'
import { TwitchEmbed } from 'react-twitch-embed'

import {
    ContentSection,
    CtaSection,
    CustomerLogos,
    Layout,
    ThreeUpText,
    Badge,
    YouTube,
    ResourceList,
} from '@components'
import { buttonLocation, buttonStyle } from '@data'

const Sourcegraph4: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Sourcegraph 4.0',
            description: 'Introducing Sourcegraph 4.0, the code intelligence platform for the modern development team.',
            image: 'https://storage.googleapis.com/sourcegraph-assets/about.sourcegraph.com/meta/sourcegraph-4.png',
        }}
        heroAndHeaderClassName="sg-bg-gradient-starship-large"
        className="navbar-dark"
        hero={
            <div className="tw-px-sm tw-py-3xl md:tw-py-5xl">
                <div className="tw-max-w-[800px] tw-mx-auto tw-text-center tw-text-white">
                    <img
                        src="/sourcegraph/sourcegraph-4-starship-reflected.svg"
                        alt="Sourcegraph 4.0 Starship"
                        className="tw-mx-auto tw-max-w-screen-md tw-w-full"
                    />

                    <h1 className="tw-mb-sm -tw-mt-36">The future of Sourcegraph is here</h1>
                    <h3 className="tw-mb-5xl">
                        Sourcegraph 4.0, the latest release of our code intelligence platform, is now available. Watch
                        the livestream.
                    </h3>

                    <TwitchEmbed channel="sourcegraph" width={800} className="tw-w-full" />
                </div>
            </div>
        }
    >
        <ResourceList
            title="Learn more about Sourcegraph 4.0"
            items={[
                {
                    title: 'From code search towards a code intelligence platform',
                    description:
                        'Since its inception, Sourcegraph has evolved from code search into a code intelligence platform. Our CEO and cofounder, Quinn Slack, shares what code intelligence means for the future of software development.',
                    type: 'Blog Post',
                    href: '/blog/code-search-to-code-intelligence',
                    img: {
                        src: 'https://via.placeholder.com/256x156',
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
                        src: 'https://via.placeholder.com/256x156',
                        alt: 'Sourcegraph 4.0',
                    },
                },
                {
                    title: 'Secure and scalable Sourcegraph Cloud instances for the enterprise',
                    description:
                        'Sourcegraph Cloud, our single-tenant Cloud solution for enterprise, is now generally available.',
                    type: 'Blog Post',
                    href: '/blog/enterprise-cloud',
                    img: {
                        src: 'https://via.placeholder.com/256x156',
                        alt: 'Sourcegraph Cloud',
                    },
                },
            ]}
        />

        <ContentSection background="white" parentClassName="tw-pt-0 md:tw-pt-0">
            <div className="tw-mb-5xl">
                <ThreeUpText
                    title="Top updates released in Sourcegraph 4.0"
                    fullWidthTitle={true}
                    items={[
                        {
                            icon: (
                                <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                    <MagnifyIcon />
                                </span>
                            ),
                            subtitle: 'Search improvements',
                            description: 'A faster, simpler, and more streamlined search experience with a new UI',
                        },
                        {
                            icon: (
                                <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                    <CloudUploadIcon />
                                </span>
                            ),
                            subtitle: 'Enterprise Cloud deployment',
                            description: 'Secure, easy, and scalable dedicated Cloud instances',
                        },
                        {
                            icon: (
                                <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                    <img src="/icons/batch-changes.svg" alt="" width={24} height={24} />
                                </span>
                            ),
                            subtitle: (
                                <div>
                                    Server-side Batch Changes{' '}
                                    <span className="tw-ml-xxs">
                                        <Badge color="light-gray" size="small" text="Beta" />
                                    </span>
                                </div>
                            ),
                            description:
                                'Run large-scale batch changes and iterate faster on updates across the codebase',
                        },
                        {
                            icon: (
                                <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                    <HeartOutlineIcon />
                                </span>
                            ),
                            subtitle: 'Improved admin experience',
                            description: 'Enhanced usage analytics, OpenTelemetry, and more',
                        },
                        {
                            icon: (
                                <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                    <BarChartIcon />
                                </span>
                            ),
                            subtitle: 'Relevant search aggregations',
                            description:
                                'Aggregations of search results help to refine searches and illuminate usage patterns',
                        },
                        {
                            icon: (
                                <span className="tw-inline-block tw-bg-violet-100 tw-text-violet-400 tw-rounded-lg tw-p-3">
                                    <UpdateIcon />
                                </span>
                            ),
                            subtitle: 'Multi-version upgrades',
                            description: 'Upgrade from Sourcegraph 3.29 to Sourcegraph 4.0 in a few simple steps ',
                        },
                    ]}
                />
            </div>

            <div className="tw-max-w-[800px] tw-mx-auto tw-text-center">
                <h2 className="tw-mb-3xl">
                    See the highlights from{' '}
                    <Link href="/blog/release/4.0" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Sourcegraph 4.0
                        </a>
                    </Link>
                </h2>

                <YouTube title="Sourcegraph 4.0" id="Kk1ea2-l8Hk" />

                <h2 className="tw-mt-5xl tw-mb-3xl">
                    Join these engineering orgs pushing forward modern software development
                </h2>
            </div>

            <CustomerLogos />
        </ContentSection>

        <CtaSection
            background="starshipLaunchPills"
            centerContent={true}
            title="Learn more about the code intelligence platform for modern development teams"
            description=""
            cta1={{
                text: 'Get free trial',
                ctaStyle: 'primaryButton',
                link: 'https://signup.sourcegraph.com',
            }}
            cta2={{
                text: 'View pricing',
                ctaStyle: 'outlineButtonLight',
                link: '/pricing',
            }}
        />
    </Layout>
)

export default Sourcegraph4
