import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection } from '..'
import { useAuthModal } from '../../context/AuthModalContext'
import { captureCustomEventWithPageData } from '../../lib/utils'

interface CodyCtaProps {
    isCodyPage?: boolean
    source: string
    isLight?: boolean
    isVariantStyle?: boolean
    codyTitle?: string
    codyButtonText?: string
    enterpriseTitle?: string
    enterpriseLink?: string
}

export const CodyCta: FunctionComponent<CodyCtaProps> = ({
    isCodyPage = false,
    source,
    isLight = false,
    isVariantStyle,
    codyTitle,
    codyButtonText,
    enterpriseTitle,
    enterpriseLink,
}) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (pagePosition: string): void => {
        captureCustomEventWithPageData('get_cody_onpage_click', pagePosition)
        openModal(source)
    }

    const isDefaultStyle = (): boolean => !isLight && !isVariantStyle

    const isLightStyle = (): boolean => isLight && !isVariantStyle

    const contentClassName = classNames('mx-auto flex flex-col gap-6  md:flex-row', {
        'md:py-[96px]': isLight,
        'md:py-[112px]': isDefaultStyle(),
        'py-16': !isVariantStyle,
        'pb-24': isVariantStyle,
    })

    const h3ClassName = classNames('mt-4 ', {
        'max-w-[413.5px] text-gray-500': isDefaultStyle(),
        'max-w-[413.5px] text-[#343A4D]': isLightStyle(),
        'max-w-[516px] text-lg text-gray-500': isVariantStyle,
    })

    const h2Content = isLight ? (
        <>
            <span className="hidden md:block"> Get started with Cody </span>
            <span className="block md:hidden">Cody Free</span>
        </>
    ) : (
        <span>{isVariantStyle ? 'Try Sourcegraph on your code for free' : 'Get started with Cody'}</span>
    )

    const batchChangesButtonContent = (
        <button
            onClick={() => handleOpenModal('bottom')}
            title="Get Cody free"
            className="btn btn-primary text-center"
            type="button"
        >
            {codyButtonText && <span>{codyButtonText}</span>}

            {!codyButtonText && (
                <>
                    {!isLight && (
                        <>
                            <span className="hidden md:block">Download Cody for free</span>
                            <span className="block md:hidden">Download Cody free</span>
                        </>
                    )}
                    {isLight && <span>{isVariantStyle ? 'Start free' : 'Get Cody for free'}</span>}
                </>
            )}
        </button>
    )

    const linkContent = isLight ? (
        <>
            <span className="md:hidden">Book a demo</span>
            <span className="hidden md:flex">Book a demo</span>
        </>
    ) : (
        <span>{isVariantStyle ? 'Book a demo' : 'Book a demo'} </span>
    )

    return (
        <ContentSection id="contact-form" parentClassName="!py-0" className={contentClassName}>
            <div
                className={classNames(
                    'hover:cta-free-cody relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 md:w-1/2 md:p-14',
                    { 'border-opacity-25': !isVariantStyle }
                )}
            >
                <div className="bg-grad absolute right-0 top-0 h-[3px] w-full flex-1 bg-gradient-to-r from-blue-300 via-violet-400 to-vermillion-300" />
                <h2 className={classNames('text-gray-700', { 'max-w-[444px]': isVariantStyle })}>
                    {codyTitle ?? h2Content}
                </h2>
                <p className="mb-0 mt-4 text-lg text-gray-500">
                    {isVariantStyle
                        ? 'Experience code intelligence with a free trial for you and your team, or search millions of open source repositories.'
                        : ' Use Cody for free in your IDE, no credit card required.'}
                </p>
                <div
                    className={classNames('mt-6 flex flex-col flex-wrap gap-4 md:flex-row', {
                        'md:gap-6': isVariantStyle,
                        'md:gap-2': !isVariantStyle,
                    })}
                >
                    {isVariantStyle ? (
                        <Link
                            title="Get Cody free"
                            className="btn btn-primary text-center"
                            href="/contact/request-info"
                        >
                            {codyButtonText ? (
                                <span>{codyButtonText}</span>
                            ) : (
                                <span>{isVariantStyle ? 'Start free' : 'Get Cody for free'}</span>
                            )}
                        </Link>
                    ) : (
                        batchChangesButtonContent
                    )}

                    {isVariantStyle && (
                        <Link
                            href="/demo"
                            className={classNames(
                                'inline-flex items-center whitespace-nowrap',
                                ' btn lg:btn-sm !btn-secondary !px-6 !py-2 !text-base'
                            )}
                            data-button-type="cta"
                        >
                            {codyButtonText ? <span>{codyButtonText}</span> : <span>Book a demo</span>}
                        </Link>
                    )}
                </div>
            </div>

            <div
                className={classNames(
                    'flex flex-col gap-4 rounded-2xl border border-white border-opacity-40 p-8 md:w-1/2 md:p-14',
                    {
                        'bg-violet-700': isCodyPage,
                    }
                )}
            >
                {enterpriseTitle && <h2 className="text-white">{enterpriseTitle}</h2>}
                {!enterpriseTitle && (
                    <h2 className="text-white">{isVariantStyle ? 'Enterprise' : 'Cody Enterprise'}</h2>
                )}

                <p className="mb-0 text-lg text-white">
                    {isVariantStyle
                        ? 'Enterprise provides additional security, scalability, and control for your organization. Unlimited usage and context-awareness of your entire codebase.'
                        : 'Cody Enterprise provides additional security, scalability, and control for your organization. Unlimited usage and context search for your entire codebase.'}
                </p>

                <div className="flex max-w-[356px] flex-col flex-wrap gap-4 md:flex-row">
                    <Link
                        href={enterpriseLink ?? '/contact/request-info'}
                        title="Get Cody for Enterprise"
                        className="btn btn-secondary-dark w-full px-6 py-2 text-center md:w-auto"
                    >
                        {linkContent}
                    </Link>
                    <Link
                        href="/pricing"
                        className="btn-link-dark btn-link-icon hidden items-center justify-center font-semibold md:flex"
                    >
                        See pricing <ChevronRightIcon className="link-icon" />
                    </Link>
                    <Link href="/pricing" className="btn-secondary-dark px-5 py-3 text-center font-semibold md:hidden">
                        See pricing
                    </Link>
                </div>
            </div>
        </ContentSection>
    )
}
