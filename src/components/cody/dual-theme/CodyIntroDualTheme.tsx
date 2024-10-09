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
        className={classNames('pt-16 md:mt-0 md:pt-[123px]', wrapperClassName)}
    >
        <h1
            className={classNames('mx-auto w-full font-semibold', titleSize || 'text-4xl sm:text-6xl', {
                'text-white': !isLight,
                'text-gray-700': isLight,
            })}
        >
            {(!isVariant && title) ?? <span>Code more, type&nbsp;less</span>}

            {isVariant && <span>{title}</span>}
        </h1>

        <p
            className={classNames(
                'mt-6 mb-8 font-normal leading-tight text-gray-400',
                descriptionSize || 'md:text-xl',
                {
                    'text-gray-100': !isLight,
                    'text-gray-700': isLight,
                    '!mt-8 !mb-10 opacity-70': isVariant,
                }
            )}
        >
            {description ??
                'Cody is an AI coding assistant that uses advanced search and codebase context to help you understand, write, and fix code faster.'}
        </p>
        <div className="mx-auto flex flex-row flex-wrap gap-[8px] rounded-[6px]">
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
                href="/enterprise-trial-offer?form_submission_source=cody-enterprise-trial"
                title="Get a Cody Enterprise trial"
                className={classNames('btn btn-secondary w-full px-6 py-2 lg:w-fit', isVariant && 'md:!w-fit')}
                type="button"
                onClick={() => captureCustomEventWithPageData('start_enterprise_trial_click')}
            >
                <div className="flex items-center justify-center">Get a Cody Enterprise trial</div>
            </Link>
        </div>
    </ContentSection>
)
