import { FunctionComponent, ReactFragment } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

export const BlockquoteWithLogoBottom: FunctionComponent<{
    quote: string
    header?: string
    author?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
    linkText?: string
    link?: string
}> = ({ quote, header, author, logoHref, logoImage, linkText, link, logoAlt }) => (
    <>
        {header && <h1 className="font-weight-bold">{header}</h1>}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h4 className="font-weight-normal">&ldquo;{quote}&rdquo;</h4>
            {author && <figcaption className="pt-3 text-muted text-center">&mdash; {author}</figcaption>}
        </blockquote>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                {logoHref ? (
                    <a href={logoHref} className="btn">
                        <img src={logoImage} width="110px" alt={logoAlt} />
                    </a>
                ) : (
                    <img src={logoImage} width="110px" alt={logoAlt} />
                )}
            </div>
        )}
        {linkText && link && (
            <Link href={link} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="d-flex justify-content-center mt-3">
                    <p className="font-weight-bold">{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </a>
            </Link>
        )}
    </>
)

export const BlockquoteWithLogoTop: FunctionComponent<{
    quote: string
    author?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
}> = ({ quote, author, logoHref, logoImage, logoAlt }) => (
    <>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                {logoHref ? (
                    <a href={logoHref} className="btn">
                        <img src={logoImage} width="150px" alt={logoAlt} />
                    </a>
                ) : (
                    <img src={logoImage} width="150px" alt={logoAlt} />
                )}
            </div>
        )}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h2 className="display-3 font-weight-bold">&ldquo;{quote}&rdquo;</h2>
            {author && <figcaption className="pt-3 text-muted text-center">&mdash; {author}</figcaption>}
        </blockquote>
    </>
)

export const BlockquoteWithBorder: FunctionComponent<{
    quote: string
    author?: string | ReactFragment
    logoImage?: string
    logoAlt?: string
    headline?: string
    linkText?: string
    link?: string
    bold?: boolean
}> = ({ quote, author, logoImage, headline, logoAlt, link, linkText, bold }) => (
    <>
        <blockquote className="p-3 rounded rounded-lg text-center case-studies__quote--in-content">
            <div className="case-studies__quote--in-content--section">
                {headline && <h5 className="font-weight-bold mb-4">{headline}</h5>}
                <div className={bold ? 'font-weight-bold mb-3' : 'font-weight-bold mb-3'}>&ldquo;{quote}&rdquo;</div>
            </div>
            {author && (
                <>
                    <div className="text-center text-muted">&mdash; {author}</div>
                </>
            )}
        </blockquote>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                <img src={logoImage} width="110px" alt={logoAlt} />
            </div>
        )}
        {linkText && link && (
            <Link href={link} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="d-flex justify-content-center mt-3">
                    <p className="font-weight-bold">{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </a>
            </Link>
        )}
    </>
)

export const Blockquote: FunctionComponent<{
    quote: string
    headline?: string
    author?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
    linkText?: string
    link?: string
    bold?: boolean
}> = ({ quote, headline, author, logoHref, logoImage, linkText, link, logoAlt, bold }) => (
    <>
        {headline && <h1 className="font-weight-bold">{headline}</h1>}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h4 className={bold ? 'font-weight-bold' : 'font-weight-bold'}>&ldquo;{quote}&rdquo;</h4>
            {author && <div className="pt-3 text-muted text-center">&mdash; {author}</div>}
        </blockquote>
        {logoImage && logoAlt && (
            <div className="d-flex justify-content-center">
                {logoHref ? (
                    <a href={logoHref} className="btn">
                        <img src={logoImage} width="110px" alt={logoAlt} />
                    </a>
                ) : (
                    <img src={logoImage} width="110px" alt={logoAlt} />
                )}
            </div>
        )}
        {linkText && link && (
            <Link href={link} passHref={true}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="d-flex justify-content-center mt-3">
                    <p className="font-weight-bold">{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </a>
            </Link>
        )}
    </>
)
