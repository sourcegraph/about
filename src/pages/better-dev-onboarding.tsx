/* eslint-disable unicorn/prevent-abbreviations */
import { FunctionComponent } from 'react'

import Link from 'next/link'

import {
    ContentSection,
    CustomerLogos,
    CoreFeatures,
    HubSpotForm,
    IntegrationsSection,
    Layout,
    ResourceList,
    Hero,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

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

const BetterDeveloperOnboarding: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Better Developer Onboarding - Sourcegraph',
            description:
                'Find your own answers with self-serve onboarding, codebase exploration, and knowledge sharing, without waiting for someone to point you to the relevant code.',
        }}
        className="navbar-light"
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
            <div className="mt-6 tw-brightness-0">
                <CustomerLogos />
            </div>
        </ContentSection>

        <ContentSection>
            <CoreFeatures />
        </ContentSection>

        <div className="tw-bg-gray-100">
            <IntegrationsSection />
        </div>

        <ResourceList items={resourceItems} />

        <ContentSection>
            <div className="tw-mx-auto tw-text-center tw-max-w-screen-md">
                <h2 className="tw-mb-xs">Ready to accelerate developer onboarding? Let's talk.</h2>
                <p className="tw-max-w-lg tw-mx-auto">
                    <Link href="/get-started/self-hosted" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Get started"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Get started
                        </a>
                    </Link>{' '}
                    for free with up to 10 teammates or{' '}
                    <Link href="/demo" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="Request a demo"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.bodyDemo}
                            data-button-type="cta"
                        >
                            request a demo
                        </a>
                    </Link>{' '}
                    to learn about our enterprise plan and to see Sourcegraph in your own environment.
                </p>
            </div>
        </ContentSection>
    </Layout>
)

export default BetterDeveloperOnboarding
