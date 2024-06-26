/* eslint no-void: 0 */
/* eslint @typescript-eslint/no-floating-promises: 0 */
import { FunctionComponent, useState, useEffect } from 'react'

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import InformationCircleOutlineIcon from 'mdi-react/InformationCircleOutlineIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdOutlineTrendingUp } from 'react-icons/md'

import {
    ContentSection,
    Layout,
    PricingPlan,
    FREE_FEATURES_OVERVIEW,
    PRO_FEATURES_OVERVIEW,
    ENTERPRISE_CODY_FEATURES_OVERVIEW,
    ENTERPRISE_FEATURES_OVERVIEW,
    faqData,
    FAQItem,
    Tooltip,
    SPOTLIGHT_FEATURE_INFO,
    FeatureCluster,
    CODE_INTELLIGENCE_CE_FEATURES,
    CODE_INTELLIGENCE_CSE_FEATURES,
    Badge,
} from '../components'
import { Dropdown } from '../components/Dropdown'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { buttonLocation, buttonStyle } from '../data/tracking'
import { useWindowWidth } from '../hooks/windowWidth'

interface Tab {
    key: string
    title: string
    subtitle: string
}

interface Props {
    tab: Tab
    selectedOption: string
    chooseProduct: (key: string) => void
    className?: string
}

interface PriceItemProps {
    amount: number
    hasLimit?: boolean
    description?: string
    className?: string
    amountClassName?: string
}

const GetStartedButton: FunctionComponent<{ className?: string; title?: string }> = ({
    className,
    title = 'Get Cody free',
}) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('pricing')

    return (
        <button
            title={title}
            className={classNames('btn btn-secondary w-full -tracking-[0.25px]', className)}
            type="button"
            onClick={handleOpenModal}
        >
            {title}
        </button>
    )
}

const GetProButton: FunctionComponent<{ className?: string; title?: string }> = ({
    className,
    title = 'Get Cody Pro',
}) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody', 'pro', true)
    return (
        <button
            title={title}
            className={classNames(
                'btn btn-primary -mt-[8px] flex w-full items-center justify-center gap-2 -tracking-[0.25px]',
                className
            )}
            type="button"
            onClick={handleOpenModal}
        >
            <MdOutlineTrendingUp />
            {title}
        </button>
    )
}
const ContactUsButton: FunctionComponent<{ className?: string; href: string; title: string }> = ({
    className,
    href,
    title,
}) => (
    <Link
        href={href}
        className={classNames('btn flex w-full justify-center -tracking-[0.25px]', className)}
        title="Contact us"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation.bodyDemo}
        data-button-type="cta"
    >
        {title}
    </Link>
)

const PLAN_COLORS: Record<
    'pro' | 'enterprise',
    { borderColorClass?: string; shadow: string; nameClass: string; paddingX: string }
> = {
    pro: {
        borderColorClass: 'plan-top-border w-[97%] ml-[6px]',
        shadow: 'pro-box-shadow',
        nameClass: 'text-violet-500 font-bold text-[38px]',
        paddingX: 'px-[40px]',
    },
    enterprise: {
        borderColorClass: 'plan-top-border',
        shadow: 'md:pro-box-shadow',
        nameClass: 'text-violet-500 font-bold text-[38px]',
        paddingX: 'px-[40px]',
    },
}

const TABS = [
    { title: 'CODY', subtitle: 'AI coding assistant', key: 'cody' },
    { title: 'CODE SEARCH', subtitle: 'Find, understand, & fix code', key: 'codeSearch' },
    { title: 'CODE INTELLIGENCE PLATFORM', subtitle: 'Cody + Code Search', key: 'codeIntelligence' },
]

const Accordion: FunctionComponent<{
    question: string
    answer: React.ReactNode
    index: number
    selectedOption: string
}> = ({ question, answer, index, selectedOption }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = (): void => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        setIsOpen(false)
    }, [selectedOption])
    return (
        <div className="faq rounded-lg border border-gray-200 bg-white" key={index}>
            <button
                type="button"
                className={classNames(
                    'grid w-full grid-cols-12 items-center  rounded-t-lg p-5 text-left text-base font-semibold leading-5 -tracking-[0.25px] focus:outline-none',
                    isOpen ? 'bg-gray-50' : ''
                )}
                onClick={handleToggle}
            >
                <span className="col-span-11 text-gray-700">{question}</span>
                {isOpen ? (
                    <ChevronUpIcon
                        className="col-span-1 w-4 justify-self-end font-bold text-gray-500"
                        strokeWidth={2.7}
                    />
                ) : (
                    <ChevronDownIcon
                        className="col-span-1 w-4 justify-self-end font-bold text-gray-500"
                        strokeWidth={2.7}
                    />
                )}
            </button>
            <div
                className={classNames(
                    'transition-max-height overflow-hidden duration-700 ease-in-out',
                    isOpen ? 'max-h-[500px] ' : 'max-h-0'
                )}
            >
                <div className="p-5 leading-5 tracking-[-0.25px] text-gray-500">{answer}</div>
            </div>
        </div>
    )
}

const CodeIntelFeatures: FunctionComponent<{ features: FeatureCluster[] }> = ({ features }) => (
    <div className="ml-0">
        {features.map(node => (
            <div key={node.topic} className="border-0 bg-transparent px-0">
                <div className={classNames('flex items-center pt-[10px] text-sm')}>
                    <h5 className="mb-3 !text-gray-700">{node.topic}</h5>
                    {node.description && (
                        <Tooltip
                            wrapperClassName="my-auto ml-2 text-gray-300 flex items-center text-sm"
                            text={node.description}
                            tooltipClassName="p-2"
                        >
                            <InformationCircleOutlineIcon size={18} />
                        </Tooltip>
                    )}
                </div>
                <ul className="ml-0 grid list-none gap-y-2 pb-[10px]">
                    {node?.features?.map(nodeFeature => {
                        const feature = SPOTLIGHT_FEATURE_INFO[nodeFeature]
                        return (
                            <li className="text-sm" key={nodeFeature}>
                                <div className="flex items-center">
                                    <div className="text-sm leading-[20px] text-[#343A4D]">{feature.label}</div>
                                    {feature.badgeLabel && (
                                        <Badge
                                            text={feature.badgeLabel}
                                            size="small"
                                            className="ml-1 px-1 not-italic leading-3 text-gray-500"
                                            color="light-gray"
                                        />
                                    )}
                                    {feature.description && (
                                        <Tooltip
                                            wrapperClassName="my-auto ml-2 text-gray-300 flex items-center"
                                            tooltipClassName="p-2 z-20"
                                            text={feature.description}
                                        >
                                            <InformationCircleOutlineIcon size={18} />
                                        </Tooltip>
                                    )}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        ))}
    </div>
)

const PricingPage: FunctionComponent = () => {
    const [selectedOption, setSelectedOption] = useState('cody')
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    const isWindowWidthBelowLg = windowWidth < breakpoints.mdi
    const router = useRouter()
    const faqDataToRender: FAQItem[] = faqData[selectedOption] || []

    // check to see if the url params has a product
    useEffect(() => {
        if (router.query.product) {
            void setSelectedOption(router.query.product as string)
        }
    }, [router.query.product])

    // choose a product and update the url param
    const chooseProduct = (option: string): void => {
        router.query.product = option
        router.push(router)
        setSelectedOption(option)
    }
    const currentTab = TABS.find(tab => tab.key === selectedOption)
    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Pricing',
                description:
                    'Pricing and plans for Sourcegraph Cody and Code Search. Get started with a free trial today.',
            }}
            hero={
                <>
                    <div className="container mx-auto grid pb-[62px] pt-16 text-center">
                        <h1>Pricing</h1>
                    </div>
                    <ContentSection className="flex justify-center" parentClassName="md:!py-0 pb-8">
                        {isMobile ? (
                            <Dropdown
                                title={currentTab?.title}
                                options={TABS.map(({ key, title }) => ({
                                    title,
                                    onClick: () => chooseProduct(key),
                                }))}
                                parentClassName="w-[70%]"
                            />
                        ) : (
                            <div className="mx-auto grid grid-cols-2 gap-x-16 gap-y-8 rounded-[6px] shadow-sm md:grid-cols-3">
                                {TABS.map(tab => (
                                    <TabComponent
                                        key={tab.key}
                                        tab={tab}
                                        selectedOption={selectedOption}
                                        chooseProduct={chooseProduct}
                                    />
                                ))}
                            </div>
                        )}
                    </ContentSection>
                </>
            }
            childrenClassName="pt-0 !bg-gray-50"
            customFooterClassName="!bg-white"
        >
            <ContentSection className="mx-auto mdi:px-[80px]" parentClassName="!py-0 mdi:!px-0">
                <div
                    className={classNames(
                        'transition-opacity duration-700 ease-in-out',
                        selectedOption === 'cody' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {selectedOption === 'cody' && (
                        <div className="flex flex-col">
                            <div className="grid grid-cols-1 items-stretch justify-center gap-8 py-16 mdi:grid-cols-3 mdi:justify-items-center mdi:gap-0">
                                <PricingPlan
                                    name={
                                        <div className="mb-2">
                                            <p className="mb-0 text-[24px] font-semibold leading-[34px]">Free</p>
                                        </div>
                                    }
                                    description="Best for hobbyists or light usage"
                                    price={<PriceItem amount={0} description="No credit card needed" />}
                                    buttons={<GetStartedButton title="Sign up for free" />}
                                    features={FREE_FEATURES_OVERVIEW}
                                    planClasses="mdi:pr-[10px] lg:!pr-[30px] w-full"
                                />
                                <PricingPlan
                                    name={<p className="mb-[13px]">Pro</p>}
                                    description="Best for professional developers and small teams"
                                    price={<PriceItem amount={9} hasLimit={true} />}
                                    buttons={<GetProButton title="Sign up for Cody Pro" />}
                                    features={PRO_FEATURES_OVERVIEW}
                                    planClasses={
                                        isWindowWidthBelowLg
                                            ? 'z-10 md:w-full'
                                            : 'z-10 lg:!w-[400px] mdi:w-[310px] md:-my-3'
                                    }
                                    {...PLAN_COLORS.pro}
                                />
                                <PricingPlan
                                    name={
                                        <div className="mb-2 flex flex-row items-center gap-4">
                                            <p className="mb-0 text-2xl font-semibold">Enterprise</p>
                                        </div>
                                    }
                                    description="Best for large teams and enterprises"
                                    price={<PriceItem amount={19} hasLimit={true} />}
                                    buttons={
                                        <ContactUsButton
                                            href="/contact/pricing?form_submission_source=pricing-cody-enterprise"
                                            title="Contact sales"
                                            className="btn-secondary"
                                        />
                                    }
                                    features={ENTERPRISE_CODY_FEATURES_OVERVIEW}
                                    planClasses="z-5 mdi:pl-[10px] lg:!pl-[30px] w-full"
                                />
                            </div>
                            <div className="bg-[url('/backgrounds/grid-code-intel.svg')] bg-right">
                                <div className="bg-code-intel-card flex flex-row flex-wrap justify-between rounded-2xl border-1 border-gray-200 p-6 md:p-12">
                                    <div className="flex flex-col items-start justify-center gap-4">
                                        <h1 className="!text-gray-700">Better together</h1>
                                        <p className="text-[24px] font-normal leading-[30px] tracking-[-0.25px] text-gray-500">
                                            Unlock the full power of our Code Intelligence Platform
                                        </p>
                                        <div className="flex items-center justify-center">
                                            <ViewPlatformButton chooseProduct={chooseProduct} />
                                        </div>
                                    </div>
                                    <div className="mt-5 flex flex-row items-center gap-4 lg:mt-0">
                                        <div className="flex h-[108px] w-[108px] items-center justify-center rounded-3xl border-2 bg-white">
                                            <img
                                                src="/codesearch-logomark-default.svg"
                                                alt="Cody Logo"
                                                className="h-[56px] w-[54px]"
                                            />
                                        </div>
                                        <div className="flex h-[108px] w-[108px] items-center justify-center rounded-3xl border-2 bg-white">
                                            <img
                                                src="/cody-logomark-default.svg"
                                                alt="Cody Logo"
                                                className=" h-[56px] w-[54px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={classNames(
                        'mt-10 transition-opacity duration-700 ease-in-out',
                        selectedOption === 'codeSearch' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {selectedOption === 'codeSearch' && (
                        <div className="mx-auto flex max-w-[802px] flex-col gap-6 md:flex-row">
                            <PricingPlan
                                name={
                                    <p className="mb-2 text-[38px] font-semibold leading-[43.7px] -tracking-[0.5px]">
                                        Enterprise
                                    </p>
                                }
                                description="For orgs needing additional integration, deployment, security, or support options"
                                price={<PriceItem amount={49} hasLimit={true} description="Scales with your team" />}
                                buttons={
                                    <ContactUsButton
                                        href="/contact/pricing?form_submission_source=pricing-enterprise"
                                        title="Contact sales"
                                        className="btn-primary"
                                    />
                                }
                                features={ENTERPRISE_FEATURES_OVERVIEW}
                                planClasses="rounded-2xl"
                            />
                            <div className="bg-code-intel relative max-h-[422px] overflow-hidden rounded-2xl border-1 border-gray-200 md:max-h-[390px]">
                                <div className="flex flex-col items-start justify-center gap-6 p-10">
                                    <div className="flex gap-x-3">
                                        <div className="flex h-[108px] w-[108px] items-center justify-center rounded-3xl bg-white sm:absolute sm:right-20 sm:top-2 sm:mr-[-24px] sm:mt-[-36px]">
                                            <img
                                                src="/cody-logomark-default.svg"
                                                alt="Cody Logo"
                                                className=" h-[56px] w-[54px]"
                                            />
                                        </div>
                                        <div className="flex h-[108px] w-[108px] items-center justify-center rounded-3xl border-2 bg-white sm:absolute sm:top-12 sm:-right-5">
                                            <img
                                                src="/codesearch-logomark-default.svg"
                                                alt="Cody Logo"
                                                className="h-[56px] w-[54px]"
                                            />
                                        </div>
                                    </div>
                                    <h1 className="!text-gray-700">Better together</h1>
                                    <p className=" text-[24px] font-normal leading-[30px] tracking-[-0.25px] text-gray-500">
                                        Unlock the full power of our Code Intelligence platform
                                    </p>
                                    <div className=" flex items-center justify-center">
                                        <ViewPlatformButton chooseProduct={chooseProduct} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    className={classNames(
                        'mt-10 transition-opacity duration-700 ease-in-out',
                        selectedOption === 'codeIntelligence' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {selectedOption === 'codeIntelligence' && (
                        <div className=" mx-auto flex max-w-[754px] flex-col">
                            <div className="bg-code-intel-box rounded-2xl border border-gray-200 px-6 py-16 md:pt-12 md:pb-16 md:pr-10 md:pl-[41px]">
                                <div className="flex flex-col gap-8">
                                    <div className="grid grid-flow-col">
                                        <div>
                                            <h2 className="mb-2 !text-gray-700">Code Intelligence Platform</h2>
                                            <span className="flex border-b-1 pb-[24px] text-[16px] font-normal leading-5 -tracking-[0.25px] text-gray-700">
                                                For teams with a minimum of 50 users
                                            </span>
                                            <span className="mt-6 mb-2 grid gap-[3px]">
                                                <div className="flex items-center text-4xl">
                                                    <PriceItem
                                                        amount={59}
                                                        hasLimit={true}
                                                        description="Save $9/user when purchasing Cody and Code Search together"
                                                    />
                                                </div>
                                            </span>
                                            <ContactUsButton
                                                href="/contact/pricing?form_submission_source=pricing-code-intelligence"
                                                title="Contact sales"
                                                className="btn btn-primary w-full md:w-fit"
                                            />
                                        </div>
                                        {!isMobile && (
                                            <div className="relative -right-1 -top-6 mr-[-24px] mt-[-36px] h-[189.25px] w-[204px] bg-[url('/backgrounds/grid.svg')] md:-top-0 md:-right-4">
                                                <div className="absolute flex h-[116px] w-[116px] items-center justify-center rounded-3xl border-2 border-gray-200 bg-white">
                                                    <img
                                                        src="/cody-logomark-default.svg"
                                                        alt="Cody Logo"
                                                        className=" h-[60px] w-[57px]"
                                                    />
                                                </div>
                                                <div className="absolute bottom-0 right-0 flex h-[116px] w-[116px] items-center justify-center rounded-3xl border-2 border-gray-200 bg-white">
                                                    <img
                                                        src="/codesearch-logomark-default.svg"
                                                        alt="Cody Logo"
                                                        className="h-[60px] w-[57px]"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="h-[1px] bg-gray-200" />
                                    <div className="transition-max-height max-h-[1240px] overflow-hidden duration-700 ease-in-out">
                                        <div className="mx-auto flex flex-col gap-8 md:flex-row">
                                            <div className="">
                                                <h4 className="mb-8 !text-[24px]">Cody Enterprise</h4>
                                                <p className="mt-2 pb-[18px] text-[18px] font-normal leading-[27px] -tracking-[0.25px] text-gray-700">
                                                    All features of <span className="underline"> Cody Enterprise</span>,
                                                    including:
                                                </p>
                                                <CodeIntelFeatures features={CODE_INTELLIGENCE_CE_FEATURES} />
                                            </div>
                                            <div className="max-w-[67px]">
                                                <span className="text-[24px] font-[508] italic leading-[30px] tracking-[-0.25px]">
                                                    plus
                                                </span>
                                            </div>
                                            <div className="">
                                                <h4 className="mb-8">Code Search Enterprise</h4>
                                                <p className="mt-2 pb-[18px] text-[18px] font-normal leading-[27px] -tracking-[0.25px] text-gray-700">
                                                    All features of{' '}
                                                    <span className="underline"> Code Search Enterprise</span>,
                                                    including:
                                                </p>
                                                <CodeIntelFeatures features={CODE_INTELLIGENCE_CSE_FEATURES} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </ContentSection>
            <ContentSection
                className="grid grid-cols-5 gap-[24px] pt-2 md:px-[80px] md:pt-24 md:pb-[96px]"
                parentClassName="!py-0"
            >
                <div className="col-span-full border-t-1 md:col-span-2">
                    <h1 className="mt-4">Frequently asked questions</h1>
                    <div className="mb-0 mt-4 leading-5 -tracking-[0.25px]">
                        Got a question you don’t see here?{' '}
                        <Link
                            href="/contact/request-info?form_submission_source=pricing-enterprise"
                            title="contact Sourcegraph"
                            className="btn btn-link p-0 leading-[22px]"
                        >
                            Contact us.
                        </Link>
                    </div>
                </div>
                <div className="col-span-full grid gap-4 md:col-span-3">
                    {faqDataToRender.map((item, index) => (
                        <Accordion
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            index={index}
                            selectedOption={selectedOption}
                        />
                    ))}
                </div>
            </ContentSection>
        </Layout>
    )
}

const ViewPlatformButton = ({ chooseProduct }: Pick<Props, 'chooseProduct'>): JSX.Element => (
    <button
        title="View platform bundle details"
        className="btn btn-primary"
        type="button"
        onClick={() => chooseProduct('codeIntelligence')}
    >
        View platform bundle details
    </button>
)

const TabComponent = ({ tab, selectedOption, chooseProduct, className }: Props): JSX.Element => (
    <div key={tab.key} className={classNames('flex justify-center', className)}>
        <button
            key={tab.key}
            type="button"
            className="btn !px-0 pt-[10px] pb-0 transition-all duration-700 ease-in-out"
            onClick={() => chooseProduct(tab.key)}
        >
            <div className="grid grid-cols-1 justify-items-start gap-1 text-left">
                <p className="mb-0 text-[18px] font-semibold leading-[27px] -tracking-[0.25px] text-gray-700">
                    {tab.title}
                </p>
                <p className="pb-2 text-[18px] font-normal leading-[27px] -tracking-[0.25px] text-[#5E6E8C]">
                    {tab.subtitle}
                </p>
            </div>
            {tab.key === selectedOption && <div className="plan-top-border !h-[2px]" />}
        </button>
    </div>
)

const PriceItem = ({ amount, description, hasLimit, className, amountClassName }: PriceItemProps): JSX.Element => (
    <div className={classNames('flex flex-col p-2 pb-0', className)}>
        <p className="mb-0 flex items-center font-semibold leading-[43px] text-gray-500">
            <span className={classNames('text-[36px]', amountClassName)}>${amount}</span>
            {hasLimit && <span className="ml-[10px] text-[18px]">per user/month</span>}
        </p>
        {description && <p className="mb-0 text-[14px] font-normal leading-[19.88px] text-gray-600">{description}</p>}
    </div>
)

export default PricingPage
