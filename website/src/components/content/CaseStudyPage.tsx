import { Link } from 'gatsby'
import React from 'react'
import slugify from 'slugify'
import { COLORS } from '../Jumbotron'
import { ContentSection } from './ContentSection'

interface Quote {
    quote: string
    author: string
    image?: string
}

interface Props {
    customer: string
    title: string
    logo: string
    quote?: Quote
    pdf?: string
    className?: string
    titleClassName?: string
    children?: React.ReactNode
}

export const CaseStudyPage: React.FunctionComponent<Props> = ({
    customer,
    title,
    logo,
    quote,
    className = 'case-study',
    titleClassName = '',
    pdf,
    children,
}) => (
    <div className={`${slugify(customer).toLowerCase()}-${className} ${className}`}>
        <CaseStudyJumbotron className="mb-5" customer={customer} logo={logo}>
            {quote && <MediaQuote quote={quote.quote} author={quote.author} image={quote.image} />}
            {pdf && (
                <a href={pdf} className="btn btn-primary mt-4" rel="nofollow" target="_blank">
                    <i className="fa fa-file-pdf pr-2" />
                    Download PDF
                </a>
            )}
        </CaseStudyJumbotron>

        <ContentSection color="white" className="col-sm-12 col-md-9 col-lg-7">
            <div className="container pt-6 pb-4">
                <h1 className={`${titleClassName}`}>{title}</h1>
            </div>
        </ContentSection>

        {children}
    </div>
)

export const MediaQuote: React.FunctionComponent<{
    image?: string
    quote: string
    author: string
}> = ({ image, quote, author }) => (
    <div className="container pt-6">
        <div className="case-studies__quote row justify-content-center">
            {image && (
                <div className="col-12 col-lg-9">
                    <img className="rounded-circle img-fluid mx-auto d-block pb-3" src={image} alt={author} />
                </div>
            )}
            <div className="col-12 col-lg-9">
                <blockquote className="blockquote">
                    <p className="text-light" dangerouslySetInnerHTML={{ __html: quote }} />
                    <footer className="blockquote-footer text-light mt-1">{author}</footer>
                </blockquote>
            </div>
        </div>
    </div>
)

export const CaseStudyJumbotron: React.FunctionComponent<{
    customer: string
    logo: string
    className?: string
    color?: keyof typeof COLORS
    children?: React.ReactNode
}> = ({ customer, logo, className = '', color = 'dark', children }) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-5 pb-3">
            <img className="case-studies__logo" src={logo} alt={customer} />
            <span className="case-studies__label d-block mt-1">
                <span className="sr-only">{customer}</span> case study
            </span>
            {children}
        </div>
    </div>
)

export const InContentBlockquote: React.FunctionComponent<{
    quote: string
    author?: string
}> = ({ quote, author }) => (
    <blockquote className="blockquote case-studies__quote case-studies__quote--in-content">
        <p dangerouslySetInnerHTML={{ __html: quote }} />
        {author && <footer className="blockquote-footer">{author}</footer>}
    </blockquote>
)

export const CaseStudyRequestDemoForm: React.FunctionComponent<{
    title?: string
    description?: string
}> = ({
    title = 'See Sourcegraph in action.',
    description = 'Learn how companies of all sizes and in all industries use Sourcegraph to solve big code problems.',
}) => (
    <ContentSection color="black" className="col-sm-12 col-md-9 col-lg-7">
        <div className="container text-center pt-6">
            <h3 className="display-3 font-weight-bold">{title}</h3>
            <p>{description}</p>
            <Link className="btn btn-primary mx-2 mb-3" to="/contact/request-demo" title="Request a demo">
                Schedule a demo
            </Link>
        </div>
    </ContentSection>
)
