import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { breakpoints } from '../../data/breakpoints'
import { buttonStyle, buttonLocation } from '../../data/tracking'
import { useWindowWidth } from '../../hooks/windowWidth'
import { Heading } from '../Heading'

interface Cta {
    text: string
    ctaStyle?: 'primaryButtonWhite' | 'outlineButtonLight' | 'link'
    link?: string
}

interface CtaSection {
    title?: string
    description?: string
    cta1?: Cta
    cta2?: Cta | boolean
    smallCta?: boolean
}

const Cta: FunctionComponent<Cta> = ({ text, ctaStyle, link }) => {
    const externalLink = link?.includes('http')

    let ctaTrackingStyle = buttonStyle.text
    if (ctaStyle?.includes('primary')) {
        ctaTrackingStyle = buttonStyle.primary
    } else if (ctaStyle?.includes('outline')) {
        ctaTrackingStyle = buttonStyle.outline
    }

    const linkElement = (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            title={text}
            href={link}
            className={classNames({
                'btn bg-white text-blurple-400 hover:bg-blurple-400 hover:text-white':
                    ctaStyle === 'primaryButtonWhite',
                'btn border-white text-white hover:border-blurple-400 hover:bg-blurple-400':
                    ctaStyle === 'outlineButtonLight',
                'btn btn-link text-white': ctaStyle === 'link',
            })}
            data-button-style={ctaTrackingStyle}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
            target={externalLink ? '_blank' : undefined}
            rel={externalLink ? 'noopener noreferrer' : undefined}
        >
            {text}
        </a>
    )
    let cta = linkElement

    if (link?.includes('http')) {
        cta = (
            <Link legacyBehavior={true} href={link} passHref={true}>
                {linkElement}
            </Link>
        )
    }

    return cta
}

/**
 * This is our CTA Section as defined in our DLS. Please refer to it for specs.
 */
export const CodyCallToActionContentSection: FunctionComponent<CtaSection> = ({
    title = 'Try Sourcegraph on your code.',
    description = 'Experience code intelligence with a free trial for you and your team, or search millions of open source repositories.',
    cta1 = {
        text: 'Start for free',
        ctaStyle: 'primaryButtonWhite',
        link: '/contact/request-info',
    },
    cta2 = {
        text: 'Meet with a product expert',
        ctaStyle: 'link',
        link: '/demo',
    },
    smallCta,
}) => {
    const windowWidth = useWindowWidth()
    const lgAndUp = windowWidth > breakpoints.lg

    return (
        <div className="my-20 bg-violet-700 text-white">
            <div
                className={classNames(
                    'bg-[] mx-auto h-full min-h-[291px] items-center bg-[center_left] bg-repeat-y px-sm py-3xl lg:pl-0',
                    {
                        'grid max-w-screen-xl grid-cols-12': !smallCta,
                        'mx-auto flex max-w-[1066px] flex-col md:flex-row md:justify-around lg:gap-[76px]': smallCta,
                    }
                )}
                // eslint-disable-next-line react/forbid-dom-props
                style={
                    lgAndUp && !smallCta
                        ? {
                              backgroundImage: "url('/cody/cody-logo.svg')",
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: smallCta ? '130px' : '150px',
                          }
                        : undefined
                }
            >
                {smallCta && (
                    <div className="hidden h-[130px] w-[130px] bg-[url('/cody/cody-logo.svg')] bg-contain bg-no-repeat lg:block" />
                )}
                <div
                    className={classNames({
                        'col-span-full  md:col-span-7 lg:col-span-6 lg:col-start-3 lg:pl-xl': !smallCta,
                        'w-full md:w-auto': smallCta,
                    })}
                >
                    <Heading size="h2" className="mb-sm text-white">
                        {title}
                    </Heading>
                    <p className="max-w-2xl text-lg">{description}</p>
                </div>

                <div
                    className={classNames({
                        'col-span-full flex flex-col items-center md:col-span-5 lg:col-span-4': !smallCta,
                        'text-center lg:w-fit': smallCta,
                    })}
                >
                    {cta1 && (
                        <div className="mt-sm">
                            <Cta {...cta1} />
                        </div>
                    )}

                    {cta2 && typeof cta2 === 'object' && (
                        <div className="mt-sm">
                            <Cta {...cta2} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
