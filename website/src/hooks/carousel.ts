import { useEffect, useState, ReactNode, useCallback } from 'react'

interface CarouselItems {
    items: CarouselItem[] | Template[]
    currentItem?: CarouselItem | ReactNode
    previousItem?: CarouselItem | ReactNode
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

interface Template {
    header: string
    description: string
    queries: ReactNode[]
}

interface CarouselHookObject {
    autoAdvance: boolean
    isAdvancing: boolean
    moveCarousel: (itemOrDirection?: number | string) => void
    carouselItems: CarouselItems
}


export const useCarousel = (initialItems: CarouselItem[] | Template[], iniitialAutoAdvance: boolean): CarouselHookObject => {
    const [carouselItems, setCarouselItems] = useState<CarouselItems>({
        currentItemIndex: 0,
        currentItem: initialItems[0],
        items: initialItems,
    })
    const [autoAdvance, setAutoAdance] = useState<boolean>(iniitialAutoAdvance ?? false)
    const [isRunning, setIsRunning] = useState<boolean>(autoAdvance)
    const [isAdvancing, setIsAdvancing] = useState<boolean>(true)

    let intervalId: number | undefined = undefined
    const updateCurrentItem = (index: number): void => {
        setCarouselItems(prevState => ({
            ...carouselItems,
            currentItemIndex: index,
            currentItem: carouselItems.items[index],
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

    return {
        autoAdvance,
        isAdvancing,
        moveCarousel,
        carouselItems,
    }
}
