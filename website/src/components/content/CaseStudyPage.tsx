import React from 'react'
import { COLORS } from '../Jumbotron'

interface Props {
    title: string
    logo: string
    heroImage?: React.ReactFragment
    children: React.ReactNode
}

export const CaseStudyPage: React.FunctionComponent<Props> = ({
    title,
    logo,
    heroImage,
    children,
}) => (
    <div className="">
        <CaseStudyJumbotron className="mb-5" title={title} logo={logo}>
        </CaseStudyJumbotron>
        {children}
    </div>
)

export const CaseStudyJumbotron: React.FunctionComponent<{
    logo: string
    title: string
    className?: string
    color?: keyof typeof COLORS
    titleClassName?: string
    children: React.ReactNode
}> = ({
    logo,
    title,
    className = '',
    color = 'dark',
    titleClassName = 'display-3',
    children,
}) => (
    <div className={`jumbotron rounded-0 ${COLORS[color]} ${className}`}>
        <div className="container text-center pt-6 pb-5">
        <img className="case-studies__logo" src={logo}/>
            <h1 className={titleClassName}>{title}</h1>
            {children}
        </div>
    </div>
)

export const MediaQuote: React.FunctionComponent<{
    image: string
    quote: string
    author: string
}> = ({
    image,
    quote,
    author
}) => (
    <div class="media case-studies__quote">
        <img className="rounded-circle" src={image} alt={author} />
        <blockquote class="blockquote">
            <div class="container">
                <p>{quote}</p>
                <footer class="blockquote-footer">{author}</footer>
            </div>
        </blockquote>
    </div>
)

export const InContentBlockquote: React.FunctionComponent<{
    quote: string
    author: string
}> = ({
    quote,
    author
}) => (
    <blockquote class="blockquote case-studies__quote case-studies__quote--in-content">
        <p>{quote}</p>
        {author && (
            <footer class="blockquote-footer">{author}</footer>
        )}
    </blockquote>
)
