import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Badge, ContentSection, CustomerLogos, Layout } from '../components'

const PricingPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph | Pricing',
            description: 'Pricing and plans for Sourcegraph Cody and Code Search. Get started with a free trial today.',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1>Pricing and plans</h1>
            </div>
        }
    >
        <ContentSection className="mx-auto mb-6 max-w-[36rem]">
            <p className="text-center text-lg text-gray-600">Select a product to see pricing and plans.</p>
            <div className="grid grid-cols-2 gap-sm">
                <Link
                    className="btn btn-secondary-outlined flex items-center justify-center gap-2 text-3xl"
                    href="/cody/pricing"
                >
                    <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[27px] w-[27px]" /> Cody{' '}
                    <Badge size="small" text="BETA" color="violet" />
                </Link>
                <Link
                    className="btn btn-secondary-outlined flex items-center justify-center gap-2 text-3xl"
                    href="/code-search/pricing"
                >
                    <img src="/codesearch-logomark-default.svg" alt="Cody Logo" className="h-[27px] w-[27px]" /> Code
                    Search
                </Link>
            </div>
        </ContentSection>

        <hr />

        <h2 className="mx-auto mt-[4rem] mb-5 max-w-2xl text-center">Trusted by sophisticated dev teams</h2>
        <CustomerLogos />
    </Layout>
)

export default PricingPage
