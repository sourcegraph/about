import { FunctionComponent } from 'react'

import { kebabCase } from 'lodash'

import { ContentSection, CallToActionContentSection } from '..'
import { buttonStyle, buttonLocation } from '../../data/tracking'

import { CaseStudyJumbotron } from './CaseStudyJumbotron'
import styles from './CaseStudyLayout.module.css'

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
            <CaseStudyJumbotron className="mb-8 pb-12" customer={customer} logo={logo}>
                {heroImage && (
                    <div className={`${styles.quote} grid grid-cols-1 gap-md pt-xs lg:grid-cols-4`}>
                        <div>
                            <a
                                href={heroLink}
                                rel="nofollow"
                                title={customer}
                                data-button-style={buttonStyle.image}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                <img className="mx-auto block" src={heroImage} alt={customer} />
                            </a>
                        </div>
                        <div className="lg:col-span-3">
                            {quote && (
                                <div className="text-left">
                                    <p>{quote.text}</p>
                                    <footer className="blockquote-footer mt-1">{quote.author}</footer>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {quote && !heroImage && (
                    <div className="container pt-xs">
                        <div className={`${styles.quote} grid grid-cols-1 justify-center gap-md`}>
                            {quote.image && (
                                <div>
                                    <img
                                        className="mx-auto mb-4 block rounded-full"
                                        src={quote.image}
                                        alt={quote.author}
                                    />
                                </div>
                            )}
                            <div>
                                <blockquote className="blockquote">
                                    <p>{quote.text}</p>
                                    <footer className="blockquote-footer mt-1">{quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                )}
                {pdf && (
                    <a
                        href={pdf}
                        className="btn btn-primary mt-4"
                        rel="nofollow noreferrer"
                        target="_blank"
                        title="Download PDF"
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <i className="fa fa-file-pdf pr-xxs" />
                        Download PDF
                    </a>
                )}
            </CaseStudyJumbotron>

            <ContentSection background="white" slimWidth={true}>
                <h1 className={titleClassName}>{title}</h1>
            </ContentSection>

            {children}
        </div>

        <CallToActionContentSection />
    </>
)
