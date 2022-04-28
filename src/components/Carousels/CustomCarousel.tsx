import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

import { useCarousel } from '@hooks'

interface CarouselProps {
    items: CarouselItem[]
    title?: string
    backgroundClass?: string
    currentItem?: CarouselItem
    previousItem?: CarouselItem
    currentItemIndex?: number
    autoAdvance?: boolean
    smallPanel?: boolean
    showHeadlinesOnMobile?: boolean
}

interface CarouselItem {
    backgroundClass?: string
    buttonLabel: string
    headerClass?: string
    text: string | ReactNode
    itemClass: string
}

export const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const carouselMainStyles = 'd-flex flex-wrap'
    const carouselRightPanelStyles =
        'col-lg-6 col-md-8 col-sm-12 mt-lg-6 ml-md-6 px-lg-0 d-flex align-items-center align-items-lg-start'
    const { items, autoAdvance, title } = props
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const currentCarousel = carouselHook.carouselItems as CarouselProps

    return (
        <div className="custom-carousel">
            {title && <h2 className="carousel-title w-50 font-weight-bold mt-lg-3 ml-lg-6 mb-5">{title}</h2>}
            <div
                className={
                    autoAdvance && props.smallPanel
                        ? classNames(
                              carouselMainStyles,
                              currentCarousel.currentItem?.backgroundClass,
                              'justify-content-between h-xl-450 h-lg-250 h-md-250 h-sm-auto h-auto'
                          )
                        : autoAdvance
                        ? classNames(
                              carouselMainStyles,
                              currentCarousel.currentItem?.backgroundClass,
                              'justify-content-between h-xl-450 h-lg-auto h-md-auto h-sm-auto h-auto'
                          )
                        : classNames(
                              carouselMainStyles,
                              currentCarousel.currentItem?.backgroundClass,
                              'flex-lg-row flex-column py-8 py-lg-8'
                          )
                }
            >
                {props.showHeadlinesOnMobile && (
                    <ul className="d-block d-lg-none mb-0 h-md-100 h-sm-200 h-200">
                        {carouselItems.map((item, index) => (
                            <li
                                className={
                                    item === carouselHook.carouselItems.currentItem
                                        ? 'custom-carousel-item active'
                                        : 'custom-carousel-item'
                                }
                                key={item.buttonLabel}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.buttonLabel}
                            </li>
                        ))}
                    </ul>
                )}
                <div
                    className={
                        carouselHook.autoAdvance
                            ? 'carousel-nav col-md-2 m-0 px-0 my-lg-3 col-lg-5 d-flex flex-column'
                            : 'carousel-nav ml-lg-7 col-lg-4 ml-md-5'
                    }
                >
                    <ArrowUpIcon
                        className="ml-lg-6 mb-4 d-lg-flex d-md-flex d-none"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <ul className="ml-lg-4 mb-0">
                        {carouselItems.map((item, index) => (
                            <li
                                className={
                                    item === carouselHook.carouselItems.currentItem
                                        ? 'custom-carousel-item active'
                                        : 'custom-carousel-item'
                                }
                                key={item.buttonLabel}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.buttonLabel}
                            </li>
                        ))}
                    </ul>
                    <ArrowDownIcon
                        className="ml-lg-6 mt-4 d-lg-flex d-md-flex d-none"
                        onClick={() => carouselHook.moveCarousel()}
                        color={
                            carouselHook.autoAdvance && carouselHook.isAdvancing
                                ? '#000'
                                : carouselHook.autoAdvance && !carouselHook.isAdvancing
                                ? '#D0D0D0'
                                : '#000'
                        }
                    />
                </div>
                <div
                    className={
                        autoAdvance && props.smallPanel
                            ? classNames(carouselRightPanelStyles, 'h-xl-500 h-lg-300 h-md-300 h-sm-250 h-250')
                            : autoAdvance
                            ? classNames(carouselRightPanelStyles, 'h-xl-500 h-lg-500 h-md-500 h-sm-500 h-500')
                            : classNames(carouselRightPanelStyles)
                    }
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={item.buttonLabel}
                            className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                            onMouseOver={() => carouselHook.moveCarousel(index)}
                            onFocus={() => carouselHook.moveCarousel(index)}
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
                        className="mr-4"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div>
                        {carouselItems.map(item => (
                            <CircleSmallIcon
                                color={item === carouselHook.carouselItems.currentItem ? '#000' : '#D0D0D0'}
                                key={item.buttonLabel}
                            />
                        ))}
                    </div>
                    <ArrowRightIcon
                        className="ml-4"
                        onClick={() => carouselHook.moveCarousel()}
                        color={
                            carouselHook.autoAdvance && carouselHook.isAdvancing
                                ? '#000'
                                : carouselHook.autoAdvance && !carouselHook.isAdvancing
                                ? '#D0D0D0'
                                : '#000'
                        }
                    />
                </div>
            </div>
        </div>
    )
}
