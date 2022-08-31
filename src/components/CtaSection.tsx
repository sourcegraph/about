import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Cta {
    text: string
    icon?: ReactNode
    ctaStyle?: 'primaryButton' | 'outlineButton' | 'outlineButtonLight'
    link?: string
    onClick?: () => void
}

interface CtaSection {
    background?: ContentSection['background']
    title?: string
    description?: string
    centerContent?: boolean
    slimWidth?: boolean
    cta1: Cta
    cta2?: Cta
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
    if (ctaStyle === 'primaryButton') {
        ctaTrackingStyle = buttonStyle.primary
    } else if (ctaStyle === 'outlineButton') {
        ctaTrackingStyle = buttonStyle.outline
    }

    const linkElement = (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            title={text}
            href={link}
            className={classNames({
                'btn btn-primary': ctaStyle === 'primaryButton',
                'btn btn-outline-primary': ctaStyle === 'outlineButton',
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
                    'btn btn-primary': ctaStyle === 'primaryButton',
                    'btn btn-outline-primary': ctaStyle === 'outlineButton',
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
 * @param props.background - background for the section
 * @param props.title - a title for the section
 * @param props.description - a description for the section
 * @param props.centerContent - a boolean to center the content
 * @param props.slimWidth - a boolean for a slim width container
 * @param props.cta1 - cta item 1
 * @param props.cta2 - cta item 2
 */
export const CtaSection: FunctionComponent<CtaSection> = ({
    background,
    title = 'Get started with Sourcegraph',
    description = 'Understand, fix, and automate changes across your entire codebase.',
    centerContent = false,
    slimWidth,
    cta1,
    cta2,
}) => (
    <ContentSection background={background}>
        <div
            className={classNames({
                'tw-max-w-xl tw-mx-auto tw-text-center': centerContent,
                'tw-grid tw-grid-cols-5': !centerContent && !slimWidth,
                'tw-grid tw-grid-cols-12 tw-gap-sm tw-grid-flow-row tw-items-center': slimWidth,
            })}
        >
            <div
                className={classNames({
                    'tw-col-span-full md:tw-col-span-3': !centerContent,
                    'tw-col-span-full md:tw-col-span-5 md:tw-col-start-3': slimWidth,
                })}
            >
                {!slimWidth && <h2 className="tw-mb-sm">{title}</h2>}
                {slimWidth && <h4 className="tw-mb-sm">{title}</h4>}
                <p
                    className={classNames('tw-text-lg', {
                        'tw-pr-2xl': !centerContent,
                    })}
                >
                    {description}
                </p>
            </div>

            <div
                className={classNames({
                    'tw-inline-flex tw-flex-col tw-self-center': centerContent,
                    'tw-col-span-full md:tw-col-span-2 tw-flex tw-flex-col lg:tw-flex-row tw-items-start md:tw-items-center':
                        !centerContent && !slimWidth,
                    'lg:tw-justify-end': !centerContent && cta2,
                    'lg:tw-justify-center': !centerContent && !cta2,
                    'tw-col-span-full md:tw-col-span-3 md:tw-col-start-9 tw-flex tw-flex-col': slimWidth,
                })}
            >
                {cta1 && (
                    <div className={classNames({ 'tw-mt-sm': !slimWidth })}>
                        <Cta {...cta1} />
                    </div>
                )}

                {cta2 && (
                    <div
                        className={classNames('tw-mt-sm', {
                            'lg:tw-ml-md': !centerContent && !slimWidth,
                        })}
                    >
                        <Cta
                            {...{
                                ...cta2,
                                ctaStyle:
                                    background?.includes('dark') || background?.includes('black')
                                        ? 'outlineButtonLight'
                                        : cta2.ctaStyle,
                            }}
                        />
                    </div>
                )}
            </div>
        </div>
    </ContentSection>
)
