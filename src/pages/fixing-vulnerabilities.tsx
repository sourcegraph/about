import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, FormLegal } from '@components'
import { useHubSpot } from '@hooks'

const FixingVulnerabilities: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '721ac3eb-d213-45b1-858a-2df8743ad143',
        targetId: ['form-0', 'form-1'],
        chiliPiper: true,
    })

    return (
        <Layout
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

                        <div className="mt-5 mw-400">
                            <div id="form-0" />
                            <FormLegal />
                        </div>
                    </div>

                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://www.youtube.com/embed/13OqKPXqZXo"
                                title="Finding and fixing vulnerabilities with Sourcegraph"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen={true}
                                className="embed-responsive-item"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-venus-saturated text-center">
                <div className="container py-6 mw-650">
                    <h2 className="mb-4 font-weight-bold">
                        Cloudflare proves to auditors that its code isn't vulnerable
                    </h2>
                    <blockquote>
                        <p>
                            &ldquo;[Sourcegraph] is the best way to prove that we're not vulnerable to a particular CVE,
                            if and when we get asked by an auditor.&rdquo;
                        </p>
                        <figcaption className="text-muted mt-4">
                            &mdash; David Haynes, Security Engineer at Cloudflare
                        </figcaption>
                    </blockquote>

                    <img src="/external-logos/cloudflare-logo.svg" alt="Cloudflare logo" width={130} className="mt-4" />

                    <Link href="/case-studies/cloudflare-accelerates-debugging-and-improves-security">
                        <a href="#none" className="d-block mt-5 font-weight-bold">
                            Read the full case study
                        </a>
                    </Link>
                </div>
            </div>

            <div className="text-center">
                <div className="container py-8 mw-650">
                    <h2 className="font-weight-bold">
                        Ready to find, fix, and monitor vulnerabilities with confidence? Let's talk.
                    </h2>

                    <div className="mt-5 mw-400 mx-auto">
                        <div id="form-1" />
                        <FormLegal />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FixingVulnerabilities
