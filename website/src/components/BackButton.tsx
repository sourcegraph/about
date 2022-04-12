import { Link } from 'gatsby'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import React, { FunctionComponent } from 'react'

interface BackButtonProps {
    href: string
    text: string
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link className="btn p-0 text-uppercase mb-3 font-weight-normal" to={href}>
        <ArrowLeftIcon className="mb-1" />
        <span className="h6 font-weight-normal ml-3">{text}</span>
    </Link>
)

export const BackButtonBold: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link className="btn p-0 text-uppercase mb-3 font-weight-normal" to={href}>
        <ArrowLeftIcon className="mb-1" />
        <span className="h6 font-weight-bold ml-3">{text}</span>
    </Link>
)

export const BackButtonLight: FunctionComponent<BackButtonProps> = ({ href, text }) => (
    <Link className="btn p-0 text-uppercase mb-3 font-weight-normal text-white" to={href}>
        <ArrowLeftIcon className="mb-1" />
        <span className="h6 font-weight-bold ml-3">{text}</span>
    </Link>
)
