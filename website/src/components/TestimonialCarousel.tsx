import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import slugify from 'slugify'

export enum CarouselColors {
    dark = 'bg-black text-light',
    purple = 'bg-vivid-violet text-light',
}

interface Author {
    name: string
    title?: string
    image?: string
}

interface CTA {
    text: string
    url: string
    target?: string
    rel?: string
}

export interface Testimonial {
    customer: string
    logo: string
    quote: string
    author?: Author
    cta?: CTA
}

interface Props {
    testimonials: Testimonial[]
    color: CarouselColors
    className?: string
}

export const TestimonialCarousel: React.FunctionComponent<Props> = ({
    testimonials,
    color = CarouselColors.dark,
    className = '',
}) => (
    <div className={`container ${className}`}>
        <div className="row justify-content-center pt-5">
            <div className="testimonial-carousel col-sm-12 col-md-9 col-lg-7 text-center">
                <div className="testimonial-carousel__testimonials">
                    <img
                        src="/case-studies/quote.svg"
                        className="testimonial-carousel__quote-icon mb-5"
                        aria-hidden="true"
                    />
                    <Carousel controls={true}>
                        {testimonials.map(({ customer, logo, quote, author, cta }, i) => (
                            <div
                                key={`testimonial-${i}`}
                                className={`${slugify(
                                    customer
                                ).toLowerCase()} carousel-item testimonial-carousel__testimonial`}
                            >
                                <img
                                    src={logo}
                                    className="testimonial-carousel__logo d-inline-block mb-4"
                                    alt={customer}
                                />
                                <blockquote className="testimonial-carousel__blockquote blockquote">
                                    <p className="mb-5">{quote}</p>
                                    {author && (
                                        <footer className="blockquote-footer mt-6">
                                            {author.image && (
                                                <img
                                                    src={author.image}
                                                    className="testimonial-carousel__author-image rounded-circle img-fluid mx-auto d-block"
                                                    alt={author.name}
                                                />
                                            )}
                                            <cite className="d-block">
                                                <span className="testimonial-carousel__author-name d-block">
                                                    {author.name}
                                                </span>
                                                {author.title && (
                                                    <span className="testimonial-carousel__author-title d-block">
                                                        {author.title}, {customer}
                                                    </span>
                                                )}
                                            </cite>
                                        </footer>
                                    )}
                                </blockquote>
                                {cta && (
                                    <a
                                        href={cta.url}
                                        className="testimonial-carousel__cta btn btn-primary mt-2"
                                        target={cta.target}
                                        rel={cta.rel}
                                    >
                                        {cta.text}
                                    </a>
                                )}
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
)
