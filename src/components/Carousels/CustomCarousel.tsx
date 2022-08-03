import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

import classNames from 'classnames'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

import { breakpoints } from '@data'
import { useCarousel, useWindowWidth } from '@hooks'

interface CarouselProps {
    items: CarouselItem[]
    title?: string
    autoAdvance?: boolean
    hasImages?: boolean
    animateTransition?: boolean
}

interface CarouselItem {
    title: string
    subtitle?: string
    text: ReactNode
}

export const CustomCarousel: FunctionComponent<CarouselProps> = ({
    items,
    title,
    autoAdvance = true,
    hasImages,
    animateTransition = false
}) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const [currentItem, setCurrentItem] = useState(carouselItems[0])

    useEffect(() => {
        setCurrentItem(carouselHook.carouselItems.currentItem as CarouselItem)
    }, [carouselHook.carouselItems.currentItem])

    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg
    const isLgOrUp = windowWidth > breakpoints.md

    return (
        <div>
            {title && (
                <h2 className="display-3 text-md-center mx-md-auto max-w-700 font-weight-bold mt-lg-3 mb-6">
                    {title}
                </h2>
            )}

            <div
                className={classNames(
                  'd-flex flex-wrap align-items-center',
                  autoAdvance ? 'justify-content-center' : 'flex-lg-row flex-column py-8'
                )}
            >
                {/* Mobile Image Caption (Button Label) */}
                {hasImages && (
                    <div className="d-block d-lg-none mb-lg-0 mb-5 mx-md-auto">
                        {carouselItems.map((item, index) => (
                            <h2
                                className={classNames(
                                    'd-none',
                                    item === carouselHook.carouselItems.currentItem && 'd-block display-5 font-weight-bold'
                                )}
                                key={item.title}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.title}
                            </h2>
                        ))}
                    </div>
                )}

                {/* Web Indicators */}
                <div
                    className={
                        carouselHook.autoAdvance
                            ? 'd-lg-flex flex-column justify-content-between d-none col-md-2 m-0 px-0 col-lg-5'
                            : 'd-lg-flex d-none ml-lg-7 col-lg-4 h-550'
                    }
                >
                    <ArrowUpIcon
                        className="mb-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        onKeyDown={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                        role="button"
                        tabIndex={0}
                    />
                    {carouselItems.map((item, index) => (
                        <div
                            className={classNames(
                                'custom-carousel-item cursor-pointer display-5 max-w-375 py-2 mb-0',
                                animateTransition ? item === carouselHook.carouselItems.currentItem ? 'transition-5 text-black border-saturn border border-2 px-2' : 'text-gray-300' : '',
                                index !== (carouselItems.length - 1) ? 'mb-2' : 'mb-0'
                            )}
                            key={item.title}
                            onClick={() => carouselHook.moveCarousel(index)}
                            onKeyDown={() => carouselHook.moveCarousel(index)}
                            onMouseEnter={() => carouselHook.moveCarousel(index)}
                            role="button"
                            tabIndex={0}
                        >
                            <h5 className={classNames(
                                'mb-1',
                                animateTransition ? 'text-lg' : 'font-weight-normal',
                                !animateTransition && item === carouselHook.carouselItems.currentItem && 'font-weight-bold',
                            )}>
                                {item.title}
                            </h5>
                            {item.subtitle && <p className="mb-0">{item.subtitle}</p>}
                        </div>
                    ))}
                    <ArrowDownIcon
                        className="mt-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel()}
                        onKeyDown={() => carouselHook.moveCarousel()}
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                        role="button"
                        tabIndex={0}    
                    />
                </div>

                {/* Carousel Item */}
                <div
                    className={classNames(
                      'position-relative col-lg-5 col-md-10 col-sm-12 p-4 py-5 d-flex align-items-center justify-content-lg-start justify-content-center',
                      hasImages ? 'h-500' : animateTransition && !isMdOrDown ? 'bg-light-gray-5 h-550' : 'h-300'
                    )}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={classNames(
                                animateTransition && 'position-absolute',
                                animateTransition ? item === carouselHook.carouselItems.currentItem ? 'transition-1 opacity-100 w-xl-450 w-lg-350' : 'opacity-0' : '',
                                !animateTransition ? item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none' : ''
                            )}
                            onMouseOver={() => carouselHook.moveCarousel(index)}
                            onFocus={() => carouselHook.moveCarousel(index)}
                        >
                            {!autoAdvance && (
                                <h1 className={classNames('font-weight-bold mb-lg-4', !autoAdvance && 'display-2')}>
                                    {item.title}
                                </h1>
                            )}
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>

                {/* Mobile Indicators */}
                <div className="d-lg-none d-flex align-items-center mx-auto my-4">
                    <ArrowLeftIcon
                        className="mr-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div>
                        {carouselItems.map((item, index) => (
                            <CircleSmallIcon
                                color={item === carouselHook.carouselItems.currentItem ? '#000' : '#D0D0D0'}
                                onClick={() => carouselHook.moveCarousel(index)}
                                key={item.title}
                                size={50}
                                className="cursor-pointer"
                            />
                        ))}
                    </div>
                    <ArrowRightIcon
                        className="ml-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel()}
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                </div>
            </div>
        </div>
    )
}
