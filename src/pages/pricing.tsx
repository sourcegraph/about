import { FunctionComponent, useState, useEffect } from 'react'

import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Link from 'next/link'
import { MdOutlineTrendingUp } from 'react-icons/md'

import {
    ContentSection,
    Heading,
    Layout,
    PricingPlan,
    FREE_FEATURES_OVERVIEW,
    PRO_FEATURES_OVERVIEW,
    ENTERPRISE_CODY_FEATURES_OVERVIEW,
    ENTERPRISE_STARTER_FEATURES_OVERVIEW,
    ENTERPRISE_FEATURES_OVERVIEW,
    faqData,
    FAQItem,
} from '../components'
import { useAuthModal } from '../context/AuthModalContext'
import { breakpoints } from '../data/breakpoints'
import { buttonLocation, buttonStyle } from '../data/tracking'
import { useWindowWidth } from '../hooks/windowWidth'

const GetStartedButton: FunctionComponent<{ className?: string }> = ({ className }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('pricing')

    return (
        <button
            title="Get Cody free"
            className={classNames(
                'btn btn-default-outlined w-full border-violet-700 -tracking-[0.25px] text-violet-700 hover:border-violet-500 hover:bg-violet-500 hover:text-white',
                className
            )}
            type="button"
            onClick={handleOpenModal}
        >
            Get Cody free
        </button>
    )
}

const GetProButton: FunctionComponent = () => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal('cody', 'pro')
    return (
        <button
            title="Get Cody Pro"
            className="btn btn-default-outlined flex w-full items-center justify-center gap-2 border-violet-600 bg-violet-500 -tracking-[0.25px] text-white"
            type="button"
            onClick={handleOpenModal}
        >
            <MdOutlineTrendingUp />
            Get Cody Pro
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

const PricingPage: FunctionComponent = () => {
    const [selectedOption, setSelectedOption] = useState('cody')
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const faqDataToRender: FAQItem[] = faqData[selectedOption] || []

    return (
        <Layout
            meta={{
                title: 'Sourcegraph | Pricing',
                description:
                    'Pricing and plans for Sourcegraph Cody and Code Search. Get started with a free trial today.',
            }}
            hero={
                <div className="container mx-auto grid gap-8 pb-2xl text-center md:py-3xl">
                    <h1 className="pt-3xl md:pt-0">Pricing</h1>
                    {isMobile && (
                        <ContentSection className="flex max-w-[356px] flex-col gap-4" parentClassName="!py-0">
                            <button title="Get started" type="button" className="btn btn-primary w-full">
                                Get started
                            </button>
                            <button title="Watch video" type="button" className="btn btn-outline-primary w-full">
                                Watch video
                            </button>
                        </ContentSection>
                    )}
                </div>
            }
            className="bg-gray-50"
        >
            <ContentSection className="mx-auto flex items-center pb-3xl" parentClassName="!py-0">
                <div className="mx-auto flex  gap-[8px] rounded-[6px] bg-gray-200 p-1 shadow-sm">
                    <button
                        type="button"
                        className={classNames(
                            'btn flex items-center justify-items-center gap-[10px] px-6 py-[10px] transition-all duration-700 ease-in-out',
                            selectedOption === 'cody' ? 'cody-btn-shadow bg-white' : 'bg-transparent shadow-none'
                        )}
                        onClick={() => setSelectedOption('cody')}
                    >
                        <img src="/cody-logomark-default.svg" alt="Cody Logo" className="h-[22px] w-[24px]" />
                        <div className="flex grid grid-cols-1 justify-items-start gap-2 text-left">
                            <p className="mb-0 font-sans text-[19px] leading-[12px]">Cody</p>
                            <p className="mb-0  text-xs font-normal leading-[9px] text-[#5E6E8C]">
                                AI coding assistant
                            </p>
                        </div>
                    </button>
                    <button
                        type="button"
                        className={classNames(
                            'btn flex items-center justify-items-center  gap-[10px] justify-self-end px-6 py-[10px] transition-all duration-700 ease-in-out',
                            selectedOption === 'codeSearch' ? 'cody-btn-shadow bg-white' : 'bg-transparent shadow-none'
                        )}
                        onClick={() => setSelectedOption('codeSearch')}
                    >
                        <img
                            src="/codesearch-logomark-default.svg"
                            alt="Cody Logo"
                            className="h-[25.7px] w-[24.347px]"
                        />
                        <div className="flex grid grid-cols-1 justify-items-start gap-2">
                            <p className="mb-0 font-sans text-[19px] leading-[12px]">Code Search</p>
                            <p className="mb-0 text-xs font-normal leading-[9px] text-[#5E6E8C]">
                                Find, understand, & fix code
                            </p>
                        </div>
                    </button>
                </div>
            </ContentSection>
            <ContentSection className="mx-auto md:px-[80px]" parentClassName="!py-0 md:!px-0">
                <div
                    className={classNames(
                        'transition-opacity duration-700 ease-in-out',
                        selectedOption === 'cody' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {selectedOption === 'cody' && (
                        <div className="flex grid grid-cols-1 items-center items-stretch justify-center  gap-8 md:grid-cols-3 md:justify-items-center md:gap-0">
                            <PricingPlan
                                name={
                                    <div className="mb-2">
                                        <p className="mb-0 text-2xl font-semibold">Free</p>
                                    </div>
                                }
                                description="Best for hobbyists"
                                price={
                                    <div className="flex flex-col p-2">
                                        <p className="mb-0 flex items-center">
                                            <span className="font-sans font-semibold leading-[43px] -tracking-[0.75px]">
                                                Free
                                            </span>
                                        </p>
                                    </div>
                                }
                                buttons={<GetStartedButton />}
                                features={FREE_FEATURES_OVERVIEW}
                                planClasses="md:my-6 md:pr-[30px] mt-6"
                            />
                            <PricingPlan
                                name={<p className="mb-[13px]">Pro</p>}
                                description="Best for professional devs and small teams"
                                price={
                                    <div className="flex flex-col p-2">
                                        <p className="mb-0 flex items-center text-gray-300">
                                            <span className="font-sans font-semibold leading-[43px] -tracking-[0.75px] text-gray-300 line-through">
                                                $9
                                            </span>
                                            <span className="ml-[10px] items-center text-sm font-normal leading-[19.99px] text-gray-300">
                                                /month
                                            </span>
                                        </p>
                                        <p className="mb-0 text-base ">
                                            Free until February 2024,
                                            <span className="font-semibold"> no credit card needed</span>
                                        </p>
                                    </div>
                                }
                                buttons={<GetProButton />}
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
                                description="Best for large teams and enterprises"
                                price=""
                                priceDetail={<p className="my-2 text-lg font-normal">Coming Soon</p>}
                                buttons={
                                    <ContactUsButton
                                        href="https://sourcegraph.com/contact/request-info"
                                        title="Request info"
                                        className="border-violet-700 text-violet-700 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
                                    />
                                }
                                features={ENTERPRISE_CODY_FEATURES_OVERVIEW}
                                planClasses="md:my-6 z-5 md:pl-[30px]"
                            />
                        </div>
                    )}
                </div>
                <div
                    className={classNames(
                        'transition-opacity duration-700 ease-in-out',
                        selectedOption === 'codeSearch' ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    {selectedOption === 'codeSearch' && (
                        <div className="mx-auto grid max-w-[802px] grid-cols-1 gap-8 md:grid-cols-2 md:gap-0">
                            <PricingPlan
                                name={<p className="mb-2 text-2xl font-semibold">Enterprise starter</p>}
                                description="Code search for teams and orgs"
                                price={
                                    <div className="flex flex-col py-2">
                                        <span className="text-sm font-medium">Starts at</span>
                                        <span className="font-semibold leading-[43px] -tracking-[0.75px]">$5k/yr</span>
                                        <p className="mb-0 text-sm font-medium leading-[19.88px]">
                                            Scales with your team
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <ContactUsButton
                                        href=""
                                        title="Contact us"
                                        className="border-violet-700 text-violet-700 hover:border-violet-500 hover:bg-violet-500 hover:text-white"
                                    />
                                }
                                features={ENTERPRISE_STARTER_FEATURES_OVERVIEW}
                                planClasses="md:mt-6 md:mb-[123px] md:rounded-l"
                            />
                            <PricingPlan
                                name={<p className="mb-[13px]">Enterprise</p>}
                                description="For orgs needing additional integration, deployment, security, or support options"
                                price={
                                    <div className="flex flex-col py-2">
                                        <span className="text-sm font-medium">Starts at</span>
                                        <span className="font-semibold leading-[43px] -tracking-[0.75px]">$50k/yr</span>
                                        <p className="mb-0 text-sm font-medium leading-[19.88px]">
                                            Scales with your team
                                        </p>
                                    </div>
                                }
                                buttons={
                                    <ContactUsButton
                                        title="Contact us"
                                        href="/contact/request-info?form_submission_source=pricing-enterprise"
                                        className="btn-default-outlined border-violet-600 bg-violet-500 text-white hover:bg-white hover:text-violet-500"
                                    />
                                }
                                features={ENTERPRISE_FEATURES_OVERVIEW}
                                planClasses="md:w-[420px] md:-ml-[1px] md:mt-[6px]"
                                {...PLAN_COLORS.enterprise}
                            />
                        </div>
                    )}
                </div>
            </ContentSection>
            <ContentSection
                className="grid grid-cols-5 gap-[24px] pt-24 pb-[96px] md:px-[80px]"
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

export default PricingPage
