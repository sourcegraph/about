import { FunctionComponent } from 'react'

import { ContentSection, CoreFeatures, CtaSection, Layout, IntegrationsSection } from '@components'

import Banner from './_Banner'
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
        <Banner />

        <Hero />

        <ContentSection background="white">
            <CoreFeatures />
        </ContentSection>

        <IntegrationsSection />

        <CtaSection background="saturn" />
    </Layout>
)

export default Home
