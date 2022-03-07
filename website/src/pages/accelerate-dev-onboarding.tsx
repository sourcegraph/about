import React, { FunctionComponent } from 'react'
import { Link, PageProps } from 'gatsby'

import Layout from '../components/Layout'

// This is temporary as a visual only.
// TODO: Waiting on form embed code which will replace this form.
const TempForm: FunctionComponent = () => (
    <>
        <input
            style={{ height: 42, maxWidth: 350, width: '100%', border: '1px solid #2A66E2' }}
            placeholder="Enter your email here"
            className="rounded-left p-3"
        />
        <button
            style={{ height: 42, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            className="btn btn-primary ml-0"
        >
            Let's talk
        </button>
    </>
)

const FindAndFixVulnerabilities: FunctionComponent<PageProps> = props => (
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
                <div className="col-lg-6">
                    <h1 className="mb-4 font-weight-bold">
                        Accelerate developer onboarding and decrease time to first commit
                    </h1>
                    <h4 className="font-weight-bold">
                        Self-serve onboarding, codebase exploration, and knowledge sharing
                    </h4>
                    <p>
                        With Sourcegraph, developers can find their own answers without waiting for someone to point
                        them to the relevant code. Get sharable links to help new developers ask specific questions with
                        context included, and enable senior devs to share their knowledge without the friction of
                        running local searches for specific bits of code.
                    </p>

                    <div className="mt-5">
                        <TempForm />
                    </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DgwvhRW1Cbc"
                        title="Accelerate developer onboarding with Sourcegraph"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div className="bg-gradient-onahau-fog text-center">
            <div className="container col-lg-6 py-6">
                <h1 className="mb-4 font-weight-bold">
                    See how Convoy increases the efficiency and confidence of entry level developers
                </h1>
                <blockquote>
                    <p className="mb-4">
                        &ldquo;For our new developers, Sourcegraph has been invaluable to get to know the repository
                        structure, to track down where code lives, and self-service during their investigations.&rdquo;
                    </p>
                    <figcaption className="text-muted">—Owen Kim, Senior Software Engineer at Convoy</figcaption>
                </blockquote>

                <img src="/external-logos/convoy-logo.svg" alt="Convoy logo" width={130} className="mt-4" />

                <Link to="/case-studies/convoy-improved-on-boarding" className="d-block mt-5 font-weight-bold">
                    Read the full case study
                </Link>
            </div>
        </div>

        <div className="text-center">
            <div className="container col-lg-8 py-8">
                <h1 className="font-weight-bold">
                    Time to think about your developer onboarding workflow? Let's talk!{' '}
                </h1>

                <div className="mt-5">
                    <TempForm />
                </div>
            </div>
        </div>
    </Layout>
)

export default FindAndFixVulnerabilities
