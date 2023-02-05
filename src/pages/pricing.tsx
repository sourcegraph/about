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
} from '../components'
import { buttonLocation, buttonStyle } from '../data/tracking'

const StartFreeButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <a
        className={classNames('btn btn-primary', 'tw-w-full md:tw-w-auto', className)}
        href="https://signup.sourcegraph.com"
        title="Start for free"
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation.trySourcegraph}
        data-button-type="cta"
    >
        Start for free
    </a>
)

const ContactUsButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        href="/contact/request-info?form_submission_source=pricing-enterprise"
        className={classNames('btn btn-outline-primary tw-w-full md:tw-w-auto', className)}
        title="Contact us"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation.bodyDemo}
        data-button-type="cta"
    >
        Contact us
    </Link>
)

const EnterpriseButtons: FunctionComponent<{ contactUsClassName?: string }> = ({ contactUsClassName }) => (
    <div className="tw-flex tw-flex-wrap tw-gap-xs">
        <StartFreeButton />
        <ContactUsButton className={contactUsClassName} />
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
                    documentation
                </a>{' '}
                for more information.
            </p>
        ),
    },
    {
        q: 'Is there a free trial of the paid plans?',
        a: (
            <p>
                Yes. We offer a free trial for our paid plans.{' '}
                <a
                    href="https://signup.sourcegraph.com"
                    title="Get started"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Get started
                </a>{' '}
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
                <Link
                    href="/contact/request-info?form_submission_source=pricing-enterprise"
                    title="contact Sourcegraph"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    contact us
                </Link>{' '}
                about discounts for your development teams.
            </p>
        ),
    },
]

const PLAN_COLORS: Record<'business' | 'enterprise', { borderColorClass: string; textColorClass: string }> = {
    business: {
        borderColorClass: 'tw-border-t-vermillion-300',
        textColorClass: 'tw-text-vermillion-300',
    },
    enterprise: {
        borderColorClass: 'tw-border-t-violet-400',
        textColorClass: 'tw-text-violet-400',
    },
}

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
                        description="Full platform access for teams and orgs, all on a single-tenant cloud instance."
                        price="$99 per active user/month"
                        buttons={<StartFreeButton />}
                        features={BIZ_FEATURES_OVERVIEW}
                        {...PLAN_COLORS.business}
                    />
                </div>

                <div className="tw-col-span-full md:tw-col-start-7 md:tw-col-span-5">
                    <PricingPlan
                        name="Enterprise"
                        description="Enterprise-grade security, scale, and support with custom deployment options."
                        price="Custom pricing"
                        buttons={<EnterpriseButtons />}
                        beforeFeatures={
                            <div className="tw-text-xl tw-font-semibold tw-mb-sm">Everything in Business, plus:</div>
                        }
                        features={ENTERPRISE_FEATURES_OVERVIEW}
                        {...PLAN_COLORS.enterprise}
                    />
                </div>
            </ContentSection>

            <h2 className="tw-text-center tw-mx-auto tw-mb-5 tw-max-w-2xl">
                The code intelligence platform for modern dev teams
            </h2>
            <CustomerLogos />

            <div className="tw-py-3xl md:tw-py-5xl md:tw-max-w-screen-xl tw-mx-auto tw-overflow-hidden md:tw-overflow-visible">
                <table className="tw-relative tw-border-0 tw-table-fixed tw-border-spacing-0 tw-border-separate">
                    <thead>
                        <tr className="md:tw-sticky md:tw-top-16 tw-border-0">
                            <th className="tw-border-0 tw-border-b tw-text-start tw-bg-white tw-p-0 tw-w-1/3">
                                <div className="lg:tw-h-60 md:tw-h-[157px] sm:tw-h-[140px] tw-h-[133px] md:tw-p-xs tw-p-xxs md:tw-pt-xs tw-pt-md md:tw-pr-xs">
                                    <h2 className="md:tw-max-w-[250px] tw-text-xl sm:tw-text-4xl lg:tw-text-7xl">
                                        Compare all features
                                    </h2>
                                </div>
                            </th>
                            <th className="tw-border-0 tw-border-b tw-text-start tw-bg-white tw-p-0 tw-w-1/3">
                                <div
                                    className={`tw-h-full lg:tw-h-60 md:tw-p-sm tw-p-xxs tw-pb-md tw-border-t-16 tw-border-1 tw-border-gray-200 tw-border-b-0 ${PLAN_COLORS.business.borderColorClass}`}
                                >
                                    <h2 className="tw-text-xl md:tw-text-4xl tw-mb-sm">Business</h2>
                                    <h4 className="tw-font-normal tw-hidden lg:tw-block tw-mb-sm">
                                        $99 per active user/month
                                    </h4>
                                    <StartFreeButton />
                                </div>
                            </th>
                            <th className="tw-border-0 tw-border-b tw-text-start tw-bg-white tw-p-0 tw-w-1/3">
                                <div
                                    className={`tw-h-full lg:tw-h-60 md:tw-p-sm tw-p-xxs tw-pb-md tw-border-t-16 tw-border-gray-200  ${PLAN_COLORS.enterprise.borderColorClass}`}
                                >
                                    <h2 className="tw-text-xl md:tw-text-4xl tw-mb-sm">Enterprise</h2>
                                    <h4 className="tw-font-normal tw-hidden lg:tw-block tw-mb-sm">Custom pricing</h4>
                                    <EnterpriseButtons contactUsClassName="tw-hidden lg:tw-block" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {ALL_FEATURES_COMPARED_DATA.map(section => (
                        <tbody key={section.topic}>
                            <tr className="tw-bg-white" key={section.topic}>
                                <th colSpan={100} className="tw-pt-lg md:tw-p-xs tw-p-xxs tw-text-start tw-border-0">
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
                                    <td className="tw-border-0 md:tw-p-xs tw-p-xxs">
                                        <PricingPlanFeature
                                            feature={ALL_FEATURE_INFO[feature.label]}
                                            tag="h5"
                                            className="tw-text-sm sm:tw-text-base tw-font-normal md:tw-font-semibold"
                                        />
                                    </td>
                                    {/* Business plan specs */}
                                    <td className="tw-border-0 tw-border-x-1 md:tw-p-xs tw-p-xxs tw-text-center tw-text-sm sm:tw-text-base tw-align-middle">
                                        {typeof feature.business === 'string' ? (
                                            feature.business
                                        ) : feature.business ? (
                                            <CheckIcon
                                                className={`mr-2 icon-inline ${PLAN_COLORS.business.textColorClass} tw-inline`}
                                            />
                                        ) : null}
                                        {feature.disclaimer && (
                                            <i className="tw-block tw-text-sm">{feature.disclaimer}</i>
                                        )}
                                    </td>
                                    {/* Enterprise plan specs */}
                                    <td className="tw-border-0 md:tw-p-xs tw-p-xxs tw-text-center tw-text-sm sm:tw-text-base tw-align-middle">
                                        {typeof feature.enterprise === 'string' ? (
                                            feature.enterprise
                                        ) : feature.enterprise ? (
                                            <CheckIcon
                                                className={`mr-2 icon-inline ${PLAN_COLORS.enterprise.textColorClass} tw-inline`}
                                            />
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
                title="Free for small teams"
                description="Small teams can use a limited version of Sourcegraph’s code intelligence platform for free to search personal and open source projects. The free version can only be self-hosted and supports one code host integration."
                cta1={{
                    text: 'Deploy',
                    link: 'https://docs.sourcegraph.com/#self-hosted',
                    ctaStyle: 'primaryButtonWhite',
                }}
                cta2={false}
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
