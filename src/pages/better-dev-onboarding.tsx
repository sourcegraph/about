/* eslint-disable unicorn/prevent-abbreviations */
import { FunctionComponent } from 'react'

import Link from 'next/link'

import {
    BackButtonBold,
    BlogResourceItem,
    ContentSection,
    CustomerLogos,
    FeatureWalkthrough,
    IntegrationsSection,
    Layout,
} from '@components'
import { buttonStyle, buttonLocation, sourcegraphFeatures } from '@data'

import styles from './use-cases/useCases.module.scss'

const resourceItems = [
    {
        title: 'Continuous developer onboarding: A guide to cultivating a culture of professional growth',
        description:
            'Download the guide to developer onboarding and learn how to shift to a culture of continuous onboarding in your engineering organization.',
        type: 'Guide',
        img: {
            src: 'blog/thumbnails/continuous-developer-onboarding.png',
            alt: 'Log4j Log4Shell 0-day blog thumbnail',
        },
        href: '/blog/log4j-log4shell-0-day',
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
            title: 'Better Developer Onboarding | Sourcegraph',
            description:
                'Find your own answers with self-serve onboarding, codebase exploration, and knowledge sharing, without waiting for someone to point you to the relevant code.',
        }}
        className="navbar-light"
        hero={
            <>
                <div className={styles.pageHeader}>
                    <div className="container pb-4">
                        <div className="row">
                            <div className="col-lg-7 mb-8 mt-7">
                                <BackButtonBold href="/use-cases" text="USE CASES" />
                                <h1 className="display-2 font-weight-bold mb-4">
                                    Give your team a complete onboarding experience
                                </h1>
                                <div className="display-4 font-weight-normal mb-5">
                                    With self-serve onboarding, codebase exploration, and knowledge sharing, developers
                                    can find their own answers without waiting for someone to point them to the relevant
                                    code.
                                </div>
                                <div className="max-w-350 flex-column flex-md-row d-md-flex align-items-center">
                                    <div className="mb-3 mb-md-0">
                                        <Link
                                            href="/demo"
                                            data-button-style={buttonStyle.primary}
                                            data-button-location={buttonLocation.hero}
                                            data-button-type="cta"
                                            passHref={true}
                                        >
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="btn btn-primary w-100"
                                                title="Request a Demo."
                                            >
                                                Request a demo
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="ml-md-3">
                                        <Link
                                            href="/get-started"
                                            data-button-style={buttonStyle.outline}
                                            data-button-location={buttonLocation.hero}
                                            data-button-type="cta"
                                            passHref={true}
                                        >
                                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                            <a
                                                className="btn btn-outline-primary w-100"
                                                title="Get started with Sourcegraph."
                                            >
                                                Get started
                                            </a>
                                        </Link>
                                    </div>
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
            <FeatureWalkthrough features={sourcegraphFeatures} />
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
                    <Link
                        href="/get-started"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        Get started
                    </Link>{' '}
                    for free with up to 10 teammates or{' '}
                    <Link
                        href="/demo"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        request a demo
                    </Link>{' '}
                    to learn about our enterprise plan and to see Sourcegraph in your own environment.
                </p>
            </div>
        </ContentSection>
    </Layout>
)

export default BetterDeveloperOnboarding
