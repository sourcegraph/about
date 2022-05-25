import React, { FunctionComponent } from 'react'

interface Logos {
    name: string
    src: string
}

const logos: Logos[] = [
    {
        name: 'Amazon',
        src: '/external-logos/amazon-logo.svg',
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
    },
    {
        name: 'Paypal',
        src: '/external-logos/paypal-logo.svg',
    },
    {
        name: 'Uber',
        src: '/external-logos/uber-logo.svg',
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
    },
    {
        name: 'Canva',
        src: '/external-logos/canva-logo.svg',
    },
    {
        name: 'Shipt',
        src: '/external-logos/shipt-logo.svg',
    },
]

export const CustomerLogos: FunctionComponent = () => (
    <div className="d-flex flex-wrap align-items-center justify-content-center max-w-1000 mx-auto user-select-none">
        {logos.map((logo: Logos) => (
            <img
                key={logo.name}
                src={logo.src}
                alt={`${logo.name} logo`}
                title={`${logo.name} logo`}
                className="max-w-100 h-100 my-3 mx-4 flex-shrink-0"
                draggable={false}
            />
        ))}
    </div>
)
