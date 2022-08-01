import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, BlogResourceItem } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const blogResourceItems = [
    {
        title: 'Why we’re friends, not competitors, with code hosts',
        description:
            'Sourcegraph relies on code hosts to exist, and code hosts benefit from the existence of a good, ventor-nutural code intelligence platform.',
        type: 'Blog post',
        img: {
            src: '/src/components/Background/assets/backgrounds/dark-multi-grid.jpg',
            alt: 'Dark grid',
        },
        href: '/guides/continuous-developer-onboarding',
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
                            data-button-location={buttonLocation.bodyDemo}
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

        {/* TODO: 2 Col section */}

        {/* TODO: Saturn quote carousel */}

        {/* TODO: CTA */}

        <div className="container max-w-900 py-7 px-0">
            <div className="col-lg-6">
                <h1 className="mb-5 font-weight-bold">Related resources</h1>
            </div>
            {blogResourceItems.map(item => (
                <BlogResourceItem key={item.title} blog={item} />
            ))}
        </div>
    </Layout>
)

export default CodeIntelligencePlatform
