import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { DemoComparisons } from '../../components/Compare/DemoComparisons'
import { FeatureComponent } from '../../components/Compare/FeatureComponent'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'
import { useAuthModal } from '../../context/AuthModalContext'

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
        competitor_details: 'Cursor is a standalone fork of VS Code',
        view_competitor_details: false,
    },
    {
        feature: 'JetBrains',
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
        feature: 'Visual Studio',
        feature_details: '',
        view_feature_details: false,
        cody: false,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: '',
        view_competitor_details: false,
    },
    {
        feature: 'Other',
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
        feature: 'Autocomplete model (default)',
        feature_details: '',
        view_feature_details: false,
        cody: 'StarCoder',
        cody_details: '',
        view_cody_details: false,
        competitor: false,
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
        competitor: true,
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
        competitor: true,
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
    {
        feature: 'Pro tier pricing for individuals',
        feature_details: '',
        view_feature_details: false,
        cody: '$9 / user / month',
        cody_details: '',
        view_cody_details: false,
        competitor: '$20 / user / month',
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
        competitor_details: 'Available on all tiers',
        view_competitor_details: false,
    },
    {
        feature: 'Fine-tuned LLM',
        feature_details: '',
        view_feature_details: false,
        cody: false,
        cody_details: '',
        view_cody_details: false,
        competitor: false,
        competitor_details: 'Waitlist for Enterprise tier',
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
        competitor: false,
        competitor_details: 'Free for students, teachers, and OSS mainters',
        view_competitor_details: false,
    },
]

const CursorVsCodyPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('home')

    return (
        <Layout
            meta={{
                title: 'Sourcegraph Cody vs. Cursor',
                description: 'Feature comparison of Sourcegraph Cody and Cursor',
            }}
            hero={
                <CompareHero
                    title="Sourcegraph Cody vs. Cursor"
                    titleClassName="lg:text-[72px] text-5xl lg:leading-[86px] w-full font-sans max-w-[671px] font-semibold mt-2"
                    simpleStyle={true}
                    competitorDescription="Cursor Logo"
                    competitorIcon="/assets/compare/cursor.svg"
                    containerClassName="xl:px-6 xl:pt-[121px]"
                >
                    <h3 className="mt-[-15px] mb-0 pb-[5px] font-sf leading-[30px] tracking-[-0.25px] lg:w-[671px] lg:text-2xl">
                        H3 Lorem ipsum dolor sit amet consectetur. Ullamcorper feugiat sit est imperdiet fringilla odio
                        pellentesque ut mattis.
                    </h3>

                    <button
                        type="button"
                        className="btn btn-inverted-primary mt-0 min-w-[204px] border px-6 py-2 text-violet-500 "
                        title="Get Cody for free"
                        onClick={handleOpenModal}
                    >
                        <div className="flex items-center justify-center">
                            <img src="/cody/cody-logo.svg" className="mr-2 h-[24px] w-[24px]" alt="Cody Logo" /> Get
                            Cody for free
                        </div>
                    </button>
                </CompareHero>
            }
        >
            <div className="relative z-20 mx-auto grid max-w-[1066px] grid-cols-1 gap-lg bg-white px-5 md:grid-cols-12 lg:pt-[86px] xl:px-0">
                <div className="col-span-full">
                    <table className="table-fixed border-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 border-0 text-left font-semibold">Features</th>
                                <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                                <th className="w-1/4 border-0 font-semibold">Cursor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {featureSupport?.map(item => (
                                <FeatureComponent item={item} key={item.feature} />
                            ))}
                        </tbody>
                    </table>

                    <table className="table-fixed border-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 border-0 text-left font-semibold">IDE support</th>
                                <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                                <th className="w-1/4 border-0 font-semibold">Cursor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {ideSupport?.map(item => (
                                <FeatureComponent item={item} key={item.feature} />
                            ))}
                        </tbody>
                    </table>

                    <table className="table-fixed border-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 border-0 text-left font-semibold">LLM / Model</th>
                                <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                                <th className="w-1/4 border-0 font-semibold">Cursor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {llmSupport?.map(item => (
                                <FeatureComponent item={item} key={item.feature} />
                            ))}
                        </tbody>
                    </table>

                    <table className="table-fixed border-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 border-0 text-left font-semibold">Context and personalization</th>
                                <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                                <th className="w-1/4 border-0 font-semibold">Cursor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {contextSupport?.map(item => (
                                <FeatureComponent item={item} key={item.feature} />
                            ))}
                        </tbody>
                    </table>

                    <table className="table-fixed border-0">
                        <thead>
                            <tr>
                                <th className="w-1/2 border-0 text-left font-semibold">Pricing</th>
                                <th className="w-1/4 border-0 font-semibold">Sourcegraph Cody</th>
                                <th className="w-1/4 border-0 font-semibold">Cursor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {pricingSupport?.map(item => (
                                <FeatureComponent item={item} key={item.feature} />
                            ))}
                        </tbody>
                    </table>

                    <p className="mt-1 text-sm text-gray-400">Last updated: 2023-12-06</p>
                </div>
            </div>

            <CodyCallToActionContentSection
                title="Get Cody, the AI coding assistant"
                description="Cody makes it easy to write, fix, and maintain code."
                cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
                cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
                smallCta={true}
            />

            <div className="mx-auto mb-10 max-w-[1232px]  lg:pt-10">
                <h2 className="mb-10 px-4 lg:mb-[75px] lg:px-0">Compare other code AI assistants</h2>
                <DemoComparisons />
            </div>
        </Layout>
    )
}

export default CursorVsCodyPage
