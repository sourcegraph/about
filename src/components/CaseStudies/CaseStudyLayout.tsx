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
            <CaseStudyJumbotron className="tw-mb-8 tw-pb-12" customer={customer} logo={logo}>
                {heroImage && (
                    <div className={`${styles.quote} tw-grid tw-gap-md tw-grid-cols-1 lg:tw-grid-cols-4 tw-pt-xs`}>
                        <div>
                            <a
                                href={heroLink}
                                rel="nofollow"
                                title={customer}
                                data-button-style={buttonStyle.image}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                <img className="tw-mx-auto tw-block" src={heroImage} alt={customer} />
                            </a>
                        </div>
                        <div className="lg:tw-col-span-3">
                            {quote && (
                                <div className="tw-text-left">
                                    <p>{quote.text}</p>
                                    <footer className="tw-mt-1 blockquote-footer">{quote.author}</footer>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {quote && !heroImage && (
                    <div className="tw-container tw-pt-xs">
                        <div className={`${styles.quote} tw-grid tw-gap-md tw-grid-cols-1 tw-justify-center`}>
                            {quote.image && (
                                <div>
                                    <img
                                        className="tw-mb-4 tw-rounded-full tw-mx-auto tw-block"
                                        src={quote.image}
                                        alt={quote.author}
                                    />
                                </div>
                            )}
                            <div>
                                <blockquote className="blockquote">
                                    <p>{quote.text}</p>
                                    <footer className="tw-mt-1 blockquote-footer">{quote.author}</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                )}
                {pdf && (
                    <a
                        href={pdf}
                        className="tw-mt-4 btn btn-primary"
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

            <ContentSection background="white" slimWidth={true}>
                <h1 className={titleClassName}>{title}</h1>
            </ContentSection>

            {children}
        </div>

        <CtaSection />
    </>
)
