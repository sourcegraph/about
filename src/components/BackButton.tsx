import { FunctionComponent } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

interface BackButtonProps {
    href: string
    text: string
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3">
            <ArrowLeftIcon className="mb-1" />
            <span className="h6 font-weight-bold ml-3">{text}</span>
        </div>
    </Link>
)

export const BackButtonBold: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3">
            <ArrowLeftIcon className="mb-1" />
            <span className="h6 font-weight-bolder ml-3">{text}</span>
        </div>
    </Link>
)

export const BackButtonLight: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3 text-white">
            <ArrowLeftIcon className="mb-1" />
            <span className="h6 font-weight-bolder ml-3">{text}</span>
        </div>
    </Link>
)
