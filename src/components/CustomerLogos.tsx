import { FunctionComponent, useEffect, useState, useRef, ReactNode } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { breakpoints } from '../data/breakpoints'
import { buttonStyle, buttonLocation } from '../data/tracking'

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
    className?: string
    ctaLink?: ReactNode
    headlineClassName?: string
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
 * @param props.className - classname
 * @param props.ctaLink - call to action link
 * @param props.headlineClassName - headline class name
 */
export const CustomerLogos: FunctionComponent<CustomerLogos> = ({
    overline,
    headline,
    description,
    dark,
    monochrome,
    className,
    ctaLink,
    headlineClassName,
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
        <div className={classNames(className, { 'bg-black text-white': dark })}>
            <div className="mx-auto mb-12 max-w-xl text-center">
                {overline && (
                    <h6>
                        {overline}
                    </h6>
                )}
                {headline && (
                    <h2 className={classNames('my-2', headlineClassName)}>
                        {headline}
                    </h2>
                )}
                {description && <p className="text-lg">{description}</p>}
                {ctaLink}
            </div>

            <div
                className={classNames(
                    'mx-auto flex max-w-screen-xl select-none flex-wrap items-center justify-center',
                    { 'brightness-0': dark || monochrome, invert: dark }
                )}
                ref={container}
            >
                {logos.map((logo: Logo, index) => (
                    <Link
                        key={logo.name}
                        href={logo.link ? logo.link : '/case-studies'}
                        className={classNames('mx-6 mb-12 shrink-0', {
                            'xl:mb-0': index > (logos.length - 1) / 2 && containerWidth >= breakpoints.xl,
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
