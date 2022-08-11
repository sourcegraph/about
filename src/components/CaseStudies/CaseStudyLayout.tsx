import { FunctionComponent } from 'react'

import { kebabCase } from 'lodash'

import { ContentSection, RequestDemoForm } from '@components'
import { buttonStyle, buttonLocation } from '@data'

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
        <div className={`${kebabCase(customer)}-${className} ${className}`}>
            <CaseStudyJumbotron className="mb-5" customer={customer} logo={logo}>
                {heroImage && (
                    <div className="case-studies__quote row tw-pt-xs">
                        <div className="col-lg-3">
                            <a
                                href={heroLink}
                                rel="nofollow"
                                title={customer}
                                data-button-style={buttonStyle.image}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                <img className="img-fluid tw-mx-auto tw-block" src={heroImage} alt={customer} />
                            </a>
                        </div>
                        <div className="col-lg-9">
                            {quote && (
                                <div className="tw-text-left">
                                    <p className="text-light">{quote.text}</p>
                                    <footer className="blockquote-footer text-light mt-1">{quote.author}</footer>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {quote && !heroImage && (
                    <div className="container tw-pt-xs">
                        <div className="case-studies__quote row tw-justify-center">
                            {quote.image && (
                                <div className="col-12 col-lg-9">
                                    <img
                                        className="tw-rounded-full img-fluid tw-mx-auto tw-block mb-3"
                                        src={quote.image}
                                        alt={quote.author}
                                    />
                                </div>
                            )}
                            <div className="col-12 col-lg-9">
                                <blockquote className="blockquote">
                                    <p className="text-light">{quote.text}</p>
                                    <footer className="blockquote-footer text-light mt-1">{quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                )}
                {pdf && (
                    <a
                        href={pdf}
                        className="btn btn-primary mt-3"
                        rel="nofollow noreferrer"
                        target="_blank"
                        title="Download PDF"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <i className="fa fa-file-pdf tw-pr-xxs" />
                        Download PDF
                    </a>
                )}
            </CaseStudyJumbotron>

            <ContentSection color="white">
                <div className="container tw-pt-3xl tw-pb-sm">
                    <h1 className={`${titleClassName}`}>{title}</h1>
                </div>
            </ContentSection>

            {children}
        </div>

        <RequestDemoForm />
    </>
)
