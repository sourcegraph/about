import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

import { CodyCard } from './CodyCard'

interface SolutionExplanationSectionProps {
    title: string
    titleTextColor?: string
    subTitleTextColor?: string
    explanationCardData: { title: string; description: string; className: string }[]
}

export const SolutionExplanationSection: FunctionComponent<SolutionExplanationSectionProps> = ({
    title,
    titleTextColor,
    subTitleTextColor,
    explanationCardData,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    return (
        <ContentSection
            parentClassName="!px-6 !py-0 md:!px-0 !py-16"
            className="flex max-w-[1232px] flex-col items-center gap-8 px-0 md:gap-10 md:px-6 lg:px-0"
        >
            <div className={classNames('w-full text-center md:w-[508px]', titleTextColor ?? '!text-gray-700')}>
                <Heading
                    size="h3"
                    className="!font-['Source_Sans_Pro'] !text-4xl !font-semibold !leading-[43px] !-tracking-[1px] md:!text-[40px] md:!leading-10"
                >
                    {title}
                </Heading>
            </div>
            <div className="relative -ml-6 sm:-ml-[208px] md:ml-0">
                {isMobile ? (
                    <img className="w-[612px]" src="/solutions/gitlab/ai-cody-mobile.svg" alt="AI Cody" />
                ) : (
                    <img className="w-[928px]" src="/solutions/gitlab/ai-cody.svg" alt="AI Cody" />
                )}
            </div>
            <div className="relative mt-0 flex flex-col gap-6 md:-mt-[134px] md:flex-row">
                {explanationCardData.map(card => (
                    <CodyCard
                        key={card.title}
                        title={card.title}
                        description={card.description}
                        className={classNames(
                            'rounded-2xl border border-gray-200 bg-white py-16 px-10',
                            card.className
                        )}
                        titleTextColor={titleTextColor}
                        subTitleTextColor={subTitleTextColor}
                    />
                ))}
            </div>
        </ContentSection>
    )
}
