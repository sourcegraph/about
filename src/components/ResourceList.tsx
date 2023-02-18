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
        <h2 className="mb-3xl">{title}</h2>

        {items.map(item => (
            <Link
                href={item.href}
                key={item.title}
                className="py-md mx-0 w-full border-b border-solid border-b-gray-200 grid grid-cols-12 hover:bg-gray-50 hover:px-sm transition-padding ease-in-out duration-300"
                data-button-style={buttonStyle.resourceListItem}
                data-button-location={buttonLocation.body}
                data-button-type="cta"
                title={item.title}
            >
                <div className="col-span-12 sm:col-span-8 sm:pr-sm">
                    <h6 className="text-blurple-400">{item.type}</h6>
                    <h3 className="text-black">{item.title}</h3>
                    <p className="mt-xs text-black font-normal max-w-3xl">{item.description}</p>
                </div>

                <div className="flex items-center justify-center sm:justify-end col-span-12 sm:col-span-4 mt-xs sm:mt-0">
                    <div className="inline-block max-w-[250px] w-full min-h-[150px] h-full">
                        <img
                            className="flex-1 w-full"
                            alt={item.img ? item.img.alt : item.title}
                            src={item.img ? item.img.src : '/blog/thumbnails/default.png'}
                        />
                    </div>
                </div>
            </Link>
        ))}
    </ContentSection>
)
