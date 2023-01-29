import { FunctionComponent, ReactNode, useEffect, useState } from 'react'

import classNames from 'classnames'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

import { breakpoints } from '../../data/breakpoints'
import { useCarousel } from '../../hooks/carousel'
import { useWindowWidth } from '../../hooks/windowWidth'

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
    animateTransition = false,
}) => {
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const [currentItem, setCurrentItem] = useState(carouselItems[0])

    useEffect(() => {
        setCurrentItem(carouselHook.carouselItems.currentItem as CarouselItem)
    }, [carouselHook.carouselItems.currentItem])

    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    return (
        <div>
            {title && <h2 className="tw-mb-3xl tw-text-center md:tw-mx-auto">{title}</h2>}

            <div
                className={classNames(
                    'tw-flex flex-wrap tw-items-center',
                    autoAdvance ? 'tw-justify-center' : 'lg:tw-flex-row tw-flex-col py-8'
                )}
            >
                {/* Mobile Image Caption (Button Label) */}
                {hasImages && (
                    <div className="mb-5 tw-block lg:tw-hidden mb-lg-0 md:tw-mx-auto">
                        {carouselItems.map((item, index) => (
                            <h3
                                className={classNames(
                                    'tw-hidden tw-text-center',
                                    item === carouselHook.carouselItems.currentItem && 'tw-block'
                                )}
                                key={item.title}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.title}
                            </h3>
                        ))}
                    </div>
                )}

                {/* Web Indicators */}
                <div
                    className={
                        carouselHook.autoAdvance
                            ? 'lg:tw-flex tw-flex-col tw-justify-between tw-hidden col-md-2 m-0 tw-px-0 col-lg-5'
                            : 'lg:tw-flex tw-hidden ml-lg-7 col-lg-4 h-550'
                    }
                >
                    <ArrowUpIcon
                        className="mb-4 tw-cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        onKeyDown={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                        role="button"
                        tabIndex={0}
                    />
                    {carouselItems.map((item, index) => (
                        <div
                            className={classNames(
                                'custom-carousel-item tw-cursor-pointer display-5 max-w-375 py-2 tw-mb-0',
                                animateTransition
                                    ? item === carouselHook.carouselItems.currentItem
                                        ? 'tw-transition-all tw-duration-500 tw-ease-in-out tw-text-black sg-border-gradient-saturn tw-border-2 tw-border-solid tw-px-2'
                                        : 'tw-text-gray-300'
                                    : '',
                                index !== carouselItems.length - 1 ? 'mb-2' : 'mb-0'
                            )}
                            key={item.title}
                            onClick={() => carouselHook.moveCarousel(index)}
                            onKeyDown={() => carouselHook.moveCarousel(index)}
                            onMouseEnter={() => carouselHook.moveCarousel(index)}
                            role="button"
                            tabIndex={0}
                        >
                            <h5
                                className={classNames(
                                    'mb-1',
                                    animateTransition ? 'tw-text-lg' : 'font-weight-normal',
                                    !animateTransition &&
                                        item === carouselHook.carouselItems.currentItem &&
                                        'font-weight-bold'
                                )}
                            >
                                {item.title}
                            </h5>
                            {item.subtitle && <p className="mb-0">{item.subtitle}</p>}
                        </div>
                    ))}
                    <ArrowDownIcon
                        className="mt-4 tw-cursor-pointer"
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
                        'tw-relative col-lg-5 col-md-10 col-sm-12 p-4 py-5 tw-flex tw-items-center lg:tw-justify-start tw-justify-center',
                        hasImages
                            ? 'tw-min-h-[500px]'
                            : animateTransition && !isMdOrDown
                            ? 'tw-bg-gray-50 h-550'
                            : 'tw-min-h-[300px]'
                    )}
                >
                    {carouselItems.map(item => (
                        <div
                            key={item.title}
                            className={classNames(
                                animateTransition && 'tw-absolute',
                                animateTransition
                                    ? item === carouselHook.carouselItems.currentItem
                                        ? 'tw-transition-all tw-duration-1000 tw-ease-in-out tw-opacity-100 w-xl-450 w-lg-350'
                                        : 'tw-opacity-0'
                                    : '',
                                !animateTransition
                                    ? item === carouselHook.carouselItems.currentItem
                                        ? 'tw-block'
                                        : 'tw-hidden'
                                    : ''
                            )}
                        >
                            {!autoAdvance && (
                                <>
                                    <h1 className="mb-lg-4">{item.title}</h1>
                                </>
                            )}
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>

                {/* Mobile Indicators */}
                <div className="my-4 tw-mx-auto lg:tw-hidden tw-flex tw-items-center">
                    <ArrowLeftIcon
                        className="mr-4 tw-cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div className="tw-flex">
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
                        className="ml-4 tw-cursor-pointer"
                        onClick={() => carouselHook.moveCarousel()}
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                </div>
            </div>
        </div>
    )
}
