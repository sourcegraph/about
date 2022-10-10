import { FunctionComponent } from 'react'

import { ContentSection, CoreFeatures, CtaSection, Layout, IntegrationsSection } from '@components'

import Hero from './_Hero'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
        }}
        heroAndHeaderClassName="bg-white"
        className="bg-white"
    >
        <Hero />

        <ContentSection background="white">
            <div className="tw-text-center mb-7">
                <h2>How teams use Sourcegraph</h2>
                <p className="tw-mx-auto tw-my-xs tw-max-w-3xl tw-text-lg">
                    Sourcegraph's code intelligence platform is built with features that help you understand, fix, and
                    automate across your entire codebase.
                </p>
            </div>
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <CtaSection background="saturn" />
    </Layout>
)

export default Home
