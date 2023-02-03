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
                'btn tw-bg-white tw-text-blurple-400 hover:tw-bg-blurple-400 hover:tw-text-white':
                    ctaStyle === 'primaryButtonWhite',
                'btn tw-text-white tw-border-white hover:tw-bg-blurple-400 hover:tw-border-blurple-400':
                    ctaStyle === 'outlineButtonLight',
                'btn btn-link tw-text-white hover:tw-text-blurple-200': ctaStyle === 'link',
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
            <div className="tw-bg-violet-700 tw-text-white">
                <div
                    className="tw-max-w-screen-xl tw-mx-auto tw-bg-[center_left] tw-bg-repeat-y tw-grid tw-items-center tw-grid-cols-12 tw-min-h-[291px] tw-h-full tw-px-sm lg:tw-pl-0 tw-py-3xl"
                    // eslint-disable-next-line react/forbid-dom-props
                    style={lgAndUp ? { background: `url('${illustration}')` } : undefined}
                >
                    <div className="tw-col-span-full md:tw-col-span-7 lg:tw-col-span-5 lg:tw-col-start-4 lg:tw-pl-xl">
                        <h2 className="tw-text-violet-200 tw-mb-sm">{title}</h2>
                        <p className="tw-text-lg tw-max-w-2xl">{description}</p>
                    </div>

                    <div
                        className={classNames(
                            'tw-col-span-full md:tw-col-span-5 lg:tw-col-span-4 tw-flex tw-flex-col tw-items-center'
                        )}
                    >
                        {cta1 && (
                            <div className="tw-mt-sm">
                                <Cta {...cta1} />
                            </div>
                        )}

                        {cta2 && typeof cta2 === 'object' && (
                            <div className="tw-mt-sm">
                                <Cta {...cta2} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
