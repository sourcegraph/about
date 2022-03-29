import { FunctionComponent } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import Link from 'next/link'

interface BackButtonProps {
    href: string
    text: string
    bold?: boolean
}

export const BackButton: FunctionComponent<BackButtonProps> = ({ href, text, bold }) => (
    <Link href={href} passHref={true}>
        <div className="btn p-0 text-uppercase mb-3 font-weight-normal">
            <ArrowLeftIcon className="mb-1" />
            <span className={`h6 font-weight-${bold ? 'bold' : 'normal'} ml-3`}>{text}</span>
        </div>
    </Link>
)
