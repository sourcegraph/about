import { FunctionComponent } from 'react'

import { kebabCase } from 'lodash'

import { ContentSection, CtaSection } from '..'
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
                    <div className={`${styles.quote} grid gap-md grid-cols-1 lg:grid-cols-4 pt-xs`}>
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
                                    <footer className="mt-1 blockquote-footer">{quote.author}</footer>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {quote && !heroImage && (
                    <div className="container pt-xs">
                        <div className={`${styles.quote} grid gap-md grid-cols-1 justify-center`}>
                            {quote.image && (
                                <div>
                                    <img
                                        className="mb-4 rounded-full mx-auto block"
                                        src={quote.image}
                                        alt={quote.author}
                                    />
                                </div>
                            )}
                            <div>
                                <blockquote className="blockquote">
                                    <p>{quote.text}</p>
                                    <footer className="mt-1 blockquote-footer">{quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                )}
                {pdf && (
                    <a
                        href={pdf}
                        className="mt-4 btn btn-primary"
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

        <CtaSection />
    </>
)
