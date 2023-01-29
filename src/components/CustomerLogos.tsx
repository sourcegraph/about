import { FunctionComponent, useEffect, useState, useRef } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { Heading } from '@components'
import { breakpoints, buttonStyle, buttonLocation } from '@data'

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
    dark?: boolean
    monochrome?: boolean
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
        src: '/external-logos/redfin-logo.svg',
        width: 124,
        height: 34,
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

/**
 * This is our Logo Pond from the DLS which displays customer logos.
 *
 * @param props - component props
 * @param props.overline - optional overline heading
 * @param props.headline - optional headline
 * @param props.description - optional description
 * @param props.dark - dark mode
 * @param props.monochrome - monochrome
 *
 */
export const CustomerLogos: FunctionComponent<CustomerLogos> = ({
    overline,
    headline,
    description,
    dark,
    monochrome,
}) => {
    const container = useRef<HTMLDivElement>(null)
    const [containerWidth, setContainerWidth] = useState<number>(0)

    /**
     * This allows us to check for the logo container width so we can
     * add a bottom margin to only the first row of logos on desktop.
     */
    useEffect(() => {
        const offsetWidth = container.current?.offsetWidth

        const resizeListener = (): void => {
            if (offsetWidth) {
                setContainerWidth(offsetWidth)
            }
        }

        resizeListener()

        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    return (
        <div className={classNames({ 'tw-bg-black tw-text-white': dark })}>
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

            <div
                className={classNames(
                    'tw-flex-wrap tw-mx-auto tw-flex tw-items-center tw-justify-center tw-max-w-screen-xl tw-select-none',
                    { 'tw-brightness-0': dark || monochrome, 'tw-invert': dark }
                )}
                ref={container}
            >
                {logos.map((logo: Logo, index) => (
                    <Link
                        key={logo.name}
                        href={logo.link ? logo.link : '/case-studies'}
                        className={classNames('tw-mx-6 tw-mb-xl tw-shrink-0', {
                            'xl:tw-mb-0': index > (logos.length - 1) / 2 && containerWidth >= breakpoints.xl,
                        })}
                        title={`${logo.name} logo`}
                        data-button-style={buttonStyle.image}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <img
                            src={logo.src}
                            alt={`${logo.name} logo`}
                            title={`${logo.name} logo`}
                            draggable={false}
                            width={logo.width}
                            height={logo.height}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}
