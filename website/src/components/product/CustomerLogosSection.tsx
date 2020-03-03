import React from 'react'

const ITEMS: (
    | {
          name: string
          url: string
      }
    | { topN: number; description: string; className: string })[] = [
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
        topN: 5,
        description: 'hospitality company',
        className: 'customer-logos-section__item-logo-synthesized-0',
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
        name: 'CERN',
        url: '/external-logos/cern-blue-logo.png',
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
    // {
    //     topN: 5,
    //     description: 'media company',
    //     className: 'customer-logos-section__item-logo-synthesized-1',
    // },
]

export const CustomerLogosSection: React.FunctionComponent<{ trustWhat?: string; className?: string }> = ({
    trustWhat,
    className = '',
}) => (
    <div className={`customer-logos-section ${className}`}>
        <h3 className="text-center font-weight-light">Engineering teams at these companies use Sourcegraph Universal Code Search</h3>
        <div className="container text-center mt-4 d-flex flex-wrap justify-content-center align-items-center line-height-normal">
            {ITEMS.map((logo, i) =>
                'name' in logo ? (
                    <div
                        key={i}
                        className={`${logo.name.replace(' ', '-').toLowerCase()} customer-logos-section__item mx-4`}
                    >
                        <img className="customer-logos-section__item-logo d-block mx-auto" src={logo.url} />
                    </div>
                ) : (
                    <div
                        key={i}
                        className="customer-logos-section__item mx-2 d-flex justify-content-center flex-column"
                    >
                        <div
                            className={`customer-logos-section__item-logo customer-logos-section__item-logo-synthesized mx-auto border rounded px-3 font-weight-bold d-flex align-items-center ${
                                logo.className
                            }`}
                        >
                            Top {logo.topN}
                            <br />
                            {logo.description}
                        </div>
                    </div>
                )
            )}
        </div>
    </div>
)
