import { FunctionComponent, useState } from 'react'

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
    ALL_FEATURE_INFO,
    BIZ_FEATURES_OVERVIEW,
    ENTERPRISE_FEATURES_OVERVIEW,
    ALL_FEATURES_COMPARED_DATA,
} from '../components'
import { buttonLocation, buttonStyle } from '../data/tracking'

const StartFreeButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <a
        className={classNames('btn btn-primary', 'w-full md:w-auto', className)}
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
            <ContentSection className="grid grid-cols-1 lg:grid-cols-12 gap-sm">
                <div className="mb-sm md:mb-0 col-span-full md:col-start-2 md:col-span-5">
                    <PricingPlan
                        name="Business"
                        description="Full platform access for teams and orgs, all on a single-tenant cloud instance."
                        price="$99 per active user/month"
                        buttons={<StartFreeButton />}
                        features={BIZ_FEATURES_OVERVIEW}
                        {...PLAN_COLORS.business}
                    />
                </div>

                <div className="col-span-full md:col-start-7 md:col-span-5">
                    <PricingPlan
                        name="Enterprise"
                        description="Enterprise-grade security, scale, and support with custom deployment options."
                        price="Custom pricing"
                        buttons={<EnterpriseButtons />}
                        beforeFeatures={
                            <div className="text-xl font-semibold mb-sm">Everything in Business, plus:</div>
                        }
                        features={ENTERPRISE_FEATURES_OVERVIEW}
                        {...PLAN_COLORS.enterprise}
                    />
                </div>
            </ContentSection>

            <h2 className="text-center mx-auto mb-5 max-w-2xl">The code intelligence platform for modern dev teams</h2>
            <CustomerLogos />

            <div className="py-3xl md:py-5xl md:max-w-screen-xl mx-auto overflow-hidden md:overflow-visible">
                <table className="relative border-0 table-fixed border-spacing-0 border-separate">
                    <thead>
                        <tr className="md:sticky md:top-16 border-0">
                            <th className="border-0 border-b text-start bg-white p-0 w-1/3">
                                <div className="lg:h-60 md:h-[157px] sm:h-[140px] h-[133px] md:p-xs p-xxs md:pt-xs pt-md md:pr-xs">
                                    <h2 className="md:max-w-[250px] text-xl sm:text-4xl lg:text-7xl">
                                        Compare all features
                                    </h2>
                                </div>
                            </th>
                            <th className="border-0 border-b text-start bg-white p-0 w-1/3">
                                <div
                                    className={`h-full lg:h-60 md:p-sm p-xxs pb-md border-t-16 border-1 border-gray-200 border-b-0 ${PLAN_COLORS.business.borderColorClass}`}
                                >
                                    <h2 className="text-xl md:text-4xl mb-sm">Business</h2>
                                    <h4 className="font-normal hidden lg:block mb-sm">$99 per active user/month</h4>
                                    <StartFreeButton />
                                </div>
                            </th>
                            <th className="border-0 border-b text-start bg-white p-0 w-1/3">
                                <div
                                    className={`h-full lg:h-60 md:p-sm p-xxs pb-md border-t-16 border-gray-200  ${PLAN_COLORS.enterprise.borderColorClass}`}
                                >
                                    <h2 className="text-xl md:text-4xl mb-sm">Enterprise</h2>
                                    <h4 className="font-normal hidden lg:block mb-sm">Custom pricing</h4>
                                    <EnterpriseButtons contactUsClassName="hidden lg:block" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    {ALL_FEATURES_COMPARED_DATA.map(section => (
                        <tbody key={section.topic}>
                            <tr className="bg-white" key={section.topic}>
                                <th colSpan={100} className="pt-lg md:p-xs p-xxs text-start border-0">
                                    <h3 className="text-xl md:text-2xl font-semibold md:font-normal">
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
                                    <td className="border-0 md:p-xs p-xxs">
                                        <PricingPlanFeature
                                            feature={ALL_FEATURE_INFO[feature.label]}
                                            tag="h5"
                                            className="text-sm sm:text-base font-normal md:font-semibold"
                                        />
                                    </td>
                                    {/* Business plan specs */}
                                    <td className="border-0 border-x-1 md:p-xs p-xxs text-center text-sm sm:text-base align-middle">
                                        {typeof feature.business === 'string' ? (
                                            feature.business
                                        ) : feature.business ? (
                                            <CheckIcon
                                                className={`mr-2 icon-inline ${PLAN_COLORS.business.textColorClass} inline`}
                                            />
                                        ) : null}
                                        {feature.disclaimer && <i className="block text-sm">{feature.disclaimer}</i>}
                                    </td>
                                    {/* Enterprise plan specs */}
                                    <td className="border-0 md:p-xs p-xxs text-center text-sm sm:text-base align-middle">
                                        {typeof feature.enterprise === 'string' ? (
                                            feature.enterprise
                                        ) : feature.enterprise ? (
                                            <CheckIcon
                                                className={`mr-2 icon-inline ${PLAN_COLORS.enterprise.textColorClass} inline`}
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

            <ContentSection className="grid grid-cols-5">
                <h2 className="col-span-full md:col-span-2 mb-md max-w-md">Frequently asked questions</h2>

                <div className="col-span-full md:col-span-3">
                    {faqData.map((item, index) => (
                        <div key={item.q} className="border-t-1 border-gray-200 max-w-2xl mb-sm">
                            <div className="flex justify-between items-center">
                                <h4 className="text-start mt-sm">{item.q}</h4>
                            </div>
                            <div className="max-w-xl mt-xs">{item.a}</div>
                        </div>
                    ))}
                </div>
            </ContentSection>
        </Layout>
    )
}

export default PricingPage
