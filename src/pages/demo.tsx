import React, { FunctionComponent } from 'react'

import { Layout, HubSpotForm } from '../components'
import { DemoVideo } from '../components/DemoVideo'

const Demo: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Schedule a demo - Sourcegraph',
            description:
                "From developer onboarding to incident response, see how companies of all sizes use Sourcegraph to solve the industry's most challenging code problems.",
        }}
        heroAndHeaderClassName="sg-bg-gradient-venus"
        hero={
            <div className="tw-container tw-mx-auto tw-pt-3xl tw-pb-lg">
                <h1>Schedule a demo with a product expert</h1>
            </div>
        }
    >
        <div className="tw-container tw-mx-auto tw-pt-xl">
            <div className="tw-grid tw-gap-md tw-grid-cols-1 lg:tw-grid-cols-2">
                <div>
                    <p className="tw-mb-8">
                        Want to see Sourcegraph in action and speak with a product expert? Fill out the form below, and
                        we'll be in touch.
                    </p>
                    <HubSpotForm masterFormName="contactMulti" chiliPiper={true} />
                </div>
                <div>
                    <DemoVideo video="homepage-demo-202301" className="tw-my-6" />
                </div>
            </div>
        </div>
    </Layout>
)

export default Demo
