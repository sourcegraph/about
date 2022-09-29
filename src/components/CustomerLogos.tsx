import { FunctionComponent } from 'react'

import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Logo {
    name: string
    src: string
    width: number
    height: number
    link?: string
}

interface CustomerLogos {
    overline?: string
    headline?: string
    description?: string
}

const logos: Logo[] = [
    {
        name: 'Uber',
        src: '/external-logos/uber-logo.svg',
        width: 124,
        height: 34,
    },
    {
        name: 'GE',
        src: '/external-logos/general-electric-logo.svg',
        width: 57,
        height: 57,
    },
    {
        name: 'Qualtrics',
        src: '/external-logos/qualtrics-logo.svg',
        width: 154,
        height: 30,
    },
    {
        name: 'Dropbox',
        src: '/external-logos/dropbox-logo.svg',
        width: 131,
        height: 42,
    },
    {
        name: 'Nutanix',
        src: '/external-logos/nutanix-logo.svg',
        width: 148,
        height: 18,
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
    },
    {
        name: 'Canva',
        src: '/external-logos/canva-logo.svg',
        width: 106,
        height: 34,
    },
    {
        name: 'Indeed',
        src: '/external-logos/indeed-logo.svg',
        width: 121,
        height: 33,
        link: '/case-studies/indeed-accelerates-development-velocity',
    },
    {
        name: 'Plaid',
        src: '/external-logos/plaid-logo.svg',
        width: 115,
        height: 43,
    },
    {
        name: 'Reddit',
        src: '/external-logos/reddit-logo.svg',
        width: 122,
        height: 42,
    },
    {
        name: 'Cloudflare',
        src: '/external-logos/cloudflare-logo.svg',
        width: 137,
        height: 51,
        link: '/case-studies/cloudflare-accelerates-debugging-and-improves-security',
    },
    {
        name: 'Mercado Libre',
        src: '/external-logos/mercado-libre-logo.svg',
        width: 102,
        height: 42,
    },
    {
        name: 'Lyft',
        src: '/external-logos/lyft-logo.svg',
        width: 84,
        height: 60,
        link: '/case-studies/lyft-monolith-to-microservices',
    },
    {
        name: 'Databricks',
        src: '/external-logos/databricks-logo.svg',
        width: 158.86,
        height: 24,
    },
    {
        name: 'Shipt',
        src: '/external-logos/shipt-logo.svg',
        width: 119,
        height: 40,
    },
]

export const CustomerLogos: FunctionComponent<CustomerLogos> = ({ overline, headline, description }) => (
    <div>
        <div className="tw-mb-xl tw-text-center tw-max-w-xl tw-mx-auto">
            {overline && (
                <Heading size="h6" as="h2">
                    {overline}
                </Heading>
            )}
            {headline && (
                <Heading size="h2" as="h3" className="tw-my-2">
                    {headline}
                </Heading>
            )}
            {description && <p className="tw-text-lg">{description}</p>}
        </div>

        <div className="tw-flex-wrap tw-mx-auto tw-flex tw-items-center tw-justify-center tw-max-w-screen-xl tw-select-none">
            {logos.map((logo: Logo, index) => (
                <Link key={logo.name} href={logo.link ? logo.link : '/case-studies'} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className={classnames('tw-mx-7 tw-mb-xl tw-shrink-0', {
                            'xl:tw-mb-0': index > (logos.length - 1) / 2,
                        })}
                        title={`${logo.name} logo`}
                        data-button-style={buttonStyle.image}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <Image
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            title={`${logo.name} logo`}
                            className="tw-w-full"
                            draggable={false}
                            width={logo.width}
                            height={logo.height}
                        />
                    </a>
                </Link>
            ))}
        </div>
    </div>
)
