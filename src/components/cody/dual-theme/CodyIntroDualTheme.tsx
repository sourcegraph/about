import React, { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading } from '../..'
import { ContentSection } from '../../ContentSection'

interface CodyIntroDualThemeProps {
    isLight?: boolean
    handleOpenModal?: () => void
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
                className={classNames('mx-auto w-full text-[48px] font-semibold', {
                    'pt-6 leading-[48px] text-white md:text-[72px] md:leading-[86px]': !isLight,
                    'pt-[50px] leading-[58px] !tracking-[-1px] text-[#0F111A] md:pt-0 md:text-[52px] md:leading-[62px]':
                        isLight,
                })}
            >
                {title ?? <span>Code more, type&nbsp;less</span>}
            </h1>
            <Heading
                size="h3"
                className={classNames('mx-auto mb-8 mt-6 max-w-[700px] leading-[30px] !tracking-[-0.25px]', {
                    'text-[#FFFFFF]': !isLight,
                    '!font-sans text-[#343A4D]': isLight,
                })}
            >
                Cody is a coding AI assistant that uses AI and a deep understanding of your codebase to help you write
                and understand code faster.
            </Heading>
            <button
                type="button"
                className={classNames('btn btn-inverted-primary px-5 py-3', {
                    'bg-violet-700 text-[#FFF]': isLight,
                    'text-violet-500': !isLight,
                })}
                title="Get Cody for free"
                onClick={handleOpenModal}
            >
                <div className="flex items-center justify-center">
                    <img src="/cody/cody-logo.svg" className="mr-2 h-[15px] w-[15px]" alt="Cody Logo" /> Get Cody for
                    free
                </div>
            </button>
        </div>
    </ContentSection>
)
