import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import { Link } from 'gatsby'
import React, { FunctionComponent, ReactFragment } from 'react'

export const Blockquote: FunctionComponent<{
    quote: string
    by?: string | ReactFragment
}> = ({ quote, by }) => (
    <blockquote className="p-3 bg-light rounded rounded-lg">
        &ldquo;{quote}&rdquo;
        {by && (
            <>
                <br />
                <div className="text-right text-muted">&mdash; {by}</div>
            </>
        )}
    </blockquote>
)

export const BlockquoteWithLogo: FunctionComponent<{
    quote: string
    header?: string
    by?: string | ReactFragment
    logoHref?: string
    logoImage?: string
    linkText?: string
    link?: string
}> = ({ quote, header, by, logoHref, logoImage, linkText, link }) => (
        <>
            {header && (<h1 className="font-weight-bold">{header}</h1>)}
            <blockquote className="p-3 rounded rounded-lg d-flex flex-column bg-transparent">
                <h4 className="font-weight-normal">
                    &ldquo;{quote}&rdquo;
                </h4>
                {by && (<div className="pt-3 text-muted text-center">
                    &mdash; {by}
                </div>)}
            </blockquote>
            {logoHref && logoImage && (
                <div className="d-flex justify-content-center">
                    <a href={logoHref} className="btn">
                        <img src={logoImage} width="110px" alt="Prezi" />
                    </a>
                </div>
            )}
            {linkText && link && (
                <Link to={link} className="d-flex justify-content-center mt-3">
                    <p>{linkText}</p>
                    <ArrowRightIcon className="icon-inline ml-1" />
                </Link>
            )}
        </>
)
