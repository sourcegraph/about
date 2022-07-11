import { FunctionComponent } from 'react'

import Link from 'next/link'

import { BlockquoteWithLogoBottom, Layout, FormLegal, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'
import { useHubSpot, useChiliPiper } from '@hooks'

const FixingVulnerabilities: FunctionComponent = () => {
    useHubSpot({
        portalId: '2762526',
        formId: '721ac3eb-d213-45b1-858a-2df8743ad143',
        targetId: 'form-0',
    })
    useChiliPiper()

    return (
        <Layout
            meta={{
                title: 'Fixing Security Vulnerabilities | Sourcegraph',
                description:
                    "Search within and across repositories to find and fix vulnerabilities in minutes, and deploy fixes with confidence knowing you've found every instance of affected code.",
            }}
        >
            <div className="container py-7">
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

                        <div className="mt-5 max-w-400">
                            <div id="form-0" />
                            <FormLegal />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <YouTube
                            title="Finding and fixing vulnerabilities with Sourcegraph"
                            id="13OqKPXqZXo"
                            className="mt-4 mt-lg-0"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-gradient-venus-saturated text-center">
                <div className="container py-7 max-w-650">
                    <BlockquoteWithLogoBottom
                        header="Cloudflare proves to auditors that its code isn't vulnerable"
                        quote="[Sourcegraph] is the best way to prove that we're not vulnerable to a particular CVE,
                        if and when we get asked by an auditor."
                        author="David Haynes, Security Engineer at Cloudflare"
                        logo={{ src: '/external-logos/cloudflare-logo.svg', alt: 'Cloudflare logo' }}
                        link={{
                            text: 'Read the full case study',
                            href: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
                        }}
                    />
                </div>
            </div>

            <div className="text-center container py-7 max-w-650">
                <h2 className="font-weight-bold">
                    Ready to find, fix, and monitor vulnerabilities with confidence? Let's talk.
                </h2>

                <div className="mt-5 max-w-400 mx-auto">
                    <Link href="/demo">
                        <a
                            className="btn btn-primary mt-5 d-block d-sm-inline-block"
                            href="#none"
                            title="Request a demo"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            Request a demo
                        </a>
                    </Link>
                    <FormLegal />
                </div>
            </div>
        </Layout>
    )
}

export default FixingVulnerabilities
