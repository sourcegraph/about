import { FunctionComponent } from 'react'

import { ContentSection, CoreFeatures, Layout, IntegrationsSection, SelfHostedSection } from '@components'

import Hero from './_Hero'
import UseCases from './_UseCases'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Code Intelligence Platform',
            description:
                'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
        }}
        heroAndHeaderClassName="bg-white"
    >
        <Hero />

        <UseCases />

        <ContentSection color="white" className="py-8 pb-7">
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <SelfHostedSection />
    </Layout>
)

export default Home
