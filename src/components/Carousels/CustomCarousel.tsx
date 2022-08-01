import { FunctionComponent, ReactNode } from 'react'

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
    currentItem?: CarouselItem
    previousItem?: CarouselItem
    currentItemIndex?: number
    autoAdvance?: boolean
    hasImages?: boolean
}

interface CarouselItem {
    buttonLabel: string
    headerClass?: string
    text: ReactNode
    itemClass: string
}

export const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const { items, autoAdvance, title } = props
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]

    const windowWidth = useWindowWidth()
    const isMdOrDown = windowWidth < breakpoints.lg

    return (
        <div>
            {title && (
                <h2
                    className={classNames(
                        'display-3 text-md-center mx-md-auto max-w-700 font-weight-bold mt-lg-3',
                        props.hasImages ? 'mb-6' : 'mb-4',
                        isMdOrDown && 'text-uppercase text-base'
                    )}
                >
                    {title}
                </h2>
            )}
            <div
                className={`d-flex flex-wrap align-items-center h-auto ${
                    autoAdvance ? 'justify-content-between' : 'flex-lg-row flex-column py-8'
                }`}
            >
                {props.hasImages && (
                    <div className="d-block d-lg-none mb-lg-0 mb-5 mx-md-auto">
                        {carouselItems.map((item, index) => (
                            <h2
                                className={classNames(
                                    'd-none',
                                    item === carouselHook.carouselItems.currentItem &&
                                        'd-block display-5 font-weight-bold'
                                )}
                                key={item.buttonLabel}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.buttonLabel}
                            </h2>
                        ))}
                    </div>
                )}
                <div
                    className={
                        carouselHook.autoAdvance
                            ? 'd-lg-flex flex-column d-none col-md-2 m-0 px-0 col-lg-5'
                            : 'd-lg-flex d-none ml-lg-7 col-lg-4 ml-md-5'
                    }
                >
                    <ArrowUpIcon
                        className="ml-lg-5 mb-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div className="ml-lg-5 mb-0">
                        {carouselItems.map((item, index) => (
                            <p
                                className={classNames(
                                    'custom-carousel-item font-weight-normal cursor-pointer display-5 py-2',
                                    item === carouselHook.carouselItems.currentItem && 'font-weight-bolder'
                                )}
                                key={item.buttonLabel}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.buttonLabel}
                            </p>
                        ))}
                    </div>
                    <ArrowDownIcon
                        className="ml-lg-5 mt-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel()}
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                </div>
                <div
                    className={`${
                        props.hasImages ? 'h-500' : 'h-300'
                    } col-lg-6 col-md-10 col-sm-12 mt-4 px-0 m-auto d-flex align-items-center justify-content-lg-start justify-content-center`}
                >
                    {carouselItems.map((item, index) => (
                        <div
                            key={item.buttonLabel}
                            className={item === carouselHook.carouselItems.currentItem ? 'd-block' : 'd-none'}
                            onMouseOver={() => carouselHook.moveCarousel(index)}
                            onFocus={() => carouselHook.moveCarousel(index)}
                        >
                            {!autoAdvance && (
                                <h1 className={classNames('font-weight-bold mb-lg-4', !autoAdvance && 'display-2')}>
                                    {item.buttonLabel}
                                </h1>
                            )}
                            <div>{item.text}</div>
                        </div>
                    ))}
                </div>

                <div className="d-lg-none d-flex mx-auto my-4">
                    <ArrowLeftIcon
                        className="mr-4 cursor-pointer"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div>
                        {carouselItems.map(item => (
                            <CircleSmallIcon
                                color={item === carouselHook.carouselItems.currentItem ? '#000' : '#D0D0D0'}
                                key={item.buttonLabel}
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
