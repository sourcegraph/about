import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { CaptureResult } from 'posthog-js'

import { captureCustomEventWithPageData } from '../../../lib/utils'
import { ContentSection } from '../../ContentSection'
interface CodyIntroDualThemeProps {
    isLight?: boolean
    handleOpenModal: (pagePosition: string) => void | CaptureResult
    title?: string
    description?: string
    wrapperClassName?: string
    subTitle?: string
    titleSize?: string
    descriptionSize?: string
    isVariant?: boolean
}

export const CodyIntroDualTheme: FunctionComponent<CodyIntroDualThemeProps> = ({
    isLight = false,
    handleOpenModal,
    wrapperClassName,
    title,
    subTitle = 'Cody is an AI coding assistant that uses advanced search and codebase context to help you understand,write, and fix code faster.',
    description,
    titleSize,
    descriptionSize,
    isVariant = false,
}) => (
    <ContentSection
        parentClassName="!py-0 !px-0"
        className={classNames('pt-16 text-center md:mt-0 md:pt-[123px]', wrapperClassName)}
    >
        <h1
            className={classNames('mx-auto w-full font-semibold', titleSize || 'text-4xl sm:text-6xl', {
                'text-white': !isLight,
                'text-gray-700': isLight,
            })}
        >
            {/* {(!isVariant && title) ?? <span>Code more, type&nbsp;less</span>}

            {isVariant && <span>{title}</span>} */}
            The most informed Code AI
        </h1>

        <p
            className={classNames(
                'text-balance mx-auto mt-6 mb-8 max-w-[50ch] font-normal leading-tight text-gray-400',
                descriptionSize || 'md:text-xl',
                {
                    'text-gray-100': !isLight,
                    'text-gray-700': isLight,
                    '!mt-8 !mb-10 opacity-70': isVariant,
                }
            )}
        >
            {description ??
                'Cody uses the latest models and all your development context to help you understand, write, and fix code faster.'}
        </p>
        <div className="mx-auto flex flex-row flex-wrap justify-center gap-[8px] rounded-[6px]">
            <button
                type="button"
                className={classNames(
                    'btn w-full px-6 py-2 lg:w-fit',
                    isLight ? 'btn-primary' : 'btn-primary-dark',
                    isVariant && 'md:!w-fit'
                )}
                title="Download Cody for Free"
                onClick={() => handleOpenModal('top')}
            >
                <div className="flex items-center justify-center">
                    {!isVariant && <img src="/cody/cody-logo.svg" className="mr-2 h-[15px] w-[15px]" alt="Cody Logo" />}
                    Download Cody for Free
                    {/* {isVariant ? 'Start using Cody in your IDE' : 'Download Cody for your IDE'} */}
                    {isVariant && <ArrowUpRight className="ml-2 hidden md:flex" size={16} />}
                </div>
            </button>
            <Link
                href="/contact/request-info"
                title="Request Cody Enterprise"
                className={classNames('btn btn-secondary w-full px-6 py-2 lg:w-fit', isVariant && 'md:!w-fit')}
                type="button"
                onClick={() => captureCustomEventWithPageData('contact_sales_onpage_click')}
            >
                <div className="flex items-center justify-center">Request Cody Enterprise</div>
            </Link>
        </div>

        {/* testimonial */}
        <div className="mt-10">
            <div className="mx-auto flex max-w-md gap-x-4 rounded-lg bg-[#E9E7FA] p-5 text-left text-[#8552F3]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M2.50033 17.5002C5.00033 17.5002 8.33366 16.6669 8.33366 10.8336V4.1669C8.33366 3.12523 7.70366 2.48606 6.66699 2.50023H3.33366C2.29199 2.50023 1.66699 3.12523 1.66699 4.14356V9.1669C1.66699 10.2086 2.29199 10.8336 3.33366 10.8336C4.16699 10.8336 4.16699 10.8336 4.16699 11.6669V12.5002C4.16699 13.3336 3.33366 14.1669 2.50033 14.1669C1.66699 14.1669 1.66699 14.1736 1.66699 15.0261V16.6669C1.66699 17.5002 1.66699 17.5002 2.50033 17.5002Z"
                        stroke="#8552F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.5003 17.5002C15.0003 17.5002 18.3337 16.6669 18.3337 10.8336V4.1669C18.3337 3.12523 17.7028 2.48606 16.667 2.50023H13.3337C12.292 2.50023 11.667 3.12523 11.667 4.14356V9.1669C11.667 10.2086 12.292 10.8336 13.3337 10.8336H13.9587C13.9587 12.7086 14.167 14.1669 11.667 14.1669V16.6669C11.667 17.5002 11.667 17.5002 12.5003 17.5002Z"
                        stroke="#8552F2"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>

                <div>
                    <div>Something that would've taken me multiple dev days was done in an hour with Cody&hellip;</div>
                    <div className="mt-4 text-sm opacity-70">Brendan Doyle, Senior Software Engineer @ Qualtrics</div>
                </div>
            </div>
        </div>
    </ContentSection>
)
