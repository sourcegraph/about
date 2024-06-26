import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { ContentSection } from '..'
import { useAuthModal } from '../../context/AuthModalContext'

interface CodyCtaProps {
    isCodyPage?: boolean
    source: string
    isLight?: boolean
}

export const CodyCta: FunctionComponent<CodyCtaProps> = ({ isCodyPage = false, source, isLight = false }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal(source)

    return (
        <ContentSection
            id="contact-form"
            parentClassName="!py-0"
            className={classNames('mx-auto flex flex-col gap-6 py-16 md:flex-row', {
                'md:py-[96px]': isLight,
                'md:py-[112px]': !isLight,
            })}
        >
            <div className="hover:cta-free-cody relative overflow-hidden rounded-2xl border border-gray-200 border-opacity-25 bg-white px-14 py-16 md:w-1/2 md:p-16">
                <div className="bg-grad absolute right-0 top-0 h-[3px] w-full flex-1 bg-gradient-to-r from-blue-300 via-violet-400 to-vermillion-300" />
                <h2 className="text-gray-700">
                    {isLight ? (
                        <>
                            <span className="hidden md:block"> Get started with Cody </span>
                            <span className="block md:hidden">Cody Free</span>
                        </>
                    ) : (
                        <span> Get started with Cody </span>
                    )}
                </h2>

                <h3
                    className={classNames('mt-4 max-w-[413.5px]', {
                        'text-gray-500': !isLight,
                        'text-[#343A4D]': isLight,
                    })}
                >
                    Use Cody for free in your IDE, no credit card required.
                </h3>
                <div className="mt-6 flex flex-col flex-wrap gap-4 md:flex-row md:gap-2">
                    <button
                        onClick={handleOpenModal}
                        title="Get Cody free"
                        className="btn btn-primary text-center"
                        type="button"
                    >
                        {isLight ? (
                            <>
                                <span className="hidden md:block">Get Cody for free</span>
                                <span className="block md:hidden">Get Cody free</span>
                            </>
                        ) : (
                            <span>Get Cody for free</span>
                        )}
                    </button>
                </div>
            </div>

            <div
                className={classNames(
                    'flex flex-col gap-4 rounded-2xl border border-white border-opacity-40 px-14 py-16 md:w-1/2 md:p-16',
                    {
                        'bg-violet-700': isCodyPage,
                    }
                )}
            >
                <h2 className="text-white">Cody Enterprise</h2>
                <h3
                    className={classNames('text-[18px] text-white text-opacity-80', {
                        'leading-[27px] -tracking-[0.25px]': isCodyPage,
                    })}
                >
                    Cody Enterprise provides additional security, scalability, and control for your organization.
                    Unlimited usage and context search for your entire codebase.
                </h3>
                <div className="flex max-w-[356px] flex-col flex-wrap gap-4 md:flex-row">
                    <Link
                        href="https://sourcegraph.com/contact/request-info"
                        title="Get Cody for Enterprise"
                        className="btn btn-secondary-dark w-full px-6 py-2 text-center md:w-auto"
                    >
                        {isLight ? (
                            <>
                                <span className="md:hidden">Contact sales</span>
                                <span className="hidden md:flex"> Request info</span>
                            </>
                        ) : (
                            <span> Request info</span>
                        )}
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
