import React, { FunctionComponent } from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'

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
            <div className="bg-gradient-onahau-fog py-8">
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

            <div className="bg-gradient-onahau-fog py-3">
                <section className="container text-center">
                    <h2>Want to use Sourcegraph at your company?</h2>
                    <p className="py-4 mx-auto max-w-500">
                        Get started for free with up to 10 teammates or request a demo to learn about our enterprise
                        plan and to see Sourcegraph in your own environment.
                    </p>
                </section>
            </div>

            {/* TODO: Related resources / blogposts */}
        </Layout>
    )
}

export default PartnerPodcastPage
