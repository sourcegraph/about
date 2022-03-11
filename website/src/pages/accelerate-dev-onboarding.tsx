import React, { FunctionComponent, useEffect } from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'
import { createHubSpotForm } from '../components/HubSpot'

const FindAndFixVulnerabilities: FunctionComponent<PageProps> = props => {
    useEffect(() => {
        for (let n = 0; n < 2; n++) {
            createHubSpotForm({
                region: 'na1',
                portalId: '2762526',
                formId: '98187d3b-d8a9-43e2-bb95-d93dd029c688',
                targetId: `form-${n}`,
            })
        }
    }, [])

    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Accelerating Developer Onboarding | Sourcegraph',
                description:
                    'Get sharable links to help new developers ask questions with context, and enable senior devs to share knowledge without running local searches for specific bits of code.',
            }}
        >
            <div className="container py-6">
                <div className="row">
                    <div className="col-lg-6 pr-lg-5">
                        <h1 className="mb-4 font-weight-bold">
                            Accelerate developer onboarding and decrease time to first commit
                        </h1>
                        <h4 className="font-weight-bold">
                            Self-serve onboarding, codebase exploration, and knowledge sharing
                        </h4>
                        <p>
                            With Sourcegraph, developers can find their own answers without waiting for someone to point
                            them to the relevant code. Get sharable links to help new developers ask specific questions
                            with context included, and enable senior devs to share their knowledge without the friction
                            of running local searches for specific bits of code.
                        </p>

                        <div className="mt-5">
                            <div id="form-0" />
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://www.youtube.com/embed/DgwvhRW1Cbc"
                                title="Accelerate developer onboarding with Sourcegraph"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="embed-responsive-item"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-onahau-fog text-center">
                <div className="container col-lg-6 py-6">
                    <h2 className="mb-4 font-weight-bold">
                        See how Convoy increases the efficiency and confidence of entry level developers
                    </h2>
                    <blockquote>
                        <p>
                            &ldquo;For our new developers, Sourcegraph has been invaluable to get to know the repository
                            structure, to track down where code lives, and self-service during their
                            investigations.&rdquo;
                        </p>
                        <figcaption className="text-muted mt-4">
                            —Owen Kim, Senior Software Engineer at Convoy
                        </figcaption>
                    </blockquote>

                    <img src="/external-logos/convoy-logo.svg" alt="Convoy logo" width={130} className="mt-4" />

                    <Link to="/case-studies/convoy-improved-on-boarding" className="d-block mt-5 font-weight-bold">
                        Read the full case study
                    </Link>
                </div>
            </div>

            <div className="text-center">
                <div className="container col-lg-8 py-8">
                    <h2 className="font-weight-bold">
                        Time to think about your developer onboarding workflow? Let's talk!
                    </h2>

                    <div className="mt-5">
                        <div id="form-1" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FindAndFixVulnerabilities
