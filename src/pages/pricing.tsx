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
    Heading,
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

const GetStartedButton: FunctionComponent<{ className?: string; title?: string }> = ({
    className,
    title = 'Get Cody free',
}) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('pricing')

    return (
        <button
            title={title}
            className={classNames(
                'btn btn-default-outlined w-full border-violet-700 -tracking-[0.25px] text-violet-700 hover:border-violet-500 hover:bg-violet-500 hover:text-white',
                className
            )}
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

    const handleOpenModal = (): void => openModal('cody', 'pro')
    return (
        <button
            title={title}
            className={classNames(
                'btn btn-default-outlined -mt-[8px] flex w-full items-center justify-center gap-2 border-violet-600 bg-violet-500 -tracking-[0.25px] text-white',
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
        className={classNames('btn btn-default-outlined flex w-full justify-center -tracking-[0.25px]', className)}
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
        borderColorClass: 'plan-top-border',
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
                <span className="col-span-11">{question}</span>
                {isOpen ? (
                    <ChevronUpIcon
                        className="col-span-1 w-xs  justify-self-end font-bold text-gray-500"
                        strokeWidth={2.7}
                    />
                ) : (
                    <ChevronDownIcon
                        className="col-span-1 w-xs justify-self-end font-bold text-gray-500"
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
                <div className="p-5 leading-5 tracking-[-0.25px] text-gray-700">{answer}</div>
            </div>
        </div>
    )
}

const CodeIntelFeatures: FunctionComponent<{ features: FeatureCluster[] }> = ({ features }) => (
    <div className="ml-0">
        {features.map(node => (
            <div key={node.topic} className="border-0 bg-transparent px-0">
                <div className={classNames('flex items-center pt-[10px] text-sm')}>
                    <h5 className="mb-3 text-base font-semibold leading-5 -tracking-[0.25px]">{node.topic}</h5>
                    {node.description && (
                        <Tooltip
                            wrapperClassName="my-auto ml-xxs text-gray-300 flex items-center text-sm"
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
                                            wrapperClassName="my-auto ml-xxs text-gray-300 flex items-center"
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
    const isMedium = windowWidth < breakpoints.lg
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
    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Pricing',
                description:
                    'Pricing and plans for Sourcegraph Cody and Code Search. Get started with a free trial today.',
            }}
            hero={
                <>
                    <div className="container mx-auto grid pb-[62px] pt-3xl text-center">
                        <h1 className="text-[52px] font-semibold leading-[62px] -tracking-[1px]">Pricing</h1>
                    </div>
                    <ContentSection className="flex items-center" parentClassName="!py-0">
                        <div className="mx-auto grid grid-cols-2 gap-x-16 gap-y-8 rounded-[6px] shadow-sm md:grid-cols-3">
                            {isMobile
                                ? [
                                      ...TABS.filter(tab => tab.key === selectedOption),
                                      ...TABS.filter(tab => tab.key !== selectedOption),
                                  ].map((tab, index) => (
                                      <TabComponent
                                          key={tab.key}
                                          tab={tab}
                                          selectedOption={selectedOption}
                                          chooseProduct={chooseProduct}
                                          className={classNames(`col-span-${index === 0 ? '2' : '1'}`)}
                                      />
                                  ))
                                : TABS.map(tab => (
                                      <TabComponent
                                          key={tab.key}
                                          tab={tab}
                                          selectedOption={selectedOption}
                                          chooseProduct={chooseProduct}
                                      />
                                  ))}
                        </div>
                    </ContentSection>
                </>
            }
            childrenClassName="bg-gray-100 pt-0"
        >
            <ContentSection className="mx-auto md:px-[80px]" parentClassName="!py-0 md:!px-0">
                <div
                    className={classNames(
                        'transition-opacity duration-700 ease-in-out',
                        selectedOption === 'cody' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {selectedOption === 'cody' && (
                        <div className="flex flex-col gap-4">
                            <div className="flex grid grid-cols-1 items-center items-stretch justify-center  gap-8 md:grid-cols-3 md:justify-items-center md:gap-0">
                                <PricingPlan
                                    name={
                                        <div className="mb-2">
                                            <p className="mb-0 text-[24px] font-semibold leading-[34px]">Free</p>
                                        </div>
                                    }
                                    description="Best for hobbyists or light usage"
                                    price={
                                        <div className="flex flex-col p-2">
                                            <p className="mb-0 flex items-center">
                                                <span className="font-sans font-semibold leading-[43px] -tracking-[0.75px]">
                                                    $0
                                                </span>
                                            </p>
                                            <p className="mb-0 text-[14px] font-normal leading-[19.88px]">
                                                No credit card needed
                                            </p>
                                        </div>
                                    }
                                    buttons={<GetStartedButton title="Sign up for free" />}
                                    features={FREE_FEATURES_OVERVIEW}
                                    planClasses="md:my-6 md:pr-[30px] mt-6"
                                />
                                <PricingPlan
                                    name={<p className="mb-[13px]">Pro</p>}
                                    description="Best for pro devs and small teams"
                                    price={
                                        <div className="flex flex-col p-2 pb-0">
                                            <p className="mb-0">
                                                <span className="font-sans text-[36px] font-semibold leading-[43px]">
                                                    $9
                                                </span>
                                                <span className="ml-[10px] text-[18px] font-normal leading-[43px]">
                                                    per user/month
                                                </span>
                                            </p>
                                            <p className="leading[19.88px] mb-0 text-[14px] font-normal text-gray-600">
                                                Billed monthly
                                            </p>
                                        </div>
                                    }
                                    buttons={<GetProButton title="Sign up for Cody Pro" />}
                                    features={PRO_FEATURES_OVERVIEW}
                                    planClasses={isMobile ? 'z-10 md:w-full' : 'z-10 md:w-[420px] md:my-3'}
                                    {...PLAN_COLORS.pro}
                                />
                                <PricingPlan
                                    name={
                                        <div className="mb-2 flex flex-row items-center gap-4">
                                            <p className="mb-0 text-2xl font-semibold">Enterprise</p>
                                        </div>
                                    }
                                    description="Best for teams and orgs"
                                    price={
                                        <div className="flex flex-col p-2">
                                            <p className="mb-0 items-center">
                                                <span className="font-sans font-semibold leading-[43px] -tracking-[0.75px]">
                                                    $19
                                                </span>
                                                <span className="ml-[10px] text-[18px] font-normal leading-[43px]">
                                                    per user/month
                                                </span>
                                            </p>
                                        </div>
                                    }
                                    buttons={
                                        <ContactUsButton
                                            href="https://sourcegraph.com/contact/request-info"
                                            title="Contact sales"
                                            className="border-violet-700 text-violet-700 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
                                        />
                                    }
                                    features={ENTERPRISE_CODY_FEATURES_OVERVIEW}
                                    planClasses="md:my-6 z-5 md:pl-[30px]"
                                />
                            </div>
                            <div className="bg-code-intel flex flex-row flex-wrap justify-between rounded-2xl border-1 border-gray-200 p-6 md:p-12">
                                <div className="flex flex-col items-start justify-center">
                                    <Heading className="!text-[52px] !leading-[62px] !-tracking-[1px]" size="h1">
                                        Better together
                                    </Heading>
                                    <p className=" text-[24px] font-normal leading-[30px] tracking-[-0.25px] text-gray-500">
                                        Unlock the full power of our Code Intelligence platform
                                    </p>
                                    <div className=" flex items-center justify-center">
                                        <ContactUsButton
                                            href="/contact/request-info?form_submission_source=pricing-enterprise-starter"
                                            title="View platform bundle details"
                                            className="btn-default-outlined border-violet-600 bg-violet-500 text-white"
                                        />
                                    </div>
                                </div>
                                <div className="mt-0 flex flex-row items-center gap-4 xs:mt-2">
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
                                name={<p className="mb-2 text-2xl font-semibold">Enterprise</p>}
                                description="For orgs needing additional integration, deployment, security, or support options"
                                price={
                                    <div className="flex flex-col p-2 pb-0">
                                        <p className="mb-0">
                                            <span className="font-sans font-semibold leading-[43px] -tracking-[0.75px]">
                                                $49
                                            </span>
                                            <span className="ml-[10px] text-[18px] font-normal leading-[43px]">
                                                per user/month
                                            </span>
                                        </p>
                                        <p className="leading[19.88px] mb-0 text-[14px] font-normal text-gray-500">
                                            Scales with your team
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <ContactUsButton
                                        href="/contact/request-info?form_submission_source=pricing-enterprise-starter"
                                        title="Contact sales"
                                        className="btn-default-outlined border-violet-600 bg-violet-500 text-white hover:bg-white hover:text-violet-500"
                                    />
                                }
                                features={ENTERPRISE_FEATURES_OVERVIEW}
                                planClasses="rounded-2xl"
                            />
                            <div className="bg-code-intel relative max-h-[422px] overflow-hidden rounded-2xl border-1 border-gray-200 md:max-h-[368px]">
                                <div className="absolute right-20 top-2 mr-[-24px] mt-[-36px] flex h-[108px] w-[108px] items-center justify-center rounded-3xl bg-white">
                                    <img
                                        src="/cody-logomark-default.svg"
                                        alt="Cody Logo"
                                        className=" h-[56px] w-[54px]"
                                    />
                                </div>
                                <div className="absolute top-12 -right-5 flex h-[108px] w-[108px] items-center justify-center rounded-3xl border-2 bg-white">
                                    <img
                                        src="/codesearch-logomark-default.svg"
                                        alt="Cody Logo"
                                        className="h-[56px] w-[54px]"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center gap-6 p-10">
                                    <Heading className="!text-[52px] !leading-[62px] !-tracking-[1px]" size="h1">
                                        Better together
                                    </Heading>
                                    <p className=" text-[24px] font-normal leading-[30px] tracking-[-0.25px] text-gray-500">
                                        Unlock the full power of our Code Intelligence platform
                                    </p>
                                    <div className=" flex items-center justify-center">
                                        <ContactUsButton
                                            href="/contact/request-info?form_submission_source=pricing-enterprise-starter"
                                            title="View platform bundle details"
                                            className="btn-default-outlined border-violet-600 bg-violet-500 text-white"
                                        />
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
                        <div className=" mx-auto flex max-w-[698px] flex-col">
                            <div className="bg-code-intel rounded-2xl border border-gray-200 px-6 py-16 md:pt-12 md:pb-16 md:pr-10 md:pl-[41px]">
                                <div className="flex flex-col gap-8">
                                    <div className="grid grid-flow-col">
                                        <div>
                                            <Heading
                                                size="h2"
                                                className="mb-2 !text-[38px] !leading-[43.7px] !tracking-[-0.5px] !text-gray-700"
                                            >
                                                Code Intelligence Platform
                                            </Heading>
                                            <span className="flex border-b-1 pb-[24px] text-[16px] font-normal leading-5 -tracking-[0.25px] text-gray-700">
                                                For teams with a minimum of 50 users
                                            </span>
                                            <span className="mt-sm mb-2 grid gap-[3px]">
                                                <div className="flex items-center text-4xl">
                                                    <div className="flex flex-col p-2">
                                                        <p className="mb-0">
                                                            <span className="font-sans font-semibold leading-[43px] -tracking-[0.75px]">
                                                                $59
                                                            </span>
                                                            <span className="ml-[10px] text-[18px] font-normal leading-[43px]">
                                                                per user/month
                                                            </span>
                                                        </p>
                                                        <p className="leading[19.88px] mb-0 text-[14px] font-normal text-gray-500">
                                                            Save $9/user when purchasing Cody and Code Search together
                                                        </p>
                                                    </div>
                                                </div>
                                            </span>
                                            <ContactUsButton
                                                href="/contact/request-info?form_submission_source=pricing-enterprise-starter"
                                                title="Contact sales"
                                                className="btn w-fit border-violet-600 bg-violet-500 text-white"
                                            />
                                        </div>
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
                                    </div>
                                    <div className="h-[1px] bg-gray-200" />
                                    <div className="transition-max-height max-h-[1240px] overflow-hidden duration-700 ease-in-out">
                                        <div className="mx-auto flex flex-col gap-8 md:flex-row">
                                            <div className="">
                                                <span className="mb-8 text-[24px] font-[590] leading-[30px] tracking-[-0.25px]">
                                                    Cody Entreprise
                                                </span>
                                                <p className="mt-2 pb-[18px] text-base font-normal leading-[27px] -tracking-[0.25px] text-gray-700">
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
                                                <span className="mb-8 text-[24px] font-[590] leading-[30px] tracking-[-0.25px]">
                                                    Code Search Entreprise
                                                </span>
                                                <p className="mt-2 pb-[18px] text-base font-normal leading-[27px] -tracking-[0.25px] text-gray-700">
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
                parentClassName="!py-0 "
            >
                <div className="col-span-full border-t-1 md:col-span-2">
                    <Heading size="h1" className="mt-4">
                        Frequently asked questions
                    </Heading>
                    <div className="mb-0 mt-4 leading-5 -tracking-[0.25px]">
                        Got a question you don’t see here?{' '}
                        <Link
                            href="/contact/request-info?form_submission_source=pricing-enterprise"
                            title="contact Sourcegraph"
                            className="btn p-0 leading-[22px] text-violet-500 underline underline-offset-2"
                        >
                            Contact us.
                        </Link>{' '}
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

const TabComponent = ({ tab, selectedOption, chooseProduct, className }: Props): JSX.Element => (
    <div key={tab.key} className={classNames('flex justify-center', className)}>
        <button
            key={tab.key}
            type="button"
            className="btn !px-0 pt-[10px] pb-0 transition-all duration-700 ease-in-out"
            onClick={() => chooseProduct(tab.key)}
        >
            <div className="grid grid-cols-1 justify-items-start gap-1 text-left">
                <p className="mb-0 text-[18px] font-[590] leading-[27px] -tracking-[0.25px] text-gray-700">
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

export default PricingPage
