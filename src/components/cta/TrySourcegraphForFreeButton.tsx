import React from 'react'

import { buttonStyle } from '../../data/tracking'

export const TrySourcegraphForFreeButton: React.FunctionComponent<{ buttonLocation: number }> = ({
    buttonLocation,
}) => (
    <a
        className="btn btn-primary tw-whitespace-nowrap"
        href="https://signup.sourcegraph.com"
        title="Start for free"
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        Try Sourcegraph for free
    </a>
)
