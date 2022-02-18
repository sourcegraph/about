import { useCarousel } from '../hooks/carousel'
import React, { FunctionComponent, ReactNode } from 'react'
import { TemplateCodeBlock } from './TemplateCodeBlock'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

interface TabCarouselProps {
    items: Template[]
    currentItem?: ReactNode
    previousItem?: ReactNode
    currentItemIndex?: number
    autoAdvance?: boolean
}

interface Template {
    header: string
    description: string
    queries: ReactNode[]
}

export const TabCarousel: FunctionComponent<TabCarouselProps> = ({ items, autoAdvance }) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as Template[]

    return (
        <div className="tab-carousel">
            <div>
                {carouselItems.map(item => (
                    <div
                        key={item.header}
                        className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                    >
                        <TemplateCodeBlock template={item}></TemplateCodeBlock>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <ArrowLeftIcon
                    className={carouselHook.isAdvancing ? 'mr-4 opaque' : 'mr-4'}
                    onClick={() => carouselHook.moveCarousel('decrement')}
                />
                <div>
                    {carouselItems.map(item => (
                        <CircleSmallIcon
                            className={item === carouselHook.carouselItems.currentItem ? '' : 'opaque'}
                            key={item.header}
                        />
                    ))}
                </div>
                <ArrowRightIcon
                    className={carouselHook.isAdvancing ? 'ml-4' : 'ml-4 opaque'}
                    onClick={() => carouselHook.moveCarousel()}
                />
            </div>
        </div>
    )
}
