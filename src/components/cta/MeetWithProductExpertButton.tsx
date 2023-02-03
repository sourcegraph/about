import React from 'react'

import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

export const MeetWithProductExpertButton: React.FunctionComponent<{ buttonLocation: number }> = ({
    buttonLocation,
}) => (
    <Link
        href="/demo"
        className="btn btn-link tw-whitespace-nowrap"
        title="Meet with a product expert"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        Meet with a product expert
    </Link>
)
