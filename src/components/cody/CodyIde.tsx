import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection, Heading } from '..'

interface CodyIdeProps {
    isLight?: boolean
}

export const CodyIde: FunctionComponent<CodyIdeProps> = ({ isLight = false }) => (
    <ContentSection
        parentClassName="!py-0"
        className={classNames('flex w-full flex-col items-center md:flex-col', {
            'mb-[0] mt-[64px] gap-x-0 md:mt-[55px] md:gap-x-12 md:pl-[148.5px] md:pr-0': isLight,
            'mt-16 gap-x-12 gap-y-6 md:mt-14 md:pr-8 ': !isLight,
        })}
    >
        <div
            className={classNames('flex w-full flex-col items-center justify-center md:flex-row', {
                'gap-x-6 gap-y-8 py-6 md:gap-x-4': !isLight,
                'md:gap-x-[47px]': isLight,
            })}
        >
            <div
                className={classNames('flex h-full flex-col items-center justify-center', {
                    'md:pr-8': !isLight,
                    'md:pr-0': isLight,
                })}
            >
                <Heading
                    size="h6"
                    className={classNames('whitespace-nowrap !text-lg', {
                        'text-gray-200': !isLight,
                        'pb-[48px] !font-semibold !leading-[27px] !tracking-[0.54px] text-[#0F111A] md:pb-0': isLight,
                    })}
                >
                    Cody is available for:
                </Heading>
            </div>
            <div
                className={classNames('flex flex-wrap items-center justify-center', {
                    'w-full gap-x-6 gap-y-8': !isLight,
                    'w-auto gap-x-[24px] gap-y-4 md:gap-x-[32px]': isLight,
                })}
            >
                <div className={classNames('flex items-center gap-x-4 md:px-6', { 'py-[16px]': isLight })}>
                    <img className="h-[50px] w-[50px]" src="/icons/vscode.svg" alt="VS Code IDE Marketplace" />{' '}
                    <div className={classNames({ 'w-[110px]': isLight })}>
                        <Heading
                            size="h4"
                            className={classNames('!text-2xl', {
                                'text-gray-200': !isLight,
                                '!font-normal !leading-[30px] !tracking-[-0.25px] text-[#0F111A]': isLight,
                            })}
                        >
                            VS Code
                        </Heading>
                        <span
                            className={classNames('text-sm', {
                                'text-[#343A4D]': isLight,
                                'text-white text-opacity-80': !isLight,
                            })}
                        >
                            GA
                        </span>
                    </div>
                </div>
                <div className={classNames('flex items-center gap-x-4 md:px-6', { 'py-[16px]': isLight })}>
                    <img className="h-[50px] w-[50px]" src="/icons/IntelliJ.svg" alt="IntelliJ IDE marketplace" />{' '}
                    <div className={classNames({ 'w-[110px]': isLight })}>
                        <Heading
                            size="h4"
                            className={classNames('!text-2xl', {
                                'text-gray-200': !isLight,
                                '!font-normal !leading-[30px] !tracking-[-0.25px] text-[#0F111A]': isLight,
                            })}
                        >
                            {isLight ? 'IntelliJ' : 'JetBrains IDEs'}
                        </Heading>
                        <span
                            className={classNames('text-sm', {
                                'text-[#343A4D]': isLight,
                                'text-white text-opacity-80': !isLight,
                            })}
                        >
                            BETA
                        </span>
                    </div>
                </div>
                <div className={classNames('flex items-center gap-x-4 md:px-6', { 'py-[16px]': isLight })}>
                    <img className="h-[50px] w-[50px]" src="/icons/Neovim-logo.svg" alt="NeoVim IDE" />{' '}
                    <div className={classNames({ 'w-[110px]': isLight })}>
                        <Heading
                            size="h4"
                            className={classNames('!text-2xl', {
                                'text-gray-200': !isLight,
                                '!font-normal !leading-[30px] !tracking-[-0.25px] text-[#0F111A]': isLight,
                            })}
                        >
                            Neovim
                        </Heading>
                        <span
                            className={classNames('text-sm', {
                                'text-[#343A4D]': isLight,
                                'text-white text-opacity-80': !isLight,
                            })}
                        >
                            EXPERIMENTAL
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </ContentSection>
)
