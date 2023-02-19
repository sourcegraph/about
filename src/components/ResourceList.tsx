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
                className="transition-padding mx-0 grid w-full grid-cols-12 border-b border-solid border-b-gray-200 py-md duration-300 ease-in-out hover:bg-gray-50 hover:px-sm"
                data-button-style={buttonStyle.resourceListItem}
                data-button-location={buttonLocation.body}
                data-button-type="cta"
                title={item.title}
            >
                <div className="col-span-12 sm:col-span-8 sm:pr-sm">
                    <h6 className="text-blurple-400">{item.type}</h6>
                    <h3 className="text-black">{item.title}</h3>
                    <p className="mt-xs max-w-3xl font-normal text-black">{item.description}</p>
                </div>

                <div className="col-span-12 mt-xs flex items-center justify-center sm:col-span-4 sm:mt-0 sm:justify-end">
                    <div className="inline-block h-full min-h-[150px] w-full max-w-[250px]">
                        <img
                            className="w-full flex-1"
                            alt={item.img ? item.img.alt : item.title}
                            src={item.img ? item.img.src : '/blog/thumbnails/default.png'}
                        />
                    </div>
                </div>
            </Link>
        ))}
    </ContentSection>
)
