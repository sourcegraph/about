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
        'virtual event': 'from-vermillion-100 to-violet-400',
        video: 'from-violet-100 to-cerise-300',
        'blog post': 'from-violet-200 to-vermillion-300',
        guide: 'from-blue-200 to-violet-400',
        'customer story': 'from-green-100 to-blue-300',
    }

    return (
        <div className="bg-white shadow-md rounded-lg sm:min-h-[540px] md:min-h-[475px]">
            <div
                className={classNames(
                    'h-[54px] overflow-hidden rounded-t-lg flex items-center px-sm bg-gradient-to-r',
                    backgrounds[resource.contentType] || 'from-gray-200 to-gray-300'
                )}
            >
                <div className="first-letter:capitalize font-medium font-mono text-sm">
                    {resource.contentType}
                </div>
            </div>

            {/* Card Info */}
            <div
                className="flex flex-col p-sm"
                // eslint-disable-next-line react/forbid-dom-props
                style={{ height: 'calc(100% - 54px)' }}
            >
                <h4 className="mb-sm">
                    {resource.title.length > 100 ? `${resource.title.slice(0, 97)}...` : resource.title}
                </h4>

                <div className="flex-wrap flex mb-sm">
                    {resource.subjects
                        .slice(0, 3)
                        .sort()
                        .map(subject => (
                            <span key={subject} className="mr-2 mb-2 first-letter:capitalize">
                                <Badge text={subject} size="small" />
                            </span>
                        ))}
                    {!!resource.subjects.slice(3).length && (
                        <div className="group relative">
                            <Badge text={`+${resource.subjects.slice(3).length}`} size="small" />

                            <div className="hidden group-hover:flex group-hover:animate-fadeIn absolute left-0 top-0 shadow-md bg-white pt-xxs pl-xxs rounded-md flex-col cursor-default">
                                {resource.subjects.slice(3).map(subject => (
                                    <span key={subject} className="mr-2 mb-2 first-letter:capitalize">
                                        <Badge text={subject} size="small" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="text-sm mb-sm">
                    {resource.description.length > 170
                        ? `${resource.description.slice(0, 167)}...`
                        : resource.description}
                </div>

                <div className="flex mt-auto">
                    <Link
                        href={resource.link}
                        data-button-style={buttonStyle.textWithArrow}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        {ctaText}
                        <ArrowRightIcon className="inline ml-xs" />
                    </Link>

                    {resource.featured && (
                        <span className="ml-auto bg-violet-100 rounded-full w-sm h-sm d-flex items-center justify-center">
                            <StarIcon className="text-violet-400" size={18} />
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}
