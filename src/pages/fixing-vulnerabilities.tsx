import { FunctionComponent } from 'react'

import { Layout, HubSpotForm, YouTube } from '../components'
import { buttonStyle, buttonLocation } from '../data/tracking'

const FixingVulnerabilities: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Fixing Security Vulnerabilities | Sourcegraph',
            description:
                "Search within and across repositories to find and fix vulnerabilities in minutes, and deploy fixes with confidence knowing you've found every instance of affected code.",
        }}
    >
        <div className="container mx-auto py-24">
            <div className="grid grid-cols-1 gap-md lg:grid-cols-2">
                <div>
                    <h1 className="mb-6">Find and fix security vulnerabilities faster</h1>
                    <h4>You can't fix what you can't find</h4>
                    <p>
                        Search within and across your repositories to find and fix vulnerabilities in minutes, not
                        weeks. Deploy fixes with confidence, knowing you've found and remediated every instance of
                        affected code. Monitor your code long-term and ensure your customers that you're
                        vulnerability-free.
                    </p>

                    <div className="mt-8 max-w-[400px]">
                        <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
                    </div>
                </div>

                <div>
                    <YouTube
                        title="Finding and fixing vulnerabilities with Sourcegraph"
                        id="13OqKPXqZXo"
                        className="mt-lg-0 mt-6"
                    />
                </div>
            </div>
        </div>

        <div className="container mx-auto max-w-[650px] py-24 text-center">
            <h2>Ready to find, fix, and monitor vulnerabilities with confidence? Let's talk.</h2>

            <div className="mx-auto mt-8 max-w-[400px]">
                <a
                    className="btn btn-primary mt-8 block sm:inline-block"
                    href="https://signup.sourcegraph.com"
                    title="Start for free"
                    data-button-style={buttonStyle.primary}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Start for free
                </a>
            </div>
        </div>
    </Layout>
)

export default FixingVulnerabilities
