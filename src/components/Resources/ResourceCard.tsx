import { FunctionComponent } from 'react'

import classNames from 'classnames'
import { truncate } from 'lodash'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { Badge } from '../Badge'

import { Resource } from '.'

interface Card {
    resource: Resource
    className?: string
    onClick: () => void
}

export const ResourceCard: FunctionComponent<Card> = ({ resource, className, onClick }) => {
    const { title, description, contentType, link, subjects } = resource

    // CTA text mapping
    const watchNow = new Set(['virtual event', 'video'])
    const readThe = new Set(['blog post', 'guide', 'Whitepaper', 'customer story'])
    let ctaText = 'Read more'
    if (watchNow.has(contentType)) {
        ctaText = 'Watch the event'
    } else if (readThe.has(contentType)) {
        ctaText = `Read the ${contentType === 'customer story' ? 'story' : contentType}`
    }

    return (
        <Link
            href={link}
            className={classNames(
                'mx-auto min-h-[358px] max-w-[410px] rounded-lg border border-gray-500 bg-white text-black hover:shadow-card',
                className
            )}
            onClick={onClick}
        >
            <div className="flex h-full flex-col">
                <div className="flex h-[54px] items-center rounded-t-lg border-b-1 border-gray-500 px-4 py-sm">
                    <div className="font-mono text-sm font-medium first-letter:capitalize">{contentType}</div>
                </div>

                {/* Card Info */}
                <div className="flex flex-grow flex-col px-4 py-sm">
                    <h4 className="mb-sm">{truncate(title, { length: 97 })}</h4>

                    <div className="mb-sm flex flex-wrap">
                        {subjects
                            .slice(0, 3)
                            .sort()
                            .map(subject => (
                                <span key={subject} className="mr-2 mb-2 first-letter:capitalize">
                                    <Badge text={subject} size="small" />
                                </span>
                            ))}

                        {!!subjects.slice(3).length && (
                            <div className="group relative">
                                <Badge text={`+${subjects.slice(3).length}`} size="small" />

                                <div className="absolute left-0 top-0 hidden cursor-default flex-col rounded-md bg-white pt-xxs pl-xxs shadow-md group-hover:flex group-hover:animate-fadeIn">
                                    {subjects.slice(3).map(subject => (
                                        <span key={subject} className="mr-2 mb-2 first-letter:capitalize">
                                            <Badge text={subject} size="small" />
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-auto text-base">{truncate(description, { length: 170 })}</div>

                    <div className="mt-2 font-semibold lowercase text-violet-500 first-letter:capitalize hover:text-violet-400">
                        {ctaText}
                        <ChevronRightIcon className="ml-1 inline" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
