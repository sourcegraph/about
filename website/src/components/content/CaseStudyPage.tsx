import React from 'react'
import slugify from 'slugify'
import { COLORS } from '../Jumbotron'

interface Props {
    title: string
    logo: string
    pdf?: string
    className: string
    children?: React.ReactNode
}

export const CaseStudyPage: React.FunctionComponent<Props> = ({
    title,
    logo,
    className = slugify(title),
    pdf,
    children,
}) => (
    <div className={className}>
        <CaseStudyJumbotron className="mb-5" title={title} logo={logo} pdf={pdf} />
        {children}
    </div>
)

export const CaseStudyJumbotron: React.FunctionComponent<{
    logo: string
    title: string
    className?: string
    pdf?: string
    color?: keyof typeof COLORS
    titleClassName?: string
    children?: React.ReactNode
}> = ({ logo, title, className = '', color = 'dark', titleClassName = 'display-3', pdf, children }) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-6 pb-5">
            <img className="case-studies__logo" src={logo} />
            <h1 className={titleClassName}>{title}</h1>
            {pdf && (
                <a href={pdf} className="btn btn-primary mt-4" rel="nofollow" target="_blank">
                    <i className="fa fa-file-pdf pr-2"></i>
                    Download PDF
                </a>
            )}
            {children}
        </div>
    </div>
)

export const MediaQuote: React.FunctionComponent<{
    image: string
    quote: string
    author: string
}> = ({ image, quote, author }) => (
    <div className="container">
        <div className="case-studies__quote row">
            <div className="col-sm-12 col-md-2">
                <img className="rounded-circle img-fluid mx-auto d-block py-4" src={image} alt={author} />
            </div>
            <div className="col">
                <blockquote className="blockquote">
                    <p>{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>
            </div>
        </div>
    </div>
)

export const InContentBlockquote: React.FunctionComponent<{
    quote: string
    author?: string
}> = ({ quote, author }) => (
    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
        <p>{quote}</p>
        {author && <footer className="blockquote-footer">{author}</footer>}
    </blockquote>
)
