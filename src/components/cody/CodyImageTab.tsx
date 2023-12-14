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
}> = ({ icon, headerText, description, tabContent }) => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0)
    const windowWidth = useWindowWidth()
    const isSmallTablet = windowWidth > 1140

    return (
        <ContentSection
            parentClassName="!px-0 !pb-0"
            className={classNames(
                ' h-[auto] overflow-hidden border-y border-white border-opacity-20 bg-violet-700 md:rounded-lg md:border p-6 md:py-0  md:pt-8 md:pb-0 md:pl-[60px]',
                {
                    'h-[1080px] md:h-auto': isSmallTablet,
                }
            )}
        >
            <div>
                <img className="h-[48px] w-[48px]" src={icon} alt="Cody logo" />
                <Heading size="h2" className="mt-[18px] !text-4xl text-white">
                    {headerText}
                </Heading>
                {typeof description === 'string' ? (
                    <p className="mt-[18px] mb-0 text-lg text-gray-200">{description}</p>
                ) : (
                    description
                )}
                <div
                    className={classNames(' relative mt-16 flex gap-y-8', {
                        'h-[592px] flex-col md:h-[400px] md:flex-row': isSmallTablet,
                        'flex-col': !isSmallTablet,
                    })}
                >
                    <div className="mb-8 flex min-w-fit flex-grow flex-col gap-[18px] md:mt-6 md:mb-0">
                        {tabContent.map((content, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedContentIndex(index)}
                                className={classNames(
                                    'rounded px-[10px] py-2 text-left text-white hover:bg-violet-600 hover:bg-opacity-40 md:rounded-r-none',
                                    {
                                        'bg-violet-600 hover:bg-opacity-100': selectedContentIndex === index,
                                    }
                                )}
                                type="button"
                            >
                                <Heading size="h5">{content.header}</Heading>
                                <p className="mb-0 text-lg">{content.description}</p>
                            </button>
                        ))}
                    </div>
                    <div
                        className={classNames(
                            ' bottom-0 h-auto w-full max-w-[800px] md:ml-[-24px] md:mr-0 md:h-[426px] md:w-auto',
                            {
                                'md:absolute md:top-0 md:right-[-50px]': isSmallTablet,
                                'pb-16': !isSmallTablet,
                            }
                        )}
                    >
                        {tabContent.map((content, index) => (
                            <img
                                key={index}
                                className={classNames({
                                    hidden: selectedContentIndex !== index,
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
