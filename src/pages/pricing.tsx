import { FunctionComponent } from 'react'

import classNames from 'classnames'
import CheckIcon from 'mdi-react/CheckIcon'
import Link from 'next/link'

import {
    ContentSection,
    CtaSection,
    CustomerLogos,
    Layout,
    PricingPlan,
    PricingPlanFeature,
    TableWrapper,
    ALL_FEATURE_INFO,
    BIZ_FEATURES_OVERVIEW,
    ENTERPRISE_FEATURES_OVERVIEW,
    ALL_FEATURES_COMPARED_DATA,
} from '@components'
import { buttonStyle, buttonLocation } from '@data'

const BusinessCTA: FunctionComponent<{className?: string}> = ({ className }) => (
    <Link href="/get-started/self-hosted" passHref={true}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
            className={`btn btn-primary tw-w-full md:tw-w-auto ${className || ''}`}
            title="Get started"
            data-button-style={buttonStyle.primary}
            data-button-location={buttonLocation.trySourcegraph}
            data-button-type="cta"
        >
            Get started
        </a>
    </Link>
)

const EnterpriseCTA: FunctionComponent = () => (
    <div>
        <BusinessCTA className="tw-mr-xs tw-mb-xs md:tw-mb-0 tw-w-full md:tw-w-auto" />
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
)

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
        {/* TODO: Tooltips */}
        <ContentSection className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-sm">
            <div className="tw-mb-sm md:tw-mb-0 tw-col-span-full md:tw-col-start-2 md:tw-col-span-5">
                <PricingPlan
                    name="Business"
                    price="$99 per active user/month"
                    description="Full platform access for teams and orgs, all on a dedicated Cloud instance."
                    features={BIZ_FEATURES_OVERVIEW}
                    isEnterprise={false}
                    buttons={<BusinessCTA />}
                />
            </div>

            <div className="tw-col-span-full md:tw-col-start-7 md:tw-col-span-5">
                <PricingPlan
                    name="Enterprise"
                    price="Custom pricing"
                    description="Enterprise-grade security, scale, and support with custom deployment options."
                    features={ENTERPRISE_FEATURES_OVERVIEW}
                    isEnterprise={true}
                    buttons={<EnterpriseCTA />}
                />
            </div>
        </ContentSection>

        <h2 className="tw-text-center tw-mx-auto tw-mb-5 tw-max-w-2xl">
            The code intelligence platform for modern dev teams
        </h2>
        <CustomerLogos />

        {/* TODO: Table- mobile, re-use CTA's, price cell > ReactNode (2 lines), key error */}
        <ContentSection>
            <TableWrapper>
                <table className="tw-relative tw-border-0">
                    <thead>
                        <tr>
                            <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-h-60 tw-w-1/3">
                                <div className="tw-h-full tw-p-sm tw-border-b-1 tw-border-gray-200">
                                    <h2 className="tw-mt-sm tw-max-w-[250px] tw-text-4xl md:tw-text-7xl">Compare all features</h2>
                                </div>
                            </th>
                            <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-h-60 tw-w-1/3">
                                <div className="tw-h-full tw-p-sm tw-border-t-16 tw-border-1 tw-border-gray-200 tw-border-t-vermillion-300">
                                    <h2>Business</h2>
                                    <h4 className="tw-font-normal tw-py-sm">$99 per active user/month</h4>
                                    <BusinessCTA />
                                </div>
                            </th>
                            <th className="tw-border-0 tw-text-start tw-sticky tw-top-16 tw-bg-white tw-p-0 tw-h-60 tw-w-1/3">
                                <div className="tw-h-full tw-p-sm tw-border-t-16 tw-border-b-1 tw-border-gray-200 tw-border-t-violet-400">
                                    <h2>Enterprise</h2>
                                    <h4 className="tw-font-normal tw-py-sm">Custom pricing</h4>
                                    <EnterpriseCTA />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {ALL_FEATURES_COMPARED_DATA.map(section => (
                            <>
                                <tr className="tw-bg-white" key={section.topic}>
                                    <th colSpan={100} className="tw-p-xs tw-text-start tw-border-0">
                                        <h3>{section.topic}</h3>
                                    </th>
                                </tr>
                                {section.features.map((feature, index) => (
                                    <tr className={classNames('tw-border-0', (index+1) === section.features.length && 'tw-border-b-1 tw-border-gray-200')} key={feature.label}>
                                        <td className="tw-border-0 tw-p-xs">
                                            <PricingPlanFeature feature={ALL_FEATURE_INFO[feature.label]} tag="h5" />
                                        </td>
                                        <td className="tw-border-0 tw-border-x-1 tw-p-xs tw-text-center tw-align-middle">
                                            {typeof feature.business === 'string' ? (
                                                feature.business
                                            ) : feature.business ? (
                                                <CheckIcon className="mr-2 icon-inline tw-text-vermillion-300 tw-inline" />
                                            ) : null}
                                        </td>
                                        <td className="tw-border-0 tw-p-xs tw-text-center tw-align-middle">
                                            {typeof feature.enterprise === 'string' ? (
                                                feature.enterprise
                                            ) : feature.enterprise ? (
                                                <CheckIcon className="mr-2 icon-inline tw-text-violet-400 tw-inline" />
                                            ) : null}
                                        </td>
                                    </tr>
                                ))}
                            </>
                        ))}
                    </tbody>
                </table>
            </TableWrapper>
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

        {/* TODO: FAQ accordion from Flowbite */}
        <ContentSection className="tw-grid tw-grid-cols-5">
            <h2 className="tw-col-span-full md:tw-col-span-2 tw-max-w-md">Frequently asked questions</h2>
        </ContentSection>
    </Layout>
)

export default PricingPage
