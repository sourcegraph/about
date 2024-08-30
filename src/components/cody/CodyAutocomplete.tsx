import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'
import { useWindowWidth } from '../../hooks/windowWidth'

interface CodyAutocompleteProps {
    isLight?: boolean
    className?: string
    wrapperClassName?: string
}

export const CodyAutocomplete: FunctionComponent<CodyAutocompleteProps> = ({
    className,
    isLight,
    wrapperClassName,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < 830
    return (
        <ContentSection
            parentClassName="!py-0 !px-0"
            className={classNames('relative mx-auto mt-12 w-full', wrapperClassName, {
                'md:mt-24': !isLight,
                'md:mt-[64px]': isLight,
            })}
        >
            {/* <div className="relative z-[10] mx-auto mb-16 w-full text-6xl text-white md:mb-[-96px] md:w-[816px]">
                <CodyAnimation
                    className={classNames(className, {
                        'sg-bg-gradient-cody-hero': !isLight,
                        'bg-none': isLight && !isMobile,
                    })}
                    isLight={isLight}
                />
            </div> */}

            <div className={classNames('!absolute relative top-0 z-[8] mx-auto mb-16 flex w-full justify-center')}>
                <div
                    className={classNames(
                        'sg-bg-gradient-cody-light-hero relative overflow-hidden md:overflow-visible',
                        'relative left-[81px] z-[5] mx-auto flex min-h-[412px] w-[728px] rounded-md border border-[#343A4D] py-4 pl-4 text-sm leading-[19.6px] md:left-[0px]',
                        { hidden: !isLight }
                    )}
                />
            </div>

            <ContentSection
                parentClassName={classNames('!py-0 !px-0', {
                    'flex justify-center !mx-0 relative z-[9]': isLight,
                })}
                className={classNames(
                    'relative flex w-full flex-col gap-[15px] overflow-hidden  py-16 px-0 md:mt-0 md:flex-row md:rounded-lg md:border md:pb-[47px] xl:max-w-[1280px]',
                    {
                        'mx-auto mt-16 border-y border-gray-500 bg-violet-700 md:pl-[62px]': !isLight,
                        'mx-[24px] rounded-lg border border-gray-200 border-opacity-50 bg-white !px-0 md:mx-auto md:border-y md:pb-[64px]':
                            isLight,
                    }
                )}
            >
                <div className="mb-[24px] flex w-full flex-col px-6 md:my-[65px] md:mb-0 md:w-[543px] md:pl-[56px]">
                    <img className="h-[46px] w-[46px]" src="/cody/completions-brand-icon.svg" alt="Cody Icon" />
                    <h2
                        className={classNames('pt-4 text-left', {
                            'text-[#0F111A]': isLight,
                            'text-white': !isLight,
                        })}
                    >
                        Code faster with AI-assisted autocomplete
                    </h2>
                    <h3
                        className={classNames('max-w-[510px] pt-4 text-left', {
                            'pb-[32px] text-[#343A4D]': isLight,
                            'pb-5 text-gray-200': !isLight,
                        })}
                    >
                        Cody generates single lines, or whole functions, in any programming language, configuration
                        file, or documentation.
                    </h3>
                    <div className="flex w-full items-center justify-center rounded-lg bg-gray-50 p-6 md:w-[459px]">
                        <h5
                            className={classNames('mb-0 w-full text-center md:w-[313px]', {
                                'text-gray-500': !isLight,
                                'text-[#343A4D]': isLight,
                            })}
                        >
                            Every day, Cody helps developers write &gt; 150,000 lines of code
                        </h5>
                    </div>
                </div>
                <div
                    className={classNames('relative', {
                        'flex w-full justify-end overflow-visible pl-[24px] md:pl-0': isLight,
                        'w-[670px] overflow-hidden': !isLight,
                    })}
                >
                    {isLight && (
                        <img
                            className="relative -right-0 flex md:hidden"
                            alt="Cody auto complete"
                            src="/assets/cody/single_line_autocomplete_mobile.svg"
                        />
                    )}
                    <img
                        className={classNames('relative top-4 -right-4 w-[670px]', {
                            'hidden md:flex': isLight,
                        })}
                        src={
                            isLight
                                ? '/assets/cody/single-line-autocomplete.svg'
                                : 'https://storage.googleapis.com/sourcegraph-assets/blog/single-line-autocomplete_ty-arp242.svg'
                        }
                        alt="Cody auto complete"
                    />
                </div>
            </ContentSection>
        </ContentSection>
    )
}
