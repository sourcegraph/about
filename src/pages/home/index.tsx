import { FunctionComponent } from 'react'

import { Layout, IntegrationsSection, SelfHostedSection } from '@components'

import Features from './_Features'
import Hero from './_Hero'
import UseCases from './_UseCases'

const Home: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Code Intelligence Platform',
            description:
                'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Soucegraph.',
        }}
        heroAndHeaderClassName="bg-white"
    >
        <Hero />

        <UseCases />

        <Features />

        <IntegrationsSection />

        <SelfHostedSection />
    </Layout>
)

export default Home
