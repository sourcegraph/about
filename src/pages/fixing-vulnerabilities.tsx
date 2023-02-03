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

        <div className="container tw-text-center py-7 max-w-650">
            <h2>Ready to find, fix, and monitor vulnerabilities with confidence? Let's talk.</h2>

            <div className="tw-mx-auto mt-5 max-w-400">
                <a
                    className="mt-5 btn btn-primary tw-block sm:tw-inline-block"
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
