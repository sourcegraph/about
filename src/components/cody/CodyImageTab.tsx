import { FunctionComponent, ReactNode, useState } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'
import { useWindowWidth } from '../../hooks/windowWidth'

export const CodyImageTab: FunctionComponent<{
    icon: string
    headerText: string
    description: string | ReactNode
    tabContent: {
        header: string
        description: string
        imageSrc: {
            mobile: string
            desktop: string
        }
    }[]
    isLight?: boolean
}> = ({ icon, headerText, description, tabContent, isLight = false }) => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0)
    const windowWidth = useWindowWidth()
    const isSmallTablet = windowWidth > 1140

    return (
        <ContentSection
            parentClassName="!px-0 !pb-0"
            className={classNames('h-[auto] overflow-hidden md:rounded-lg md:border md:py-0 md:pt-8 md:pb-0', {
                'h-[1080px] border-y md:h-auto': isSmallTablet,
                'border-y border-white border-opacity-20 bg-violet-700 p-6 md:pl-[60px]': !isLight,
                'mx-[24px] rounded-[8px] border border-gray-200 bg-[#FFFFFF] py-6 md:mx-auto md:pl-[29px]': isLight,
            })}
        >
            <div>
                <img
                    className={classNames('h-[48px] w-[48px]', { 'mx-6 mt-[7px] md:mt-[39px]': isLight })}
                    src={icon}
                    alt="Cody logo"
                />
                <Heading
                    size="h2"
                    className={classNames('mt-[18px]', {
                        '!text-4xl text-white': !isLight,
                        'px-6 !text-[36px] !font-semibold !leading-[40px] !tracking-[-1px] text-[#0F111A] md:!text-[40px]':
                            isLight,
                    })}
                >
                    {headerText}
                </Heading>
                {typeof description === 'string' ? (
                    <p
                        className={classNames('mt-[18px] mb-0 text-lg', {
                            'px-6 text-[#343A4D]': isLight,
                            'text-gray-200': !isLight,
                        })}
                    >
                        {description}
                    </p>
                ) : (
                    description
                )}
                <div
                    className={classNames(' relative mt-16 flex gap-y-8', {
                        'h-[592px] flex-col md:h-[400px] md:flex-row': isSmallTablet,
                        'flex-col': !isSmallTablet,
                    })}
                >
                    <div
                        className={classNames('mb-8 flex min-w-fit flex-grow flex-col gap-[18px] md:mt-6 md:mb-0', {
                            'mx-6': isLight,
                        })}
                    >
                        {tabContent.map((content, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedContentIndex(index)}
                                className={classNames('rounded px-[10px] py-2 text-left md:rounded-r-none', {
                                    'bg-violet-600 text-white hover:bg-opacity-100 ':
                                        selectedContentIndex === index && !isLight,
                                    'rounded-[4px] border border-gray-200 bg-none text-[#0F111A] hover:bg-opacity-100':
                                        selectedContentIndex === index && isLight,
                                    'text-white hover:bg-violet-600 hover:bg-opacity-40': !isLight,
                                    'text-[#0F111A] hover:bg-[#F5F7FB] hover:bg-opacity-100': isLight,
                                })}
                                type="button"
                            >
                                <Heading size="h5">{content.header}</Heading>
                                <p className="mb-0 text-lg">{content.description}</p>
                            </button>
                        ))}
                    </div>
                    <div
                        className={classNames('bottom-0 h-auto w-full md:ml-[-24px] md:mr-0 md:h-auto md:w-auto', {
                            'max-w-[800px] md:absolute md:top-0 md:right-[-24px]': isSmallTablet && !isLight,
                            'max-w-[800px] md:absolute md:top-0 md:right-[0px]': isSmallTablet && isLight,
                            'flex max-w-full pb-16': !isSmallTablet && !isLight,
                            'pb-0': !isSmallTablet && isLight,
                        })}
                    >
                        {tabContent.map((content, index) => (
                            <img
                                key={index}
                                className={classNames({
                                    hidden: selectedContentIndex !== index,
                                    'h-full w-full': isLight,
                                })}
                                src={!isSmallTablet ? content.imageSrc.mobile : content.imageSrc.desktop}
                                alt={content.header}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}
