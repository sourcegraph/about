import { FunctionComponent, ReactFragment } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

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
    center?: boolean
    border?: boolean
}> = ({ quote, author, logo, link, headline, largeText = false, center = true, border = true }) => (
    <div className={classNames(center && 'text-center')}>
        <blockquote className={classNames(border && 'border-left border-3 border-vivid-violet', center && 'text-center')}>
            {headline ? largeText ? (
                    <h2 className="font-weight-bold">{headline}</h2>
                ) : (
                    <h4 className="font-weight-bold mb-4 px-4">{headline}</h4>
                ) : null
            }

            {largeText ? (
                <h3 className="font-weight-normal text-3xl px-4">&ldquo;{quote}&rdquo;</h3>
            ) : (
                <h5 className="font-weight-normal px-4">&ldquo;{quote}&rdquo;</h5>
            )}
            {author && <figcaption className="text-muted px-4 pt-3">&mdash; {author}</figcaption>}
        </blockquote>
        {logo &&
            (logo.href ? (
                <Link href={logo.href} passHref={true}>
                    <a href="#none" className="btn">
                        <img src={logo.src} width="110px" alt={logo.alt} />
                    </a>
                </Link>
            ) : (
                <div className="d-flex justify-content-center pt-2">
                    <img src={logo.src} width="110px" alt={logo.alt} />
                </div>
            ))}

        {link &&
            (link?.href.includes('http') ? (
                <a href={link.href} target="_blank" rel="nofollow noreferrer">
                    {link.text}
                    <ArrowRightIcon className="ml-1" />
                </a>
            ) : (
                <Link href={link.href} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        className="d-flex justify-content-center mt-3"
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <p className="font-weight-bold">{link.text}</p>
                        <ArrowRightIcon className="ml-1" />
                    </a>
                </Link>
            ))}
    </div>
)
