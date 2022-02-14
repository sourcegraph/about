import React, { FunctionComponent, useState, useEffect, useCallback } from 'react'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

interface CarouselProps {
    items: CarouselItem[]
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
    text: string
    itemClass: string
}

const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const { items, autoAdvance } = props
    const [carouselItems, setCarouselItems] = useState<CarouselProps>({
        currentItemIndex: 0,
        currentItem: items[0],
        items,
    })
    const [isRunning, setIsRunning] = useState<boolean>(autoAdvance ?? false)
    let intervalId: number | undefined = undefined
    const updateCurrentItem = (index: number): void => {
        setCarouselItems(prevState => ({
            ...carouselItems,
            currentItemIndex: index,
            currentItem: items[index],
        }))
    }
    const setCurrentIndex = (action?: string): void => {
        let index = carouselItems.currentItemIndex ?? 0
        if (action === 'decrement') {
            index = index === 0
                ? carouselItems.items.length - 1
                : index -= 1
        } else {
            index = index >= carouselItems.items.length - 1
                ? 0
                : index += 1
        }

        updateCurrentItem(index)
    }
    const stopCarousel = () => {
        setIsRunning(false)
        clearInterval(intervalId)
    }
    const advanceCarousel = (itemOrDirection?: number | string): void => {
        stopCarousel()
        typeof itemOrDirection === 'number'
            ? updateCurrentItem(itemOrDirection)
            : itemOrDirection && typeof itemOrDirection === 'string'
            ? setCurrentIndex(itemOrDirection)
            : setCurrentIndex()
    }
    const startCarouselInterval = useCallback(() => {
        intervalId = setInterval(setCurrentIndex, 5000)
    }, [carouselItems.currentItemIndex])

    useEffect(() => {
        if (isRunning) {
            startCarouselInterval()
        }
        
        return () => clearInterval(intervalId)
    }, [carouselItems.currentItemIndex])

    return (
        <div className={`custom-carousel d-flex flex-wrap ${carouselItems.currentItem?.backgroundClass ?? ''}`}>
            <div className="carousel-nav col-lg-4 col-md-2 ml-lg-7 ml-md-5">
                <ArrowUpIcon
                    className="ml-lg-6 mb-4"
                    onClick={() => advanceCarousel('decrement')}
                />
                <ul className="ml-lg-3">
                    {carouselItems.items.map(item => (
                        <li
                            className={item === carouselItems.currentItem ? 'active' : ''}
                            key={item.id}
                            onClick={() => advanceCarousel(item.id)}
                        >
                            {item.buttonLabel}
                        </li>
                    ))}
                </ul>
                <ArrowDownIcon
                    className="ml-lg-6 mt-4"
                    onClick={() => advanceCarousel()}
                />
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 mt-lg-5 ml-md-6">
                {carouselItems.items.map(item => (
                    <div key={item.id} className={item === carouselItems.currentItem ? 'd-block' : 'd-none'}>
                        <h1 className="display-2 mb-lg-4">{item.buttonLabel}</h1>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="carousel-nav-mobile mx-auto">
                <ArrowLeftIcon
                    className="mr-4"
                    onClick={() => advanceCarousel('decrement')}
                />
                <ArrowRightIcon
                    className="ml-4"
                    onClick={() => advanceCarousel()}
                />
            </div>
        </div>       
    )
}

export default CustomCarousel
