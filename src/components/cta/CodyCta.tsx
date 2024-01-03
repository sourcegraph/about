import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { Badge, ContentSection, Heading } from '..'
import { useAuthModal } from '../../context/AuthModalContext'

interface CodyCtaProps {
    isCodyPage?: boolean
    source: string
}

export const CodyCta: FunctionComponent<CodyCtaProps> = ({ isCodyPage = false, source }) => {
    const { openModal } = useAuthModal()

    const handleOpenModal = (): void => openModal(source)

    return (
        <ContentSection
            id="contact-form"
            parentClassName="!py-0"
            className="mx-auto flex flex-col gap-6 py-16 md:flex-row md:py-[112px]"
        >
            <div className="hover:cta-free-cody relative overflow-hidden rounded-2xl border border-gray-200 border-opacity-25 bg-white px-14 py-16 md:w-1/2 md:p-16">
                <div className="bg-grad absolute right-0 top-0 h-[3px] w-full flex-1 bg-gradient-to-r from-blue-300 via-violet-400 to-vermillion-300" />
                <Heading
                    size="h2"
                    className={classNames('!text-5xl text-gray-700', {
                        '!leading-10 !tracking-[-1px]': isCodyPage,
                    })}
                >
                    Cody Free
                </Heading>

                <Heading
                    size="h3"
                    className={classNames('mt-4 max-w-[413.5px] text-2xl text-gray-500', {
                        'leading-[30px] !tracking-[-0.25px]': isCodyPage,
                    })}
                >
                    Use Cody for free in your IDE, no credit card required.
                </Heading>
                <div className="mt-6 flex flex-col flex-wrap gap-4 md:flex-row md:gap-2">
                    <button
                        onClick={handleOpenModal}
                        title="Get Cody free"
                        className="btn btn-primary text-center"
                        type="button"
                    >
                        Get Cody free
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
                <Heading
                    size="h2"
                    className={classNames(' text-white', {
                        '!text-4xl': !isCodyPage,
                        '!text-5xl !leading-10 !tracking-[-1px]': isCodyPage,
                    })}
                >
                    Cody Enterprise <Badge text="Coming Soon" color="blurple" size="small" />
                </Heading>
                <Heading
                    size="h3"
                    className={classNames('text-2xl text-white text-opacity-80', {
                        'leading-[30px] !tracking-[-0.25px]': isCodyPage,
                    })}
                >
                    Cody Enterprise provides additional security, scalability, and control for your organization.
                    Unlimited usage and context-awareness of your entire codebase.
                </Heading>
                <div className="flex max-w-[356px] flex-col flex-wrap gap-4 md:flex-row">
                    <Link
                        href="https://sourcegraph.com/contact/request-info"
                        title="Get Cody for Enterprise"
                        className="btn hover:bg-color-violet-600 w-full rounded-[5px] border border-white px-6 py-2 text-center text-white md:w-auto"
                    >
                        Request info
                    </Link>
                    <Link
                        href="/pricing"
                        className="hidden items-center justify-center gap-[10px] font-semibold text-white hover:text-violet-300 hover:underline md:flex"
                    >
                        See pricing <ChevronRightIcon />
                    </Link>
                    <Link
                        href="/pricing"
                        className="hover:bg-color-violet-600 rounded-[5px] border border-white px-5 py-3 text-center font-semibold text-white md:hidden"
                    >
                        See pricing
                    </Link>
                </div>
            </div>
        </ContentSection>
    )
}
