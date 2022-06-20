import React, { FunctionComponent } from 'react'

import Link from 'next/link'

interface ImageWrapper {
    isLink: boolean
    logo: Logo
    children: React.ReactNode
}

interface Logo {
    name: string
    src: string
    link: string
}

interface CustomerLogos {
    isLink?: boolean
}

const logos: Logo[] = [
    {
        name: 'Amazon',
        src: '/external-logos/amazon-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'GE',
        src: '/external-logos/general-electric-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Qualtrics',
        src: '/external-logos/qualtrics-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Dropbox',
        src: '/external-logos/dropbox-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Nutanix',
        src: '/external-logos/nutanix-logo.svg',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
    {
        name: 'Canva',
        src: '/external-logos/canva-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Uber',
        src: '/external-logos/uber-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Plaid',
        src: '/external-logos/plaid-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Reddit',
        src: '/external-logos/reddit-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Cloudflare',
        src: '/external-logos/cloudflare-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Mercado Libre',
        src: '/external-logos/mercado-libre-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Lyft',
        src: '/external-logos/lyft-logo.svg',
        link: '/case-studies/lyft-monolith-to-microservices',
    },
    {
        name: 'Databricks',
        src: '/external-logos/databricks-logo.svg',
        link: '/case-studies',
    },
    {
        name: 'Shipt',
        src: '/external-logos/shipt-logo.svg',
        link: '/case-studies',
    },
]

const ImageWrapper: FunctionComponent<ImageWrapper> = ({ children, isLink, logo }) => {
    if (isLink) {
        return (
            <Link href={logo.link} key={logo.name} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="cursor-pointer">{children}</a>
            </Link>
        )
    }

    return <>{children}</>
}

export const CustomerLogos: FunctionComponent<CustomerLogos> = ({ isLink = false }) => (
    <div className="d-flex flex-wrap align-items-center justify-content-center max-w-1000 mx-auto user-select-none">
        {logos.map((logo: Logo) => (
            <ImageWrapper isLink={isLink} logo={logo} key={logo.name}>
                <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    title={`${logo.name} logo`}
                    className="max-w-100 h-100 my-3 mx-4 flex-shrink-0"
                    draggable={false}
                />
            </ImageWrapper>
        ))}
    </div>
)
