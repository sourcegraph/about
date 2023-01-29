import { FunctionComponent, ReactNode } from 'react'

import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

import { useCarousel } from '../../hooks/carousel'
import { Template, TemplateCodeBlock } from '../TemplateCodeBlock'

interface TabCarouselProps {
    items: Template[]
    currentItem?: ReactNode
    previousItem?: ReactNode
    currentItemIndex?: number
    autoAdvance?: boolean
}

export const TabCarousel: FunctionComponent<TabCarouselProps> = ({ items, autoAdvance }) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as unknown as Template[]

    return (
        <div className="tab-carousel">
            <div>
                {carouselItems.map((item, index) => (
                    <div
                        key={item.header}
                        className={
                            index === carouselHook.carouselItems.currentItemIndex ? 'tw-block h-400' : 'tw-hidden'
                        }
                    >
                        <TemplateCodeBlock template={item} />
                    </div>
                ))}
            </div>

            <div className="tw-flex tw-justify-center">
                <ArrowLeftIcon
                    className="mr-4 tw-cursor-pointer"
                    onClick={() => carouselHook.moveCarousel('decrement')}
                    color={carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                />
                <div className="tw-flex">
                    {carouselItems.map((item, index) => (
                        <CircleSmallIcon
                            color={index === carouselHook.carouselItems.currentItemIndex ? '#000' : '#D0D0D0'}
                            key={item.header}
                        />
                    ))}
                </div>
                <ArrowRightIcon
                    className="ml-4 tw-cursor-pointer"
                    onClick={() => carouselHook.moveCarousel()}
                    color={carouselHook.isAdvancing ? '#000' : '#D0D0D0'}
                />
            </div>
        </div>
    )
}
