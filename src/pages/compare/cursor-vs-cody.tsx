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
        competitor: 'x',
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
        competitor_details: '',
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
        competitor_details: 'Cursor is a standalone fork of VS Code',
        view_competitor_details: false,
    },
    {
        feature: 'JetBrains',
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
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
        competitor_details: '',
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
        competitor: 'GPT-3.5',
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
        competitor: 'x',
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
        competitor: '✓',
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
        competitor: '✓',
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
        competitor_details: 'Available on all tiers',
        view_competitor_details: false,
    },
    {
        feature: 'Fine-tuned LLM',
        feature_details: '',
        view_feature_details: false,
        cody: 'x',
        cody_details: '',
        view_cody_details: false,
        competitor: 'x',
        competitor_details: 'Waitlist for Enterprise tier',
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
        competitor: 'x',
        competitor_details: 'Free for students, teachers, and OSS mainters',
        view_competitor_details: false,
    },
    {
        feature: 'Pro tier pricing for individuals',
        feature_details: '',
        view_feature_details: false,
        cody: '$9 / user / month',
        cody_details: '',
        view_cody_details: false,
        competitor: '$20 / user /month',
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
            title: 'Sourcegraph Cody vs. Cursor',
            description: 'Feature comparison of Sourcegraph Cody and Cursor',
        }}
        hero={
            <div className="container mx-auto pt-5xl text-center">
                <h1 className="flex items-center justify-center gap-3">
                    <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[48px] w-[48px]" /> {' '} vs <img src="/assets/compare/cursor.svg" alt="Cursor Logo" className="h-[48px] w-[48px]" />
                </h1>
                <p className="mt-6 text-3xl text-black">Sourcegraph Cody vs. Cursor</p>
            </div>
        }
    >
        <ContentSection className="grid grid-cols-1 gap-lg md:grid-cols-12">
            <div className="col-span-full">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <table className="table-fixed border-0">
                    <thead>
                        <tr>
                            <th className="w-1/2 border-0 font-semibold text-left">Features</th>
                            <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                            <th className="w-1/4 border-0 font-semibold">Cursor</th>
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
                            <th className="w-1/4 border-0 font-semibold">Cursor</th>
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
                            <th className="w-1/4 border-0 font-semibold">Cursor</th>
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
                            <th className="w-1/4 border-0 font-semibold">Cursor</th>
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
                            <th className="w-1/4 border-0 font-semibold">Cursor</th>
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
