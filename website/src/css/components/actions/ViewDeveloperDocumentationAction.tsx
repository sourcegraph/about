import ArrowRightIcon from 'mdi-react/ArrowRightCircleIcon'
import React from 'react'

export const ViewDeveloperDocumentationAction: React.FunctionComponent<{ className?: string }> = ({
    className = '',
}) => (
    <a className={`d-flex align-items-center ${className}`} href="https://docs.sourcegraph.com/">
        Documentation <ArrowRightIcon className="ml-1" />
    </a>
)
