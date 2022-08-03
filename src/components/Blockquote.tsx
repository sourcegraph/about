import { FunctionComponent, ReactFragment } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { breakpoints, buttonStyle, buttonLocation } from '@data'
import { useWindowWidth } from '@hooks'

interface Logo {
    src: string
    alt: string
    href?: string
}

interface Link {
    text: string
    href: string
}

export const Blockquote: FunctionComponent<{
    quote: string | ReactFragment
    author?: string | ReactFragment
    logo?: Logo
    link?: Link
    headline?: string
    largeText?: boolean
    border?: boolean
    borderColor?: string
    inline?: boolean // inline vs. col layout
}> = ({ quote, author, logo, link, headline, largeText = false, border = true, borderColor, inline = true }) => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    const getBorderStyle = (): string => {
        // Reference DLS: https://www.figma.com/file/o1QRtdQI0ozKq0n7ATrKlx/Marketing-DLS?node-id=3368%3A16865
        const color: string = borderColor || 'violet-400'

        if (border) {
            // Inline Blockquote have more border padding
            if (inline) {
                return `py-2 tw-border-l-3 tw-border-${color}`
            }
            // Blockquotes in column: Border flips to horizontal for mobile
            if (isMdOrDown) {
                return `pt-6 mb-0 tw-border-t-3 tw-border-${color}`
            }
            return `tw-border-l-3 tw-border-${color}`
        }
        return 'text-center'
    }

    return (
        <blockquote className={classNames(getBorderStyle(), 'px-4')}>
            {headline ? (
                largeText ? (
                    <h2 className="font-weight-bold">{headline}</h2>
                ) : (
                    <h4 className="font-weight-bold mb-4">{headline}</h4>
                )
            ) : null}

            {largeText ? (
                <h3 className="font-weight-normal text-3xl">&ldquo;{quote}&rdquo;</h3>
            ) : (
                <h5 className="font-weight-normal">&ldquo;{quote}&rdquo;</h5>
            )}

            {author && <figcaption className="text-muted mt-3">&mdash; {author}</figcaption>}

            {logo &&
                (logo.href ? (
                    <Link href={logo.href} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a>
                            <img src={logo.src} className="mt-3" width="110px" alt={logo.alt} />
                        </a>
                    </Link>
                ) : (
                    <img src={logo.src} className="mt-3" width="110px" alt={logo.alt} />
                ))}

            <br />

            {link &&
                (link?.href.includes('http') ? (
                    <a
                        className={classNames('mt-3 d-flex', !border && 'justify-content-center')}
                        href={link.href}
                        target="_blank"
                        rel="nofollow noreferrer"
                        title={link.text}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {link.text}
                        <ArrowRightIcon className="ml-1" />
                    </a>
                ) : (
                    <Link href={link.href} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            className={classNames('mt-3 d-flex', !border && 'justify-content-center')}
                            title={link.text}
                            data-button-style={buttonStyle.textWithArrow}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            <p className="font-weight-bold mb-0">{link.text}</p>
                            <ArrowRightIcon className="ml-1" />
                        </a>
                    </Link>
                ))}
        </blockquote>
    )
}
