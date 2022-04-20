import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import { IntegrationsSection } from '../../components/IntegrationsSection'
import { SelfHostedSection } from '../../components/SelfHostedSection'

import Hero from './_Hero'
import UseCases from './_UseCases'
import Features from './_Features'

const Home: FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
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
