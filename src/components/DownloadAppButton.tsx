import React from 'react'

import classNames from 'classnames'
import DownloadIcon from 'mdi-react/DownloadIcon'

import { buttonStyle } from '@data'

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

const DownloadVariantButton: React.FunctionComponent<{
    downloadVariant: DownloadVariant
    buttonLocation: number
    className?: string
}> = ({ downloadVariant: { name, platforms }, buttonLocation, className }) => (
    <a
        className={classNames('btn btn-primary tw-py-xxs tw-px-xs tw-max-w-[120px]', className)}
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
