import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

import { buttonLocation, buttonStyle } from '@data'

interface BackButtonProps {
    href: string
    text: string
    light?: boolean
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text, light = false }) => (
    <Link href={href} passHref={true}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
            className="tw-uppercase tw-mb-xs tw-block tw-cursor-pointer"
            data-button-style={buttonStyle.textWithArrow}
            data-button-location={buttonLocation.hero}
            data-button-type="cta"
        >
            <ArrowLeftIcon
                className={classNames('tw-mb-1 tw-inline', { 'tw-text-white': light, 'tw-text-black': !light })}
            />
            <span
                className={classNames('tw-text-lg tw-ml-4 tw-font-semibold', {
                    'tw-text-white': light,
                    'tw-text-black': !light,
                })}
            >
                {text}
            </span>
        </a>
    </Link>
)
