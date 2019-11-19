import React from 'react'
import slugify from 'slugify'
import Carousel from 'react-bootstrap/Carousel'

export enum CarouselColors {
    dark = 'bg-black text-light',
    purple = 'bg-purple text-light',
}

export interface Author {
    name: string
    title?: string
    image?: string
}

export interface CTA {
    text: string
    url: string
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
    <div className={`container" ${className}`}>
        <div className="row justify-content-center pt-5">
            <div className="testimonial-carousel col-sm-12 col-md-9 col-lg-7 text-center">
                <div className="testimonial-carousel__testimonials">
                    <img src="/case-studies/quote.svg" className="testimonial-carousel__quote-icon mt-3 mb-5" alt="" />
                    <Carousel controls={false}>
                        {testimonials.map(({ customer, logo, quote, author, cta }, i) => (
                            <div className={`${slugify(customer).toLowerCase()} testimonial-carousel__testimonial`}>
                                <img src={logo} className="testimonial-carousel__logo d-inline-block mb-4" />
                                <blockquote className="testimonial-carousel__blockquote blockquote">
                                    <p className="mb-5">{quote}</p>
                                    {author && (
                                        <footer className="blockquote-footer mt-6">
                                            {author.image && (
                                                <img
                                                    src={author.image}
                                                    className="testimonial-carousel__author-image rounded-circle img-fluid mx-auto d-block pb-3"
                                                    alt={author.name}
                                                />
                                            )}
                                            <cite className="d-block">
                                                <span className="testimonial-carousel__author-name d-block">
                                                    {author.name}
                                                </span>
                                                {author.title && (
                                                    <span className="testimonial-carousel__author-title  d-block">
                                                        {customer} {author.title}
                                                    </span>
                                                )}
                                            </cite>
                                        </footer>
                                    )}
                                </blockquote>
                                {cta && (
                                    <a href={cta.url} className="testimonial-carousel__cta btn btn-primary mt-2">
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

// {testimonials.map(({}, index: number) => (
//     <h2>Hi</h2>
// ))}

{
    /*<div className={`jumbotron pt-5 pb-3 ${COLORS[color]} ${className}`}>*/
}
{
    /*    <div className="row container justify-content-center mb-4">*/
}
{
    /*        {title && (*/
}
{
    /*            <h2 className={`text-center ${titleClassName}`}>*/
}
{
    /*                <a href={url}>{title}</a>*/
}
{
    /*            </h2>*/
}
{
    /*        )}*/
}
{
    /*    </div>*/
}
{
    /*    <div className="row container justify-content-center">*/
}
{
    /*        <div className="col-sm-12 col-md-2 case-studies-feature__image">*/
}
{
    /*            <a href={url}>*/
}
{
    /*                <img className="img-thumbnail align-middle" src={image} />*/
}
{
    /*            </a>*/
}
{
    /*        </div>*/
}
{
    /*        <div className="col-md-6 case-studies-feature__content">*/
}

{
    /*        </div>*/
}
{
    /*    </div>*/
}
{
    /*</div>*/
}
