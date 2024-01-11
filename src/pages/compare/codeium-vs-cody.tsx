import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { FeatureComponent } from '../../components/Compare/FeatureComponent'
import { OtherComparisons } from '../../components/Compare/OtherComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'
import { useAuthModal } from '../../context/AuthModalContext'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const featureSupport = [
    {
        feature: 'Autocomplete',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Chat',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Commands',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Custom commands',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: '',
        view_competitor_details: false,
    }
]

const ideSupport = [
    {
        feature: 'Visual Studio Code',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'JetBrains',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Visual Studio',
        feature_details: '',
        view_feature_details: false,
        cody: false,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Other',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: ['Neovim'],
        view_cody_details: false,
        competitor: true,
        competitor_details: ['Neovim ', 'Eclipse ', 'Xcode ', 'Sublime ', 'Emacs '],
        view_competitor_details: false,
    },
]

const llmSupport = [
    {
        feature: 'Chat model (default)',
        feature_details: '',
        view_feature_details: false,
        cody: 'Claude 2',
        cody_details: '',
        view_cody_details: false,
        competitor: 'Proprietary',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Autocomplete model (default)',
        feature_details: '',
        view_feature_details: false,
        cody: 'StarCoder',
        cody_details: '',
        view_cody_details: false,
        competitor: 'Not disclosed',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Choose your LLM',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Bring your own LLM key',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'LLM hosting',
        feature_details: '',
        view_feature_details: false,
        cody: 'Cloud',
        cody_details: '',
        view_cody_details: false,
        competitor: 'Cloud or on-prem',
        competitor_details: '',
        view_competitor_details: false,
    },
]

const contextSupport = [
    {
        feature: 'Personalized responses using codebase context',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: 'Available on all tiers',
        view_cody_details: false,
        competitor: true,
        competitor_details: 'Available for all tiers',
        view_competitor_details: false,
    },
    {
        feature: 'Fine-tuned LLM',
        feature_details: '',
        view_feature_details: false,
        cody: false,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: 'Enterprise tier',
        view_competitor_details: false,
    },
]

const pricingSupport = [
    {
        feature: 'Free tier offered',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: true,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Pro tier pricing for individuals',
        feature_details: '',
        view_feature_details: false,
        cody: '$9 / user / month',
        cody_details: '',
        view_cody_details: false,
        competitor: '$15 / user / month',
        competitor_details: '',
        view_competitor_details: false,
    }
]

const GetStartedButton: FunctionComponent<{ className?: string }> = ({ className }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody')

    return (
        <button
            title="Get started"
            className={classNames('btn btn-primary', className)}
            type="button"
            onClick={handleOpenModal}
        >
            Get started
        </button>
    )
}

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

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs. Codeium',
            description: 'Feature comparison of Sourcegraph Cody and Codeium',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs. Codeium"
                competitorDescription="Codeium Logo"
                competitorIcon="/assets/compare/codeium.svg"
            >
                <p>
                    Codeium is an AI coding extension that provides code completion, search, and chat for over 70 programming languages. It is available for many popular IDEs including Visual Studio Code, JetBrains, Visual Studio, and others. 
                </p>

                <p>
                    Codeium differentiates itself from other AI coding tools by training in-house models on various programming languages, while also providing support for popular LLMs like GPT-4.
                </p>
                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Codeium is an code AI extension that provides code completion, search, and chat for over 70 programming languages by training in-house models on their own infrastructure.
                </p>
            </CompareHero>
        }
    >
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-lg px-5 md:grid-cols-12 xl:px-0">
            <div className="col-span-full">
                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 text-left font-semibold">Features</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Codeium</th>
                        </tr>
                    </thead>

                    <tbody>
                        {featureSupport?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index} />
                        ))}
                    </tbody>
                </table>

                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 text-left font-semibold">IDE support</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Codeium</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ideSupport?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index} />
                        ))}
                    </tbody>
                </table>

                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 text-left font-semibold">LLM / Model</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Codeium</th>
                        </tr>
                    </thead>

                    <tbody>
                        {llmSupport?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index} />
                        ))}
                    </tbody>
                </table>

                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 text-left font-semibold">Context and personalization</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Codeium</th>
                        </tr>
                    </thead>

                    <tbody>
                        {contextSupport?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index} />
                        ))}
                    </tbody>
                </table>

                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 text-left font-semibold">Pricing</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Codeium</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pricingSupport?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index} />
                        ))}
                    </tbody>
                </table>

                <p className="mt-1 text-sm text-gray-400">Last updated: 2024-01-11</p>
            </div>
        </div>

        <CodyCallToActionContentSection
            title="Get Cody, the AI coding assistant"
            description="Cody makes it easy to write, fix, and maintain code."
            cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
            cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
        />

        <div className="mx-auto my-10 max-w-screen-xl">
            <h2 className="mb-10">Compare other code AI assistants</h2>
            <OtherComparisons />
        </div>
    </Layout>
)

export default CompareCopilotPage
