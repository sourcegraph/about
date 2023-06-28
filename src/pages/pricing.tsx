import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, CallToActionContentSection, CustomerLogos, Layout } from '../components'
import { PricingPlan, ENTERPRISE_STARTER_FEATURES_OVERVIEW, ENTERPRISE_FEATURES_OVERVIEW } from '../components/Pricing'
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
        q: 'My organization requires the use of its own legal contract. Which plan is right for me?',
        a: (
            <p>
                Only the Enterprise plan supports this. The Enterprise Starter plan uses our{' '}
                <Link href="/terms" className="text-black underline">
                    online terms of service
                </Link>
                .
            </p>
        ),
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

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Pricing',
            description: 'Pricing and plans for Sourcegraph Cody and Code Search. Get started with a free trial today.',
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
                    description={
                        <h3 className="my-sm max-w-sm text-lg font-normal md:min-h-[108px]">
                            Powerful, easy code search for teams and organizations.
                        </h3>
                    }
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
                    description={
                        <h3 className="my-sm max-w-sm text-lg font-normal md:min-h-[108px]">
                            Everything in Enterprise Starter, plus additional integration, deployment, security, and
                            support options.
                        </h3>
                    }
                    price="Starts at $50k/year"
                    priceDetail="Scales with your team"
                    buttons={<EnterpriseButtons />}
                    features={ENTERPRISE_FEATURES_OVERVIEW}
                    {...PLAN_COLORS.enterprise}
                />
            </div>
        </ContentSection>

        <h2 className="mx-auto mb-5 max-w-2xl text-center">Trusted by sophisticated dev teams</h2>
        <CustomerLogos />

        <CallToActionContentSection
            title="Try Sourcegraph for free"
            description="Individuals can use a limited version of Sourcegraph’s code intelligence platform for free with the Sourcegraph app."
            cta1={{
                text: 'Install the app',
                link: 'https://about.sourcegraph.com/get-started',
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

export default PricingPage
