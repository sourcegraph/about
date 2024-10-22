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
        className="block flex cursor-pointer items-center"
        data-button-style={buttonStyle.textWithArrow}
        data-button-location={buttonLocation.hero}
        data-button-type="cta"
    >
        <ArrowLeftIcon className={classNames({ 'text-white': light, 'text-gray-700': !light })} />
        <span
            className={classNames('ml-[10px] text-lg font-medium md:ml-2', {
                'text-white': light,
                'text-gray-700': !light,
            })}
        >
            {text}
        </span>
    </Link>
)
