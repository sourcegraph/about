import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'
import { CaptureResult } from 'posthog-js'

import { ContentSection } from '../../ContentSection'

interface CodyIntroDualThemeProps {
    isLight?: boolean
    handleOpenModal: (pagePosition: string) => void | CaptureResult
    title?: string
    wrapperClassName?: string
}

export const CodyIntroDualTheme: FunctionComponent<CodyIntroDualThemeProps> = ({
    isLight = false,
    handleOpenModal,
    wrapperClassName,
    title,
}) => (
    <ContentSection
        parentClassName="!py-0 !px-0"
        className={classNames('-mt-8 pt-0 text-center md:mt-0', wrapperClassName, {
            'md:pt-[10px]': isLight,
            'md:pt-[22px]': !isLight,
        })}
    >
        <div className="mx-auto w-full px-6 md:w-[849px] lg:w-[895px]">
            <h1
                className={classNames('mx-auto w-full text-[52px] font-semibold md:!leading-[62px]', {
                    'pt-6 text-white md:text-[72px]': !isLight,
                    'pt-[24px] text-[#0F111A]': isLight,
                })}
            >
                {title ?? <span>Code more, type&nbsp;less</span>}
            </h1>
            <h3
                className={classNames('mx-auto mb-8 mt-6 max-w-[700px] md:leading-[30px]', {
                    'text-[#FFFFFF]': !isLight,
                    'text-[#343A4D]': isLight,
                })}
            >
                Cody is an AI coding assistant that uses advanced search and codebase context to help you understand,
                write, and fix code faster.
            </h3>
            <div className="mx-auto flex flex-row flex-wrap justify-center gap-[8px] rounded-[6px]">
                <button
                type="button"
                className={classNames('btn mr-4 px-5 py-3', isLight ? 'btn-primary' : 'btn-primary-dark')}
                title="Get Cody for free"
                onClick={() => handleOpenModal('top')}
            >
                <div className="flex items-center justify-center">
                    <img src="/cody/cody-logo.svg" className="mr-2 h-[15px] w-[15px]" alt="Cody Logo" /> Get Cody for your IDE
                </div>
            </button>
            <Link
                href="https://sourcegraph.com/sign-in?returnTo=/cody/chat"
                title="Chat on the web"
                className="btn btn-secondary mr-4 px-5 py-3"
                type="button"
            >
                <div className="flex items-center justify-center">
                    Chat on the web
                </div>
            </Link>
            </div>
        </div>
    </ContentSection>
)
