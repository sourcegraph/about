import { FunctionComponent } from 'react'

import { ContentSection, RequestDemoForm, MediaQuote } from '@components'
import { stringToKebabCase } from '@util'

import { CaseStudyJumbotron } from './CaseStudyJumbotron'

interface Quote {
    text: string
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

export const CaseStudyLayout: FunctionComponent<Props> = ({
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
        <div className={`${stringToKebabCase(customer)}-${className} ${className}`}>
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
                                    <p className="text-light">{quote.text}</p>
                                    <footer className="blockquote-footer text-light mt-1">{quote.author}</footer>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {quote && !heroImage && <MediaQuote quote={quote.text} author={quote.author} image={quote.image} />}
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
