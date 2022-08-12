import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

interface BackButtonProps {
    href: string
    text: string
    light?: boolean
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text, light = false }) => (
    <Link href={href} passHref={true}>
        <div className="tw-uppercase tw-mb-4 tw-cursor-pointer">
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
        </div>
    </Link>
)
