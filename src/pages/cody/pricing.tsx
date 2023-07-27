import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, Layout } from '../../components'
import { PricingPlan } from '../../components/Pricing'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const GetStartedButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        className={classNames('btn btn-primary', 'w-full md:w-auto', className)}
        href="https://sourcegraph.com/get-cody"
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation.body}
        data-button-type="cta"
    >
        Get started
    </Link>
)

const ContactUsButton: FunctionComponent<{ className?: string }> = ({ className }) => (
    <Link
        href="/contact/request-info?form_submission_source=pricing-cody-enterprise"
        className={classNames('btn btn-outline-primary w-full md:w-auto', className)}
        title="Contact us"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation.bodyDemo}
        data-button-type="cta"
    >
        Contact us
    </Link>
)

const PLAN_COLORS: Record<'freeTier' | 'enterprise', { borderColorClass: string; textColorClass: string }> = {
    freeTier: {
        borderColorClass: 'border-t-violet-300',
        textColorClass: 'text-violet-400',
    },
    enterprise: {
        borderColorClass: 'border-t-violet-400',
        textColorClass: 'text-violet-400',
    },
}

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Cody pricing and plans',
            description:
                'Pricing and plans for Sourcegraph Cody. Free forever plan for devs, with paid plans available.',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1 className="flex items-center justify-center gap-3">
                    <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px]" /> Cody pricing
                    and plans
                </h1>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-12">
            <div className="col-span-full mb-sm md:col-span-5 md:col-start-2 md:mb-0">
                <PricingPlan
                    name="Free tier"
                    description={
                        <h3 className="my-sm max-w-sm text-lg font-normal md:min-h-[58px]">
                            The most powerful and accurate code AI. Free forever for individual devs on public and
                            private code, with a generous{' '}
                            <Link href="https://docs.sourcegraph.com/app#rate-limiting">rate limit</Link>.
                        </h3>
                    }
                    price="$0"
                    buttons={<GetStartedButton />}
                    features={[
                        {
                            topic: 'Code autocomplete',
                        },
                        {
                            topic: 'Recipes',
                        },
                        {
                            topic: 'Chat',
                        },
                        {
                            topic: 'Context-awareness',
                        },
                        {
                            topic: 'Public and private code',
                        },
                        {
                            topic: 'Editor extensions',
                        },
                        {
                            topic: 'Community support',
                        },
                    ]}
                    {...PLAN_COLORS.freeTier}
                />
            </div>

            <div className="col-span-full md:col-span-5">
                <PricingPlan
                    name="Enterprise"
                    description={
                        <h3 className="my-sm max-w-sm text-lg font-normal md:min-h-[58px]">
                            Code AI for the enterprise, built on Sourcegraph's secure and scalable universal code graph.
                        </h3>
                    }
                    price="Contact us"
                    priceDetail="Beta access available to Code Search customers"
                    buttons={<ContactUsButton />}
                    beforeFeatures={<p>Everything in the free tier, plus:</p>}
                    features={[
                        { topic: 'Improved context' },
                        { topic: 'User management' },
                        { topic: 'Single-tenant deployment' },
                        { topic: 'Audit logging' },
                        { topic: 'Pooled organization usage' },
                        { topic: 'Daily rate limits while in beta' },
                        { topic: 'Web and API access' },                        
                        { topic: 'Configurable LLMs' },
                        { topic: 'Bring-your-own Key for Anthropic and OpenAI' },
                        { topic: '24/5 support' },
                    ]}
                    {...PLAN_COLORS.enterprise}
                />
            </div>
        </ContentSection>
    </Layout>
)

export default PricingPage
