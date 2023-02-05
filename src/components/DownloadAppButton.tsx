import React from 'react'

import classNames from 'classnames'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import DownloadIcon from 'mdi-react/DownloadIcon'

import { buttonStyle } from '../data/tracking'

export const DownloadAppButton: React.FunctionComponent<{
    orientation?: 'horizontal' | 'vertical'
    buttonLocation: number
    className?: string
}> = ({ orientation = 'horizontal', buttonLocation, className }) => (
    <div className={classNames(orientation === 'horizontal' ? 'btn-group' : 'btn-group-vertical', className)}>
        {DOWNLOAD_VARIANTS.map(downloadVariant => (
            <DownloadVariantButton
                key={downloadVariant.name}
                downloadVariant={downloadVariant}
                buttonLocation={buttonLocation}
                className={orientation === 'horizontal' ? 'tw-mr-[2px]' : 'tw-mb-[2px]'}
            />
        ))}
        <button type="button" className={classNames(BUTTON_CLASS_NAME, 'tw-px-xxs')} title="Other downloads">
            {orientation === 'horizontal' ? <ChevronDownIcon /> : 'More downloads...'}
        </button>
    </div>
)

interface DownloadVariant {
    name: string
    platforms: string
}

const DOWNLOAD_VARIANTS: DownloadVariant[] = [
    {
        name: 'macOS',
        platforms: 'Universal',
    },
    {
        name: 'Linux',
        platforms: '64-bit',
    },
]

const BUTTON_CLASS_NAME = 'btn btn-primary tw-py-xxs tw-bg-violet-500 tw-border-violet-500'

const DownloadVariantButton: React.FunctionComponent<{
    downloadVariant: DownloadVariant
    buttonLocation: number
    className?: string
}> = ({ downloadVariant: { name, platforms }, buttonLocation, className }) => (
    <a
        className={classNames(BUTTON_CLASS_NAME, 'tw-px-sm tw-max-w-[140px]', className)}
        href="TODO"
        title="Download "
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation}
        data-button-type="cta"
    >
        <DownloadIcon className="tw-inline tw-mr-1" /> {name}
        <small className="tw-block tw-font-normal tw-truncate">{platforms}</small>
    </a>
)
