import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { InfiniteCarousel } from '..'

const darkThemeIcons = [
    {
        id: '1Password Logo',
        src: '/assets/icons/1password-logo.svg',
        className: 'h-[48px] w-[170px] order-1 md:order-1 mx-6',
    },
    {
        id: 'Uber Logo',
        src: '/assets/icons/uber-logo-light.svg',
        className: 'h-[48px] w-[72px] order-2 md:order-2 mx-6',
    },
    {
        id: 'Reddit Logo',
        src: '/assets/icons/reddit-light.svg',
        className: 'h-[48px] w-[90px] order-3 md:order-3 mx-6',
    },
    {
        id: 'Dropbox Logo',
        src: '/assets/icons/dropbox-logo-light.svg',
        className: 'h-[48px] w-[163px] order-4 md:order-4 mx-6',
    },
    {
        id: 'PANW Logo',
        src: '/assets/icons/palo-alto-logo-light.svg',
        className: 'h-[48px] w-[166px] order-5 md:order-5 mx-6',
    },
    {
        id: 'Databricks Logo',
        src: '/assets/icons/databricks-logo-light.svg',
        className: 'h-[48px] w-[178px] order-6 md:order-6 mx-6',
    },
    {
        id: 'Canva Logo',
        src: '/assets/icons/canva-logo-light.svg',
        className: 'h-[48px] w-[100px] order-7 md:order-7 mx-6',
    },
    {
        id: 'CERN Logo',
        src: '/assets/icons/CERN-logo-light.svg',
        className: 'h-[48px] w-[85px] order-8 md:order-8 mx-6',
    },
    {
        id: 'Mercado Libre Logo',
        src: '/assets/icons/mercado-libre-logo-light.svg',
        className: 'h-[48px] w-[99px] order-9 md:order-9 mx-6',
    },
    {
        id: 'Indeed Logo',
        src: '/assets/icons/indeed-logo-light.svg',
        className: 'h-[48px] w-[106px] order-10 md:order-10 mx-6',
    },
    {
        id: 'SoFi Logo',
        src: '/assets/icons/sofi-logo-light.svg',
        className: 'h-[48px] w-[85px] order-11 md:order-11 mx-6',
    },
    {
        id: 'Leidos Logo',
        src: '/assets/icons/leidos-logo.svg',
        className: 'h-[48px] w-[114px] order-12 md:order-12 mx-6',
    },
    {
        id: 'Nutanix Logo',
        src: '/assets/icons/nutanix-logo-light.svg',
        className: 'h-[48px] w-[150px] order-13 md:order-13 mx-6',
    },
    {
        id: 'Qualtrics Logo',
        src: '/assets/icons/qualtrics-logo.svg',
        className: 'h-[48px] w-[125px] order-14 md:order-14 mx-6',
    },
    {
        id: 'Redfin Logo',
        src: '/assets/icons/redfin-logo-light.svg',
        className: 'h-[48px] w-[97px] order-15 md:order-15 mx-6',
    },
    {
        id: 'Plaid Logo',
        src: '/assets/icons/plaid-logo-light.svg',
        className: 'h-[48px] w-[118px] order-16 md:order-16 mx-6',
    },
]

const lightThemeIcons = [
    {
        src: '/home/carousel/1password-logo.svg',
        className: 'h-[48px] w-[170px] order-1 md:order-1 mx-6',
    },
    {
        src: '/assets/icons/uber-logo.svg',
        className: 'h-[48px] w-[72px] order-2 md:order-2 mx-6',
    },
    {
        src: '/home/carousel/reddit-logo.svg',
        className: 'h-[48px] w-[90px] order-3 md:order-3 mx-6',
    },
    {
        src: '/assets/icons/dropbox-logo.svg',
        className: 'h-[48px] w-[163px] order-4 md:order-4 mx-6',
    },
    // {
    //     src: '/assets/icons/stripe-violet.svg',
    //     className: 'w-[85px] order-4 md:order-4 mx-6',
    // },
    {
        src: '/home/carousel/palo-alto-logo.svg',
        className: 'h-[48px] w-[166px] order-5 md:order-5 mx-6',
    },
    {
        src: '/assets/icons/databricks-logo.svg',
        className: 'h-[48px] w-[178px] order-6 md:order-6 mx-6',
    },
    {
        src: '/enterprise/cern-logo.svg',
        className: 'h-[48px] w-[85px] order-8 md:order-8 mx-6',
    },
    {
        src: '/assets/icons/mercado-libre-logo.svg',
        className: 'h-[48px] w-[99px] order-9 md:order-9 mx-6',
    },
    {
        src: '/assets/icons/indeed-logo.svg',
        className: 'h-[48px] w-[106px] order-10 md:order-10 mx-6',
    },
    {
        src: '/assets/icons/sofi-logo-violet.svg',
        className: 'h-[48px] w-[85px] order-11 md:order-11 mx-6',
    },
    {
        src: '/home/carousel/leidos-logo.svg',
        className: 'h-[48px] w-[114px] order-12 md:order-12 mx-6',
    },
    {
        src: '/assets/icons/nutanix-logo.svg',
        className: 'h-[48px] w-[150px] order-13 md:order-13 mx-6',
    },
    {
        src: '/icons/qualtrics-logo.svg',
        className: 'h-[48px] w-[125px] order-14 md:order-14 mx-6',
    },
    {
        src: '/assets/icons/redfin-logo.svg',
        className: 'h-[48px] w-[97px] order-15 md:order-15 mx-6',
    },
    {
        src: '/assets/icons/plaid-logo.svg',
        className: 'h-[48px] w-[118px] order-16 md:order-16 mx-6',
    },
    {
        src: '/assets/icons/canva-logo.svg',
        className: 'h-[48px] w-[100px] order-7 md:order-7 mx-6',
    },
]

export const CodyPartners: FunctionComponent<{ isLight?: boolean; className?: string }> = ({
    isLight = false,
    className,
}) => (
    <div className={classNames(className, 'm-0 mt-0 w-full items-center justify-center py-24 md:mt-0 md:px-[0px]')}>
        <div className="relative mx-auto max-w-[1232px]">
            {/* <div
                className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r ${
                    isLight ? 'from-gray-50' : 'from-gray-800'
                } z-10 to-transparent`}
            />
            <div
                className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l ${
                    isLight ? 'from-gray-50' : 'from-gray-800'
                } z-10 to-transparent`}
            /> */}
            <InfiniteCarousel images={isLight ? lightThemeIcons : darkThemeIcons} duration={300} />
        </div>
    </div>
)
