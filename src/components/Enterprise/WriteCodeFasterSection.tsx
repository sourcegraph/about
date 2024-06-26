import { FunctionComponent } from 'react'

import { ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

export const WriteCodeFasterSection: FunctionComponent = () => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md

    return (
        <ContentSection
            className="flex h-auto max-w-[1232px] flex-col-reverse justify-between gap-[19px] overflow-hidden rounded-2xl border-1 border-gray-200 bg-white md:h-[301px] md:flex-row"
            parentClassName="!py-16"
        >
            <div className="flex  flex-col px-6 py-10 md:py-16 md:pl-10">
                <h2 className="pb-4 pt-6 text-gray-700">
                    Developers write code faster using Cody and the power of AI in their IDE
                </h2>
            </div>
            <div className="md:sg-developers sg-developers-mobile  relative z-10 h-full w-full">
                {isMobile ? (
                    <img
                        src="/enterprise/multiline-completion.svg"
                        alt=""
                        className="relative h-[421px] w-[784px] pt-10"
                    />
                ) : (
                    <img
                        className="sg-developers relative h-full w-full"
                        src="/home/multiline-completion.svg"
                        alt="Multiline Completion"
                    />
                )}
            </div>
        </ContentSection>
    )
}
