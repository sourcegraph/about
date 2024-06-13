import React, { FunctionComponent } from 'react'

import { ContentSection, Layout, HubSpotForm, Heading } from '../components'
import { DemoVideo } from '../components/DemoVideo'
import { TelemetryProps } from '../telemetry'

const Demo: FunctionComponent<TelemetryProps> = ({telemetryRecorder}) => (
    <Layout
        meta={{
            title: 'Schedule a demo - Sourcegraph',
            description:
                "From developer onboarding to incident response, see how companies of all sizes use Sourcegraph to solve the industry's most challenging code problems.",
        }}
        headerColorTheme="purple"
        className="sg-bg-radial-space"
    >
        <ContentSection className="md:pb-4">
            <div className="mb-8">
                <Heading size="h1" className="mb-6 text-white">
                    Schedule a demo with a product expert
                </Heading>
                <p className="mb-16 max-w-3xl text-3xl text-gray-200">
                    Want to see Sourcegraph in action and speak with a product expert? Fill out the form below, and
                    we'll be in touch.
                </p>
            </div>
            <div className="flex flex-col-reverse items-start gap-6 md:flex-row">
                <DemoVideo telemetryRecorder={telemetryRecorder} video="homepage-demo-202301" className="mt-10 rounded-lg md:w-[50%] md:max-w-[578px]" />
                <div className="w-full rounded-[10px] bg-gray-50 pt-6 pb-0 pl-6 pr-[1px] shadow-xl md:px-16 md:pt-12 md:pb-[13px] md:pr-8">
                    <HubSpotForm
                        masterFormName="contactMulti"
                        chiliPiper={false}
                        bookIt={true}
                        form_submission_source="demo"
                    />
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default Demo
