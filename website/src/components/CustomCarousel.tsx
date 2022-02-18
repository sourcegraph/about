import { useCarousel } from '../hooks/carousel'
import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

interface CarouselProps {
    items: CarouselItem[]
    title?: string
    backgroundClass?: string
    currentItem?: CarouselItem
    previousItem?: CarouselItem
    currentItemIndex?: number
    autoAdvance?: boolean
}

interface CarouselItem {
    id: number
    backgroundClass: string
    buttonLabel: string
    headerClass: string
    text: string | ReactNode
    itemClass: string
}

const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const carouselLeftPanelStyles = 'carousel-nav col-md-2'
    const carouselRightPanelStyles = 'col-lg-6 col-md-8 col-sm-12 mt-lg-5 ml-md-6'
    const carouselMainStyles = 'custom-carousel d-flex flex-wrap'
    const { items, autoAdvance, title } = props
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const currentCarousel = carouselHook.carouselItems as CarouselProps

    return (
        <div className={classNames(carouselMainStyles, currentCarousel.currentItem?.backgroundClass)}>
            <div
                className={
                    carouselHook.autoAdvance
                        ? classNames(carouselLeftPanelStyles, 'm-0 col-lg-5')
                        : classNames(carouselLeftPanelStyles, 'ml-lg-7 col-lg-4 ml-md-5')
                }
            >
                {title && <h2 className="ml-lg-6 mb-5">{title}</h2>}
                <ArrowUpIcon
                    className={carouselHook.isAdvancing ? 'ml-lg-6 mb-4 opaque' : 'ml-lg-6 mb-4'}
                    onClick={() => carouselHook.moveCarousel('decrement')}
                />
                <ul className="ml-lg-3">
                    {carouselItems.map(item => (
                        <li
                            className={item === carouselHook.carouselItems.currentItem ? 'active' : ''}
                            key={item.id}
                            onClick={() => carouselHook.moveCarousel(item.id)}
                        >
                            {item.buttonLabel}
                        </li>
                    ))}
                </ul>
                <ArrowDownIcon
                    className={carouselHook.isAdvancing ? 'ml-lg-6 mt-4' : 'ml-lg-6 mt-4 opaque'}
                    onClick={() => carouselHook.moveCarousel()}
                />
            </div>
            <div className={classNames(carouselRightPanelStyles)}>
                {carouselItems.map(item => (
                    <div
                        key={item.id}
                        className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                    >
                        {!autoAdvance && (
                            <h1 className={autoAdvance ? 'mb-lg-4' : 'display-2 mb-lg-4'}>{item.buttonLabel}</h1>
                        )}
                        <div>{item.text}</div>
                    </div>
                ))}
            </div>

            <div className="carousel-nav-mobile mx-auto my-4">
                <ArrowLeftIcon
                    className={carouselHook.isAdvancing ? 'mr-4 opaque' : 'mr-4'}
                    onClick={() => carouselHook.moveCarousel('decrement')}
                />
                <div>
                    {carouselItems.map(item => (
                        <CircleSmallIcon
                            className={item === carouselHook.carouselItems.currentItem ? '' : 'opaque'}
                            key={item.id}
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

export default CustomCarousel
