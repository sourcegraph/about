import React from 'react'
import { RequestDemoAction } from '../../css/components/actions/RequestDemoAction'
import { COLORS } from '../Jumbotron'
import { ContentPage } from './ContentPage'

interface Quote {
    quote: string
    author: string
    image?: string
}

interface Props {
    title: string
    quote?: Quote
    pdf?: string
    className?: string
    titleClassName?: string
    children?: React.ReactNode
    bgImage?: string
}

export const WhitePaperJumbotron: React.FunctionComponent<{
    className?: string
    children?: React.ReactNode
}> = ({ className = '', children }) => (
    <div className={`jumbotron rounded-0 ${className}`}>
        <div className="container text-center pt-5 pb-3">
            <span className="white-papers__label d-block mt-1">white paper</span>
            {children}
        </div>
    </div>
)

export const WhitePaperPage: React.FunctionComponent<Props> = ({
    title,
    quote,
    className = 'white-paper',
    titleClassName = '',
    pdf,
    children,
    bgImage,
}) => (
    <div
        className={`${className}`}
        // tslint:disable-next-line: jsx-ban-props
        style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundRepeat: `no-repeat` } : undefined}
    >
        <WhitePaperJumbotron className="text-light mb-5">
            <h1 className={`${titleClassName}`}>{title}</h1>
            {pdf && (
                <a href={pdf} className="btn btn-primary mt-4" rel="nofollow" target="_blank">
                    <i className="fa fa-file-pdf pr-2" />
                    Download PDF
                </a>
            )}
        </WhitePaperJumbotron>
        {children}
    </div>
)

export const InContentBlockquote: React.FunctionComponent<{
    quote: string
    author?: string
}> = ({ quote, author }) => (
    <blockquote className="blockquote white-papers__quote white-papers__quote--in-content">
        <p dangerouslySetInnerHTML={{ __html: quote }} />
        {author && <footer className="blockquote-footer">{author}</footer>}
    </blockquote>
)

export const InContentImage: React.FunctionComponent<{
    src: string
    alt: string
    caption?: string
}> = ({ src, caption, alt }) => (
    <p>
        <img src={src} className="white-papers__img" alt={alt} />
        {caption && <footer className="blockquote-footer">{caption}</footer>}
    </p>
)

export const WhitePaperRequestDemoForm: React.FunctionComponent<{
    title?: string
    description?: string
}> = ({
    title = 'See how Sourcegraph can help with a demo and free enterprise trial',
    description = 'Universal Code Search enables developers to explore and better understand all code, everywhere, faster. Let us show you how.',
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
