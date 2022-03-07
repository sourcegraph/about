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
            title: 'Fixing Security Vulnerabilities | Sourcegraph',
            description:
                "Search within and across repositories to find and fix vulnerabilities in minutes, and deploy fixes with confidence knowing you've found every instance of affected code.",
        }}
    >
        <div className="container py-6">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="mb-4 font-weight-bold">Find and fix security vulnerabilities faster</h1>
                    <h4 className="font-weight-bold">You can't fix what you can't find</h4>
                    <p>
                        Search within and across your repositories to find and fix vulnerabilities in minutes, not
                        weeks. Deploy fixes with confidence, knowing you've found and remediated every instance of
                        affected code. Monitor your code long-term and ensure your customers that you're
                        vulnerability-free.
                    </p>

                    <div className="mt-5">
                        <TempForm />
                    </div>
                </div>

                <div className="col-lg-6 mt-4 mt-lg-0">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/13OqKPXqZXo"
                        title="Finding and fixing vulnerabilities with Sourcegraph"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

        <div className="bg-gradient-onahau-mint text-center">
            <div className="container col-lg-6 py-6">
                <h1 className="mb-4 font-weight-bold">Indeed merges code at scale</h1>
                <blockquote>
                    <p className="mb-4">
                        &ldquo;On average, I'd say that for every automated merge request that we're able to merge we
                        save an hour. That's a rough but conservative estimate. It shows, though, that if we are doing
                        several thousand automated merges in a year, we're saving several employee's worth of
                        time.&rdquo;
                    </p>
                    <figcaption className="text-muted">
                        —Jared Hodge, Senior Manager, Developer Experience at Indeed
                    </figcaption>
                </blockquote>

                {/* TODO: replace with SVG Component when #5177 is merged */}
                <img src="/external-logos/indeed-logo.svg" alt="Indeed logo" width={130} className="mt-4" />

                <Link
                    to="/case-studies/indeed-accelerates-development-velocity"
                    className="d-block mt-5 font-weight-bold"
                >
                    Read the full case study
                </Link>
            </div>
        </div>

        <div className="text-center">
            <div className="container col-lg-8 py-8">
                <h1 className="font-weight-bold">
                    Ready to find, fix, and monitor vulnerabilities with confidence? Let's talk!
                </h1>

                <div className="mt-5">
                    <TempForm />
                </div>
            </div>
        </div>
    </Layout>
)

export default FindAndFixVulnerabilities
