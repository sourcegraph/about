import React, { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection } from '../..'

interface SourcePoweredDualThemeProps {
    isLight?: boolean
}

export const SourcePoweredDualTheme: FunctionComponent<SourcePoweredDualThemeProps> = ({ isLight = false }) => (
    <ContentSection
        parentClassName="!p-0 !m-0"
        className={classNames('m-0 flex flex-col items-center gap-5 px-6 md:flex-row md:justify-between md:px-0', {
            'py-16 lg:py-28': !isLight,
            'pb-0 pt-[64px] md:pt-[96px]': isLight,
        })}
    >
        <div
            className={classNames('flex w-full flex-col md:ml-[29px]', {
                'max-w-[570px]': !isLight,
                'max-w-auto': isLight,
            })}
        >
            <h2
                className={classNames('mb-1', {
                    'text-white': !isLight,
                    'text-[#0F111A]': isLight,
                })}
            >
                Sourcegraph powered{' '}
                <span className={classNames({ 'cody-heading bg-clip-text text-transparent': !isLight })}>context</span>
            </h2>

            <p
                className={classNames(
                    'mb-0 mt-[12px] text-2xl font-normal leading-[30px] tracking-[-0.25px] md:max-w-[501px]',
                    {
                        'text-[rgba(255,255,255,0.80)]': !isLight,
                        'hidden text-[#343A4D] md:block': isLight,
                    }
                )}
            >
                Cody uses your code graph plus{' '}
                <Link
                    href="/code-search"
                    className={classNames('underline', {
                        'text-[rgba(255,255,255,0.80)] underline-offset-[2px]': !isLight,
                        'text-[#343A4D] !decoration-[#343A4D] !underline-offset-[5px]': isLight,
                    })}
                >
                    Code Search
                </Link>{' '}
                to autocomplete, explain, and edit your code with additional context.
            </p>
            <p
                className={classNames({
                    hidden: !isLight,
                    'md:max-w-[501px]text-[#343A4D] mb-0 mt-[12px] text-2xl font-normal leading-[30px] tracking-[-0.25px] md:hidden':
                        isLight,
                })}
            >
                Sourcegraph’s code graph and analysis tools allows Cody to autocomplete, explain, and edit your code
                with additional context.
            </p>
            {isLight ? (
                <div className="mt-[24px] md:mt-0">
                    <img
                        src="assets/cody/new_context_illustration.svg"
                        className="mt-6 hidden md:flex md:max-w-full"
                        alt="cody context illustration"
                    />
                    <img
                        src="assets/cody/source-power-mobile.svg"
                        alt="cody context illustration details"
                        className="h-full w-full md:hidden"
                    />
                </div>
            ) : (
                <img
                    src="assets/cody/new_context_illustration.svg"
                    alt="cody context illustration details"
                    className="h-full w-full md:hidden"
                />
            )}
        </div>
        <div className="h-full md:mr-[29px] md:max-h-full md:min-h-[333px] md:w-full md:max-w-[614px]">
            {isLight ? (
                <>
                    <img
                        src="assets/cody/new_context_illustration_details_light.svg"
                        alt="cody context illustration details"
                        className="hidden h-full w-full md:flex"
                    />
                    <img
                        src="assets/cody/code-graph-mobile-light.svg"
                        alt="cody context illustration details"
                        className="h-full w-full md:hidden"
                    />
                </>
            ) : (
                <img
                    src="assets/cody/new_context_illustration_details.svg"
                    alt="cody context illustration details"
                    className="h-full w-full"
                />
            )}
        </div>
    </ContentSection>
)
