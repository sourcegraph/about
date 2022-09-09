import { FunctionComponent } from 'react'

import { ContentSection, CoreFeatures, Layout, IntegrationsSection, SelfHostedSection } from '@components'

import Banner from './_Banner'
import Hero from './_Hero'
import UseCases from './_UseCases'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Code Intelligence Platform',
            description:
                'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
        }}
        heroAndHeaderClassName="bg-white"
    >
        <Banner />

        <Hero />

        <UseCases />

        <ContentSection background="white" className="tw-mt-52">
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <SelfHostedSection />
    </Layout>
)

export default Home
