import { FunctionComponent, ReactNode } from 'react'

import { Icon } from '@components'
import { useCarousel } from '@hooks'

import { TemplateCodeBlock } from './TemplateCodeBlock'

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
                        className={item === carouselHook.carouselItems.currentItem ? 'd-block h-400' : 'd-none'}
                    >
                        <TemplateCodeBlock template={item} />
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
                <Icon
                    name="ArrowBackSharp"
                    size={24}
                    className="mr-4"
                    onClick={() => carouselHook.moveCarousel('decrement')}
                    color={carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                />
                <div>
                    {carouselItems.map(item => (
                        <Icon
                            name="CircleSharp"
                            size={6}
                            key={item.header}
                            className="mx-2"
                            color={item === carouselHook.carouselItems.currentItem ? '#000' : '#D0D0D0'}
                        />
                    ))}
                </div>
                <Icon
                    name="ArrowForwardSharp"
                    size={24}
                    className="ml-4"
                    onClick={() => carouselHook.moveCarousel()}
                    color={carouselHook.isAdvancing ? '#000' : '#D0D0D0'}
                />
            </div>
        </div>
    )
}
