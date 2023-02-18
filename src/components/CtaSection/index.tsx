import { FunctionComponent } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { breakpoints } from '../../data/breakpoints'
import { buttonStyle, buttonLocation } from '../../data/tracking'
import { useWindowWidth } from '../../hooks/windowWidth'

import illustration from './illustration.svg'

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
                'btn text-white border-white hover:bg-blurple-400 hover:border-blurple-400':
                    ctaStyle === 'outlineButtonLight',
                'btn btn-link text-white hover:text-blurple-200': ctaStyle === 'link',
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
export const CtaSection: FunctionComponent<CtaSection> = ({
    title = 'Try Sourcegraph on your code.',
    description = 'Experience code intelligence with a free trial for you and your team, or search millions of open source repositories.',
    cta1 = {
        text: 'Start for free',
        ctaStyle: 'primaryButtonWhite',
        link: 'https://signup.sourcegraph.com',
    },
    cta2 = {
        text: 'Meet with a product expert',
        ctaStyle: 'link',
        link: '/demo',
    },
}) => {
    const windowWidth = useWindowWidth()
    const lgAndUp = windowWidth > breakpoints.lg

    return (
        <>
            <div className="bg-violet-700 text-white">
                <div
                    className="max-w-screen-xl mx-auto bg-[center_left] bg-repeat-y grid items-center grid-cols-12 min-h-[291px] h-full px-sm lg:pl-0 py-3xl"
                    // eslint-disable-next-line react/forbid-dom-props
                    style={lgAndUp ? { background: `url('${illustration}')` } : undefined}
                >
                    <div className="col-span-full md:col-span-7 lg:col-span-5 lg:col-start-4 lg:pl-xl">
                        <h2 className="text-violet-200 mb-sm">{title}</h2>
                        <p className="text-lg max-w-2xl">{description}</p>
                    </div>

                    <div
                        className={classNames(
                            'col-span-full md:col-span-5 lg:col-span-4 flex flex-col items-center'
                        )}
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
        </>
    )
}
