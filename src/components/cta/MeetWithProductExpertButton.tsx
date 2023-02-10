import React from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { buttonStyle } from '../../data/tracking'

export const MeetWithProductExpertButton: React.FunctionComponent<{
    buttonLocation: number
    dark?: boolean
    chevron?: boolean
    size?: 'md' | 'lg'
}> = ({ buttonLocation, dark = false, chevron = false, size = 'md' }) => (
    <Link
        href="/demo"
        className={classNames(
            'btn btn-link tw-whitespace-nowrap tw-inline-flex tw-items-center',
            dark && 'tw-text-white',
            size === 'lg' && 'tw-py-xs'
        )}
        title="Meet with a product expert"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        Meet with a product expert {chevron && <ChevronRightIcon className="tw-ml-[3px]" />}
    </Link>
)
