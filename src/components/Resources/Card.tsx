import { FunctionComponent } from 'react'

import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import StarIcon from 'mdi-react/StarIcon'
import Link from 'next/link'

import { Background } from '@components'
import { buttonStyle, buttonLocation } from '@data'

import { Resource } from '.'

interface Card {
    resource: Resource
}

const watchNow = new Set(['virtual event', 'video'])
const readThe = new Set(['blog post', 'guide', 'customer story'])

export const Card: FunctionComponent<Card> = ({ resource }) => (
    <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-overflow-hidden tw-min-h-[532px] tw-h-full">
        <div className="tw-relative tw-max-h-[172px] tw-h-1/3">
            {resource.thumbnail ? (
                <div
                    className="tw-bg-cover tw-w-full"
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{ backgroundImage: `url('${resource.thumbnail}')` }}
                />
            ) : (
                <Background variant="auroraGrid" className="tw-h-full" />
            )}
            <div className="tw-absolute tw-top-xs tw-left-xs tw-px-xs tw-py-2 tw-bg-gray-500 tw-text-white tw-rounded-lg first-letter:tw-capitalize">
                {resource.contentType}
            </div>
        </div>

        <div className="tw-flex tw-flex-col tw-p-xs tw-h-2/3">
            <h4 className="tw-mt-md tw-mb-xs">{resource.title}</h4>

            <div className="flex-wrap tw-flex tw-mb-xs">
                {resource.subjects.map(subject => (
                    <div
                        key={subject}
                        className="tw-bg-gray-200 tw-text-gray-500 tw-py-1 tw-px-2 tw-rounded-md tw-mr-2 tw-mb-2 tw-whitespace-nowrap first-letter:tw-capitalize"
                    >
                        {subject}
                    </div>
                ))}
            </div>

            <div className="tw-text-sm">{resource.description}</div>

            <div className="tw-flex tw-mt-auto">
                <Link href={resource.link} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {watchNow.has(resource.contentType) && 'Watch now'}
                        {readThe.has(resource.contentType) && `Read the ${resource.contentType}`}
                        <ArrowRightIcon className="tw-inline" />
                    </a>
                </Link>

                {resource.featured && (
                    <span className="tw-ml-auto tw-bg-violet-100 tw-rounded-full tw-w-sm tw-h-sm d-flex tw-items-center tw-justify-center">
                        <StarIcon className="tw-text-violet-400" size={18} />
                    </span>
                )}
            </div>
        </div>
    </div>
)
