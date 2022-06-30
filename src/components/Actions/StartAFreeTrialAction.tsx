import { FunctionComponent } from 'react'

interface StartAFreeTrialActionProps {
    className?: string
}

export const StartAFreeTrialAction: FunctionComponent<StartAFreeTrialActionProps> = ({ className = '' }) => (
    <a className={`btn btn-light ${className}`} href="https://docs.sourcegraph.com/#quickstart">
        Try Sourcegraph for free
    </a>
)
