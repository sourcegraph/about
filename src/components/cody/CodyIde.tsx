import { type FunctionComponent, useState } from 'react'

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { ContentSection } from '..'

interface CodyIdeProps {
    isLight?: boolean
}

export const CodyIde: FunctionComponent<CodyIdeProps> = ({ isLight = false }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const allIdes = [
        { name: 'VS Code', icon: 'vs_code.svg' },
        { name: 'IntelliJ', icon: 'IntelliJ_IDEA_icon.svg' },
        { name: 'PyCharm', icon: 'PyCharm_icon.svg' },
        { name: 'GoLand', icon: 'GoLand_icon.svg' },
        { name: 'RubyMine', icon: 'RubyMine_icon.svg' },
        { name: 'WebStorm', icon: 'WebStorm_icon.svg' },
        { name: 'PhpStorm', icon: 'PhpStorm_icon.svg' },
        { name: 'Rider', icon: 'Rider_icon.svg' },
        { name: 'CLion', icon: 'CLion_icon.svg' },
        { name: 'DataGrip', icon: 'DataGrip_icon.svg' },
        { name: 'DataSpell', icon: 'DataSpell_icon.svg' },
        { name: 'Aqua', icon: 'Aqua_icon.svg' },
        { name: 'RustRover', icon: 'RustRover_icon.svg' },
    ]

    const visibleIdes = isExpanded ? allIdes : allIdes.slice(0, 4)

    return (
        <ContentSection
            parentClassName="!py-0"
            className={classNames('flex w-full flex-col items-center md:flex-col', {
                'mb-[0] mt-[64px] gap-x-0 md:mt-[55px] md:gap-x-12 md:pl-[148.5px] md:pr-0': isLight,
                'mt-16 gap-x-12 gap-y-6 md:mt-14 md:pr-8 ': !isLight,
            })}
        >
            <h4
                className={classNames('mb-6 whitespace-nowrap', {
                    'text-gray-200': !isLight,
                    'text-[#0F111A]': isLight,
                })}
            >
                Cody is available for:
            </h4>
            <div
                className={classNames('flex w-full flex-col items-center justify-center', {
                    'gap-x-6 gap-y-8 py-6': !isLight,
                    'md:gap-x-[47px]': isLight,
                })}
            >
                <div
                    className={classNames('flex flex-wrap items-center justify-center', {
                        'w-full gap-x-6 gap-y-8': !isLight,
                        'w-auto gap-x-[24px] gap-y-4 md:gap-x-[32px]': isLight,
                    })}
                >
                    {visibleIdes.map(ide => (
                        <div
                            key={ide.name}
                            className={classNames('flex items-center gap-x-4 md:px-6', { 'py-[12px]': isLight })}
                        >
                            <img
                                className="h-[45px] w-[45px]"
                                src={`/icons/IDEs/${ide.icon}`}
                                alt={`${ide.name} IDE Marketplace`}
                            />
                            <div className={classNames({ 'w-[110px]': isLight })}>
                                <h4
                                    className={classNames({
                                        'text-gray-200': !isLight,
                                        'text-[#0F111A]': isLight,
                                    })}
                                >
                                    {ide.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className={classNames('mt-4 flex items-center pb-4 md:pb-0', {
                        'text-gray-200': !isLight,
                        'text-[#0F111A]': isLight,
                    })}
                >
                    {isExpanded ? (
                        <>
                            Show less <ChevronUpIcon className="ml-1 h-5 w-5" />
                        </>
                    ) : (
                        <>
                            Show more <ChevronDownIcon className="ml-1 h-5 w-5" />
                        </>
                    )}
                </button>
            </div>
        </ContentSection>
    )
}
