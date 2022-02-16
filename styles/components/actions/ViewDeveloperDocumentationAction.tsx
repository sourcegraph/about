import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import React from 'react'

export const ViewDeveloperDocumentationAction: React.FunctionComponent<{
    className?: string
    url?: string
    children?: React.ReactNode
}> = ({ className = '', url = 'https://docs.sourcegraph.com/', children = 'Read the docs and install' }) => (
    <a className={`d-flex align-items-center text-decoration-none ${className}`} href={url}>
        {children} <ArrowRightBoxIcon className="text-primary ml-1" />
    </a>
)
