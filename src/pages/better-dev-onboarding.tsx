import { FunctionComponent } from 'react'

import { TelemetryRecorder } from '@sourcegraph/telemetry'

import {
    ContentSection,
    CustomerLogos,
    CoreFeatures,
    HubSpotForm,
    IntegrationsSection,
    Layout,
    ResourceList,
    Hero,
    CallToActionContentSection,
} from '../components'

const resourceItems = [
    {
        title: 'Continuous developer onboarding: A guide to cultivating a culture of professional growth',
        description:
            'Download the guide to developer onboarding and learn how to shift to a culture of continuous onboarding in your engineering organization.',
        type: 'Guide',
        img: {
            src: 'blog/thumbnails/continuous-developer-onboarding.png',
            alt: 'Continuous developer onboarding guide thumbnail',
        },
        href: '/guides/continuous-developer-onboarding',
    },
    {
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
        description:
            'See how Nutanix was able to confidently indentify every instance of Log4j across its sprawling codebase and deliver patches to its customers that fully remediated the vulnerability within 4 days.',
        type: 'Case study',
        img: {
            src: 'https://sourcegraphstatic.com/blog/log4j/log4j-blog-thumbnail.png',
            alt: 'Log4j Log4Shell 0-day blog thumbnail',
        },
        href: '/blog/log4j-log4shell-0-day',
    },
]

interface Props {
    telemetryRecorder: TelemetryRecorder<'',''>
}

const BetterDeveloperOnboarding: FunctionComponent<Props> = ({telemetryRecorder}) => (
    <Layout
        meta={{
            title: 'Better Developer Onboarding - Sourcegraph',
            description:
                'Find your own answers with self-serve onboarding, codebase exploration, and knowledge sharing, without waiting for someone to point you to the relevant code.',
        }}
        hero={
            <Hero
                variant="lightNebulousVenus2"
                title={'Give your team a complete \n onboarding experience'}
                description={
                    'With self-serve onboarding, codebase exploration, and knowledge sharing,\n developers can find their own answers without waiting for someone to point them to the relevant code'
                }
                cta={<HubSpotForm masterFormName="contactEmail" chiliPiper={true} />}
            />
        }
    >
        <ContentSection>
            <div className="mt-16">
                <CustomerLogos monochrome={true} />
            </div>
        </ContentSection>

        <ContentSection>
            <CoreFeatures telemetryRecorder={telemetryRecorder} />
        </ContentSection>

        <div className="bg-gray-100">
            <IntegrationsSection />
        </div>

        <ResourceList items={resourceItems} />

        <CallToActionContentSection />
    </Layout>
)

export default BetterDeveloperOnboarding
