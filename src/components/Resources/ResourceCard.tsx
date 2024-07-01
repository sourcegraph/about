import { forwardRef } from 'react'

import classNames from 'classnames'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { truncate } from '../../lib/utils'

import { Resource } from '.'

interface Card {
    resource: Resource
    className?: string
    onClick: () => void
}

export const ResourceCard = forwardRef<HTMLAnchorElement, Card>(({ resource, className, onClick }, ref) => {
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
                'mx-auto min-h-[358px] max-w-[410px] rounded-lg border border-gray-500 bg-white text-black hover:shadow-card hover:transition-all hover:duration-300',
                className
            )}
            onClick={onClick}
            ref={ref}
        >
            <div className="flex h-full flex-col">
                <div className="flex h-[54px] items-center rounded-t-lg border-b-1 border-gray-500 px-4 py-6">
                    <div className="font-mono text-sm font-medium first-letter:capitalize">{contentType}</div>
                </div>

                {/* Card Info */}
                <div className="flex flex-grow flex-col px-4 py-6">
                    <h4 className="mb-6">{truncate(title, 97)}</h4>
                    <div className="mb-auto text-base">{truncate(description, 170)}</div>
                    <div className="btn-link btn-link-icon mt-2 font-semibold">
                        {ctaText}
                        <ChevronRightIcon className="link-icon" />
                    </div>
                </div>
            </div>
        </Link>
    )
})

ResourceCard.displayName = 'ResourceCard'
