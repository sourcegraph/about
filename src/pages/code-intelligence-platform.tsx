import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, BlogResourceItem, ContentSection, TwoColumnSection, Video } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const blogResourceItems = [
    {
        title: 'Why we’re friends, not competitors, with code hosts',
        description:
            'Sourcegraph relies on code hosts to exist, and code hosts benefit from the existence of a good, ventor-nutural code intelligence platform.',
        type: 'Blog post',
        img: {
            src: '/backgrounds/dark-multi-grid.jpg',
            alt: 'Dark grid',
        },
        href: "/blog/why-we're-friends-with-code-hosts",
    },
    {
        title: '3 things to know before building a custom, in-house code search tool',
        description:
            'Questions we suggest that developers ask before building a code search tool inside of their organization.',
        type: 'Blog post',
        img: {
            src: 'blog/buy-vs-build-blog.png',
            alt: 'Two people putting magnifying glasses into a shopping cart',
        },
        href: '/blog/things-to-know-before-building-a-code-search-tool',
    },
]

const CodeIntelligencePlatform: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Key traits of a code intelligence platform',
            description:
                "Sourcegraph's code intelligence platform is more than search. It helps developers save time and move faster regardless of how complex your codebase is.",
        }}
        hero={
            <section className="bg-gradient-saturn">
                <div className="container py-7 text-md-center">
                    <h1 className="font-weight-bold">Key traits of a code intelligence platform</h1>
                    <h3 className="font-weight-normal py-4 mx-md-auto max-w-750">Sourcegraph helps developers save time and move faster, regardless of how complex your codebase is: any code host, any language, and any repository.</h3>

                    <Link href="/demo">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary max-w-md-200 w-100"
                            title="Request a demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.hero}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                </div>
            </section>
        }
    >
        {/* TODO: New carousel section */}

        <ContentSection color="white" className="py-7">
            <h2 className="pb-5 px-0 col-12 col-lg-6">Sourcegraph helps enterprise development teams...</h2>

            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">Get unblocked</h2>
                        <ul>
                            <li className="mb-3">
                                Sourcegraph helps developers uncover answers, understand code, and take actions in the codebase without interrupting teammates.
                            </li>
                            <li className="mb-3">
                                Developers at <i>a well-known American social news site</i> save 30 – 60 minutes a day with faster access to answers.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
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
                        <h2 className="mb-4">Save time resolving issues</h2>
                        <ul>
                            <li className="mb-3">
                                Sourcegraph helps development teams quickly identify, resolve, and proactively prevent issues from happening again.
                            </li>
                            <li className="mb-3">
                                <Link href="/case-studies/indeed-accelerates-development-velocity">
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        title="Indeed"
                                        data-button-style={buttonStyle.text}
                                        data-button-location={buttonLocation.body}
                                        data-button-type="cta"
                                    >
                                        Indeed
                                    </a>
                                </Link>
                                {' '}saw a 90% reduction in manual work required for large-scale code changes.
                            </li>
                        </ul>
                    </>
                }
            />
        </ContentSection>

        <ContentSection color="white" className="py-7">
            <TwoColumnSection
                centerContent={true}
                leftColumn={
                    <>
                        <h2 className="mb-4">Gain insights and track progress</h2>
                        <ul>
                            <li className="mb-3">
                                Developers use insights to track migration and deprecation projects to completion and visualize version spread and security vulnerabilities, while leaders rely on analytics to make data-driven decisions and create clear success metrics for their teams. 
                            </li>
                            <li className="mb-3">
                                A <i>top hybrid multi-cloud provider</i> resolves security vulnerabilities 4x faster and measures progress each step of the way.
                            </li>
                        </ul>
                    </>
                }
                rightColumn={
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
            />
        </ContentSection>

        {/* TODO: Saturn quote carousel */}

        <ContentSection className="py-7">
            <section className="max-w-800 mx-auto text-md-center">
                <h2>Sourcegraph’s code intelligence platform is more than simply search.</h2>

                <p className="max-w-md-450 my-5 mx-md-auto">The platform drives velocity by helping development teams quickly get unblocked, save time resolving issues, and gain insights to make better decisions.</p>

                <Link href="/demo">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className="btn btn-primary max-w-md-200 w-100"
                            title="Request a demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                </Link>
            </section>
        </ContentSection>

        <ContentSection color="white" className="container max-w-900 py-7 px-0">
            <div className="col-lg-6">
                <h1 className="mb-5 font-weight-bold">Related resources</h1>
            </div>
            {blogResourceItems.map(item => (
                <BlogResourceItem key={item.title} blog={item} />
            ))}
        </ContentSection>
    </Layout>
)

export default CodeIntelligencePlatform
