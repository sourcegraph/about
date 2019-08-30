import React from 'react'

const COLORS = {
    dark: 'bg-black text-light',
    purple: 'bg-purple text-light',
}

export const CaseStudyFeature: React.FunctionComponent<{
    title?: string
    titleClassName?: string
    quote: string
    author: string
    url: string
    image: string
    buttonText?: string
    color?: keyof typeof COLORS
    className?: string
}> = ({
    title,
    titleClassName = 'display-6',
    quote,
    author,
    url,
    image,
    buttonText = 'Learn more',
    color = 'dark',
    className = '',
}) => (
    <div className={`jumbotron case-studies-feature pt-5 pb-3 ${COLORS[color]} ${className}`}>
        <div className="row container justify-content-center mb-4">
            {title && (<h2 className={`text-center ${titleClassName}`}>
                <a href={url}>{title}</a>
            </h2>)}
        </div>
        <div className="row container justify-content-center">
            <div className="col-sm-12 col-md-2 case-studies-feature__image">
                <a href={url}>
                    <img className="img-thumbnail align-middle" src={image} />
                </a>
            </div>
            <div className="col-md-6 case-studies-feature__content">
                <blockquote className="blockquote">
                    <p className="mb-1">{quote}</p>
                    <footer className="blockquote-footer">
                        <cite>{author}</cite>
                    </footer>
                </blockquote>
                <a href={url} className="btn btn-primary mt-4">
                    {buttonText}
                </a>
            </div>
        </div>
    </div>
)
