import classNames from 'classnames'
import React from 'react'

const blockquoteStyles = 'p-3 bg-light rounded rounded-lg'
const flexBlockquoteStyles = 'd-flex flex-column'

export const Blockquote: React.FunctionComponent<{
    quote: string
    by?: string | React.ReactFragment
    flex?: boolean
    logo?: string
    href?: string
}> = ({ quote, by, flex, href, logo}) => (
    <>
        <blockquote className={flex ? classNames(flexBlockquoteStyles, blockquoteStyles) : blockquoteStyles}>
            &ldquo;{quote}&rdquo;
            {by && (
                <>
                    <br />
                    <div className={flex ? "pt-3 text-muted text-center" : "text-muted text-right"}>&mdash; {by}</div>
                </>
            )}
        </blockquote>
        {logo && href && (
            <div className="d-flex justify-content-center">
                <a href={href} className="btn">
                    <img src={logo} width="110px" alt="Prezi" />
                </a>
            </div>
        )}
    </>
)
