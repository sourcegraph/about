import React, { FunctionComponent } from 'react'

import { Layout, YouTube, HubSpotForm } from '@components'

const Demo: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Request a Demo | Sourcegraph',
            description:
                "From developer onboarding to incident response, see how companies of all sizes use Sourcegraph to solve the industry's most challenging code problems.",
        }}
        heroAndHeaderClassName="bg-gradient-green-blue"
        hero={
            <div className="container pt-6 pb-4">
                <h1 className="font-weight-bolder">Request a demo</h1>
                <p className="max-w-450">
                    Want to see Sourcegraph in action? Schedule time with a Sourcegraph expert.
                </p>
            </div>
        }
    >
        <div className="container pt-6">
            <div className="row">
                <div className="col-lg-6">
                    <h2 className="font-weight-bold">Let us show you around</h2>
                    <p>Watch this quick video to see what Sourcegraph can do</p>

                    <YouTube title="Sourcegraph Product Tour" id="E2QYIwKlMac" className="my-5" />

                    <h2 className="font-weight-bold">Like what you see?</h2>
                    <p>Get a live demo in your environment! Just fill out the form to request a demo.</p>
                </div>

                <h2 className="font-weight-bold">Like what you see?</h2>
                <p>Get a live demo in your environment! Just fill out the form to request a demo.</p>
            </div>

            <div className="col-lg-6 pl-lg-7 mt-5 mt-lg-0">
                <HubSpotForm masterFormName="demoMulti" chiliPiper={true} />
            </div>
        </div>
    </Layout>
)

export default Demo
