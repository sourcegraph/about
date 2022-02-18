import React, { FunctionComponent, useState, useEffect, useCallback, ReactNode } from 'react'
import { TemplateCodeBlock } from './TemplateCodeBlock'
import ArrowLeftIcon from 'mdi-react/ArrowLeftIcon'
import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import CircleSmallIcon from 'mdi-react/CircleSmallIcon'

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
                    color={isAdvancing ? '#D0D0D0' : '#000'}
                />
                <div>
                    {carouselItems.items.map(item => (
                        <CircleSmallIcon color={item === carouselItems.currentItem ? '#000' : '#D0D0D0'} key={item.header} />
                    ))}
                </div>
                <ArrowRightIcon
                    className="ml-4"
                    onClick={() => advanceCarousel()}
                    color={isAdvancing ? '#000' :'#D0D0D0'}
                />
            </div>
        </div>       
    )
}
