import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import { useRouter } from 'next/router'

import {
    ContentSection,
    Heading,
    Layout,
    HubSpotForm,
    Modal,
    CodyCta,
    CodyIde,
    CodyAutocomplete,
    CodyChat,
    CodyImageTab,
    CodyPartners,
    CodyTestimonials,
    SourcegraphPowered,
} from '../components'
import { HowCodyWorks } from '../components/cody/HowCodyWorks'
import { ChooseYourLlmSection } from '../components/Enterprise/ChooseYourLlmSection'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'

import styles from '../styles/CustomHubspotForm.module.scss'

const IMAGE_TAB_CONTENT = [
    {
        header: 'Explain code or entire repositories',
        description: 'Get up to speed on new projects quickly',
        imageSrc: { mobile: '/cody/explain-code.png', desktop: '/cody/explain-code.svg' },
    },
    {
        header: 'Generate unit tests in seconds',
        description: 'Spend more time writing new code',
        imageSrc: { mobile: '/cody/generate-unit-tests.png', desktop: '/cody/generate-unit-tests.svg' },
    },
    {
        header: 'Describe code smells',
        description: 'Optimize your code for best practices',
        imageSrc: { mobile: '/cody/describe-code-smell.png', desktop: '/cody/describe-code-smell.svg' },
    },
    {
        header: 'Define your own custom commands',
        description: 'Customize Cody for your workflow',
        imageSrc: { mobile: '/cody/define-custom-command.png', desktop: '/cody/define-custom-command.svg' },
    },
]

const CodyPage: FunctionComponent = () => {
    const [isContactModalOpen, setIsContactModalOpen] = useState(false)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const router = useRouter()
    const { pathname } = router
    const { openModal } = useAuthModal()

    const source = pathname.slice(1) || 'about-home'
    const handleOpenModal = (): void => openModal(source)
    const article = {
        quote: "“Generative AI is a fast-moving field, and the best model that's out there today may not be the best model tomorrow…using Cody means we can avoid that LLM lock-in.”",
        author: 'Rob Linger',
        role: 'AI Software Architect, Leidos',
    }

    const modelCardContent = {
        title: 'Choose from your favorite LLMs',
        description:
            'Cody supports the latest LLMs including Claude 3, GPT-4 Turbo, and Mixtral-8x7B. You can also bring your own LLM key with Amazon Bedrock and Azure OpenAI.',
    }

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://sourcegraph.com/cody/cody-og.png',
            }}
            headerColorTheme="purple"
            childrenClassName={isMobile ? 'sg-bg-gradient-cody-mobile' : 'sg-bg-gradient-cody-lg'}
            displayChildrenUnderNav={true}
            customFooterClassName="!bg-transparent"
            className="w-full !overflow-hidden"
        >
            <ContentSection parentClassName="!py-0 !px-0" className="-mt-8 pt-0 text-center md:mt-0 md:pt-[22px]">
                <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
                    <h1 className="mx-auto w-full pt-6 text-[48px] font-semibold leading-[48px] text-white md:text-[72px] md:leading-[86px]">
                        Code more, type&nbsp;less
                    </h1>
                    <Heading
                        size="h3"
                        className="mx-auto mb-8 mt-6  max-w-[700px] leading-[30px] !tracking-[-0.25px] text-[#FFFFFFbb]"
                    >
                        Cody is an AI coding assistant that uses advanced search and codebase context to help you
                        understand, write, and fix code faster.
                    </Heading>
                    <button
                        type="button"
                        className="btn btn-inverted-primary px-5 py-3 text-violet-500"
                        title="Get Cody for free"
                        onClick={handleOpenModal}
                    >
                        <div className="flex items-center justify-center">
                            <img src="/cody/cody-logo.svg" className="mr-2 h-[15px] w-[15px]" alt="Cody Logo" /> Get
                            Cody for free
                        </div>
                    </button>
                </div>
            </ContentSection>

            <CodyAutocomplete className="sg-bg-gradient-cody-hero" />

            <CodyIde />

            <CodyChat />

            <CodyPartners />

            <CodyTestimonials />

            <CodyImageTab
                icon="/cody/commands-brand-icon.svg"
                headerText="Run custom and pre-built commands"
                description={
                    <Heading
                        size="h3"
                        className="mb-0 pt-[18px] text-lg leading-[30px] !tracking-[-0.25px] text-gray-200"
                    >
                        Generate, test, and fix code with one-click commands.
                    </Heading>
                }
                tabContent={IMAGE_TAB_CONTENT}
            />
            <HowCodyWorks />
            <ChooseYourLlmSection
                article={article}
                reverseQuote={true}
                className="!mx-sm mt-16 h-auto overflow-hidden md:!min-h-[554px] lg:!mx-auto"
                authorCardClassName="!text-[#0F111A] !bg-white"
                modelCardClassName="text-white bg-violet-700 !border-1 !border-[#343A4D]"
                modelCardContent={modelCardContent}
                modelDescriptionClassName="!text-[#DBE2F0] text-[24px] leading-[30px]"
                parentClassName="!p-0"
            />
            <SourcegraphPowered />
            <CodyCta source="Cody page" isCodyPage={true} />
            <Modal
                open={isContactModalOpen}
                handleClose={() => setIsContactModalOpen(false)}
                modalBackdropClassName="cody-contact-modal"
                modalClassName="bg-[#632590] border border-opacity-20 border-white px-6 py-[64px] md:px-[80px] md:py-[96px]"
            >
                <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                    <div className="min-w-[200px] max-w-[513px]">
                        <Heading size="h2" className="!text-4xl text-white">
                            Get Cody where you work
                        </Heading>
                        <p className="mt-4 text-lg text-gray-200">
                            Cody for Enterprise provides context-aware answers based on your own private codebase.
                            Contact us through the form to learn more.
                        </p>
                    </div>
                    <div className={classNames('md:min-w-[400px] xl:min-w-[554px]', styles.codyForm)}>
                        <HubSpotForm
                            formId="05e46684-9fbc-4c4d-b010-f661f247c4c6"
                            inlineMessage="Thank you! We'll get back to you soon"
                        />
                    </div>
                </div>
            </Modal>
        </Layout>
    )
}

export default CodyPage
