import { FunctionComponent, useEffect, useRef } from 'react'

import classNames from 'classnames'
import { Expand, ShieldCheck, Cloud, ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { Layout, CodyIde, ContentSection, Badge } from '../components'
import { BentoWithMockup } from '../components/bentoWithMockup'
import { ContentEnum, FullWidthTabsCarousel } from '../components/Carousels/fullWidthTabsCarousel'
import CodyPlan from '../components/cody/CodyPlan'
import CodyTwoColumnSection from '../components/cody/CodyTwoColumnSection'
import { CodyIntroDualTheme } from '../components/cody/dual-theme/CodyIntroDualTheme'
import { HowCodyWorks } from '../components/cody/HowCodyWorks'
import { LogoGrid } from '../components/cody/LogoGrid'
import { EnterpriseGradeSection } from '../components/Enterprise/EnterpriseGradeSection'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'
import { captureCustomEventWithPageData } from '../lib/utils'

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
        title: 'Prompts',
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
            className="relative w-full !overflow-x-hidden bg-gray-50"
        >
            <div className="relative">
                {/* gradient background */}
                <div className="pointer-events-none absolute inset-0 -translate-y-32 bg-[linear-gradient(180deg,#E9EDFC_20%,#F9FAFB_90.4%)]" />

                {/* blob gradients */}
                <div className="pointer-events-none absolute inset-0">
                    <img
                        src="/assets/cody/left-blob.svg"
                        alt=""
                        aria-hidden={true}
                        className="absolute -left-[200px] h-[600px] w-[600px] lg:top-0 lg:-left-[500px] lg:-top-40 lg:h-[1200px] lg:w-[1200px]"
                    />
                    <img
                        src="/assets/cody/right-blob.svg"
                        alt=""
                        aria-hidden={true}
                        className="absolute right-[-250px] top-[-250px] z-[99] h-[600px] w-[600px] md:right-[-350px] lg:-right-[700px] lg:-top-[550px] lg:h-[1500px] lg:w-[1500px]"
                    />
                </div>

                <ContentSection parentClassName="relative !py-0">
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
                </ContentSection>
            </div>

            <ContentSection
                parentClassName="!pt-[104px] md:!pt-24 !pb-4"
                className="flex flex-col items-center justify-center"
            >
                <p className="text-center text-base font-normal uppercase leading-[27px] text-gray-400">
                    Leading dev teams choose Cody for their coding assistant
                </p>

                <div className="mt-4">
                    <LogoGrid mainLogo="sofi" header={null} />
                </div>
            </ContentSection>

            <ContentSection className="mt-16 rounded-3xl border border-gray-200 bg-white px-6 py-16 md:mt-0 md:px-16">
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
                                                className="w-fit !rounded-[10px] !border !border-gray-200 !bg-gray-100 !px-3 !py-1 !font-sans !text-sm !font-normal  !text-black"
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
                                                className="w-fit !rounded-[10px] !border !border-gray-200 !bg-gray-100 !px-3 !py-1 !font-sans !text-sm !font-normal !text-black"
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
                <div className="rounded-2xl border border-gray-200 bg-white px-6 py-16 md:px-20">
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
                <BentoWithMockup
                    isVariantStyle={true}
                    label="Guide"
                    customTitle="The ultimate Buyer’s Guide for AI coding tools"
                    imgSrc="/assets/resources/guideMockup.svg"
                    href="/guides/code-ai-buyers-guide?form_submission_source=code-ai-buyers-guide"
                    hrefLabel="Get your free copy"
                />
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
            <DevStarterPackModal />
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

const DevStarterPackModal: FunctionComponent = () => {
    const router = useRouter()
    const dialogRef = useRef<HTMLDialogElement>(null)

    // Define a type for the dialog element
    type DialogElement = HTMLDialogElement & { showModal: () => void; close: () => void }

    useEffect(() => {
        if (router.query.ref === 'devstarterpack' && dialogRef.current) {
            ;(dialogRef.current as DialogElement).showModal()
        }
    }, [router.query])

    const handleClose = (): void => {
        if (dialogRef.current) {
            ;(dialogRef.current as DialogElement)?.close?.()
        }
    }

    return (
        <dialog
            ref={dialogRef}
            className="relative rounded-lg bg-white px-4 py-8 text-left transition-all sm:my-40 sm:w-full sm:max-w-xl sm:p-16"
        >
            <div>
                <div className="mx-auto flex aspect-video w-32 items-center justify-center rounded-md bg-[#0D121A]">
                    <video autoPlay={true} loop={false} muted={true} playsInline={true} className="h-24 w-24">
                        <source src="/assets/cody/hiCodyDark.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="mt-5 text-center sm:mt-7">
                    <h2 className="text-gray-900 flex flex-col items-center justify-center gap-2 text-2xl font-semibold leading-6 sm:flex-row">
                        Dev Starter Pack{' '}
                        <span className="inline-flex items-center rounded-full bg-vermillion-100 px-2 py-1 text-xs font-medium text-vermillion-500 ring-1 ring-inset ring-vermillion-500/10">
                            Activated!
                        </span>
                    </h2>

                    <div className="mt-4">
                        <p className="text-balance text-xs text-gray-500 sm:text-sm">
                            Cody has unmatched context and the latest AI models. Supercharge your coding with AI
                            autocomplete, chat, inline edits, Smart Apply, and more.
                        </p>
                        <p className="text-balance text-xs font-bold text-gray-500 sm:text-sm">
                            Get 1 free month of Cody Pro! Use the code below:
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-5 sm:mt-6">
                <div className="mb-4 rounded bg-gray-100 p-2 text-center font-mono text-sm tracking-tighter sm:text-lg">
                    DevStarterPack
                </div>
            </div>

            <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <a
                    href="https://accounts.sourcegraph.com/sign-in?redirect_to=%2Fcody%2Fsubscription%3FshowCouponCodeAtCheckout"
                    className="inline-flex w-full justify-center rounded-md bg-blurple-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blurple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blurple-600 sm:col-start-2"
                >
                    Redeem free month
                </a>

                <button
                    type="button"
                    onClick={handleClose}
                    className="text-gray-900 mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                >
                    No thanks
                </button>
            </div>
        </dialog>
    )
}

export default CodyPage
