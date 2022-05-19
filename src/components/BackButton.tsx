import { FunctionComponent } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

interface BackButtonProps {
    href: string
    text: string
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3 font-weight-normal">
            <ArrowLeftIcon className="mb-1" />
            <span className="h6 ml-3">{text}</span>
        </div>
    </Link>
)

export const BackButtonBold: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3 font-weight-bold">
            <ArrowLeftIcon className="mb-1" />
            <span className="h6 ml-3">{text}</span>
        </div>
    </Link>
)

export const BackButtonLight: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3 text-white font-weight-bold">
            <ArrowLeftIcon className="mb-1" />
            <span className="h6 ml-3">{text}</span>
        </div>
    </Link>
)
