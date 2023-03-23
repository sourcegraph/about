import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import CheckIcon from 'mdi-react/CheckIcon'
import Link from 'next/link'

import {
    ContentSection,
    CallToActionContentSection,
    CustomerLogos,
    Layout,
    PricingPlan,
    PricingPlanFeature,
    ALL_FEATURE_INFO,
    BIZ_FEATURES_OVERVIEW as ENTERPRISE_STARTER_FEATURES_OVERVIEW,
    ENTERPRISE_FEATURES_OVERVIEW,
    ALL_FEATURES_COMPARED_DATA,
} from '../components'
import { buttonLocation, buttonStyle } from '../data/tracking'

const StartFreeButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        className={classNames('btn btn-primary', 'w-full md:w-auto', className)}
        href="/get-started?t=enterprise"
        title="Start for free"
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation.trySourcegraph}
        data-button-type="cta"
    >
        Start for free
    </Link>
)

const ContactUsButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        href="/contact/request-info?form_submission_source=pricing-enterprise"
        className={classNames('btn btn-outline-primary w-full md:w-auto', className)}
        title="Contact us"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation.bodyDemo}
        data-button-type="cta"
    >
        Contact us
    </Link>
)

const EnterpriseButtons: FunctionComponent<{ contactUsClassName?: string }> = ({ contactUsClassName }) => (
    <div className="flex flex-wrap gap-xs">
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
                <Link
                    href="/get-started?t=enterprise"
                    title="Get started"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Get started
                </Link>{' '}
                with a free trial today.
            </p>
        ),
    },
    {
        q: 'What are executors?',
        a: 'Executors are required to run Batch Changes server-side and to use code navigation’s auto-indexing functionality. The Enterprise Starter plan includes 2 executors and the Enterprise plan includes 4 executors.',
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

const PLAN_COLORS: Record<'enterpriseStarter' | 'enterprise', { borderColorClass: string; textColorClass: string }> = {
    enterpriseStarter: {
        borderColorClass: 'border-t-vermillion-300',
        textColorClass: 'text-vermillion-300',
    },
    enterprise: {
        borderColorClass: 'border-t-violet-400',
        textColorClass: 'text-violet-400',
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
            hero={
                <div className="container mx-auto pt-5xl text-center">
                    <h1>Plans for every dev team</h1>
                </div>
            }
        >
            <ContentSection className="grid grid-cols-1 gap-sm lg:grid-cols-12">
                <div className="col-span-full mb-sm md:col-span-5 md:col-start-2 md:mb-0">
                    <PricingPlan
                        name="Enterprise Starter"
                        description="Full platform access for teams and orgs. Flexible deployment options. Online Terms of Service and workshop based evaluation path."
                        price="Starts at $5k/year"
                        priceDetail="Scales with your team"
                        buttons={<StartFreeButton />}
                        features={ENTERPRISE_STARTER_FEATURES_OVERVIEW}
                        {...PLAN_COLORS.enterpriseStarter}
                    />
                </div>

                <div className="col-span-full md:col-span-5 md:col-start-7">
                    <PricingPlan
                        name="Enterprise"
                        description="All the benefits of Enterprise Starter with increased Support SLAs and custom deployment options."
                        price="Starts at $50k/year"
                        priceDetail="Scales with your team"
                        buttons={<EnterpriseButtons />}
                        features={ENTERPRISE_FEATURES_OVERVIEW}
                        {...PLAN_COLORS.enterprise}
                    />
                </div>
            </ContentSection>

            <h2 className="mx-auto mb-5 max-w-2xl text-center">The code intelligence platform for modern dev teams</h2>
            <CustomerLogos />

            <div className="mx-auto overflow-hidden py-3xl md:max-w-screen-xl md:overflow-visible md:py-5xl">
                <table className="relative table-fixed border-separate border-spacing-0 border-0">
                    <thead>
                        <tr className="border-0 md:sticky md:top-16">
                            <th className="w-1/3 border-0 border-b bg-white p-0 text-start">
                                <div className="h-[133px] p-xxs pt-md sm:h-[140px] md:h-[157px] md:p-xs md:pt-xs md:pr-xs lg:h-60">
                                    <h2 className="text-xl sm:text-4xl md:max-w-[250px] lg:text-7xl">
                                        Compare all features
                                    </h2>
                                </div>
                            </th>
                            <th className="w-1/3 border-0 border-b bg-white p-0 text-start">
                                <div
                                    className={`h-full border-1 border-t-16 border-b-0 border-gray-200 p-xxs pb-md md:p-sm lg:h-60 ${PLAN_COLORS.enterpriseStarter.borderColorClass}`}
                                >
                                    <h2 className="mb-sm text-xl md:text-4xl">Enterprise Starter</h2>
                                    <h4 className="mb-sm hidden font-normal lg:block">Starts at $5k/year</h4>
                                    <StartFreeButton />
                                </div>
                            </th>
                            <th className="w-1/3 border-0 border-b bg-white p-0 text-start">
                                <div
                                    className={`h-full border-t-16 border-gray-200 p-xxs pb-md md:p-sm lg:h-60  ${PLAN_COLORS.enterprise.borderColorClass}`}
                                >
                                    <h2 className="mb-sm text-xl md:text-4xl">Enterprise</h2>
                                    <h4 className="mb-sm hidden font-normal lg:block">Starts at $50k/year</h4>
                                    <EnterpriseButtons contactUsClassName="hidden lg:block" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {ALL_FEATURES_COMPARED_DATA.map(section => (
                        <tbody key={section.topic}>
                            <tr className="bg-white" key={section.topic}>
                                <th colSpan={100} className="border-0 p-xxs pt-lg text-start md:p-xs">
                                    <h3 className="text-xl font-semibold md:text-2xl md:font-normal">
                                        {section.topic}
                                    </h3>
                                </th>
                            </tr>
                            {section.features.map((feature, index) => (
                                <tr
                                    className={classNames(
                                        'border-0',
                                        index + 1 === section.features.length && 'border-b-1 border-gray-200'
                                    )}
                                    key={feature.label}
                                >
                                    {/* Feature title */}
                                    <td className="border-0 p-xxs md:p-xs">
                                        <PricingPlanFeature
                                            feature={ALL_FEATURE_INFO[feature.label]}
                                            tag="h5"
                                            className="text-sm font-normal sm:text-base md:font-semibold"
                                        />
                                    </td>
                                    {/* Enterprise Starter plan specs */}
                                    <td className="border-0 border-x-1 p-xxs text-center align-middle text-sm sm:text-base md:p-xs">
                                        {typeof feature.enterpriseStarter === 'string' ? (
                                            feature.enterpriseStarter
                                        ) : feature.enterpriseStarter ? (
                                            <CheckIcon
                                                className={`icon-inline mr-2 ${PLAN_COLORS.enterpriseStarter.textColorClass} inline`}
                                            />
                                        ) : null}
                                        {feature.disclaimer && <i className="block text-sm">{feature.disclaimer}</i>}
                                    </td>
                                    {/* Enterprise plan specs */}
                                    <td className="border-0 p-xxs text-center align-middle text-sm sm:text-base md:p-xs">
                                        {typeof feature.enterprise === 'string' ? (
                                            feature.enterprise
                                        ) : feature.enterprise ? (
                                            <CheckIcon
                                                className={`icon-inline mr-2 ${PLAN_COLORS.enterprise.textColorClass} inline`}
                                            />
                                        ) : null}
                                        {feature.disclaimer && <i className="block text-sm">{feature.disclaimer}</i>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ))}
                </table>
            </div>

            <CallToActionContentSection
                title="Free for small teams"
                description="Small teams can use a limited version of Sourcegraph’s code intelligence platform for free to search personal and open source projects. The free version can only be self-hosted and supports one code host integration."
                cta1={{
                    text: 'Deploy',
                    link: 'https://docs.sourcegraph.com/#self-hosted',
                    ctaStyle: 'primaryButtonWhite',
                }}
                cta2={false}
            />

            <ContentSection className="grid grid-cols-5">
                <h2 className="col-span-full mb-md max-w-md md:col-span-2">Frequently asked questions</h2>

                <div className="col-span-full md:col-span-3">
                    {faqData.map(item => (
                        <div key={item.q} className="mb-sm max-w-2xl border-t-1 border-gray-200">
                            <div className="flex items-center justify-between">
                                <h4 className="mt-sm text-start">{item.q}</h4>
                            </div>
                            <div className="mt-xs max-w-xl">{item.a}</div>
                        </div>
                    ))}
                </div>
            </ContentSection>
        </Layout>
    )
}

export default PricingPage
