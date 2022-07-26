/* eslint-disable unicorn/prevent-abbreviations */
import { FunctionComponent } from 'react'

import Link from 'next/link'

import {
    BlogResourceItem,
    ContentSection,
    CustomerLogos,
    FeatureWalkthrough,
    IntegrationsSection,
    Layout,
    HubSpotForm,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

import styles from './use-cases/useCases.module.scss'

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
            <>
                <div className={styles.pageHeader}>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-lg-7 mb-6 mt-7">
                                <h1 className="display-2 font-weight-bold mb-4">
                                    Give your team a complete onboarding experience
                                </h1>
                                <div className="display-4 font-weight-normal mb-5">
                                    With self-serve onboarding, codebase exploration, and knowledge sharing, developers
                                    can find their own answers without waiting for someone to point them to the relevant
                                    code.
                                </div>
                                <div className="d-flex flex-column pt-1 max-w-400">
                                    <HubSpotForm masterFormName="contactEmail" chiliPiper={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    >
        <ContentSection>
            <div className="mt-6 brightness-0">
                <CustomerLogos />
            </div>
        </ContentSection>

        <ContentSection className="pb-8">
            <FeatureWalkthrough />
        </ContentSection>

        <div className="bg-light-gray-3">
            <IntegrationsSection />
        </div>

        <ContentSection className="py-lg-6 py-5">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <h1 className="mb-5 font-weight-bold">Related resources</h1>
                </div>
                {resourceItems.map(item => (
                    <BlogResourceItem key={item.title} blog={item} />
                ))}
            </div>
        </ContentSection>

        <ContentSection>
            <div className="col-3 col-md-12 text-center max-w-550 mx-auto">
                <h1 className="font-weight-bold">Ready to accelerate developer onboarding? Let's talk.</h1>
                <p>
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
