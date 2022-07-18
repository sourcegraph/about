import { FunctionComponent } from 'react'

import Link from 'next/link'

interface Logo {
    name: string
    src: string
    link?: string
}

const logos: Logo[] = [
    {
        name: 'Uber',
        src: '/external-logos/uber-logo.svg',
    },
    {
        name: 'GE',
        src: '/external-logos/general-electric-logo.svg',
    },
    {
        name: 'Qualtrics',
        src: '/external-logos/qualtrics-logo.svg',
    },
    {
        name: 'Dropbox',
        src: '/external-logos/dropbox-logo.svg',
    },
    {
        name: 'Nutanix',
        src: '/external-logos/nutanix-logo.svg',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
    {
        name: 'Canva',
        src: '/external-logos/canva-logo.svg',
    },
    {
        name: 'Indeed',
        src: '/external-logos/indeed-logo.svg',
    },
    {
        name: 'Plaid',
        src: '/external-logos/plaid-logo.svg',
    },
    {
        name: 'Reddit',
        src: '/external-logos/reddit-logo.svg',
    },
    {
        name: 'Cloudflare',
        src: '/external-logos/cloudflare-logo.svg',
    },
    {
        name: 'Mercado Libre',
        src: '/external-logos/mercado-libre-logo.svg',
    },
    {
        name: 'Lyft',
        src: '/external-logos/lyft-logo.svg',
        link: '/case-studies/lyft-monolith-to-microservices',
    },
    {
        name: 'Databricks',
        src: '/external-logos/databricks-logo.svg',
    },
    {
        name: 'Shipt',
        src: '/external-logos/shipt-logo.svg',
    },
]

export const CustomerLogos: FunctionComponent = () => (
    <div className="d-flex flex-wrap align-items-center justify-content-center max-w-1000 mx-auto user-select-none">
        {logos.map((logo: Logo) => (
            <Link key={logo.name} href={logo.link ? logo.link : '/case-studies'} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="max-w-100 max-h-100 my-3 mx-4 flex-shrink-0">
                    <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        title={`${logo.name} logo`}
                        className="w-100"
                        draggable={false}
                    />
                </a>
            </Link>
        ))}
    </div>
)
