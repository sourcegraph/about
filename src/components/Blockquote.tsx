import { FunctionComponent, ReactFragment } from 'react'

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

export const BlockquoteWithLogoBottom: FunctionComponent<{
    quote: string
    header?: string
    author?: string | ReactFragment
    logo?: Logo
    link?: Link
}> = ({ quote, header, author, logo, link }) => (
    <>
        {header && <h2 className="font-weight-bold">{header}</h2>}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h3 className={`font-weight-normal ${header ? 'text-2xl' : 'text-3xl'}`}>&ldquo;{quote}&rdquo;</h3>
            {author && <figcaption className="pt-3 text-muted text-center">&mdash; {author}</figcaption>}
        </blockquote>
        {logo && (
            <div className="d-flex justify-content-center">
                {logo.href ? (
                    <a href={logo.href} className="btn">
                        <img src={logo.src} width="110px" alt={logo.alt} />
                    </a>
                ) : (
                    <img src={logo.src} width="110px" alt={logo.alt} />
                )}
            </div>
        )}
        {link &&
            (link.href.includes('http') ? (
                <a href={link.href} target="_blank" rel="nofollow noreferrer">
                    {link.text}
                    <ArrowRightIcon className="ml-1" />
                </a>
            ) : (
                <Link href={link.href} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="d-flex justify-content-center mt-3">
                        <p className="font-weight-bold">{link.text}</p>
                        <ArrowRightIcon className="ml-1" />
                    </a>
                </Link>
            ))}
    </>
)

export const BlockquoteWithLogoTop: FunctionComponent<{
    quote: string
    author?: string | ReactFragment
    logo?: Logo
}> = ({ quote, author, logo }) => (
    <>
        {logo && (
            <div className="d-flex justify-content-center">
                {logo.href ? (
                    <a href={logo.href} className="btn">
                        <img src={logo.src} width="150px" alt={logo.alt} />
                    </a>
                ) : (
                    <img src={logo.src} width="150px" alt={logo.alt} />
                )}
            </div>
        )}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h2 className="display-3 font-weight-bold">&ldquo;{quote}&rdquo;</h2>
            {author && <figcaption className="pt-3 text-gray-5 text-center">&mdash; {author}</figcaption>}
        </blockquote>
    </>
)

export const InContentBlockquote: FunctionComponent<{
    quote: string
    author?: string
    logo?: Logo
    link?: Link
    headline?: string
    largeText?: boolean
}> = ({ quote, author, logo, link, headline, largeText = false }) => (
    <>
        <blockquote className="border-left border-3 border-vivid-violet">
            {headline && <h4 className="font-weight-bold mb-4 px-4">{headline}</h4>}
            {largeText ? (
                <h3 className="font-weight-normal px-4">&ldquo;{quote}&rdquo;</h3>
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
    </>
)
