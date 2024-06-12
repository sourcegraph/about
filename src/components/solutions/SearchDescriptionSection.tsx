import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'
import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'

import { CodyCard } from './CodyCard'

interface SearchDescriptionSectionProps {
    title: string
    description: string
    imageUrl?: string
    titleTextColor?: string
    subTitleTextColor?: string
}

export const SearchDescriptionSection: FunctionComponent<SearchDescriptionSectionProps> = ({
    title,
    description,
    imageUrl,
    titleTextColor,
    subTitleTextColor,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.md
    return (
        <ContentSection
            parentClassName='!py-8 !px-6 mdi:!py-0 mdi:!px-10'
            className='flex max-w-[1280px] flex-col justify-between gap-6 overflow-visible rounded-2xl border-0 border-gray-200 bg-transparent md:flex-row md:overflow-hidden md:border md:bg-white xl:px-10'
        >
            <div className='flex w-fit flex-col gap-1 px-0 pt-0 md:gap-16 md:px-6 md:py-16 mdi:w-[495px]'>
                <div className='p-6 md:p-0'>
                    <Heading
                        size='h3'
                        className={classNames(
                            'mb-2 !font-["Source_Sans_Pro"] !text-4xl !font-semibold !leading-[43px] !-tracking-[1px] md:!text-[40px] md:!leading-[40px]',
                            titleTextColor ?? '!text-gray-700'
                        )}
                    >
                        {title}
                    </Heading>
                    <p
                        className={classNames(
                            'mb-0 text-2xl font-normal leading-[30px] -tracking-[0.25px]',
                            subTitleTextColor ?? 'text-gray-500'
                        )}
                    >
                        {description}
                    </p>
                </div>
                {isMobile && (
                    <div className='relative -mr-12'>
                        <img
                            className='w-full'
                            src={imageUrl ?? '/solutions/gitlab/code-search-mobile.svg'}
                            alt='Code search'
                        />
                    </div>
                )}
                <div className='flex flex-col gap-0 md:gap-10'>
                    <CodyCard
                        title='Search'
                        description='Find what you need in milliseconds with Code Search.'
                        icon='/solutions/gitlab/search.svg'
                        className='py-12 px-10 md:py-0 md:px-0'
                        titleTextColor={titleTextColor}
                        subTitleTextColor={subTitleTextColor}
                    />
                    <CodyCard
                        title='Navigate'
                        description='Quickly understand code with web-based cross-repository code navigation.'
                        icon='/solutions/gitlab/navigate.svg'
                        className='py-12 px-10 md:py-0 md:px-0'
                        titleTextColor={titleTextColor}
                        subTitleTextColor={subTitleTextColor}
                    />
                </div>
            </div>
            {!isMobile && (
                <div
                    className={classNames(
                        'relative md:-mt-24 md:-mr-3',
                        imageUrl ? 'mdi:-mt-5 mdi:-mr-10' : 'mdi:-mt-2 mdi:-mr-6'
                    )}
                >
                    <img
                        className='h-[688px] w-[700px]'
                        src={imageUrl ?? '/solutions/gitlab/code-search.svg'}
                        alt='Code search'
                    />
                </div>
            )}
        </ContentSection>
    )
}
