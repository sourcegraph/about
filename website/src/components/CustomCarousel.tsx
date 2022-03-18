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
    hideCarouselNav?: boolean
    smallPanel?: boolean
}

interface CarouselItem {
    backgroundClass?: string
    buttonLabel: string
    headerClass?: string
    text: string | ReactNode
    itemClass: string
}

const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const carouselMainStyles = 'd-flex flex-wrap'
    const carouselRightPanelStyles =
        'col-lg-6 col-md-8 col-sm-12 mt-lg-6 ml-md-6 px-lg-0 d-flex align-items-center align-items-lg-start'
    const autoAdvanceCarouselNavStyles = 'col-md-2 m-0 px-0 my-lg-3 col-lg-5 d-flex flex-column'
    const { items, autoAdvance, title } = props
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const currentCarousel = carouselHook.carouselItems as CarouselProps

    return (
        <div className="custom-carousel pb-lg-7 pb-6">
            {title && <h2 className="carousel-title w-50 font-weight-bold mt-lg-3 ml-lg-6 mb-5">{title}</h2>}
            <div
                className={
                    autoAdvance && props.smallPanel
                        ? classNames(
                              carouselMainStyles,
                              currentCarousel.currentItem?.backgroundClass,
                              'justify-content-between height-x-lg-450 height-lg-700 height-md-700 height-sm-auto'
                          )
                        : autoAdvance
                        ? classNames(
                              carouselMainStyles,
                              currentCarousel.currentItem?.backgroundClass,
                              'justify-content-between height-x-lg-450 height-lg-850 height-md-850 height-sm-auto'
                          )
                        : classNames(carouselMainStyles, currentCarousel.currentItem?.backgroundClass, 'py-8 py-lg-8')
                }
            >
                <div
                    className={
                        carouselHook.autoAdvance && props.hideCarouselNav
                            ? classNames(autoAdvanceCarouselNavStyles, 'carousel-nav')
                            : autoAdvance
                            ? classNames(autoAdvanceCarouselNavStyles)
                            : 'carousel-nav ml-lg-7 col-lg-4 ml-md-5'
                    }
                >
                    <ArrowUpIcon
                        className="ml-lg-6 mb-4 d-lg-flex d-md-flex d-none"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <ul className="ml-lg-5 mb-0">
                        {carouselItems.map((item, index) => (
                            <li
                                className={
                                    item === carouselHook.carouselItems.currentItem
                                        ? 'custom-carousel-item active'
                                        : 'custom-carousel-item'
                                }
                                key={index}
                                onClick={() => carouselHook.moveCarousel(index)}
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
                            ? classNames(
                                  carouselRightPanelStyles,
                                  'height-x-lg-500 height-lg-500 height-md-350 height-sm-350'
                              )
                            : autoAdvance
                            ? classNames(
                                  carouselRightPanelStyles,
                                  'height-x-lg-500 height-lg-500 height-md-500 height-sm-550'
                              )
                            : classNames(carouselRightPanelStyles)
                    }
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={index}
                            className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                            onMouseOver={() => carouselHook.moveCarousel(index)}
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
                        {carouselItems.map((item, index) => (
                            <CircleSmallIcon
                                color={item === carouselHook.carouselItems.currentItem ? '#000' : '#D0D0D0'}
                                key={index}
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

export default CustomCarousel
