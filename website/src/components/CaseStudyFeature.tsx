import React from 'react'

const COLORS = {
    dark: 'bg-black text-light',
    purple: 'bg-purple text-light',
}

export const CaseStudyFeature: React.FunctionComponent<{
    title: string
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
    buttonText = 'Learn their strategy',
    color = 'dark',
    className = '',
}) => (
    <div className={`jumbotron case-studies-feature pt-5 pb-3 ${COLORS[color]} ${className}`}>
        <div className="row container justify-content-center mb-4">
            <h2 className={`text-center ${titleClassName}`}>{title}</h2>
        </div>
        <div className="row container justify-content-center">
            <div class="col-sm-12 col-md-2 case-studies-feature__image">
                <a href={url}>
                    <img class="img-thumbnail align-middle" src={image} />
                </a>
            </div>
            <div class="col-md-6 case-studies-feature__content">
                <blockquote class="blockquote">
                    <p class="mb-1">{quote}</p>
                    <footer class="blockquote-footer">
                        <cite>{author}</cite>
                    </footer>
                </blockquote>
                <a href={url} class="btn btn-primary mt-4" rel="nofollow">
                    {buttonText}
                </a>
            </div>
        </div>
    </div>
)
