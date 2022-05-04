import { Link } from 'gatsby'
import React from 'react'
import slugify from 'slugify'
import { COLORS } from '../Jumbotron'
import { BackButtonBold, BackButtonLight } from '../../components/BackButton'
import { ContentSection } from './ContentSection'
import { buttonStyle, buttonLocation } from '../../tracking'

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

export const CaseStudyPage: React.FunctionComponent<Props> = ({
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
    <div className={`${slugify(customer).toLowerCase()}-${className} ${className}`}>
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
                <a href={pdf} className="btn btn-primary mt-3" rel="nofollow" target="_blank">
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
    <div className="container pt-3">
        <div className="case-studies__quote row justify-content-center">
            {image && (
                <div className="col-12 col-lg-9">
                    <img className="rounded-circle img-fluid mx-auto d-block mb-3" src={image} alt={author} />
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
    logo?: string
    className?: string
    color?: keyof typeof COLORS
    children?: React.ReactNode
}> = ({ customer, logo, className = '', color = 'dark', children }) => (
    <div className={`jumbotron rounded-0 d-flex flex-column ${COLORS[color]} ${className}`}>
        <div className="pl-lg-7 pl-sm-0 pt-5 container">
            {color === 'dark' ? (
                <BackButtonLight href={'/case-studies'} text="Case Studies" />
            ) : (
                <BackButtonBold href={'/case-studies'} text="Case Studies" />
            )}
        </div>
        <div className="container text-md-center">
            {logo && <img className="case-studies__logo my-3" src={logo} alt={customer} />}
            <h5 className="font-weight-bold mt-1">
                <span className="sr-only">{customer}</span> Case Study
            </h5>
            {children}
        </div>
    </div>
)

export const AuthorBio: React.FunctionComponent<{
    customer: string
    image?: string
    author: string
    title: string
    about: string
}> = ({ customer, image, author, title, about }) => (
    <div className="d-flex flex-md-row flex-column align-items-center align-items-md-start container-xl py-6 py-md-8">
        {image && (
            <div className="col-md-3 col-xl-2 text-center text-md-right">
                <img className="rounded-circle p-1" style={{ border: '3px solid #00A1C7' }} src={image} alt={author} />
            </div>
        )}
        <div className="col-md-4 col-xl-3 text-center text-md-left">
            <h5 className="font-weight-bold pt-5">{author}</h5>
            <p>{title}</p>
        </div>
        <div className="col-md-5 col-xl-6 mr-xl-0 mx-md-auto text-center text-md-left">
            <h5 className="font-weight-bold pt-5">About {customer}</h5>
            <p>{about}</p>
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

export const InContentImage: React.FunctionComponent<{
    src: string
    alt: string
    className?: string
    caption?: string
}> = ({ src, caption, alt, className }) => (
    <p>
        <img src={src} className={className} alt={alt} />
        {caption && <footer className="blockquote-footer">{caption}</footer>}
    </p>
)

export const CaseStudyRequestDemoForm: React.FunctionComponent<{
    title?: string
    description?: string
    demoFormURL?: string
}> = ({
    title = 'See Sourcegraph in action.',
    description = 'Learn how companies of all sizes and in all industries use Sourcegraph to solve big code problems.',
    demoFormURL = '/demo',
}) => (
    <ContentSection color="black" className="col-sm-12 col-md-9 col-lg-7">
        <div className="container text-center pt-6">
            <h3 className="display-3 font-weight-bold">{title}</h3>
            <p>{description}</p>
            <Link
                className="btn btn-primary mx-2 mb-3"
                data-button-style={buttonStyle.primary}
                data-button-location={buttonLocation.trySourcegraph}
                data-button-type="cta"
                to={demoFormURL}
                title="Request a demo"
            >
                Schedule a demo
            </Link>
        </div>
    </ContentSection>
)
