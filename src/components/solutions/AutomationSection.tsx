import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

interface AutomationSectionProps {
    titleTextColor?: string
    subTitleTextColor?: string
    parentClassName?: string
}

export const AutomationSection: FunctionComponent<AutomationSectionProps> = ({
    titleTextColor,
    subTitleTextColor,
    parentClassName,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    return (
        <ContentSection
            parentClassName={classNames(parentClassName || 'md:!pt-16 md:!px-10 md:!pb-8 overflow-hidden !px-6 !py-8')}
            className="flex flex-col gap-6 xl:px-6"
        >
            <div className="w-full p-6 md:w-[822px]">
                <Heading
                    size="h2"
                    className={classNames(
                        '!pb-4 !font-["Source_Sans_Pro"] !text-[43px] !font-semibold !leading-[43px] !-tracking-[1px] md:pb-0 md:!text-[40px] md:!leading-10',
                        titleTextColor ?? '!text-gray-700'
                    )}
                >
                    Automate and track large scale code changes
                </Heading>
                <p
                    className={classNames(
                        'mb-1 flex text-2xl font-normal leading-[30px] -tracking-[0.25px] md:w-full',
                        subTitleTextColor ?? 'text-gray-500'
                    )}
                >
                    Create batch changes for multiple repositories and code hosts in minutes, then visualize patterns
                    across your entire codebase with custom dashboards.
                </p>
            </div>
            {isMobile && (
                <div className="-mt-[126px] -mr-[112px]">
                    <img className="w-full" src="/solutions/gitlab/tracker-graph.svg" alt="Code tracker graph" />
                </div>
            )}
            <div className="-mr-[204px] flex flex-row pt-0 md:mr-0 mdi:pt-5">
                <div className="z-40">
                    <img src="/solutions/gitlab/batch-changes.svg" alt="Batch change" />
                </div>
                {!isMobile && (
                    <div className="relative -ml-[112px] -mt-[102px]">
                        <img className="h-[426px]" src="/solutions/gitlab/tracker-graph.svg" alt="Code tracker graph" />
                    </div>
                )}
            </div>
        </ContentSection>
    )
}
