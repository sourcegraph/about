import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Blockquote, Layout, HubSpotForm, YouTube } from '@components'
import { buttonStyle, buttonLocation } from '@data'

const FixingVulnerabilities: FunctionComponent = () => (
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
                    <h1 className="mb-4">Find and fix security vulnerabilities faster</h1>
                    <h4>You can't fix what you can't find</h4>
                    <p>
                        Search within and across your repositories to find and fix vulnerabilities in minutes, not
                        weeks. Deploy fixes with confidence, knowing you've found and remediated every instance of
                        affected code. Monitor your code long-term and ensure your customers that you're
                        vulnerability-free.
                    </p>

                    <div className="mt-5 max-w-400">
                        <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
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

        <div className="tw-text-center sg-bg-gradient-venus">
            <div className="container py-7 max-w-650">
                <Blockquote
                    headline="Cloudflare proves to auditors that its code isn't vulnerable"
                    quote="[Sourcegraph] is the best way to prove that we're not vulnerable to a particular CVE,
                    if and when we get asked by an auditor."
                    author="David Haynes, Security Engineer at Cloudflare"
                    border={false}
                    logo={{ src: '/external-logos/cloudflare-logo.svg', alt: 'Cloudflare logo' }}
                    link={{
                        text: 'Read the full case study',
                        href: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
                    }}
                />
            </div>
        </div>

        <div className="container tw-text-center py-7 max-w-650">
            <h2>Ready to find, fix, and monitor vulnerabilities with confidence? Let's talk.</h2>

            <div className="tw-mx-auto mt-5 max-w-400">
                <Link href="/demo">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="mt-5 btn btn-primary tw-block sm:tw-inline-block"
                        title="Request a demo"
                        data-button-style={buttonStyle.primary}
                        data-button-location={buttonLocation.bodyDemo}
                        data-button-type="cta"
                    >
                        Request a demo
                    </a>
                </Link>
            </div>
        </div>
    </Layout>
)

export default FixingVulnerabilities
