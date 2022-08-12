import { FunctionComponent } from 'react'

import { buttonStyle, buttonLocation } from '@data'

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
    <ContentSection color="white">
        <h2 className="tw-mb-3xl">{title}</h2>

        {items.map(item => (
            <div
                className="tw-pb-5 tw-mx-0 tw-mb-5 tw-w-full tw-border-b tw-border-solid tw-border-b-gray-200 tw-grid tw-grid-cols-12"
                key={item.title}
            >
                <div className="tw-col-span-12 sm:tw-col-span-8 sm:tw-pr-sm">
                    <h6 className="tw-text-blurple-400">{item.type}</h6>
                    <a
                        href={item.href}
                        title={item.title}
                        data-button-style={buttonStyle.text}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <h3 className="tw-text-black">{item.title}</h3>
                    </a>
                    <p className="tw-mt-4">{item.description}</p>
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
            </div>
        ))}
    </ContentSection>
)
