import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '@data'

export interface ImgIconLinkCard {
    alt?: string
    img: string | ReactNode
    description: string
    title?: string
    url: string
    linkText?: string
}

export const ImgIconLinkCard: FunctionComponent<{ item: ImgIconLinkCard; bwLogo?: boolean }> = ({
    item: { alt, img, title, description, url, linkText = 'Read the case study' },
    bwLogo,
}) => (
    <div className="tw-grow">
        <div className="md:tw-pr-28">
            {typeof img === 'string' ? (
                <img
                    className={classNames('tw-max-w-[135px] tw-max-h-[60px] mb-4', { 'tw-brightness-0': bwLogo })}
                    src={img}
                    alt={`${alt ?? ''} logo`}
                />
            ) : (
                img
            )}

            {title && <h5>{title}</h5>}

            <p>{description}</p>

            {url.includes('http') ? (
                <a
                    href={url}
                    target="_blank"
                    rel="nofollow noreferrer"
                    title={linkText + ': ' + description}
                    data-button-style={buttonStyle.textWithArrow}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                    className="tw-font-bold tw-no-underline"
                >
                    {linkText}
                    <ArrowRightIcon size={20} className="ml-1 tw-inline" />
                </a>
            ) : (
                <Link href={url} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        title={linkText + ': ' + description}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                        className="tw-font-bold tw-no-underline"
                    >
                        {linkText}
                        <ArrowRightIcon size={20} className="ml-1 tw-inline" />
                    </a>
                </Link>
            )}
        </div>
    </div>
)
