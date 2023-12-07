import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection, Layout } from '../../components'
import { useAuthModal } from '../../context/AuthModalContext'
import { buttonLocation, buttonStyle } from '../../data/tracking'

const featureSupport = [
    {
        feature: 'Autocomplete',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Chat',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: 'Preview',
        view_competitor_details: false,
    },
    {
        feature: 'Commands',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Custom commands',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Security vulnerability scanning',
        feature_details: '',
        view_feature_details: false,
        cody: 'x',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: '',
        view_competitor_details: false,
    },
]

const ideSupport = [
    {
        feature: 'Visual Studio Code',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'JetBrains',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Visual Studio',
        feature_details: '',
        view_feature_details: false,
        cody: 'x',
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Other',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: ['Neovim'],
        view_cody_details: false,
        competitor: '✓',
        competitor_details: ['AWS Cloud9', 'AWS Lambda'],
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
        competitor: 'x',
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
        competitor: 'Not disclosed',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Choose your LLM',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Bring your own LLM key',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
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
        competitor: 'Cloud',
        competitor_details: '',
        view_competitor_details: false,
    },
]

const contextSupport = [
    {
        feature: 'Personalized responses using codebase context',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: 'Available on all tiers',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: 'Preview for Enterprise tier',
        view_competitor_details: false,
    },
    {
        feature: 'Fine-tuned LLM',
        feature_details: '',
        view_feature_details: false,
        cody: 'x',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
        competitor_details: 'Preview for Enterprise tier',
        view_competitor_details: false,
    },
]

const pricingSupport = [
    {
        feature: 'Free tier offered',
        feature_details: '',
        view_feature_details: false,
        cody: '✓',
        cody_details: '',
        view_cody_details: false,
        competitor: '✓',
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
        competitor: '$19 / user /month',
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

const FeatureComponent: FunctionComponent<{ item: any }> = (item: any) => {
    const data = item.item
    const [showFeatureDetails, setShowFeatureDetails] = useState(data.view_feature_details)
    const [showCodyDetails, setShowCodyDetails] = useState(data.view_feature_details)
    const [showCompetitorDetails, setShowCompetitorDetails] = useState(data.view_feature_details)
    const toggleFeatureDetails = (): void => setShowFeatureDetails(!showFeatureDetails)
    const toggleCodyDetails = (): void => setShowCodyDetails(!showCodyDetails)
    const toggleCompetitorDetails = (): void => setShowCompetitorDetails(!showCompetitorDetails)

    return (
        <tr>
            <td className="w-1/2">
                {data.feature}

                {data.feature_details && data.feature_details.length > 0 && (
                    <button type="button" className="ml-2 text-xs" onClick={() => toggleFeatureDetails()}>
                        ⓘ
                    </button>
                )}

                {showFeatureDetails && (
                    <>
                        <p className="text-xs">{data.feature_details}</p>
                    </>
                )}
            </td>

            <td className="relative w-1/4 text-center">
                {data.cody}
                {data.cody_details && data.cody_details.length > 0 && (
                    <button type="button" className="absolute ml-2 text-xs" onClick={() => toggleCodyDetails()}>
                        ⓘ
                    </button>
                )}
                {showCodyDetails &&
                    Array.isArray(data.cody_details) &&
                    data.cody_details.map((item: any, index: number) => (
                        <div key={index} className="text-xs">
                            {item}
                        </div>
                    ))}

                {showCodyDetails && !Array.isArray(data.cody_details) && <p>{data.cody_details}</p>}
            </td>

            <td className="relative w-1/4 text-center">
                {data.competitor}
                {data.competitor_details && data.competitor_details.length > 0 && (
                    <button type="button" className="absolute ml-2 text-xs" onClick={() => toggleCompetitorDetails()}>
                        ⓘ
                    </button>
                )}
                {showCompetitorDetails && <p className="text-xs">{data.competitor_details}</p>}
            </td>
        </tr>
    )
}

const CompareCopilotPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Cody vs. Amazon CodeWhisperer',
            description: 'Feature comparison of Sourcegraph Cody and Amazon CodeWhisperer',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1 className="flex items-center justify-center gap-3">
                    <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px]" /> vs <img src="/assets/compare/amazon-codewhisperer.svg" alt="Amazon CodeWhisperer Logo" className="h-[48px] w-[48px]" />
                </h1>
                <p className="mt-6 text-3xl text-black">Sourcegraph Cody vs. Amazon CodeWhisperer</p>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-12">
            <div className="col-span-full">
                <p>CodeWhisperer is an AI code assistant from Amazon focused on autocomplete, free for individuals with AWS Builder IDs. Uniquely, CodeWhisperer is optimized to give code completions based on best practices for using AWS APIs. Enterprise users can also customize CodeWhisperer for their own codebases, but this is not available for free-tier users.</p>

                <p>CodeWhisperer itself does not offer chat or command features, but AWS offers a chat assistant (“Amazon Q”) in the same IDE extension as CodeWhisperer. Q is currently in a free preview, and it is expected to cost $20 / user / month once it is fully released. </p>
                <p><strong>TL;DR:</strong> CodeWhisperer is a good solution for developers primarily looking for autocomplete or developers working with AWS APIs. It can also provide context-aware autocomplete for enterprises using the new codebase customization. Meanwhile, Cody is a good option for developers who want more expansive functionality, such as chat and commands alongside autocomplete, or for free-tier users who are looking for a context-aware code AI.</p>
              
                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 font-semibold text-left">Features</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Amazon CodeWhisperer</th>
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
                            <th className="w-1/2 border-0 font-semibold text-left">IDE support</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Amazon CodeWhisperer</th>
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
                            <th className="w-1/2 border-0 font-semibold text-left">LLM / Model</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Amazon CodeWhisperer</th>
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
                            <th className="w-1/2 border-0 font-semibold text-left">Context and personalization</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Amazon CodeWhisperer</th>
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
                            <th className="w-1/2 border-0 font-semibold text-left">Pricing</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Amazon CodeWhisperer</th>
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
        </ContentSection>
    </Layout>
)

export default CompareCopilotPage
