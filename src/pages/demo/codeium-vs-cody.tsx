import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import CompareHero from '../../components/Compare/CompareHero'
import { CompareTables } from '../../components/Compare/CompareTables'
import { codeiumVsCody } from '../../components/Compare/constants'
import { DemoComparisons } from '../../components/Compare/DemoComparisons'
import { CodyCallToActionContentSection } from '../../components/cta/CodyCallToActionContentSection'
import { useAuthModal } from '../../context/AuthModalContext'
import { captureCustomEventWithPageData } from '../../lib/utils'

const CodeiumVsCodyPage: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal('home')
    }

    return (
        <Layout
            meta={{
                title: 'Sourcegraph Cody vs Codeium',
                description: 'Feature comparison of Sourcegraph Cody and Codeium',
            }}
            hero={
                <CompareHero
                    title="Sourcegraph Cody vs Codeium"
                    titleClassName="lg:text-[72px] text-5xl lg:leading-[86px] w-full font-sans max-w-[671px] font-semibold mt-2"
                    simpleStyle={true}
                    competitorDescription="Codeium Logo"
                    competitorIcon="/assets/compare/codeium.svg"
                    containerClassName="xl:pt-[121px]"
                >
                    <h3 className="mt-[-15px] mb-0 pb-[5px] lg:w-[671px]">
                        Cody is the better option for users who want more transparency and choice for the model being
                        used.
                    </h3>

                    <button
                        type="button"
                        className="btn btn-inverted-primary mt-0 min-w-[204px] border px-6 py-2 text-violet-500 "
                        title="Get Cody for free"
                        onClick={() => handleOpenModal('top')}
                    >
                        <div className="flex items-center justify-center leading-6 tracking-[-0.25px]">
                            <img src="/cody/cody-logo.svg" className="mr-2 h-[24px] w-[24px]" alt="Cody Logo" /> Get
                            Cody for free
                        </div>
                    </button>
                </CompareHero>
            }
        >
            <CompareTables compareData={codeiumVsCody} demoStyle={true} />

            <CodyCallToActionContentSection
                title="Get Cody, the AI coding assistant"
                description="Cody makes it easy to write, fix, and maintain code."
                cta1={{ text: 'Try Cody for free', ctaStyle: 'primaryButtonWhite', link: '/cody' }}
                cta2={{ text: 'See enterprise pricing', ctaStyle: 'link', link: '/cody/pricing' }}
                smallCta={true}
            />

            <DemoComparisons />
        </Layout>
    )
}

export default CodeiumVsCodyPage
