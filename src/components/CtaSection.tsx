import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import Link from 'next/link'

import { ContentSection } from '@components'
import { buttonStyle, buttonLocation } from '@data'

interface Cta {
    text: string
    icon?: ReactNode
    button?: boolean
    link?: string
    onClick?: () => void
}

interface CtaSection {
    title?: string
    description?: string
    centerContent?: boolean
    cta1: Cta
    cta2?: Cta
}

/**
 * This is a CTA used within the CTA Section
 *
 * @param props - component props
 * @param props.text - text for the cta
 * @param props.icon - icon node for the cta
 * @param props.button - boolean to display as a button
 * @param props.link - href string
 * @param props.onClick - click function
 */
const Cta: FunctionComponent<Cta> = ({ text, icon, button = false, link, onClick }) => {
    const textAndIcon = (
        <div className={classNames({ 'tw-flex': icon })}>
            {text}
            {icon && <span className="tw-ml-xxs">{icon}</span>}
        </div>
    )
    const externalLink = link?.includes('http')
    const linkElement = (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a
            title={text}
            href={link}
            className={classNames({ 'btn btn-primary': button })}
            data-button-style={buttonStyle.text}
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
                    'btn btn-primary': button,
                    'tw-text-blurple-400 tw-font-bold': !button,
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
 * @param props.centerContent - a boolean to center the content
 * @param props.cta1 - cta item 1
 * @param props.cta2 - cta item 2
 */
export const CtaSection: FunctionComponent<CtaSection> = ({
    title = 'Get started with Sourcegraph',
    description = 'Understand, fix, and automate changes across your entire codebase.',
    centerContent = false,
    cta1,
    cta2,
}) => (
    <ContentSection color="white">
        <div
            className={classNames({
                'tw-max-w-xl tw-mx-auto tw-text-center': centerContent,
                'tw-grid tw-grid-cols-5': !centerContent,
            })}
        >
            <div
                className={classNames({
                    'tw-col-span-full md:tw-col-span-3': !centerContent,
                })}
            >
                <h2 className="tw-mb-sm">{title}</h2>
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
                        !centerContent,
                    'lg:tw-justify-end': !centerContent && cta2,
                    'lg:tw-justify-center': !centerContent && !cta2,
                })}
            >
                {cta1 && (
                    <div className="tw-mt-md">
                        <Cta {...cta1} />
                    </div>
                )}

                {cta2 && (
                    <div
                        className={classNames('tw-mt-md', {
                            'lg:tw-ml-md': !centerContent,
                        })}
                    >
                        <Cta {...cta2} />
                    </div>
                )}
            </div>
        </div>
    </ContentSection>
)
