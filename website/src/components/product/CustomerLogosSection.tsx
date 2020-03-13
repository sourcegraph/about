import React from 'react'

const ITEMS: {
    name: string
    url: string
}[] = [
    {
        name: 'Cloudflare',
        url: '/external-logos/cloudflare-color-logo.svg',
    },
    {
        name: 'Uber',
        url: '/external-logos/uber.svg',
    },
    {
        name: 'Lyft',
        url: '/external-logos/lyft-logo.svg',
    },
    {
        name: 'Qualtrics',
        url: '/external-logos/qualtrics-logo.svg',
    },
    {
        name: 'Convoy',
        url: '/external-logos/convoy-logo.svg',
    },
    {
        name: 'Yelp',
        url: '/external-logos/yelp.svg',
    },
    {
        name: 'Adidas Running',
        url: '/external-logos/adidas-running-logo.svg',
    },
    {
        name: 'Quantcast',
        url: '/external-logos/quantcast-logo.svg',
    },
    {
        name: 'Thorn',
        url: '/external-logos/thorn-logo.svg',
    },
    {
        name: 'F5',
        url: '/external-logos/f5-logo.svg',
    },
    {
        name: 'SoFi',
        url: '/external-logos/sofi-logo.svg',
    },
    {
        name: 'Collective Health',
        url: '/external-logos/collective-health-logo.svg',
    },
    {
        name: 'Apex Clearning',
        url: '/external-logos/apex-clearing-logo.png',
    },
    {
        name: 'Plaid',
        url: '/external-logos/plaid-logo.svg',
    },
    {
        name: 'Expanse',
        url: '/external-logos/expanse-logo.svg',
    },
    {
        name: 'Nubank',
        url: '/external-logos/nubank-logo.svg',
    },
    {
        name: 'Thought Machine',
        url: '/external-logos/thought-machine-logo.svg',
    },
    {
        name: 'GetYourGuide',
        url: '/external-logos/gyg.svg',
    },
]

export const CustomerLogosSection: React.FunctionComponent<{ trustWhat?: string; className?: string }> = ({
    trustWhat,
    className = '',
}) => (
    <div id="customers" className={`customer-logos-section ${className}`}>
        <h3 className="text-center font-weight-light">
            Engineering teams at these companies use Sourcegraph Universal Code Search
        </h3>
        <div className="container text-center mt-4 d-flex flex-wrap justify-content-center align-items-center line-height-normal">
            {ITEMS.map((logo, i) =>
                <div
                    key={i}
                    className={`${logo.name.replace(' ', '-').toLowerCase()} customer-logos-section__item mx-4`}
                >
                    <img className="customer-logos-section__item-logo d-block mx-auto" src={logo.url} />
                </div>
            )}
        </div>
    </div>
)
