import ArrowRightBoxIcon from 'mdi-react/ArrowRightBoxIcon'
import React from 'react'

export const ViewDeveloperDocumentationAction: React.FunctionComponent<{ className?: string }> = ({
    className = '',
}) => (
    <a className={`d-flex align-items-center text-decoration-none ${className}`} href="https://docs.sourcegraph.com/">
        Documentation <ArrowRightBoxIcon className="text-primary ml-1" />
    </a>
)
