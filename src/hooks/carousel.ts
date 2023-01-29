import { useEffect, useState, ReactNode, useCallback, useRef } from 'react'

import { Template } from '../components'

interface CarouselItems {
    items: CarouselItem[] | ReactNode[] | Template[]
    currentItem?: CarouselItem | ReactNode | Template
    previousItem?: CarouselItem | ReactNode | Template
    currentItemIndex?: number
    autoAdvance?: boolean
}

interface CarouselItem {
    title: string
    subtitle?: string
    text: string | ReactNode
}

interface CarouselHookObject {
    autoAdvance: boolean
    isAdvancing: boolean
    moveCarousel: (itemOrDirection?: number | string) => void
    carouselItems: CarouselItems
}

export const useCarousel = (
    initialItems: CarouselItem[] | ReactNode[] | Template[],
    initialAutoAdvance: boolean
): CarouselHookObject => {
    const [carouselItems, setCarouselItems] = useState<CarouselItems>({
        currentItemIndex: 0,
        currentItem: initialItems[0],
        items: initialItems,
    })
    const [autoAdvance, setAutoAdance] = useState<boolean>(initialAutoAdvance ?? false)
    const [isRunning, setIsRunning] = useState<boolean>(autoAdvance)
    const [isAdvancing, setIsAdvancing] = useState<boolean>(true)
    const intervalId = useRef<undefined | number | NodeJS.Timer | NodeJS.Timeout>()

    const updateCurrentItem = useCallback(
        (index: number) => {
            setCarouselItems(() => ({
                ...carouselItems,
                currentItemIndex: index,
                currentItem: carouselItems.items[index],
            }))
        },
        [carouselItems]
    )

    const setCurrentIndex = useCallback(
        (action?: string) => {
            let index = carouselItems.currentItemIndex ?? 0
            if (action === 'decrement') {
                setIsAdvancing(false)
                index = index === 0 ? carouselItems.items.length - 1 : (index -= 1)
            } else {
                setIsAdvancing(true)
                index = index >= carouselItems.items.length - 1 ? 0 : (index += 1)
            }

            updateCurrentItem(index)
        },
        [carouselItems.currentItemIndex, carouselItems.items.length, updateCurrentItem]
    )

    const stopCarousel = (): void => {
        setIsRunning(false)
        clearInterval(intervalId.current as NodeJS.Timeout)
    }
    const moveCarousel = (itemOrDirection?: number | string): void => {
        stopCarousel()
        if (typeof itemOrDirection === 'number') {
            updateCurrentItem(itemOrDirection)
        } else if (itemOrDirection && typeof itemOrDirection === 'string') {
            setCurrentIndex(itemOrDirection)
        } else {
            setCurrentIndex()
        }
    }

    const startCarouselInterval = useCallback(() => {
        intervalId.current = setInterval(setCurrentIndex, 5000)
    }, [setCurrentIndex])

    useEffect(() => {
        if (isRunning) {
            startCarouselInterval()
        }

        return () => clearInterval(intervalId.current as NodeJS.Timer)
    }, [carouselItems.currentItemIndex, isRunning, intervalId, startCarouselInterval])

    return {
        autoAdvance,
        isAdvancing,
        moveCarousel,
        carouselItems,
    }
}
