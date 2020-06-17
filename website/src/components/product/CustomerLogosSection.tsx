import React from 'react'

const ITEMS: (
    | {
          name: string
          url: string
          link?: {
              url: string
              target?: string
              rel?: string
          }
      }
    | { topN: number; description: string; className: string }
)[] = [
    {
        name: 'Cloudflare',
        url: '/external-logos/cloudflare-color-logo.svg',
    },
    {
        name: 'Nutanix',
        url: '/external-logos/nutanix-logo.svg',
    },
    {
        name: 'Uber',
        url: '/external-logos/uber.svg',
    },
    {
        name: 'Lyft',
        url: '/external-logos/lyft-logo.svg',
        link: {
            url: '/case-studies/lyft-monolith-to-microservices',
        },
    },
    {
        name: 'Qualtrics',
        url: '/external-logos/qualtrics-logo.svg',
    },
    {
        name: 'Toast',
        url: '/external-logos/toast-logo.svg',
    },
    {
        name: 'SoFi',
        url: '/external-logos/sofi-logo.svg',
        link: {
            url: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
        },
    },
    {
        name: 'Yelp',
        url: '/external-logos/yelp.svg',
        link: {
            url: 'https://engineeringblog.yelp.com/2019/11/winning-the-hackathon-with-sourcegraph.html',
            target: '_blank',
            rel: 'nofollow',
        },
    },
    {
        name: 'Adidas Running',
        url: '/external-logos/adidas-runtastic-sq-logo.svg',
    },
    {
        name: 'Indeed',
        url: '/external-logos/indeed-logo.svg',
    },
    {
        name: 'F5',
        url: '/external-logos/f5-logo.svg',
    },
    {
        name: 'Quantcast',
        url: '/external-logos/quantcast-logo.svg',
        link: {
            url: '/case-studies/quantcast-large-scale-refactoring',
        },
    },
    {
        name: 'Thorn',
        url: '/external-logos/thorn-logo.svg',
        link: {
            url: '/case-studies/we-are-thorn',
        },
    },
    {
        name: 'Collective Health',
        url: '/external-logos/collective-health-logo.svg',
    },
    {
        name: 'Convoy',
        url: '/external-logos/convoy-logo.svg',
        link: {
            url: '/case-studies/convoy-improved-on-boarding',
        },
    },
    {
        name: 'Apex Clearing',
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
        name: 'Button',
        url: '/external-logos/use-button-logo.svg',
    },
    {
        name: 'Tinder',
        url: '/external-logos/tinder-logo.svg',
    },
    {
        name: 'AppLovin',
        url: '/external-logos/applovin-logo.svg',
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
    <div id="customers" className={`customer-logos-section ${className}`}>
        <h3 className="text-center font-weight-light">
            Engineering teams at these companies use Sourcegraph Universal Code Search
        </h3>
        <div className="container text-center mt-4 d-flex flex-wrap justify-content-center align-items-center line-height-normal">
            {ITEMS.map((logo, i) =>
                'name' in logo ? (
                    <div
                        key={i}
                        className={`${logo.name.replace(' ', '-').toLowerCase()} customer-logos-section__item mx-4`}
                    >
                        {logo.link ? (
                            <a href={logo.link.url} target={logo.link.target} rel={logo.link.rel}>
                                <img className="customer-logos-section__item-logo d-block mx-auto" src={logo.url} />
                            </a>
                        ) : (
                            <img className="customer-logos-section__item-logo d-block mx-auto" src={logo.url} />
                        )}
                    </div>
                ) : (
                    <div
                        key={i}
                        className="customer-logos-section__item mx-2 d-flex justify-content-center flex-column"
                    >
                        <div
                            className={`customer-logos-section__item-logo customer-logos-section__item-logo-synthesized mx-auto border rounded px-3 font-weight-bold d-flex align-items-center ${logo.className}`}
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
