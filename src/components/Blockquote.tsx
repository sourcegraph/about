import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { breakpoints } from '../data/breakpoints'
import { buttonStyle, buttonLocation } from '../data/tracking'
import { useWindowWidth } from '../hooks/windowWidth'

interface Logo {
    src: string
    alt: string
    href?: string
}

interface Link {
    text: string
    href: string
}

export const Blockquote: FunctionComponent<{
    quote: string | ReactNode
    author?: string | ReactNode
    logo?: Logo
    link?: Link
    headline?: string
    largeText?: boolean
    center?: boolean
    border?: boolean
    reverseBorder?: boolean
    inline?: boolean // inline vs. col layout
}> = ({
    quote,
    author,
    logo,
    link,
    headline,
    largeText = false,
    center,
    border = true,
    reverseBorder = false,
    inline = true,
}) => {
    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    const getBorderStyle = (): string => {
        const borderLocation = reverseBorder ? 'border-r-3' : 'border-l-3'
        const borderNone = reverseBorder ? 'border-r-0' : 'border-l-0'

        if (border) {
            if (inline) {
                return `my-8 border-solid ${borderLocation} border-r-violet-400`
            }
            // Blockquotes in column: Border flips to horizontal for mobile
            if (isMdOrDown) {
                return `pt-3xl pb-0 mb-0 border-solid ${borderNone} border-t-3 border-t-violet-400`
            }
            return `border-solid ${borderLocation} border-r-violet-400`
        }
        return center ? 'text-center' : 'text-left'
    }

    return (
        <blockquote className={classNames('px-md', getBorderStyle())}>
            {headline ? largeText ? <h2>{headline}</h2> : <h4 className="mb-sm">{headline}</h4> : null}

            {largeText ? (
                <h3 className="text-3xl font-normal">&ldquo;{quote}&rdquo;</h3>
            ) : (
                <p className="font-normal">&ldquo;{quote}&rdquo;</p>
            )}

            {author && <figcaption className="mt-4 text-gray-400">&mdash; {author}</figcaption>}

            {logo &&
                (logo.href ? (
                    <Link href={logo.href}>
                        <img
                            src={logo.src}
                            className={classNames('max-w-[150px h-[80px]] mt-4', {
                                'mx-auto': !border && center,
                            })}
                            width="110px"
                            alt={logo.alt}
                        />
                    </Link>
                ) : (
                    <img
                        src={logo.src}
                        className={classNames('max-w-[150px h-[80px]] mt-4', {
                            'mx-auto': !border && center,
                        })}
                        width="110px"
                        alt={logo.alt}
                    />
                ))}

            {link?.href &&
                (link?.href.includes('http') ? (
                    <a
                        className={classNames('mt-md flex', !border && center && 'justify-center')}
                        href={link.href}
                        target="_blank"
                        rel="nofollow noreferrer"
                        title={link.text}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {link.text}
                        <ArrowRightIcon className="ml-3 inline" />
                    </a>
                ) : (
                    <Link
                        href={link.href}
                        className={classNames('mt-md flex', !border && center && 'justify-center')}
                        title={link.text}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {link.text}
                        <ArrowRightIcon className="ml-3 inline" />
                    </Link>
                ))}
        </blockquote>
    )
}
