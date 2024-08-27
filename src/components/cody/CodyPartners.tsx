import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { InfiniteCarousel } from '..'

const darkThemeIcons = [
    {
        id: '1Password Logo',
        src: '/assets/icons/1password-logo.svg',
        className: 'block md:mt-[7px] w-[181.636px] order-1 md:order-1 mx-6',
    },
    {
        id: 'Reddit Logo',
        src: '/assets/icons/reddit-light.svg',
        className: 'w-[100px] md:mt-[7px] order-2 md:order-2 mx-6',
    },
    {
        id: 'Volant Partners Logo',
        src: '/assets/icons/volant-partners-logo.svg',
        className: 'w-[150px] md:mt-[7.66px] order-3 md:order-2 mx-6',
    },
    {
        id: 'Leidos Logo',
        src: '/assets/icons/leidos-logo.svg',
        className: 'md:mt-[7px] w-[117.612px] order-4 md:order-2 mx-6',
    },
    {
        id: 'Qualtrics Logo',
        src: '/assets/icons/qualtrics-logo.svg',
        className: 'w-[107px] order-4 md:order-3 mx-6',
    },
    {
        id: 'Drip Logo',
        src: '/assets/icons/drip-logo.svg',
        className: 'w-[81px] order-5 md:order-4 md:mt-[11px] mx-6',
    },
    {
        id: 'Podium Logo',
        src: '/assets/icons/podium-logo.svg',
        className: 'w-[136px] order-2 md:order-6 mx-6',
    },
    {
        id: 'mintable Logo',
        src: '/assets/icons/mintable-logo.svg',
        className: 'w-[147px] md:block order-7 md:order-6 mx-6',
    },
    {
        id: 'PANW Logo',
        src: '/assets/icons/palo-alto-logo-light.svg',
        className: 'w-[181px] order-8 md:order-7 mx-6',
    },
    {
        id: 'CERN Logo',
        src: '/assets/icons/CERN-logo-light.svg',
        className: 'w-[100px] order-8 md:order-7 mx-6',
    },
    {
        id: 'Mercado Libre Logo',
        src: '/assets/icons/mercado-libre-logo-light.svg',
        className: 'w-[100px] order-8 md:order-7 mx-6',
    },
    {
        id: 'SoFi Logo',
        src: '/assets/icons/sofi-logo-light.svg',
        className: 'w-[100px] order-8 md:order-7 mx-6',
    },
    {
        id: 'Dropbox Logo',
        src: '/assets/icons/dropbox-logo-light.svg',
        className: 'w-[130px] order-8 md:order-7 mx-6',
    },
    {
        id: 'Databricks Logo',
        src: '/assets/icons/databricks-logo-light.svg',
        className: 'w-[150px] order-8 md:order-7 mx-6',
    },
    {
        id: 'Canva Logo',
        src: '/assets/icons/canva-logo-light.svg',
        className: 'w-[100px] order-9 md:order-8 mx-6',
    },
    {
        id: 'Plaid Logo',
        src: '/assets/icons/plaid-logo-light.svg',
        className: 'w-[100px] order-9 md:order-8 mx-6',
    },
    {
        id: 'Nutanix Logo',
        src: '/assets/icons/nutanix-logo-light.svg',
        className: 'w-[120px] order-9 md:order-8 mx-6',
    },
]

const lightThemeIcons = [
    {
        src: '/home/carousel/1password-logo.svg',
        className: 'block md:mt-[7px] w-[181.636px] order-1 md:order-1 mx-6',
    },
    {
        src: '/home/carousel/reddit-logo.svg',
        className: 'w-[100px] md:mt-[7px] order-2 md:order-2 mx-6',
    },
    {
        src: '/icons/volant-partners-light.svg',
        className: 'w-[150px] md:mt-[7.66px] order-3 md:order-3 mx-6',
    },
    {
        src: '/home/carousel/leidos-logo.svg',
        className: 'md:mt-[7px] w-[117.612px] order-4 md:order-4 mx-6',
    },
    {
        src: '/icons/qualtrics-logo.svg',
        className: 'w-[107px] order-5 md:order-5 mx-6',
    },
    {
        src: '/icons/drip-light.svg',
        className: 'w-[81px] order-6 md:order-6 md:mt-[11px] mx-6',
    },
    {
        src: '/home/carousel/podium-logo.svg',
        className: 'w-[136px] order-7 md:order-7 mx-6',
    },
    {
        src: 'assets/icons/mintable-light.svg',
        className: 'w-[147px] md:block order-8 md:order-8 mx-6',
    },
    {
        src: '/home/carousel/palo-alto-logo.svg',
        className: 'w-[181px] order-9 mx-6',
    },
    { 
        src: '/enterprise/cern-logo.svg', 
        className: 'w-[100px] order-10 mx-6' 
    },
    { 
        src: '/assets/icons/mercado-libre-logo.svg', 
        className: 'w-[100px] order-11 mx-6' 
    },
    { 
        src: '/assets/icons/sofi-logo-violet.svg', 
        className: 'w-[100px] order-12 mx-6' 
    },
    { 
        src: '/assets/icons/dropbox-logo.svg', 
        className: 'w-[130px] order-13 mx-6' 
    },
    { 
        src: '/assets/icons/databricks-logo.svg', 
        className: 'w-[150px] order-14 mx-6' 
    },
    { 
        src: '/assets/icons/canva-logo.svg', 
        className: 'w-[100px] order-15 mx-6' 
    },
    {
        src: '/assets/icons/plaid-logo.svg',
        className: 'w-[100px] order-16 mx-6',
    },
    {
        src: '/assets/icons/nutanix-logo.svg',
        className: 'w-[120px] order-17 mx-6',
    },
]

export const CodyPartners: FunctionComponent<{ isLight?: boolean; className?: string }> = ({
    isLight = false,
    className,
}) => (
    <div className={classNames(className, 'm-0 mt-0 w-full items-center justify-center py-24 md:mt-0 md:px-[0px]')}>
        <InfiniteCarousel images={isLight ? lightThemeIcons : darkThemeIcons} />
    </div>
)
