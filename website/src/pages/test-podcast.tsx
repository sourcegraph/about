import React, { FunctionComponent } from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import { BlogListItem } from '../components/BlogListItem'

const blogListItems = [
    {
        title: '8 ways to implement better onboarding',
        description:
            'We spoke to engineering leaders and engineers to learn their secrets for successful, repeatable, and scalable onboarding.',
        type: 'Guide',
        image: 'https://sourcegraphstatic.com/better-onboarding-prevent-codebase-overwhelm.png',
        href: '/blog/better-onboarding-how-to-prevent-codebase-overwhelm',
    },
    {
        title: 'How we built our software engineering career framework',
        description:
            'Learn how Sourcegraph built an engineering career development framework to align the entire engineering organization and create consistent, fair, and scalalabe conversations about growth.',
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
            <div className="bg-gradient-fog-onahau py-8">
                <section className="container">
                    <h1 className="display-2 font-weight-bold max-w-600">
                        Accelerate engineering velocity with Sourcegraph
                    </h1>
                    <p className="py-4">See why over 1.2M engineers use Sourcegraph to build software you rely on</p>
                    <Link to="/demo" className="btn btn-purple">
                        Request a demo
                    </Link>
                    <Link to="/get-started" className="btn btn-outline-purple ml-4">
                        Get started
                    </Link>
                </section>
            </div>

            {/* TODO: Move fast, case study list */}
            <div className="container my-6">
                <h1 className="font-weight-bold">Move fast — even in big code bases</h1>
                <p>Learn how these software companies used Sourcegraph</p>
            </div>

            <div className="bg-gradient-onahau-green py-3">
                <section className="container text-center">
                    <h1 className="font-weight-bold">Want to use Sourcegraph at your company?</h1>
                    <p className="py-4 mx-auto max-w-500">
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

            <div className="container mt-8">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {blogListItems.map(item => (
                    <BlogListItem key={item.title} blog={item} />
                ))}
            </div>
        </Layout>
    )
}

export default PartnerPodcastPage
