import { Link } from 'gatsby'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import React, { FunctionComponent } from 'react'

interface BackButtonProps {
    href: string
    text: string
    bold?: boolean
    dark?: boolean
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text, bold, dark }) => (
    <Link className={`btn p-0 text-uppercase mb-3 font-weight-normal ${dark ? 'text-white' : ''}`} to={href}>
        <ArrowLeftIcon className="mb-1" />
        <span className={`h6 font-weight-${bold ? 'bold' : 'normal'} ml-3`}>{text}</span>
    </Link>
)
