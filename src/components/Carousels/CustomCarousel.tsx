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
    currentItem?: CarouselItem
    previousItem?: CarouselItem
    currentItemIndex?: number
    autoAdvance?: boolean
    showHeadlinesOnMobile?: boolean
}

interface CarouselItem {
    buttonLabel: string
    headerClass?: string
    text: string | ReactNode
    itemClass: string
}

export const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const carouselMainStyles = 'd-flex flex-wrap h-auto'
    const carouselRightPanelStyles =
        'col-lg-6 col-md-10 col-sm-12 mt-lg-6 px-0 m-auto d-flex align-items-center align-items-lg-start text-lg-left text-md-center'
    const { items, autoAdvance, title } = props
    const carouselHook = useCarousel(items, autoAdvance ?? false)
    const carouselItems = carouselHook.carouselItems.items as CarouselItem[]
    const currentCarousel = carouselHook.carouselItems as CarouselProps

    return (
        <div className="custom-carousel">
            {title && <h2 className="carousel-title text-md-center font-weight-bold mt-lg-3 pb-4">{title}</h2>}
            <div
                className={
                   classNames(
                        carouselMainStyles,
                        {
                            'justify-content-between h-xl-450 h-auto': autoAdvance,
                            'flex-lg-row flex-column py-8 py-lg-8': !autoAdvance,
                        }
                    )
                }
            >
                {props.showHeadlinesOnMobile && (
                    <ul className="d-block d-lg-none mb-lg-0 mb-5 mx-md-auto">
                        {carouselItems.map((item, index) => (
                            <h2
                                className={classNames('d-none', item === carouselHook.carouselItems.currentItem && 'd-block display-5 font-weight-bold')}
                                key={item.buttonLabel}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.buttonLabel}
                            </h2>
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
                        className="ml-lg-5 mb-4 d-lg-flex d-md-flex d-none"
                        onClick={() => carouselHook.moveCarousel('decrement')}
                        color={carouselHook.autoAdvance && carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                    <div className="ml-lg-5 mb-0">
                        {carouselItems.map((item, index) => (
                            <h5
                                className={classNames('custom-carousel-item font-weight-normal cursor-pointer display-5 py-3', item === carouselHook.carouselItems.currentItem && 'font-weight-bolder')}
                                key={item.buttonLabel}
                                onClick={() => carouselHook.moveCarousel(index)}
                                onKeyDown={() => carouselHook.moveCarousel(index)}
                                role="presentation"
                            >
                                {item.buttonLabel}
                            </h5>
                        ))}
                    </div>
                    <ArrowDownIcon
                        className="ml-lg-5 mt-4 d-lg-flex d-md-flex d-none"
                        onClick={() => carouselHook.moveCarousel()}
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                </div>
                <div className={`${carouselRightPanelStyles} h-auto`}>
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
                        color={carouselHook.autoAdvance && !carouselHook.isAdvancing ? '#D0D0D0' : '#000'}
                    />
                </div>
            </div>
        </div>
    )
}
