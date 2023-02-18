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
            {title && <h2 className="mb-3xl text-center md:mx-auto">{title}</h2>}

            <div
                className={classNames(
                    'grid gap-md grid-cols-1 lg:grid-cols-2 items-center',
                    autoAdvance ? 'justify-center' : 'lg:flex-row flex-col py-32'
                )}
            >
                {/* Mobile Image Caption (Button Label) */}
                {hasImages && (
                    <div className="mb-8 block lg:hidden lg:mb-0 md:mx-auto">
                        {carouselItems.map((item, index) => (
                            <h3
                                className={classNames(
                                    'hidden text-center',
                                    item === carouselHook.carouselItems.currentItem && 'block'
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
                            ? 'lg:flex flex-col justify-between hidden m-0 px-0'
                            : 'lg:flex hidden h-[550px]'
                    }
                >
                    <ArrowUpIcon
                        className="mb-6 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        onKeyDown={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                        role="button"
                        tabIndex={0}
                    />
                    {carouselItems.map((item, index) => (
                        <div
                            className={classNames(
                                'custom-carousel-item cursor-pointer display-5 max-w-[375px] py-2 mb-0',
                                animateTransition
                                    ? item === carouselHook.carouselItems.currentItem
                                        ? 'transition-all duration-500 ease-in-out text-black sg-border-gradient-saturn border-2 border-solid px-2'
                                        : 'text-gray-300'
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
                                    animateTransition ? 'text-lg' : 'font-normal',
                                    !animateTransition &&
                                        item === carouselHook.carouselItems.currentItem &&
                                        'font-bold'
                                )}
                            >
                                {item.title}
                            </h5>
                            {item.subtitle && <p className="mb-0">{item.subtitle}</p>}
                        </div>
                    ))}
                    <ArrowDownIcon
                        className="mt-6 cursor-pointer"
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
                        'relative flex items-center lg:justify-start justify-center',
                        hasImages
                            ? 'min-h-[500px]'
                            : animateTransition && !isMdOrDown
                            ? 'bg-gray-50 h-[550px]'
                            : 'min-h-[300px]'
                    )}
                >
                    {carouselItems.map(item => (
                        <div
                            key={item.title}
                            className={classNames(
                                'overflow-hidden',
                                animateTransition && 'absolute',
                                animateTransition
                                    ? item === carouselHook.carouselItems.currentItem
                                        ? 'transition-all duration-1000 ease-in-out opacity-100 xl:w-[450px] lg:w-[350px]'
                                        : 'opacity-0'
                                    : '',
                                !animateTransition
                                    ? item === carouselHook.carouselItems.currentItem
                                        ? 'block w-full'
                                        : 'hidden'
                                    : ''
                            )}
                        >
                            {!autoAdvance && (
                                <>
                                    <h1 className="lg:mb-6">{item.title}</h1>
                                </>
                            )}
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>

                {/* Mobile Indicators */}
                <div className="my-6 mx-auto lg:hidden flex items-center">
                    <ArrowLeftIcon
                        className="mr-6 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div className="flex">
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
                        className="ml-6 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel()}
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                </div>
            </div>
        </div>
    )
}
