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
        competitor_details: 'Limited to 2-3 word completions on free tier',
        view_competitor_details: false,
    },
    {
        feature: 'Chat',
        feature_details: '',
        view_feature_details: false,
        cody: true,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: 'Waiting list',
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
    },
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
        competitor_details: ['Eclipse'],
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
        feature: 'Autcomplete model (default)',
        feature_details: '',
        view_feature_details: false,
        cody: 'StarCoder',
        cody_details: '',
        view_cody_details: false,
        competitor: 'Proprietary',
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
        competitor: false,
        competitor_details: 'Coming soon for Enterprise tier',
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
        competitor: '$12 / user / month',
        competitor_details: '',
        view_competitor_details: false,
    },
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
            title: 'Sourcegraph Cody vs. Tabnine',
            description: 'Feature comparison of Sourcegraph Cody and Tabnine',
        }}
        hero={
            <CompareHero
                title="Sourcegraph Cody vs. Tabnine"
                competitorDescription="Tabnine Logo"
                competitorIcon="/assets/compare/tabnine.svg"
            >
                <p>
                    Tabnine is an AI assistant primarily focused on code autocomplete. Tabnine Chat, an in-IDE chat
                    feature, is also in beta but only for Enterprise users. The free tier of Tabnine has limited
                    functionality, offering short code completions of 2-3 words, and not offering chat or other AI
                    commands.
                </p>
                <p>
                    The most unique aspect of Tabnine is its hybrid LLM approach. Tabnine's free tier (Starter) runs a
                    small model on the user's local machine and a larger model in the cloud. Tabnine Pro also offers a
                    model where users can run the Tabnine AI models entirely on their local machine.
                </p>
                <p>
                    <strong className="inline-block rounded-sm bg-blue-100 px-2 py-1 text-blue-500">TL;DR:</strong>{' '}
                    Tabnine is a good choice for users who want to run their LLM entirely on their local machine, but
                    its Starter and Pro tiers are restricted to only autocomplete. Cody Free and Cody Pro offer a wider
                    range of features (autocomplete, chat, and commands) using cloud-based models.
                </p>
            </CompareHero>
        }
    >
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-lg md:grid-cols-12 xl:px-0 px-5">
            <div className="col-span-full">
                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 text-left font-semibold">Features</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Tabnine</th>
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
                            <th className="w-1/4 border-0 font-semibold">Tabnine</th>
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
                            <th className="w-1/4 border-0 font-semibold">Tabnine</th>
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
                            <th className="w-1/4 border-0 font-semibold">Tabnine</th>
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
                            <th className="w-1/4 border-0 font-semibold">Tabnine</th>
                        </tr>
                    </thead>

                    <tbody>
                        {pricingSupport?.map((item, index: number) => (
                            <FeatureComponent item={item} key={index} />
                        ))}
                    </tbody>
                </table>

                <p>Last updated: 12-06-2023</p>
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
