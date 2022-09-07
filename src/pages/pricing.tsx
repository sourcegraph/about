import { FunctionComponent } from 'react'

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
        title: 'Code intelligence platform',
        subFeatures: [
            {
                title: 'Code Search',
                tooltip: 'test',
            },
            {
                title: 'Code Navigation',
                tooltip: '',
            },
            {
                title: 'Batch Changes',
                tooltip: '',
            },
            {
                title: 'Code Insights',
                tooltip: '',
            },
            {
                title: 'Notebooks',
                tooltip: '',
            },
            {
                title: 'Code monitoring',
                tooltip: '',
            },
            {
                title: 'Comprehensive API',
                tooltip: '',
            },
        ]
    },
    {
        title: 'Code host integrations',
        subFeatures: [
            {
                title: 'Unlimited standard Cloud hosts',
                tooltip: '',
            },
            {
                title: 'Unlimited repository connections',
                tooltip: '',
            },
        ]
    }
]

const ENTERPRISE_FEATURES: Feature[] = [
    {
        title: 'Flexible deployment',
        subFeatures: [
            {
                title: 'Secure and dedicated Cloud deployment',
                tooltip: 'test',
            },
            {
                title: 'Self-hosted deployment',
                tooltip: '',
            },
        ]
    },
    {
        title: 'Code host integrations',
        subFeatures: [
            {
                title: 'Unlimited code hosts',
                tooltip: '',
            },
            {
                title: 'Connect to self-hosted code hosts',
                tooltip: '',
            },
            {
                title: 'Connect to enterprise-only code hosts',
                tooltip: '',
            },
            {
                title: 'Connect to private code hosts (self-hosted only)',
                tooltip: '',
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

        {/* TODO: Feature table */}

        <ContentSection>
            <table className="tw-relative tw-border-0">
                <thead>
                    <tr>
                        <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-w-1/3">
                            <h2>Compare all features</h2>
                        </th>
                        <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-w-1/3">
                            <div className="tw-border-t-16 tw-rounded tw-border-gray-200 tw-border-t-vermillion-300">
                                <h2>Business</h2>
                                <h4 className="tw-font-normal">$79 per active user/month</h4>
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
                        <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-w-1/3">
                            <div className="tw-border-t-16 tw-rounded tw-border-gray-200 tw-border-t-violet-400">
                                <h2>Enterprise</h2>
                                <h4 className="tw-font-normal">Custom pricing</h4>
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
                    <tr className="tw-sticky tw-top-24 tw-bg-white">
                        <h3>Code intelligence platform</h3>
                    </tr>
                    <tr className="tw-border-0">
                        <td className="tw-border-0">Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    {/* BREAK */}
                    <tr className="tw-sticky tw-top-24 tw-bg-white">
                        <h3>Code host integrations</h3>
                    </tr>
                    <tr className="tw-border-0">
                        <td className="tw-border-0">Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
                    <tr>
                        <td>Code search</td>
                        <td>TEST</td>
                        <td>TEST</td>
                    </tr>
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
