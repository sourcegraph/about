import { FunctionComponent } from 'react'

import classNames from 'classnames'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import StarIcon from 'mdi-react/StarIcon'
import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../../data/tracking'
import { Badge } from '../Badge'

import { Resource } from '.'

interface Card {
    resource: Resource
}

interface BackgroundVariant {
    [key: string]: string
}

/**
 * This is the Card component rendered as a resource on the resources page.
 *
 * @param props - component props
 * @param props.resource - a resource data object defined in resourceItems
 */
export const Card: FunctionComponent<Card> = ({ resource }) => {
    // CTA text mapping
    const watchNow = new Set(['virtual event', 'video'])
    const readThe = new Set(['blog post', 'guide', 'customer story'])
    let ctaText = 'Read more'
    if (watchNow.has(resource.contentType)) {
        ctaText = 'Watch now'
    } else if (readThe.has(resource.contentType)) {
        ctaText = `Read the ${resource.contentType === 'customer story' ? 'story' : resource.contentType}`
    }

    // Content Type background mapping
    const backgrounds: BackgroundVariant = {
        'virtual event': 'tw-from-vermillion-100 tw-to-violet-400',
        video: 'tw-from-violet-100 tw-to-cerise-300',
        'blog post': 'tw-from-violet-200 tw-to-vermillion-300',
        guide: 'tw-from-blue-200 tw-to-violet-400',
        'customer story': 'tw-from-green-100 tw-to-blue-300',
    }

    return (
        <div className="tw-bg-white tw-shadow-md tw-rounded-lg sm:tw-min-h-[540px] md:tw-min-h-[475px]">
            <div
                className={classNames(
                    'tw-h-[54px] tw-overflow-hidden tw-rounded-t-lg tw-flex tw-items-center tw-px-sm tw-bg-gradient-to-r',
                    backgrounds[resource.contentType] || 'tw-from-gray-200 tw-to-gray-300'
                )}
            >
                <div className="first-letter:tw-capitalize tw-font-medium tw-font-mono tw-text-sm">
                    {resource.contentType}
                </div>
            </div>

            {/* Card Info */}
            <div
                className="tw-flex tw-flex-col tw-p-sm"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ height: 'calc(100% - 54px)' }}
            >
                <h4 className="tw-mb-sm">
                    {resource.title.length > 100 ? `${resource.title.slice(0, 97)}...` : resource.title}
                </h4>

                <div className="flex-wrap tw-flex tw-mb-sm">
                    {resource.subjects
                        .slice(0, 3)
                        .sort()
                        .map(subject => (
                            <span key={subject} className="tw-mr-2 tw-mb-2 first-letter:tw-capitalize">
                                <Badge text={subject} size="small" />
                            </span>
                        ))}
                    {!!resource.subjects.slice(3).length && (
                        <div className="tw-group tw-relative">
                            <Badge text={`+${resource.subjects.slice(3).length}`} size="small" />

                            <div className="tw-hidden group-hover:tw-flex group-hover:tw-animate-fadeIn tw-absolute tw-left-0 tw-top-0 tw-shadow-md tw-bg-white tw-pt-xxs tw-pl-xxs tw-rounded-md tw-flex-col tw-cursor-default">
                                {resource.subjects.slice(3).map(subject => (
                                    <span key={subject} className="tw-mr-2 tw-mb-2 first-letter:tw-capitalize">
                                        <Badge text={subject} size="small" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="tw-text-sm tw-mb-sm">
                    {resource.description.length > 170
                        ? `${resource.description.slice(0, 167)}...`
                        : resource.description}
                </div>

                <div className="tw-flex tw-mt-auto">
                    <Link
                        href={resource.link}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {ctaText}
                        <ArrowRightIcon className="tw-inline tw-ml-xs" />
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
}
