import React from 'react'

export const StartAFreeTrialAction: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <a className={`btn btn-light ${className}`} href="https://docs.sourcegraph.com/#quickstart">
        Try Sourcegraph for free
    </a>
)
