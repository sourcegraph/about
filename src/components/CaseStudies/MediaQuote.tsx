import React, { FunctionComponent } from 'react'

interface Props {
    image?: string
    quote: string
    author: string
}

export const MediaQuote: FunctionComponent<Props> = ({ image, quote, author }) => (
    <div className="container pt-3">
        <div className="case-studies__quote row justify-content-center">
            {image && (
                <div className="col-12 col-lg-9">
                    <img className="rounded-circle img-fluid mx-auto d-block mb-3" src={image} alt={author} />
                </div>
            )}
            <div className="col-12 col-lg-9">
                <blockquote className="blockquote">
                    <p className="text-light">{quote}</p>
                    <footer className="blockquote-footer text-light mt-1">{author}</footer>
                </blockquote>
            </div>
        </div>
    </div>
)
