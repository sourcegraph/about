import React from 'react'

import { stringToDashCase } from '@util'

import { ContentSection, RequestDemoForm, MediaQuote } from '..'

import { CaseStudyJumbotron } from './CaseStudyJumbotron'

interface Quote {
    quote: string
    author: string
    image?: string
}

interface Props {
    customer: string
    title: string
    logo?: string
    quote?: Quote
    pdf?: string
    heroImage?: string
    heroLink?: string
    className?: string
    titleClassName?: string
    children?: React.ReactNode
}

export const CaseStudyLayout: React.FunctionComponent<Props> = ({
    customer,
    title,
    logo,
    quote,
    className = 'case-study',
    titleClassName = '',
    pdf,
    heroImage,
    heroLink,
    children,
}) => (
    <>
        <div className={`${stringToDashCase(customer)}-${className} ${className}`}>
            <CaseStudyJumbotron className="mb-5" customer={customer} logo={logo}>
                {heroImage && (
                    <div className="case-studies__quote row pt-3">
                        <div className="col-lg-3">
                            <a href={heroLink} rel="nofollow">
                                <img className="img-fluid mx-auto d-block" src={heroImage} alt={customer} />
                            </a>
                        </div>
                        <div className="col-lg-9 ">
                            {quote && (
                                <div className="text-left">
                                    <p className="text-light" dangerouslySetInnerHTML={{ __html: quote.quote }} />
                                    <p className="blockquote-footer text-light mt-1">{quote.author}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {quote && !heroImage && <MediaQuote quote={quote.quote} author={quote.author} image={quote.image} />}
                {pdf && (
                    <a href={pdf} className="btn btn-primary mt-3" rel="nofollow noreferrer noopener" target="_blank">
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

        <RequestDemoForm />
    </>
)
