import React from 'react'
import { COLORS } from '../Jumbotron'
import { pbkdf2 } from 'crypto'
import slugify from 'slugify'

interface Props {
    title: string
    logo: string
    pdf?: string
    className: string
    children: React.ReactNode
}

export const CaseStudyPage: React.FunctionComponent<Props> = ({
    title,
    logo,
    className = slugify(title),
    pdf,
    children,
}) => (
    <div className={className}>
        <CaseStudyJumbotron className="mb-5" title={title} logo={logo} pdf={pdf}></CaseStudyJumbotron>
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
    children: React.ReactNode
}> = ({ logo, title, className = '', color = 'dark', titleClassName = 'display-3', pdf, children }) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-6 pb-5">
            <img className="case-studies__logo" src={logo} />
            <h1 className={titleClassName}>{title}</h1>
            {pdf && (
                <a href={pdf} class="btn btn-primary mt-4" rel="nofollow">
                    <i class="fa fa-file-pdf pr-2"></i>
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
        <div class="case-studies__quote row">
            <div class="col-sm-12 col-md-2">
                <img className="rounded-circle img-fluid mx-auto d-block py-4" src={image} alt={author} />
            </div>
            <div class="col">
                <blockquote class="blockquote">
                    <p>{quote}</p>
                    <footer class="blockquote-footer">{author}</footer>
                </blockquote>
            </div>
        </div>
    </div>
)

export const InContentBlockquote: React.FunctionComponent<{
    quote: string
    author: string
}> = ({ quote, author }) => (
    <blockquote class="blockquote case-studies__quote case-studies__quote--in-content">
        <p>{quote}</p>
        {author && <footer class="blockquote-footer">{author}</footer>}
    </blockquote>
)
