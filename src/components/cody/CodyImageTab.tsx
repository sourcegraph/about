import { FunctionComponent, ReactNode, useState } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

export const CodyImageTab: FunctionComponent<{
    icon: string
    headerText: string
    description: string | ReactNode
    tabContent: { header: string; description: string; 
    imageSrc: {
        mobile: string
        desktop: string
    }
    }[]
}> = ({ icon, headerText, description, tabContent }) => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0)
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    return (
        <ContentSection
            parentClassName="!px-0 !pb-0"
            className="h-[1080px] overflow-hidden border-y border-white border-opacity-20 bg-violet-700 md:px-6 md:pt-8 md:h-auto md:rounded-lg md:border md:pb-0 md:pl-[60px]"
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
                <div className="relative mt-16 flex h-[592px] flex-col gap-y-8 md:h-[400px] md:flex-row">
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
                    <div className="bottom-0 md:ml-[-24px] h-auto w-full max-w-[800px] md:absolute md:top-0 md:right-[-50px] md:mr-0 md:h-[426px] md:w-auto">
                        {tabContent.map((content, index) => (
                            <img
                                key={index}
                                className={classNames({
                                    hidden: selectedContentIndex !== index,
                                })}
                                src={isMobile ? content.imageSrc.mobile : content.imageSrc.desktop}
                                alt={content.header}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}
