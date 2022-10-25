import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { buttonStyle, buttonLocation, breakpoints } from '@data'
import { useWindowWidth } from '@hooks'
import { plausible } from '@util'

import illustration from './illustration.svg'

interface Cta {
    text: string
    icon?: ReactNode
    ctaStyle?:
        | 'primaryButtonWhite'
        | 'outlineButton'
        | 'outlineButtonLight'
        | 'outlineButtonWhiteText'
    link?: string
    onClick?: () => void
}

interface CtaSection {
    title?: string
    description?: string
    cta1?: Cta
    cta2?: Cta | boolean
    cta3?: string
}

/**
 * This is a CTA used within the CTA Section
 *
 * @param props - component props
 * @param props.text - text for the cta
 * @param props.icon - icon node for the cta
 * @param props.ctaStyle - prop to display as a primary or outline button
 * @param props.link - href string
 * @param props.onClick - click function
 */
const Cta: FunctionComponent<Cta> = ({ text, icon, ctaStyle, link, onClick }) => {
    const textAndIcon = (
        <div className={classNames({ 'tw-flex': icon })}>
            {text}
            {icon && <span className="tw-ml-xxs">{icon}</span>}
        </div>
    )
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
                'btn btn-outline-primary': ctaStyle === 'outlineButton',
                'btn btn-outline-primary tw-text-white': ctaStyle === 'outlineButtonWhiteText',
                'btn tw-text-white tw-border-white hover:tw-bg-blurple-400 hover:tw-border-blurple-400':
                    ctaStyle === 'outlineButtonLight',
            })}
            data-button-style={ctaTrackingStyle}
            data-button-location={buttonLocation.body}
            data-button-type="cta"
            target={externalLink ? '_blank' : undefined}
            rel={externalLink ? 'noopener noreferrer' : undefined}
        >
            {textAndIcon}
        </a>
    )
    let cta = linkElement

    if (onClick) {
        cta = (
            <button
                onClick={onClick}
                type="button"
                className={classNames({
                    'btn tw-bg-white tw-text-blurple-400': ctaStyle === 'primaryButtonWhite',
                    'btn btn-outline-primary': ctaStyle === 'outlineButton',
                    'btn btn-outline-primary tw-text-white': ctaStyle === 'outlineButtonWhiteText',
                    'btn tw-text-white tw-border-white hover:tw-bg-blurple-400 hover:tw-border-blurple-400':
                        ctaStyle === 'outlineButtonLight',
                    'tw-text-blurple-400 tw-font-bold': !ctaStyle,
                })}
            >
                {textAndIcon}
            </button>
        )
    }

    if (link?.includes('http')) {
        cta = (
            <Link href={link} passHref={true}>
                {linkElement}
            </Link>
        )
    }

    return cta
}

/**
 * This is our CTA Section as defined in our DLS. Please refer to it for specs.
 *
 * @param props - component props
 * @param props.title - a title for the section
 * @param props.description - a description for the section
 * @param props.cta1 - cta item 1
 * @param props.cta2 - cta item 2
 * @param props.cta3 - cta item 3
 */
export const CtaSection: FunctionComponent<CtaSection> = ({
    title = 'Try Sourcegraph on your code.',
    description = 'Experience code intelligence with a free 30-day trial for you and your team.',
    cta1 = {
        text: 'Get free trial',
        ctaStyle: 'primaryButtonWhite',
        link: 'https://signup.sourcegraph.com',
    },
    cta2 = {
        text: 'Request a demo',
        ctaStyle: 'outlineButton',
        link: '/demo',
    },
}) => {
    const windowWidth = useWindowWidth()
    const lgAndUp = windowWidth > breakpoints.lg
    
    return (
        <div className="tw-bg-violet-700">
            <div
                className="tw-max-w-screen-xl tw-mx-auto tw-bg-[center_left] tw-bg-repeat-y tw-grid tw-items-center tw-grid-cols-12 tw-min-h-[291px] tw-h-full tw-px-sm lg:tw-pl-0 tw-py-3xl"
                // eslint-disable-next-line react/forbid-dom-props, @typescript-eslint/restrict-template-expressions
                style={lgAndUp ? { background: `url('${illustration}')` } : undefined}
            >
                <div className="tw-col-span-full md:tw-col-span-7 lg:tw-col-span-5 lg:tw-col-start-4">
                    <h2 className="tw-text-violet-200 tw-mb-sm">{title}</h2>
                    <p className="tw-text-white tw-text-lg tw-max-w-[80%]">
                        {description}
                    </p>
                </div>

                <div
                    className={classNames('tw-col-span-full md:tw-col-span-4 tw-flex tw-flex-col lg:tw-flex-row tw-items-start md:tw-items-center',
                        {
                            'lg:tw-justify-end': cta2,
                            'lg:tw-justify-center': !cta2,
                        })}
                >
                    {cta1 && (
                        <div className="tw-mt-sm">
                            <Cta
                                {...cta1}
                                onClick={() => {
                                    plausible('ClickedOnFreeTrialCTA')

                                    // TODO: add event logger
                                }}
                            />
                        </div>
                    )}

                    {cta2 && typeof cta2 === 'object' && (
                        <div
                            className="tw-mt-sm lg:tw-ml-md">
                            <Cta
                                {...{
                                    ...cta2,
                                    ctaStyle: 'outlineButtonLight'
                                }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
