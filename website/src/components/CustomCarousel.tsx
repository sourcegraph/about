import React, { FunctionComponent, useState, useEffect, useCallback, ReactNode } from 'react'
import classNames from 'classnames'
import ArrowUpIcon from 'mdi-react/ArrowUpIcon'
import ArrowDownIcon from 'mdi-react/ArrowDownIcon'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

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
    text: string | ReactNode
    itemClass: string
}

const CustomCarousel: FunctionComponent<CarouselProps> = props => {
    const carouselLeftPanelStyles ='carousel-nav col-md-2'
    const carouselRightPanelStyles = 'col-lg-6 col-md-8 col-sm-12 mt-lg-5 ml-md-6'
    const carouselMainStyles = 'custom-carousel d-flex flex-wrap'
    const { items, autoAdvance } = props
    const [carouselItems, setCarouselItems] = useState<CarouselProps>({
        currentItemIndex: 0,
        currentItem: items[0],
        items,
    })
    const backgroundClass = carouselItems.currentItem?.backgroundClass ?? ''
    const [isRunning, setIsRunning] = useState<boolean>(autoAdvance ?? false)
    const [isAdvancing, setIsAdvancing] = useState<boolean>(true)
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
            setIsAdvancing(false)
            index = index === 0
                ? carouselItems.items.length - 1
                : index -= 1
        } else {
            setIsAdvancing(true)
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
    const moveCarousel = (itemOrDirection?: number | string): void => {
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
        <div className={classNames(carouselMainStyles, backgroundClass)}>
            <div className={autoAdvance ? classNames(carouselLeftPanelStyles, 'm-0 col-lg-5') : classNames(carouselLeftPanelStyles, 'ml-lg-7 col-lg-4 ml-md-5')}>
                <ArrowUpIcon
                    className="ml-lg-6 mb-4"
                    onClick={() => moveCarousel('decrement')}
                    color={isAdvancing ? '#D0D0D0' : '#000'}
                />
                <ul className="ml-lg-3">
                    {carouselItems.items.map(item => (
                        <li
                            className={item === carouselItems.currentItem ? 'active' : ''}
                            key={item.id}
                            onClick={() => moveCarousel(item.id)}
                        >
                            {item.buttonLabel}
                        </li>
                    ))}
                </ul>
                <ArrowDownIcon
                    className="ml-lg-6 mt-4"
                    onClick={() => moveCarousel()}
                    color={isAdvancing ? '#000' :'#D0D0D0'}
                />
            </div>
            <div className={autoAdvance ? classNames(carouselRightPanelStyles, 'panel'): classNames(carouselRightPanelStyles)}>
                {carouselItems.items.map(item => (
                    <div key={item.id} className={item === carouselItems.currentItem ? 'd-block' : 'd-none'}>
                        <h1 className={autoAdvance ? "mb-lg-4" : "display-2 mb-lg-4"}>{item.buttonLabel}</h1>
                        <div>{item.text}</div>
                    </div>
                ))}
            </div>

            <div className="carousel-nav-mobile mx-auto my-4">
                <ArrowLeftIcon
                    className="mr-4"
                    onClick={() => moveCarousel('decrement')}
                    color={isAdvancing ? '#D0D0D0' : '#000'}
                />
                <div>
                    {carouselItems.items.map(item => (
                        <CircleSmallIcon color={item === carouselItems.currentItem ? '#000' : '#D0D0D0'} key={item.id} />
                    ))}
                </div>
                <ArrowRightIcon
                    className="ml-4"
                    onClick={() => moveCarousel()}
                    color={isAdvancing ? '#000' :'#D0D0D0'}
                />
            </div>
        </div>       
    )
}

export default CustomCarousel
