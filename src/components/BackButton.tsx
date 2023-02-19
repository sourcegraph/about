import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

import { buttonLocation, buttonStyle } from '../data/tracking'

interface BackButtonProps {
    href: string
    text: string
    light?: boolean
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text, light = false }) => (
    <Link
        href={href}
        className="mb-xs block cursor-pointer uppercase"
        data-button-style={buttonStyle.textWithArrow}
        data-button-location={buttonLocation.hero}
        data-button-type="cta"
    >
        <ArrowLeftIcon className={classNames('mb-1 inline', { 'text-white': light, 'text-black': !light })} />
        <span
            className={classNames('ml-4 text-lg font-semibold', {
                'text-white': light,
                'text-black': !light,
            })}
        >
            {text}
        </span>
    </Link>
)
