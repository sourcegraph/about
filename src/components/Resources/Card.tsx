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

interface BackgroundVariant {
    [key: string]: Background['variant']
}

interface FilterPill {
    text: string
    light?: boolean
}

const FilterPill: FunctionComponent<FilterPill> = ({ text, light = false }) => {
    const background = light ? 'tw-bg-gray-100' : 'tw-bg-gray-200'
    return (
        <div
            className={`${background} tw-text-gray-500 tw-py-1 tw-px-2 tw-rounded-md tw-mr-2 tw-mb-2 tw-whitespace-nowrap first-letter:tw-capitalize tw-font-mono tw-text-xs`}
        >
            {text}
        </div>
    )
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
        'virtual event': 'saturn',
        video: 'mars',
        'blog post': 'infrared',
        guide: 'aurora',
        'customer story': 'venus',
    }

    return (
        <div className="tw-bg-white tw-shadow-md tw-rounded-lg md:tw-min-h-[503px]">
            <Background
                variant={backgrounds[resource.contentType] || 'darkNebulous2Sm'}
                className="tw-h-[10%] tw-overflow-hidden tw-rounded-t-lg tw-flex tw-items-center tw-px-sm"
            >
                <div className="first-letter:tw-capitalize tw-font-medium">{resource.contentType}</div>
            </Background>

            {/* Card Info */}
            <div className="tw-flex tw-flex-col tw-p-sm tw-h-[90%]">
                <h4 className="tw-mb-sm">
                    {resource.title.length > 100 ? `${resource.title.slice(0, 97)}...` : resource.title}
                </h4>

                <div className="flex-wrap tw-flex tw-mb-sm">
                    {resource.subjects
                        .slice(0, 3)
                        .sort()
                        .map(subject => (
                            <FilterPill key={subject} text={subject} />
                        ))}
                    {!!resource.subjects.slice(3).length && (
                        <div className="tw-group tw-relative">
                            <FilterPill text={`+${resource.subjects.slice(3).length}`} />
                            <div className="tw-hidden group-hover:tw-flex group-hover:tw-animate-fadeIn tw-absolute tw-left-0 tw-top-0 tw-shadow-md tw-bg-white tw-pt-xxs tw-pl-xxs tw-rounded-md tw-flex-col tw-cursor-default">
                                {resource.subjects.slice(3).map(subject => (
                                    <FilterPill key={subject} text={subject} light={true} />
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
                    <Link href={resource.link} passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            data-button-style={buttonStyle.textWithArrow}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {ctaText}
                            <ArrowRightIcon className="tw-inline tw-ml-xs" />
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
}
