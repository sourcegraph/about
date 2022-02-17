import React, { FunctionComponent, useState, useEffect, useCallback, ReactNode } from 'react'
import { TemplateCodeBlock } from './TemplateCodeBlock'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'

interface TabCarouselProps {
    items: Template[]
    currentItem?: ReactNode
    previousItem?: ReactNode
    currentItemIndex?: number
    autoAdvance?: boolean
}

interface Template {
    header: string
    description: string
    queries: ReactNode[]
}

export const TabCarousel: FunctionComponent<TabCarouselProps> = ({ items, autoAdvance }) => {
    const [carouselItems, setCarouselItems] = useState<TabCarouselProps>({
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
        <div className="tab-carousel">
            <div>
                {carouselItems.items.map(item => (
                    <div key={Math.random()} className={item === carouselItems.currentItem ? 'd-block' : 'd-none'}>
                        <TemplateCodeBlock template={item}></TemplateCodeBlock>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center">
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
