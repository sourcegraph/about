import { FunctionComponent } from 'react'

import Link from 'next/link'

import { buttonStyle, buttonLocation } from '../data/tracking'

import { ContentSection } from './ContentSection'

interface ResourceList {
    title?: string
    items: {
        title: string
        description: string
        type: string
        href: string
        img?: {
            src: string
            alt: string
        }
    }[]
}

export const ResourceList: FunctionComponent<ResourceList> = ({ items, title = 'Related Resources' }) => (
    <ContentSection background="white">
        <h2 className="tw-mb-3xl">{title}</h2>

        {items.map(item => (
            <Link
                href={item.href}
                key={item.title}
                className="tw-py-md tw-mx-0 tw-w-full tw-border-b tw-border-solid tw-border-b-gray-200 tw-grid tw-grid-cols-12 hover:tw-bg-gray-50 hover:tw-px-sm tw-transition-padding tw-ease-in-out tw-duration-300"
                data-button-style={buttonStyle.resourceListItem}
                data-button-location={buttonLocation.body}
                data-button-type="cta"
                title={item.title}
            >
                <div className="tw-col-span-12 sm:tw-col-span-8 sm:tw-pr-sm">
                    <h6 className="tw-text-blurple-400">{item.type}</h6>
                    <h3 className="tw-text-black">{item.title}</h3>
                    <p className="tw-mt-xs tw-text-black tw-font-normal tw-max-w-3xl">{item.description}</p>
                </div>

                <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-end tw-col-span-12 sm:tw-col-span-4 tw-mt-xs sm:tw-mt-0">
                    <div className="tw-inline-block tw-max-w-[250px] tw-w-full tw-min-h-[150px] tw-h-full">
                        <img
                            className="tw-flex-1 tw-w-full"
                            alt={item.img ? item.img.alt : item.title}
                            src={item.img ? item.img.src : '/blog/thumbnails/default.png'}
                        />
                    </div>
                </div>
            </Link>
        ))}
    </ContentSection>
)
