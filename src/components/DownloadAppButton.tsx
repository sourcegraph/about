import React from 'react'

import classNames from 'classnames'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import DownloadIcon from 'mdi-react/DownloadIcon'

import { buttonLocation, buttonStyle } from '../data/tracking'

export const DownloadAppButton: React.FunctionComponent<{
    orientation?: 'horizontal' | 'vertical'
    className?: string
}> = ({ orientation = 'horizontal', className }) => (
    <div className={classNames(orientation === 'horizontal' ? 'btn-group' : 'btn-group-vertical', className)}>
        {DOWNLOAD_VARIANTS.map(downloadVariant => (
            <DownloadVariantButton
                key={downloadVariant.name}
                downloadVariant={downloadVariant}
                className={orientation === 'horizontal' ? 'tw-mr-[2px]' : 'tw-mb-[2px]'}
            />
        ))}
        <button type="button" className="btn btn-primary tw-px-2 tw-font-normal" title="Other downloads">
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
        name: 'Mac',
        platforms: 'macOS 10.11+',
    },
    {
        name: '.deb',
        platforms: 'Debian, Ubuntu',
    },
    {
        name: '.rpm',
        platforms: 'Red Hat, Fedora, SUSE',
    },
    {
        name: 'Windows',
        platforms: 'Windows 8, 10, 11',
    },
]

const DownloadVariantButton: React.FunctionComponent<{ downloadVariant: DownloadVariant; className?: string }> = ({
    downloadVariant: { name, platforms },
    className,
}) => (
    <a
        className={classNames('btn btn-primary', className)}
        href="TODO"
        title="Download "
        data-button-style={buttonStyle.primary}
        data-button-location={buttonLocation.trySourcegraph}
        data-button-type="cta"
    >
        <DownloadIcon className="tw-inline tw-mr-1" /> {name}
        <small className="tw-block tw-font-normal">{platforms}</small>
    </a>
)
