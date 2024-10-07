import { FunctionComponent, useState } from 'react'

import classNames from 'classnames'
import { Expand, ShieldCheck, Cloud, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout, HubSpotForm, Modal, CodyIde, CodyPartners, ContentSection, Badge } from '../components'
import { BentoWithMockup } from '../components/bentoWithMockup'
import { ContentEnum, FullWidthTabsCarousel } from '../components/Carousels/fullWidthTabsCarousel'
import CodyPlan from '../components/cody/CodyPlan'
import CodyTwoColumnSection from '../components/cody/CodyTwoColumnSection'
import { CodyIntroDualTheme } from '../components/cody/dual-theme/CodyIntroDualTheme'
import { HowCodyWorks } from '../components/cody/HowCodyWorks'
import { EnterpriseGradeSection } from '../components/Enterprise/EnterpriseGradeSection'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../lib/utils'

import styles from '../styles/CustomHubspotForm.module.scss'

const optimizedPoweritems = [
    { label: 'Claude 3.5 Sonnet', iconUrl: '/assets/cody/anthropic-icon.svg' },
    { label: 'Claude 3 Opus', iconUrl: '/assets/cody/anthropic-icon.svg' },
    { label: 'GPT-4o', iconUrl: '/assets/cody/chat-gpt-icon.svg' },
    { label: 'Gemini 1.5 Pro', iconUrl: '/assets/cody/google-gemini-icon.svg' },
    { label: 'OpenAI o1-preview', iconUrl: '/assets/cody/chat-gpt-icon.svg' },
    { label: 'OpenAI o1-mini', iconUrl: '/assets/cody/chat-gpt-icon.svg' },
]
const optimizedSpeed = [
    { label: 'Gemini 1.5 Flash', iconUrl: '/assets/cody/google-gemini-icon.svg' },
    { label: 'Claude 3 Haiku', iconUrl: '/assets/cody/anthropic-icon.svg' },
    { label: 'Mixtral 8x7B', iconUrl: '/assets/cody/chat-gpt-icon.svg' },
]

const items = [
    {
        title: 'Autocomplete',
        text: (
            <div className="min-h-[555px] max-w-[738px]">
                <video
                    src="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/cody-autocomplete.mp4"
                    className="rounded-2xl"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                >
                    <track kind="captions" srcLang="en" label="English" />
                </video>
            </div>
        ),
    },
    {
        title: 'Edit',
        text: (
            <div className="min-h-[555px] max-w-[738px]">
                <video
                    src="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/cody-edits.mp4"
                    className="rounded-2xl"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                >
                    <track kind="captions" srcLang="en" label="English" />
                </video>
            </div>
        ),
    },
    {
        title: 'Prompts (unit tests)',
        text: (
            <div className="min-h-[555px] max-w-[738px]">
                <video
                    src="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/cody-unit-tests.mp4"
                    className="rounded-2xl"
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    playsInline={true}
                >
                    <track kind="captions" srcLang="en" label="English" />
                </video>
            </div>
        ),
    },
]

const securityCardFeatures = [
    {
        icon: <Expand size={24} />,
        heading: 'Scalable to 500,000+ repositories',
        paragraph: 'Deploy Cody to your entire codebase for scalable context fetching.',
    },
    {
        icon: <ShieldCheck size={24} />,
        heading: 'Privacy and Security',
        paragraph: 'Provided LLMs do not retain your data or train on your code. Cody is SOC 2 Type 2 compliant.',
    },
    {
        icon: <Cloud size={24} />,
        heading: 'Flexible deployment',
        paragraph: 'Let us host in our single-tenant cloud, or self-host Cody on-premises or in your own VPC.',
    },
]

const singleViewCardContent = [
    {
        imgSrc: '/assets/cody/authorPlaceholder.png',
        description:
            "I'm loving Cody! Got Pro after 15 minutes of trying it out, cancelled GitHub Copilot and never looked back (or for the alternative). Worth every penny!",
        author: 'Darko Kuzmanovic',
    },
    {
        imgSrc: '/assets/cody/authorPlaceholder.png',
        description:
            'Unlimited Claude 3 Opus / Claude 3.5 Sonnet when every other service rate limits. And all for a super low monthly price.',
        author: 'Lachlan Ross',
    },
    {
        imgSrc: '/assets/cody/authorPlaceholder.png',
        description:
            "This is by far the best AI code assistant I have been working with. The most important thing is that it doesn't get in the way and you can choose between different models without having to rely on only one…",
        author: 'Andrea Tomasini',
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
    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal(source)
    }

    return (
        <Layout
            meta={{
                title: 'Cody | AI coding assistant',
                description:
                    'Cody is the most powerful and accurate AI coding assistant for writing, fixing, and maintaining code.',
                image: 'https://sourcegraph.com/cody/cody-og.png',
            }}
            displayChildrenUnderNav={true}
            childrenClassName="!-mt-[152px]"
            className="relative w-full !overflow-hidden bg-gray-50"
        >
            <div className="relative">
                <div className="absolute hidden h-[1px] w-full bg-gray-200 xl:flex" />
                <div className="absolute bottom-[2px] hidden h-[1px] w-full bg-gray-200 xl:flex" />
                <ContentSection className="relative" parentClassName="!py-0">
                    <div className="sg-bg-IDE hidden h-[53px] items-center border border-[#E6E6E7] pl-[22px] xl:flex">
                        <img src="/assets/cody/ide-menu-dots.svg" alt="" aria-hidden={true} />
                    </div>
                    <div className="relative flex h-full">
                        <div className="relative hidden xl:flex">
                            <div className="absolute left-[100px] hidden h-[741px] w-[1px] bg-gray-200 xl:flex" />
                            <div className="absolute -right-[2px] z-50 hidden h-[741px] w-[1px] bg-gray-200 xl:flex" />
                            <div className="sg-bg-IDE relative -top-[2px] hidden h-[687px] w-[42px] items-center border border-[#E6E6E7] xl:flex" />

                            <div className="relative pl-7 pt-7">
                                <div className="absolute -top-[52px] hidden h-[342px] w-[1px] bg-gray-200 xl:flex" />
                                <div className="absolute hidden h-[1px] w-[354px] bg-gray-200 xl:flex" />
                                <div className="">
                                    <div className="ide flex w-[398px] flex-col">
                                        <div className="relative flex w-[372px] items-center justify-between border-y border-l border-black/[0.13] bg-white bg-gray-50">
                                            <div className="flex items-center opacity-[50%]">
                                                <img src="/assets/cody/chat-icon.svg" alt="" aria-hidden={true} />
                                                <img src="/assets/cody/clock-icon.svg" alt="" aria-hidden={true} />
                                                <img src="/assets/cody/notes-icon.svg" alt="" aria-hidden={true} />
                                            </div>
                                            <img
                                                src="/assets/cody/user-icon.svg"
                                                className="opacity-[50%]"
                                                alt=""
                                                aria-hidden={true}
                                            />
                                        </div>
                                        <div className="relative border-l border-black/[0.13] bg-gray-50 p-3">
                                            <div className="flex items-center justify-start gap-1.5 bg-gray-50">
                                                <img
                                                    src="/assets/cody/quin-avatar-icon.svg"
                                                    alt=""
                                                    aria-hidden={true}
                                                />
                                                <p className="mb-0 text-sm font-medium">Quinn Slack</p>
                                            </div>
                                            <div className="sg-IDE-editor mt-2 flex flex-col gap-1.5">
                                                <div className="flex items-center gap-1 px-2 pt-2 pb-6">
                                                    <IDEBadge
                                                        text="ecommerce/checkout"
                                                        className="!bg-[#DBE2F0]/[0.32] !p-1.5 !font-sans !text-sm !font-medium tracking-tight !text-[#181B26]"
                                                        src="/assets/cody/github-icon.svg"
                                                    />
                                                    <IDEBadge
                                                        text="File.svelte"
                                                        className="!bg-[#DBE2F0]/[0.32] !p-1.5 !font-sans !text-sm !font-medium tracking-tight !text-[#181B26]"
                                                        src="/assets/cody/svelte-icon.svg"
                                                    />
                                                    <div className="h-5 w-[3px] bg-black" />
                                                </div>
                                                <div className="flex items-center justify-between gap-1 border-t border-[#E6EBF2]">
                                                    <div className="flex">
                                                        <img
                                                            src="/assets/cody/at-icon.svg"
                                                            className="ml-1"
                                                            alt=""
                                                            aria-hidden={true}
                                                        />
                                                        <img
                                                            src="/assets/cody/notes-icon.svg"
                                                            alt=""
                                                            aria-hidden={true}
                                                        />
                                                        <div className="ml-4 flex items-center gap-1.5">
                                                            <img
                                                                src="/assets/cody/anthropic-icon.svg"
                                                                alt=""
                                                                aria-hidden={true}
                                                            />
                                                            <p className="mb-0 text-[13px] leading-4 tracking-tight text-[#1D212F]">
                                                                Claude 3.5 Sonnet
                                                            </p>
                                                            <img
                                                                src="/assets/cody/chevrons-up-down-icon.svg"
                                                                alt=""
                                                                aria-hidden={true}
                                                            />
                                                        </div>
                                                    </div>
                                                    <img
                                                        className="mr-1"
                                                        src="/assets/cody/submit-icon.svg"
                                                        alt=""
                                                        aria-hidden={true}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex">
                                            <div className="absolute -left-[152px] h-[1px] w-[265px] bg-gray-200" />
                                            <IDEBadge
                                                text="Claude 3 Opus"
                                                className="sg-badge-pill sg-badge-pill-bg absolute top-[3px] left-[90px] !px-3 !py-1 !text-black"
                                                src="/assets/cody/anthropic-icon.svg"
                                            />
                                            <IDEBadge
                                                text="OpenAI o1"
                                                className="sg-badge-pill sg-badge-pill-bg absolute top-11 right-[70px] !px-3 !py-1 !text-black"
                                                src="/assets/cody/chat-gpt-icon.svg"
                                            />
                                            <IDEBadge
                                                text="Gemini 1.5 Pro"
                                                className="sg-badge-pill sg-badge-pill-bg absolute top-[57px] right-[195px] !px-3 !py-1 !text-black"
                                                src="/assets/cody/google-gemini-icon.svg"
                                            />
                                            <IDEBadge
                                                text="Mixtral 8x22B"
                                                className="sg-badge-pill sg-badge-pill-bg absolute top-24 right-[70px] !px-3 !py-1 !text-black"
                                                src="/assets/cody/mistral-icon.svg"
                                            />
                                        </div>
                                        <div className="relative left-[31px] top-[140px] flex  flex-col gap-1.5">
                                            <div className="relative">
                                                <div className="absolute right-[30px] h-[1px] w-[272px] bg-gray-200" />
                                                <CodyAbility
                                                    src="/assets/cody/pencil-line-icon.svg"
                                                    title="Edit Code"
                                                    subTitle="Run on a file or selection to modify code"
                                                />
                                                <div className="absolute bottom-0 h-[1px] w-[314px] bg-gray-200" />
                                            </div>
                                            <div className="relative">
                                                <div className="absolute h-[1px] w-[244px] bg-gray-200" />
                                                <CodyAbility
                                                    src="/assets/cody/file-question-icon.svg"
                                                    title="Explain Code"
                                                    subTitle="Understand the open project or file better"
                                                />
                                                <div className="absolute bottom-0 right-[30px] h-[1px] w-[428px] bg-gray-200" />
                                            </div>
                                            <div className="relative">
                                                <div className="absolute h-[1px] w-[368px] bg-gray-200" />
                                                <CodyAbility
                                                    src="/assets/cody/open-book-icon.svg"
                                                    title="Document Code"
                                                    subTitle="Add comments to file or selection"
                                                />
                                                <div className="absolute bottom-0 h-[1px] w-[277px] bg-gray-200" />
                                            </div>
                                            <div className="relative">
                                                <div className="absolute h-[1px] w-[368px] bg-gray-200" />
                                                <CodyAbility
                                                    src="/assets/cody/hammer-icon.svg"
                                                    title="Generate Unit Tests"
                                                    subTitle="Create tests for the open file"
                                                />
                                                <div className="absolute bottom-0 h-[1px] w-[368px] bg-gray-200" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:bg-start relative -top-[2px] w-[812px] overflow-hidden bg-none xl:border-b xl:border-r xl:border-[#DBE2F0] xl:bg-[url("/assets/cody/syntax-highlighter-bg.svg")] xl:bg-cover'>
                            <div className="relative max-w-[812px]">
                                <div className="max-w-[749px] xl:pl-20 xl:pr-0">
                                    <CodyIntroDualTheme
                                        isLight={true}
                                        title="The most informed Code AI"
                                        description="Cody uses the latest LLMs and all your development context to help you understand, write, and fix code faster"
                                        titleSize="text-4xl sm:text-6xl"
                                        descriptionSize="md:text-xl"
                                        handleOpenModal={handleOpenModal}
                                        wrapperClassName="relative z-[20] md:z-0"
                                        isVariant={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentSection>
            </div>

            <ContentSection
                parentClassName="!pt-[104px] md:!pt-24 !pb-4"
                className="flex flex-col items-center justify-center"
            >
                <p className="text-center text-base font-normal uppercase leading-[27px] text-gray-400">
                    Leading dev teams choose Cody for their coding assistant
                </p>
            </ContentSection>

            <div>
                <CodyPartners isLight={true} className="!pt-0 !pb-16 md:!pb-24" />
            </div>

            <ContentSection className="mt-16 rounded-3xl border border-[#E4E9F4] bg-white px-6 py-16 md:mt-0 md:px-16">
                <div className="bg-white">
                    <div className="text-gray-700 md:max-w-[632px] md:pl-6">
                        <h2 className="pb-10">Developer chat with the most powerful models and context.</h2>
                        <h5 className="text-gray-700 opacity-70">
                            Best models and context power Cody's chat. With chat-oriented programming, you can solve
                            your hardest engineering problems.
                        </h5>
                    </div>
                    <div className="mt-14 w-full max-w-[1152px] overflow-hidden rounded-2xl md:h-full md:rounded-none">
                        <video
                            src="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/cody-chop-2.mp4"
                            className="rounded-2xl"
                            autoPlay={true}
                            loop={true}
                            muted={true}
                            playsInline={true}
                        >
                            <track kind="captions" srcLang="en" label="English" />
                        </video>
                    </div>
                </div>
            </ContentSection>

            <CodyIde isLight={true} />

            <ContentSection parentClassName="py-16 md:!py-28">
                <CodyTwoColumnSection
                    subTitle="The best models"
                    title="Cody uses the latest AI models. Never settle for last-gen."
                    description="Cody gives you access to the best and latest LLMs. Choose the best one for your use
                    cases, optimized for speed or power."
                    extraContent={
                        <>
                            <div>
                                <div className="mb-4 mt-10 text-base font-medium tracking-tight">
                                    Optimized for Power
                                </div>
                                <div className="mb-10 flex max-w-[556px] flex-row flex-wrap gap-4">
                                    {optimizedPoweritems.map(item => (
                                        <div key={item.label} className="flex flex-row gap-x-1">
                                            <IDEBadge
                                                text={item.label}
                                                className="w-fit !rounded-[10px] !border !border-[#E4E9F4] !bg-gray-100 !px-3 !py-1 !font-sans !text-sm !font-normal  !text-black"
                                                src={item.iconUrl}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="mb-4 text-base font-medium">Optimized for Speed</div>
                                <div className="flex max-w-[556px] flex-row flex-wrap gap-4">
                                    {optimizedSpeed.map(item => (
                                        <div key={item.label} className="flex flex-row gap-x-1">
                                            <IDEBadge
                                                text={item.label}
                                                className="w-fit !rounded-[10px] !border !border-[#E4E9F4] !bg-gray-100 !px-3 !py-1 !font-sans !text-sm !font-normal !text-black"
                                                src={item.iconUrl}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    }
                    imgSrc="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/llm-dropdown-options.png"
                />
            </ContentSection>
            <ContentSection parentClassName="!py-0">
                <div className="rounded-2xl border border-[#E4E9F4] bg-white px-6 py-16 md:px-20">
                    <img src="/assets/cody/cody-leidos.svg" alt="leidos logo" className="h-[54.91px] w-[171.471px]" />
                    <p
                        className={classNames(
                            'mt-[70px] mb-6 h-min max-w-[780px] text-[35px] font-normal leading-[43.75px] tracking-tight text-gray-700'
                        )}
                    >
                        “Generative AI is a fast-moving field, and the best model that's out there today may not be the
                        best model tomorrow…using Cody means we can avoid that LLM lock-in.”
                    </p>
                    <div className="mb-[119px] flex h-min w-full flex-col md:mb-0">
                        <div>
                            <p className="mb-0 text-base leading-6 tracking-[-0.25px] text-gray-500">Rob Linger</p>
                            <p className="mb-0 text-sm leading-[21px] text-gray-700">AI Software Architect, Leidos</p>
                        </div>
                    </div>
                </div>
            </ContentSection>
            <ContentSection parentClassName="py-16 md:!py-28">
                <CodyTwoColumnSection
                    subTitle="The best context"
                    title="The most contextually-accurate code gen, using your entire codebase and more."
                    description="Cody uses industry-leading code search to retrieve code context from your entire
                                    remote codebase. Ask Cody about any repository without limits."
                    extraContent={
                        <div className="mt-10">
                            <Link
                                href="/blog/how-cody-understands-your-codebase"
                                title="Case study"
                                className="btn btn-link btn-link-icon p-0 text-right font-semibold !-tracking-[0.25px] md:mx-0 md:text-left"
                            >
                                Read about how Cody understands your entire codebase
                                <ChevronRightIcon className="link-icon" />
                            </Link>
                        </div>
                    }
                    videoSrc="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/cody-remote-context.mp4"
                />
            </ContentSection>
            <ContentSection parentClassName="py-16 md:!py-28">
                <CodyTwoColumnSection
                    leftClassName="!mb-[8px]"
                    title="Development context requires more than just code. "
                    description="Cody integrates with Notion, Jira, Linear, and more. Use non-code context to write code that understands-and meets-all of your requirements."
                    imgSrc="https://storage.googleapis.com/sourcegraph-assets/cody/website-october-2024/openctx.png"
                />
            </ContentSection>

            <ContentSection
                parentClassName="!pt-[104px] md:!pt-24 !pb-4"
                className="flex flex-col items-center justify-center"
            >
                <p className="text-center text-base font-normal uppercase leading-[27px] text-gray-400">
                    See why developers love using Cody
                </p>
            </ContentSection>
            <ContentSection parentClassName="pb-16 md:!pb-24 !pt-0">
                <div className="grid gap-4 md:grid-cols-3">
                    {singleViewCardContent.map(item => (
                        <div
                            key={item.author}
                            className="rounded-2xl border border-gray-200 bg-white px-6 py-8 md:px-8"
                        >
                            <p className="mb-0">"{item.description}"</p>

                            <div className="mt-4">
                                <div className="font-semibold text-blurple-500">{item.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentSection>

            <ContentSection parentClassName="!py-16 lg:!py-24">
                <FullWidthTabsCarousel
                    darkMode={false}
                    items={items}
                    parentSectionClassName="!items-start"
                    content={ContentEnum.Media}
                    overline={true}
                    autoAdvance={false}
                    subtitle="Code completions, code edits, and customizable prompts use Cody’s best models + extensive context to deliver the most accurate results."
                    cta={false}
                    title="Upgrade your IDE with powerful AI features"
                    isVariant={true}
                />
            </ContentSection>

            <HowCodyWorks isLight={true} isVariant={true} />
            <div className="mx-auto max-w-screen-xl !px-6 pt-24 md:pb-4 xl:!px-0">
                <BentoWithMockup isVariantImage={true} isVariantTitle={true} href="/resources/gartner-mq" />
            </div>

            <EnterpriseGradeSection
                parentClassName="!border-0 !bg-none"
                customHeader="AI at Enterprise scale"
                description="Cody scales from single developers to the largest enterprises, with flexible deployment and support for enterprise security and compliance."
                securityCardItems={securityCardFeatures}
                isCustomSecondLevelContent={true}
                className="!border-0 !bg-none"
            />

            <ContentSection>
                <CodyPlan />
            </ContentSection>

            <Modal
                open={isContactModalOpen}
                handleClose={() => setIsContactModalOpen(false)}
                modalBackdropClassName="cody-contact-modal"
                modalClassName="bg-[#632590] border border-opacity-20 border-white px-6 py-[64px] md:px-[80px] md:py-[96px]"
            >
                <div className="flex flex-col gap-8 md:flex-row md:gap-10">
                    <div className="min-w-[200px] max-w-[513px]">
                        <h2 className="text-white">Get Cody where you work</h2>
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

const IDEBadge: FunctionComponent<{ src: string; className: string; text: string }> = ({
    src,
    text,
    className,
}): JSX.Element => (
    <Badge
        text={text}
        className={className}
        size="small"
        iconPosition="start"
        icon={<img src={src} alt="" aria-hidden={true} />}
    />
)

const CodyAbility: FunctionComponent<{ src: string; className?: string; title: string; subTitle: string }> = ({
    src,
    title,
    subTitle,
    className,
}): JSX.Element => (
    <div className={classNames('flex w-[368px] gap-3 bg-white px-3 py-2', className)}>
        <img src={src} alt="" aria-hidden={true} />
        <div className="flex flex-col gap-[2px] text-[13px] text-[#181B26]">
            <div className="mb-0 font-semibold opacity-60">{title}</div>
            <div className="mb-0 font-normal opacity-70">{subTitle}</div>
        </div>
    </div>
)

export default CodyPage
