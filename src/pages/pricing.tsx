import { FunctionComponent } from 'react'

import CheckIcon from 'mdi-react/CheckIcon'
import Link from 'next/link'

import {
    ContentSection,
    CtaSection,
    CustomerLogos,
    Feature,
    Layout,
    PricingPlan,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

/** Business feature set. */
const BIZ_FEATURES: Feature[] = [
    {
        topic: 'Code intelligence platform',
        features: [
            'Code Search',
            'Code Navigation',
            'Batch Changes',
            'Code Insights',
            'Notebooks',
            'Code monitoring',
            'Comprehensive API',
        ]
    },
    {
        topic: 'Code host integrations',
        features: [
            'Unlimited standard Cloud hosts',
            'Unlimited repository connections',
        ]
    }
]

const ENTERPRISE_FEATURES: Feature[] = [
    {
        topic: 'Flexible deployment',
        features: [
            'Secure and dedicated Cloud deployment',
            'Self-hosted deployment',
        ]
    },
    {
        topic: 'Code host integrations',
        features: [
            'Unlimited code hosts',
            'Connect to self-hosted code hosts',
            'Connect to enterprise-only code hosts',
            'Connect to private code hosts (self-hosted only)',
        ]
    }
]

const FEATURE_COMPARE_DATA = [
    {
        topic: 'Code intelligence platform',
        features: [
            {
                label: 'Code Search',
                business: true,
                enterprise: true,
            },
            {
                label: 'Code Navigation',
                business: true,
                enterprise: true,
            },
            {
                label: 'Batch Changes',
                business: true,
                enterprise: true,
            },
            {
                label: 'Code Insights',
                business: true,
                enterprise: true,
            },
            {
                label: 'Notebooks',
                business: true,
                enterprise: true,
            },
            {
                label: 'Code Monitoring',
                business: true,
                enterprise: true,
            },
            {
                label: 'Comprehensive API',
                business: true,
                enterprise: true,
            },
        ]
    },
    {
        topic: 'Code host integrations',
        features: [
            {
                label: '# of code host connections',
                business: 'Unlimited',
                enterprise: 'Unlimited',
            },
            {
                label: 'Cloud code hosts',
                business: true,
                enterprise: true,
            },
            {
                label: 'Self-hosted code hosts',
                business: false,
                enterprise: true,
            },
            {
                label: 'Enterprise-only code hosts',
                business: false,
                enterprise: true,
            },
        ]
    }
]

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - Pricing',
            description:
                'Sourcegraph is always free for public and open source code. Start using it for private code with a paid plan.',
        }}
        className="bg-white"
        hero={
            <div className="container tw-pt-xl tw-text-center">
                <h1>Plans for every dev team</h1>
            </div>
        }
    >
        {/* TODO: Items, tooltips, li marker */}
        <ContentSection className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-sm">
            <div className="tw-mb-sm lg:tw-mb-0">
                <PricingPlan
                    name="Business"
                    price="$79 per active user/month"
                    description="Full platform access for teams and orgs, all on a dedicated Cloud instance."
                    features={BIZ_FEATURES}
                    isEnterprise={false}
                    buttons={
                        <Link href="/get-started/self-hosted" passHref={true}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                                className="btn btn-primary tw-w-full md:tw-w-auto"
                                title="Get started"
                                data-button-style={buttonStyle.primary}
                                data-button-location={buttonLocation.trySourcegraph}
                                data-button-type="cta"
                            >
                                Get started
                            </a>
                        </Link>
                    }
                />
            </div>

            <div>
                <PricingPlan
                    name="Enterprise"
                    price="Custom pricing"
                    description="Enterprise-grade security, scale, and support with custom deployment options."
                    features={ENTERPRISE_FEATURES}
                    isEnterprise={true}
                    buttons={
                        <div>
                            <Link href="/get-started/self-hosted" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-primary tw-mr-xs tw-mb-xs md:tw-mb-0 tw-w-full md:tw-w-auto"
                                    title="Get started"
                                    data-button-style={buttonStyle.primary}
                                    data-button-location={buttonLocation.trySourcegraph}
                                    data-button-type="cta"
                                >
                                    Get started
                                </a>
                            </Link>
                            <Link href="/demo" passHref={true}>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <a
                                    className="btn btn-outline-primary tw-w-full md:tw-w-auto"
                                    title="Request a demo"
                                    data-button-style={buttonStyle.outline}
                                    data-button-location={buttonLocation.bodyDemo}
                                    data-button-type="cta"
                                >
                                    Request a demo
                                </a>
                            </Link>
                        </div>
                    }
                />
            </div>
        </ContentSection>

        <h2 className="tw-text-center tw-mx-auto tw-mb-5 tw-max-w-2xl">The code intelligence platform for modern dev teams</h2>
        <CustomerLogos />

        {/* TODO: Table- mobile, topic widths, data cleanup: feature dictionary/tooltip, copy */}
        <ContentSection>
            <table className="tw-relative tw-border-0">
                <thead>
                    <tr>
                        <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-h-60 tw-w-1/3">
                            <div className="tw-h-full tw-p-sm tw-border-b-2 tw-border-gray-200">
                                <h2 className="tw-mt-sm tw-max-w-[200px]">Compare all features</h2>
                            </div>
                        </th>
                        <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-h-60 tw-w-1/3">
                            <div className="tw-h-full tw-p-sm tw-border-t-16 tw-border-2 tw-border-gray-200 tw-border-t-vermillion-300">
                                <h2>Business</h2>
                                <h4 className="tw-font-normal tw-py-sm">$79 per active user/month</h4>
                                <Link href="/get-started/self-hosted" passHref={true}>
                                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                    <a
                                        className="btn btn-primary tw-w-full md:tw-w-auto"
                                        title="Get started"
                                        data-button-style={buttonStyle.primary}
                                        data-button-location={buttonLocation.trySourcegraph}
                                        data-button-type="cta"
                                    >
                                        Get started
                                    </a>
                                </Link>
                            </div>
                        </th>
                        <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-h-60 tw-w-1/3">
                            <div className="tw-h-full tw-p-sm tw-border-t-16 tw-border-b-2 tw-border-gray-200 tw-border-t-violet-400">
                                <h2>Enterprise</h2>
                                <h4 className="tw-font-normal tw-py-sm">Custom pricing</h4>
                                <div>
                                    <Link href="/get-started/self-hosted" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="btn btn-primary tw-mr-xs tw-mb-xs md:tw-mb-0 tw-w-full md:tw-w-auto"
                                            title="Get started"
                                            data-button-style={buttonStyle.primary}
                                            data-button-location={buttonLocation.trySourcegraph}
                                            data-button-type="cta"
                                        >
                                            Get started
                                        </a>
                                    </Link>
                                    <Link href="/demo" passHref={true}>
                                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                        <a
                                            className="btn btn-outline-primary tw-w-full md:tw-w-auto"
                                            title="Request a demo"
                                            data-button-style={buttonStyle.outline}
                                            data-button-location={buttonLocation.bodyDemo}
                                            data-button-type="cta"
                                        >
                                            Request a demo
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {FEATURE_COMPARE_DATA.map(topic => (
                        <>
                            <tr className="tw-sticky tw-top-72 tw-bg-white" key={topic.topic}>
                                <div className="tw-p-xs">
                                    <h3>{topic.topic}</h3>
                                </div>
                            </tr>
                            {topic.features.map(feature => (
                                <tr className="tw-border-0" key={feature.label}>
                                    <td className="tw-border-0 tw-p-xs">
                                        <h5>{feature.label}</h5>
                                    </td>
                                    <td className="tw-border-0 tw-border-x-2 tw-p-xs tw-text-center">
                                        {typeof feature.business === 'string' ? feature.business :
                                            feature.business ?
                                            <CheckIcon className="mr-2 icon-inline tw-text-vermillion-300 tw-inline" /> :
                                            null
                                        }
                                    </td>
                                    <td className="tw-border-0 tw-p-xs tw-text-center">
                                        {typeof feature.enterprise === 'string' ? feature.enterprise :
                                            feature.enterprise ?
                                            <CheckIcon className="mr-2 icon-inline tw-text-violet-400 tw-inline" /> :
                                            null
                                        }
                                    </td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>
        </ContentSection>

        <CtaSection
            background="lightNebulousMars"
            title="Free for small teams"
            description="Small teams can use a limited version of Sourcegraph’s code intelligence platform for free to search personal and open source projects. The free version can only be deployed self-hosted and supports one code host connection."
            cta1={{
                text: 'Deploy',
                link: '/get-started/self-hosted',
                ctaStyle: 'primaryButton',
            }}
            cta2={{
                text: 'Start free Cloud trial',
                link: '/demo',
                ctaStyle: 'outlineButton',
            }}
        />

        {/* TODO: FAQ accordion */}
    </Layout>
)

export default PricingPage
