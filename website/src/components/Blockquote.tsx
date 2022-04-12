import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { Link } from 'gatsby'
import React, { FunctionComponent, ReactFragment } from 'react'

export const Blockquote: FunctionComponent<{
    quote: string
    by?: string | ReactFragment
    logoImage?: string
    logoAlt?: string
    border?: boolean
    headline?: string
}> = ({ quote, by, logoImage, border, headline, logoAlt }) => {
    const quoteStyles = 'p-3 rounded rounded-lg text-center'

    return (
        <>
            <blockquote
                className={
                    border
                        ? classNames(quoteStyles, 'case-studies__quote--in-content')
                        : classNames(quoteStyles, 'bg-light')
                }
            >
                {border && headline ? (
                    <div className="case-studies__quote--in-content--section">
                        <h5 className="font-weight-bold mb-4">{headline}</h5>
                        <div className="font-weight-normal">&ldquo;{quote}&rdquo;</div>
                    </div>
                ) : (
                    <h3 className="font-weight-normal">&ldquo;{quote}&rdquo;</h3>
                )}
                {by && <figcaption className="text-center text-muted pt-4">&mdash; {by}</figcaption>}
            </blockquote>
            {logoImage && logoAlt && (
                <div className="d-flex justify-content-center">
                    <img src={logoImage} width="110px" alt={logoAlt} />
                </div>
            )}
        </>
    )
}

export const BlockquoteWithLogoBottom: FunctionComponent<{
    quote: string
    header?: string
    by?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
    linkText?: string
    link?: string
}> = ({ quote, header, by, logoHref, logoImage, linkText, link, logoAlt }) => (
    <>
        {header && <h1 className="font-weight-bold">{header}</h1>}
        <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
            <h4 className="font-weight-normal">&ldquo;{quote}&rdquo;</h4>
            {by && <figcaption className="pt-3 text-muted text-center">&mdash; {by}</figcaption>}
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
        {linkText && link && link.includes('http') && (
            <a href={link} target="_blank" rel="nofollow noopener noreferrer">
                {linkText}
            </a>
        )}
        {linkText && link && !link.includes('http') && (
            <Link to={link} className="d-flex justify-content-center mt-3">
                <p className="font-weight-bold">{linkText}</p>
                <ArrowRightIcon className="icon-inline ml-1" />
            </Link>
        )}
    </>
)

export const BlockquoteWithLogoTop: FunctionComponent<{
    quote: string
    by?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    logoAlt?: string
}> = ({ quote, by, logoHref, logoImage, logoAlt }) => (
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
            {by && <figcaption className="pt-3 text-muted text-center">&mdash; {by}</figcaption>}
        </blockquote>
    </>
)
