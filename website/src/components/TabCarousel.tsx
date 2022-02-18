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
                    className="mr-4"
                    onClick={() => carouselHook.moveCarousel('decrement')}
                    color={carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                />
                <div>
                    {carouselItems.map(item => (
                        <CircleSmallIcon
                            color={item === carouselHook.carouselItems.currentItem ? '#000' : '#D0D0D0'}
                            key={item.header}
                        />
                    ))}
                </div>
                <ArrowRightIcon
                    className="ml-4"
                    onClick={() => carouselHook.moveCarousel()}
                    color={carouselHook.isAdvancing ? '#000' : '#D0D0D0'}
                />
            </div>
        </div>
    )
}
