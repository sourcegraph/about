import React, { FunctionComponent } from 'react'

import { Layout, YouTube, HubSpotForm } from '@components'

const Demo: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Request a Demo - Sourcegraph',
            description:
                "From developer onboarding to incident response, see how companies of all sizes use Sourcegraph to solve the industry's most challenging code problems.",
        }}
        heroAndHeaderClassName="sg-bg-gradient-venus"
        hero={
            <div className="container tw-pt-3xl tw-pb-sm">
                <h1>Request a demo</h1>
                <p className="max-w-450">Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert.</p>
            </div>
        }
    >
        <div className="container tw-pt-3xl">
            <div className="row">
                <div className="col-lg-6">
                    <h2>Let us show you around</h2>
                    <p>Watch this quick video to see what Sourcegraph can do</p>

                    <YouTube title="Sourcegraph Product Tour" id="Kk1ea2-l8Hk" className="my-5" />
                </div>

                <div className="mt-5 col-lg-6 lg:tw-pl-5xl mt-lg-0">
                    <h2>Like what you see?</h2>
                    <p className="mb-5">
                        Get a live demo in your environment! Just fill out the form to request a demo.
                    </p>

                    <HubSpotForm masterFormName="contactMulti" chiliPiper={true} />
                </div>
            </div>
        </div>
    </Layout>
)

export default Demo
