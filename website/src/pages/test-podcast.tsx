import React, { FunctionComponent } from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import { BlogListItem } from '../components/BlogListItem'

const resourceItems = [
    {
        title: 'Continuous developer onboarding: A guide to cultivating a culture of professional growth',
        description:
            'Download the guide to developer onboarding and learn how to shift to a culture of continuous onboarding in your engineering organization.',
        type: 'Guide',
        image: '/guides/dev-onboarding/hero.png',
        href: '/guides/continuous-developer-onboarding',
    },
    {
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
        description:
            'See how Nutanix was able to confidently identify every instance of Log4j across its sprwaling codebase and deliver patches to its customers that fully remediated the vulnerability within 4 days.',
        type: 'Case study',
        image: 'https://storage.googleapis.com/sourcegraph-assets/blog/engineering-framework-images/Engineering%20career%20framework%20hero%20FINAL.png',
        href: '/blog/software-engineer-career-ladder',
    },
]

const PartnerPodcastPage: FunctionComponent<PageProps> = props => {
    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Code Intelligence Platform | Sourcegraph',
                description:
                    'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
            }}
        >
            <div className="bg-gradient-fog-onahau py-md-8 py-6">
                <section className="container">
                    <h1 className="display-2 font-weight-bold max-w-600">
                        Accelerate engineering velocity with Sourcegraph
                    </h1>
                    <p className="py-4">See why over 1.2M engineers use Sourcegraph to build software you rely on</p>
                    <div className="d-flex flex-column flex-md-row">
                        <Link to="/demo" className="btn btn-purple max-w-200">
                            Request a demo
                        </Link>
                        <Link to="/get-started" className="btn btn-outline-purple max-w-150 ml-md-4 mt-4 mt-md-0">
                            Get started
                        </Link>
                    </div>
                </section>
            </div>

            {/* TODO: Move fast, case study list */}
            <div className="container my-6">
                <h1 className="display-4 font-weight-bold">Move fast — even in big code bases</h1>
                <p>Learn how these software companies used Sourcegraph</p>
            </div>

            <div className="bg-gradient-onahau-green py-6">
                <section className="container text-center">
                    <h1 className="display-4 font-weight-bold pt-2">Want to use Sourcegraph at your company?</h1>
                    <p className="pt-4 mx-auto max-w-500">
                        <span>
                            <Link to="/get-started">Get started </Link>
                        </span>
                        for free with up to 10 teammates or
                        <span>
                            <Link to="/demo"> request a demo </Link>
                        </span>
                        to learn about our enterprise plan and to see Sourcegraph in your own environment.
                    </p>
                </section>
            </div>

            <div className="container my-md-8 my-6">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {resourceItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>

            <div className="py-5 d-flex flex-md-row flex-column align-items-center justify-content-center bg-purple text-white font-weight-bold">
                <p className="max-w-200 max-w-md-400 text-center my-auto pr-md-4">
                    Looking for our changelog? Look no further
                </p>
                <a
                    href="https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md"
                    className="rounded btn btn-outline-purple mt-md-0 mt-3"
                >
                    Changelog
                </a>
            </div>
        </Layout>
    )
}

export default PartnerPodcastPage
