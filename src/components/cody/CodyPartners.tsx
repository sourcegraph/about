import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'

const darkThemeIcons = [
    {
        id: '1Password Logo',
        src: '/1password-logo.svg',
        className: 'block h-[33.92px] md:mt-[7px] w-[181.636px] order-1 md:order-1',
    },
    {
        id: 'Volant Partners Logo',
        src: '/volant-partners-logo.svg',
        className: 'h-[32.81px] w-[150px] md:mt-[7.66px] order-3 md:order-2',
    },
    {
        id: 'Leidos Logo',
        src: '/leidos-logo.svg',
        className: 'h-[27px] md:mt-[7px] w-[117.612px] order-4 md:order-2',
    },
    {
        id: 'Qualtrics Logo',
        src: '/qualtrics-logo.svg',
        className: 'h-12 w-[107px] order-4 md:order-3',
    },
    {
        id: 'Drip Logo',
        src: '/drip-logo.svg',
        className: 'h-[30px] w-[81px] order-5 md:order-4 md:mt-[11px]',
    },
    {
        id: 'Podium Logo',
        src: '/podium-logo.svg',
        className: 'h-12 w-[136px] order-2 md:order-6',
    },
    {
        id: 'mintable Logo',
        src: '/mintable-logo.svg',
        className: 'h-12 w-[147px] md:block order-7 md:order-6',
    },
]

const lightThemeIcons = [
    {
        id: '1Password Logo',
        src: '/1password-light.svg',
        className: 'block h-[33.92px] md:mt-[7px] w-[181.636px] order-1 md:order-1',
    },
    {
        id: 'Volant Partners Logo',
        src: '/volant-partners-light.svg',
        className: 'h-[32.81px] w-[150px] md:mt-[7.66px] order-3 md:order-2',
    },
    {
        id: 'Leidos Logo',
        src: '/leidos-light.svg',
        className: 'h-[27px] md:mt-[7px] w-[117.612px] order-4 md:order-2',
    },
    {
        id: 'Qualtrics Logo',
        src: '/qualtrics-light.svg',
        className: 'h-12 w-[107px] order-4 md:order-3',
    },
    {
        id: 'Drip Logo',
        src: '/drip-light.svg',
        className: 'h-[30px] w-[81px] order-5 md:order-4 md:mt-[11px]',
    },
    {
        id: 'Podium Logo',
        src: '/podium-light.svg',
        className: 'h-12 w-[136px] order-2 md:order-6',
    },
    {
        id: 'mintable Logo',
        src: '/mintable-light.svg',
        className: 'h-12 w-[147px] md:block order-7 md:order-6',
    },
]

export const CodyPartners: FunctionComponent<{ isLight?: boolean; className?: string }> = ({
    isLight = false,
    className,
}) => (
    <ContentSection parentClassName="!p-0 m-0">
        <div
            className={classNames(
                className,
                'm-0 mt-0 flex w-full flex-wrap items-center justify-center gap-12 gap-y-16 py-24 px-[48.5px] md:mt-0 md:items-start md:justify-center md:gap-x-[48px] md:gap-x-[48px] md:px-[0px]'
            )}
        >
            {(isLight ? lightThemeIcons : darkThemeIcons).map(icon => (
                <img key={icon.id} src={`/icons${icon.src}`} className={classNames(icon.className)} alt={icon.id} />
            ))}
        </div>
    </ContentSection>
)
