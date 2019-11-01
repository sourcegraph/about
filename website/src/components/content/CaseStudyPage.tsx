import React from 'react'
import { COLORS } from '../Jumbotron'
import slugify from 'slugify'
import { eventLogger } from '../../EventLogger'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { ContentPage } from './ContentPage'

interface Props {
    customer: string
    title: string
    logo: string
    pdf?: string
    className?: string
    children?: React.ReactNode
}

export const CaseStudyPage: React.FunctionComponent<Props> = ({
    customer,
    title,
    logo,
    className = 'case-study',
    pdf,
    children,
}) => (
    <div className={`${slugify(customer).toLowerCase()}-${className}`}>
        <CaseStudyJumbotron className="mb-5" customer={customer} title={title} logo={logo} pdf={pdf} />
        {children}
    </div>
)

export const CaseStudyJumbotron: React.FunctionComponent<{
    customer: string
    logo: string
    title: string
    className?: string
    pdf?: string
    color?: keyof typeof COLORS
    titleClassName?: string
    children?: React.ReactNode
}> = ({ customer, logo, title, className = '', color = 'dark', titleClassName = 'display-4', pdf, children }) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-5 pb-3">
            <img className="case-studies__logo" src={logo} />
            <span className="case-studies__label d-block">
                <span className="sr-only">{customer}</span> case study
            </span>
            <h1 className={`${titleClassName} mt-4`}>{title}</h1>
            {pdf && (
                <a
                    href={pdf}
                    className="btn btn-primary mt-4"
                    rel="nofollow"
                    onClick={() => {
                        eventLogger.trackCaeStudyDownloadPDFClicked(customer)
                    }}
                    target="_blank"
                >
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
                <img className="rounded-circle img-fluid mx-auto d-block pb-4" src={image} alt={author} />
            </div>
            <div className="col-md-10">
                <blockquote className="blockquote">
                    <p dangerouslySetInnerHTML={{ __html: quote }} />
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

export const CaseStudyRequestDemoForm: React.FunctionComponent<{
    title?: string
    description?: string
}> = ({
    title = 'See the difference Sourcegraph can make with a demo and free enterprise trial',
    description = "Sourcegraph's code search enables developers find dead code, unused packages, and deprecated references in tens of thousands of repositories within seconds. Let us show you how.",
}) => (
    <ContentPage
        title={title}
        description={description}
        mainActions={
            <div className="d-flex flex-column align-items-center">
                <RequestDemoAction className="mt-3" />
            </div>
        }
    />
)
