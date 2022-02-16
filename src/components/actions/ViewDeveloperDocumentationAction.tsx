import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import React from 'react'

interface Props {
    className?: string
    url?: string
    children?: React.ReactNode
}

export const ViewDeveloperDocumentationAction: React.FunctionComponent<Props> = ({
    className = '',
    url = 'https://docs.sourcegraph.com/',
    children = 'Read the docs and install',
}) => (
    <a className={`d-flex align-items-center text-decoration-none ${className}`} href={url}>
        {children} <ArrowRightBoxIcon className="text-primary ml-1" />
    </a>
)
