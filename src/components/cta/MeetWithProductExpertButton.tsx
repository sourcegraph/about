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
            'btn btn-link inline-flex items-center whitespace-nowrap',
            dark && 'text-white hover:text-violet-200',
            size === 'lg' && 'py-xs'
        )}
        title="Meet with a product expert"
        data-button-style={buttonStyle.outline}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        Meet with a product expert {chevron && <ChevronRightIcon className="ml-[3px]" />}
    </Link>
)
