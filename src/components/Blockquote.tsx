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
        const borderLocation = reverseBorder ? 'tw-border-r-3' : 'tw-border-l-3'
        const borderNone = reverseBorder ? 'tw-border-r-0' : 'tw-border-l-0'

        if (border) {
            if (inline) {
                return `tw-my-8 tw-border-solid ${borderLocation} tw-border-r-violet-400`
            }
            // Blockquotes in column: Border flips to horizontal for mobile
            if (isMdOrDown) {
                return `tw-pt-3xl tw-pb-0 tw-mb-0 tw-border-solid ${borderNone} tw-border-t-3 tw-border-t-violet-400`
            }
            return `tw-border-solid ${borderLocation} tw-border-r-violet-400`
        }
        return center ? 'tw-text-center' : 'tw-text-left'
    }

    return (
        <blockquote className={classNames('tw-px-md', getBorderStyle())}>
            {headline ? largeText ? <h2>{headline}</h2> : <h4 className="tw-mb-sm">{headline}</h4> : null}

            {largeText ? (
                <h3 className="tw-font-normal tw-text-3xl">&ldquo;{quote}&rdquo;</h3>
            ) : (
                <p className="tw-font-normal">&ldquo;{quote}&rdquo;</p>
            )}

            {author && <figcaption className="tw-text-gray-400 tw-mt-4">&mdash; {author}</figcaption>}

            {logo &&
                (logo.href ? (
                    <Link href={logo.href}>
                        <img
                            src={logo.src}
                            className={classNames('tw-mt-4 tw-max-w-[150px tw-h-[80px]]', {
                                'tw-mx-auto': !border && center,
                            })}
                            width="110px"
                            alt={logo.alt}
                        />
                    </Link>
                ) : (
                    <img
                        src={logo.src}
                        className={classNames('tw-mt-4 tw-max-w-[150px tw-h-[80px]]', {
                            'tw-mx-auto': !border && center,
                        })}
                        width="110px"
                        alt={logo.alt}
                    />
                ))}

            {link?.href &&
                (link?.href.includes('http') ? (
                    <a
                        className={classNames('tw-mt-md tw-flex', !border && center && 'tw-justify-center')}
                        href={link.href}
                        target="_blank"
                        rel="nofollow noreferrer"
                        title={link.text}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {link.text}
                        <ArrowRightIcon className="tw-ml-3 tw-inline" />
                    </a>
                ) : (
                    <Link
                        href={link.href}
                        className={classNames('tw-mt-md tw-flex', !border && center && 'tw-justify-center')}
                        title={link.text}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {link.text}
                        <ArrowRightIcon className="tw-ml-3 tw-inline" />
                    </Link>
                ))}
        </blockquote>
    )
}
