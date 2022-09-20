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
    >
        <Banner />

        {/* TODO: New vid & purple dot bg */}
        <Hero />

        <ContentSection background="white">
            <CoreFeatures />
        </ContentSection>

        {/* TODO: Modify below */}
        <IntegrationsSection />

        <CtaSection
            background="saturn"
            title="Try Sourcegraph for free today"
            description="Experience code intelligence with a free 30-day trial of Sourcegraph for you and your team. Or, get in touch with our team for a demo of what code intelligence can do for you."
            cta1={{
                text: 'Get free trial',
                link: 'https:/signup.sourcegraph.com',
                ctaStyle: 'primaryButton',
            }}
            cta2={{
                text: 'Request a demo',
                link: '/demo',
                ctaStyle: 'outlineButton',
            }}
        />
    </Layout>
)

export default Home
