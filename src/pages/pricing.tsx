import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import CheckIcon from 'mdi-react/CheckIcon'
import MinusIcon from 'mdi-react/MinusIcon'
import PlusIcon from 'mdi-react/PlusIcon'
import Link from 'next/link'
import Accordion from 'react-bootstrap/Accordion'

import {
    ContentSection,
    CtaSection,
    CustomerLogos,
    Layout,
    PricingPlan,
    PricingPlanFeature,
    ALL_FEATURE_INFO,
    BIZ_FEATURES_OVERVIEW,
    ENTERPRISE_FEATURES_OVERVIEW,
    ALL_FEATURES_COMPARED_DATA,
} from '@components'
import { breakpoints, buttonStyle, buttonLocation } from '@data'
import { useWindowWidth } from '@hooks'

const BusinessCTA: FunctionComponent<{ className?: string; btnOnMobile?: boolean }> = ({ className, btnOnMobile }) => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    return (
        <a
            className={classNames(
                btnOnMobile && 'btn btn-primary',
                'tw-w-full md:tw-w-auto',
                className,
                btnOnMobile
                    ? 'md:tw-mr-xs tw-mr-0 tw-mb-xs lg:tw-mb-0'
                    : isMdOrDown
                    ? 'font-weight-normal'
                    : 'btn btn-primary'
            )}
            href="https://signup.sourcegraph.com"
            title="Get free trial"
            data-button-style={buttonStyle.primary}
            data-button-location={buttonLocation.trySourcegraph}
            data-button-type="cta"
        >
            Get free trial
        </a>
    )
}

const EnterpriseCTA: FunctionComponent<{ btnOnMobile?: boolean }> = ({ btnOnMobile }) => (
    <div className="tw-flex-wrap">
        <BusinessCTA btnOnMobile={btnOnMobile} className="tw-mr-xs tw-mb-xs md:tw-mb-0 tw-w-full md:tw-w-auto" />
        <Link href="/contact/request-info?form_submission_source=pricing-enterprise" passHref={true}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
                className={classNames(
                    'btn btn-outline-primary',
                    !btnOnMobile ? 'tw-hidden lg:tw-inline-block tw-w-auto' : 'tw-w-full md:tw-w-auto'
                )}
                title="Contact us"
                data-button-style={buttonStyle.outline}
                data-button-location={buttonLocation.bodyDemo}
                data-button-type="cta"
            >
                Contact us
            </a>
        </Link>
    </div>
)

const faqData = [
    {
        q: 'How are monthly active users calculated?',
        a: (
            <p>
                A monthly active user is any user who accesses Sourcegraph in a given month. See the{' '}
                <a
                    href="https://docs.sourcegraph.com/admin/pricing"
                    title="docs"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    docs
                </a>{' '}
                for additional details on how monthly active users are calculated.
            </p>
        ),
    },
    {
        q: 'Is there a free trial of the paid plans?',
        a: (
            <p>
                Yes. We offer a free, 30-day trial for our paid plans.{' '}
                <Link href="https://signup.sourcegraph.com" passHref={true}>
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
                with a free trial today.
            </p>
        ),
    },
    {
        q: 'What are executors?',
        a: 'Executors are required to run Batch Changes server-side and to use code navigation’s auto-indexing functionality. The Business plan includes 2 executors and the Enterprise plan includes 4 executors.',
    },
    {
        q: 'Does Sourcegraph offer discounts for educational and non-profit organizations?',
        a: (
            <p>
                Sourcegraph supports the work of educational organizations and nonprofits. Please{' '}
                <Link href="/demo" passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title="contact Sourcegraph"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        contact us
                    </a>
                </Link>{' '}
                about discounts for your development teams.
            </p>
        ),
    },
]

const PricingPage: FunctionComponent = () => {
    const [activeKey, setActiveKey] = useState<number | null>(null)

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Pricing',
                description:
                    "See pricing for Sourcegraph's code intelligence platform. Get started with a free trial today.",
            }}
            className="bg-white"
            hero={
                <div className="container tw-pt-5xl tw-text-center">
                    <h1>Plans for every dev team</h1>
                </div>
            }
        >
            <ContentSection className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-12 tw-gap-sm">
                <div className="tw-mb-sm md:tw-mb-0 tw-col-span-full md:tw-col-start-2 md:tw-col-span-5">
                    <PricingPlan
                        name="Business"
                        price="$99 per active user/month"
                        description="Full platform access for teams and orgs, all on a single-tenant cloud instance."
                        features={BIZ_FEATURES_OVERVIEW}
                        isEnterprise={false}
                        buttons={<BusinessCTA btnOnMobile={true} />}
                    />
                </div>

                <div className="tw-col-span-full md:tw-col-start-7 md:tw-col-span-5">
                    <PricingPlan
                        name="Enterprise"
                        price="Custom pricing"
                        description="Enterprise-grade security, scale, and support with custom deployment options."
                        features={ENTERPRISE_FEATURES_OVERVIEW}
                        isEnterprise={true}
                        buttons={<EnterpriseCTA btnOnMobile={true} />}
                    />
                </div>
            </ContentSection>

            <h2 className="tw-text-center tw-mx-auto tw-mb-5 tw-max-w-2xl">
                The code intelligence platform for modern dev teams
            </h2>
            <CustomerLogos />

            <div className="tw-py-3xl md:tw-py-5xl md:tw-max-w-screen-xl tw-mx-auto tw-overflow-x-auto md:tw-overflow-visible">
                <table className="tw-relative tw-border-0">
                    <thead>
                        <tr className="md:tw-sticky md:tw-top-16">
                            <th className="tw-border-0 tw-text-start tw-bg-white tw-p-0 tw-w-1/3">
                                <div className="lg:tw-h-60 md:tw-h-[165px] tw-h-[155px] tw-p-sm md:tw-pt-xs tw-pt-md tw-pr-xs tw-border-b-1 tw-border-gray-200">
                                    <h2 className="tw-max-w-[250px] tw-text-4xl md:tw-text-7xl tw-hidden lg:tw-block">
                                        Compare all features
                                    </h2>
                                </div>
                            </th>
                            <th className="tw-border-0 tw-text-start tw-bg-white tw-p-0 tw-w-1/3">
                                <div className="tw-h-full tw-p-sm tw-pb-md tw-border-t-16 tw-border-1 tw-border-gray-200 tw-border-t-vermillion-300">
                                    <h2 className="tw-text-2xl md:tw-text-4xl tw-mb-sm">Business</h2>
                                    <h4 className="tw-font-normal tw-hidden lg:tw-block tw-mb-sm">
                                        $99 per active user/month
                                    </h4>
                                    <BusinessCTA />
                                </div>
                            </th>
                            <th className="tw-border-0 tw-text-start tw-bg-white tw-p-0 tw-w-1/3">
                                <div className="tw-h-full tw-p-sm tw-pb-md tw-border-t-16 tw-border-b-1 tw-border-gray-200 tw-border-t-violet-400">
                                    <h2 className="tw-text-2xl md:tw-text-4xl tw-mb-sm">Enterprise</h2>
                                    <h4 className="tw-font-normal tw-hidden lg:tw-block tw-mb-sm">Custom pricing</h4>
                                    <EnterpriseCTA />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {ALL_FEATURES_COMPARED_DATA.map(section => (
                        <tbody key={section.topic}>
                            <tr className="tw-bg-white" key={section.topic}>
                                <th colSpan={100} className="tw-pt-lg tw-p-xs tw-text-start tw-border-0">
                                    <h3 className="tw-text-xl md:tw-text-2xl tw-font-semibold md:tw-font-normal">
                                        {section.topic}
                                    </h3>
                                </th>
                            </tr>
                            {section.features.map((feature, index) => (
                                <tr
                                    className={classNames(
                                        'tw-border-0',
                                        index + 1 === section.features.length && 'tw-border-b-1 tw-border-gray-200'
                                    )}
                                    key={feature.label}
                                >
                                    {/* Feature title */}
                                    <td className="tw-border-0 tw-p-xs">
                                        <PricingPlanFeature
                                            feature={ALL_FEATURE_INFO[feature.label]}
                                            tag="h5"
                                            className="tw-text-base tw-font-normal md:tw-font-semibold"
                                        />
                                    </td>
                                    {/* Business plan specs */}
                                    <td className="tw-border-0 tw-border-x-1 tw-p-xs tw-text-center tw-align-middle">
                                        {typeof feature.business === 'string' ? (
                                            feature.business
                                        ) : feature.business ? (
                                            <CheckIcon className="mr-2 icon-inline tw-text-vermillion-300 tw-inline" />
                                        ) : null}
                                        {feature.disclaimer && (
                                            <i className="tw-block tw-text-sm">{feature.disclaimer}</i>
                                        )}
                                    </td>
                                    {/* Enterprise plan specs */}
                                    <td className="tw-border-0 tw-p-xs tw-text-center tw-align-middle">
                                        {typeof feature.enterprise === 'string' ? (
                                            feature.enterprise
                                        ) : feature.enterprise ? (
                                            <CheckIcon className="mr-2 icon-inline tw-text-violet-400 tw-inline" />
                                        ) : null}
                                        {feature.disclaimer && (
                                            <i className="tw-block tw-text-sm">{feature.disclaimer}</i>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ))}
                </table>
            </div>

            <CtaSection
                background="mars"
                title="Free for small teams"
                description="Small teams can use a limited version of Sourcegraph’s code intelligence platform for free to search personal and open source projects. The free version can only be deployed self-hosted and supports one code host connection."
                cta1={{
                    text: 'Deploy',
                    link: 'https://docs.sourcegraph.com/#self-hosted',
                    ctaStyle: 'primaryButton',
                }}
                cta2={{
                    text: 'Start free Cloud trial',
                    link: 'https://signup.sourcegraph.com',
                    ctaStyle: 'outlineButton',
                }}
            />

            <ContentSection className="tw-grid tw-grid-cols-5">
                <h2 className="tw-col-span-full md:tw-col-span-2 tw-mb-md tw-max-w-md">Frequently asked questions</h2>

                <div className="tw-col-span-full md:tw-col-span-3">
                    <Accordion>
                        {faqData.map((item, index) => (
                            <Accordion.Item
                                key={item.q}
                                eventKey={item.q}
                                className="tw-border-t-1 tw-border-gray-200 tw-max-w-2xl tw-mb-sm"
                            >
                                <Accordion.Header onClick={() => setActiveKey(activeKey !== index ? index : null)}>
                                    <div className="tw-flex tw-justify-between tw-items-center">
                                        <h4 className="tw-text-start tw-mt-sm">{item.q}</h4>
                                        <span className="tw-text-gray-400 tw-font-normal tw-mt-xs">
                                            {activeKey === index ? <MinusIcon /> : <PlusIcon />}
                                        </span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body className="tw-max-w-xl tw-mt-xs">{item.a}</Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
            </ContentSection>
        </Layout>
    )
}

export default PricingPage
