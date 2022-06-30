import { FunctionComponent, ReactNode } from 'react'

import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'

interface ViewDeveloperDocumentationActionProps {
    className?: string
    url?: string
    children?: ReactNode
}

export const ViewDeveloperDocumentationAction: FunctionComponent<ViewDeveloperDocumentationActionProps> = ({
    className = '',
    url = 'https://docs.sourcegraph.com/',
    children = 'Read the docs and install',
}) => (
    <a className={`d-flex align-items-center text-decoration-none ${className}`} href={url}>
        {children} <ArrowRightBoxIcon className="text-primary ml-1" />
    </a>
)
