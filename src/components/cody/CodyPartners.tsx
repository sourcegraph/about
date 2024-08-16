import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection, InfiniteCarousel } from '..'

const darkThemeIcons = [
    {
        id: '1Password Logo',
        src: '/assets/icons/1password-logo.svg',
        className: 'block h-[33.92px] md:mt-[7px] w-[181.636px] order-1 md:order-1 mx-6',
    },
    {
        id: 'Volant Partners Logo',
        src: '/assets/icons/volant-partners-logo.svg',
        className: 'h-[32.81px] w-[150px] md:mt-[7.66px] order-3 md:order-2 mx-6',
    },
    {
        id: 'Leidos Logo',
        src: '/assets/icons/leidos-logo.svg',
        className: 'h-[27px] md:mt-[7px] w-[117.612px] order-4 md:order-2 mx-6',
    },
    {
        id: 'Qualtrics Logo',
        src: '/assets/icons/qualtrics-logo.svg',
        className: 'h-12 w-[107px] order-4 md:order-3 mx-6',
    },
    {
        id: 'Drip Logo',
        src: '/assets/icons/drip-logo.svg',
        className: 'h-[30px] w-[81px] order-5 md:order-4 md:mt-[11px] mx-6',
    },
    {
        id: 'Podium Logo',
        src: '/assets/icons/podium-logo.svg',
        className: 'h-12 w-[136px] order-2 md:order-6 mx-6',
    },
    {
        id: 'mintable Logo',
        src: '/assets/icons/mintable-logo.svg',
        className: 'h-12 w-[147px] md:block order-7 md:order-6 mx-6',
    },
]

const lightThemeIcons = [
    {
        src: '/icons/1password-light.svg',
        className: 'block h-[33.92px] md:mt-[7px] w-[181.636px] order-1 md:order-1 mx-6',
    },
    {
        src: '/icons/volant-partners-light.svg',
        className: 'h-[32.81px] w-[150px] md:mt-[7.66px] order-3 md:order-2 mx-6',
    },
    {
        src: '/assets/icons/leidos-light.svg',
        className: 'h-[27px] md:mt-[7px] w-[117.612px] order-4 md:order-2 mx-6',
    },
    {
        src: '/icons/qualtrics-light.svg',
        className: 'h-12 w-[107px] order-4 md:order-3 mx-6',
    },
    {
        src: '/icons/drip-light.svg',
        className: 'h-[30px] w-[81px] order-5 md:order-4 md:mt-[11px] mx-6',
    },
    {
        src: '/icons/podium-light.svg',
        className: 'h-12 w-[136px] order-2 md:order-6 mx-6',
    },
    {
        src: '/assets/icons/mintable-light.svg',
        className: 'h-12 w-[147px] md:block order-7 md:order-6 mx-6',
    },
    {
        src: '.../../home/carousel/palo-alto-logo.svg',
        className: 'w-[181px] h-[33px] order-8 mx-6',
    },
]

export const CodyPartners: FunctionComponent<{ isLight?: boolean; className?: string }> = ({
    isLight = false,
    className,
}) => (
    <ContentSection parentClassName="!p-0 m-0">
        <div className={classNames(className, 'm-0 mt-0 w-full items-center justify-center py-24 md:mt-0 md:px-[0px]')}>
            <InfiniteCarousel images={isLight ? lightThemeIcons : darkThemeIcons} />
        </div>
    </ContentSection>
)
