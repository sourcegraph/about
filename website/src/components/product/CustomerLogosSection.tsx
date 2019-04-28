import React from 'react'

const ITEMS: (
    | {
          name: string
          url: string
      }
    | { topN: number; description: string; className: string })[] = [
    {
        name: 'Uber',
        url: '/external-logos/uber.svg',
    },
    {
        name: 'Lyft',
        url: '/external-logos/lyft-logo.svg',
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
    // {
    //     topN: 5,
    //     description: 'media company',
    //     className: 'customer-logos-section__item-logo-synthesized-1',
    // },
]

export const CustomerLogosSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div className={`customer-logos-section ${className}`}>
        <h4 className="text-center font-weight-light">Elite companies trust Sourcegraph</h4>
        <div className="container text-center mt-4 d-flex flex-wrap justify-content-center align-items-center line-height-normal">
            {ITEMS.map((logo, i) =>
                'name' in logo ? (
                    <div key={i} className="customer-logos-section__item mx-2">
                        <img className="customer-logos-section__item-logo d-block mx-auto" src={logo.url} />
                        <small className="customer-logos-section__item-caption text-muted">
                            Every developer at {logo.name} uses Sourcegraph
                        </small>
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
                        <small className="customer-logos-section__item-caption text-muted">
                            Every developer uses Sourcegraph
                        </small>
                    </div>
                )
            )}
        </div>
    </div>
)
