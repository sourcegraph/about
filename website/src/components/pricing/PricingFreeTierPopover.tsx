import QuestionMarkCircleOutlineIcon from 'mdi-react/QuestionMarkCircleOutlineIcon'
import React from 'react'
import { HoverablePopover } from '../HoverablePopover'

const PricingFreeTierPopoverBody: React.FunctionComponent<any> = () => (
    <div className="p-3">
        <ul className="nav flex-column">
            <li className="nav-item mb-1">Code search</li>
            <li className="nav-item mb-1">Code navigation (definitions and references)</li>
            <li className="nav-item mb-1">Editor and code host integrations</li>
            <li className="nav-item mb-1">Sourcegraph extensions</li>
            <li className="nav-item mb-1">Single sign-on (SSO)</li>
            <li className="nav-item mb-1">10-user limit</li>
            <li className="nav-item">Community support</li>
        </ul>
    </div>
)

interface Props {
    className?: string
}

export const PricingFreeTierPopoverButton: React.FunctionComponent<Props> = ({ className = '' }) => (
    <HoverablePopover placement="bottom" delay={{ show: 0, hide: 500 }} component={<PricingFreeTierPopoverBody />}>
        <a className={`pricing-free-tier-popover-body outline-0 ${className}`} href="https://docs.sourcegraph.com">
            <span className="text-muted ml-1 mr-1">
                <QuestionMarkCircleOutlineIcon />
            </span>
        </a>
    </HoverablePopover>
)
