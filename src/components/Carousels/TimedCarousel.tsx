import * as React from 'react'
import { useState, useEffect } from 'react'

interface CarouselItem {
    title: string
    description: string
    text: React.ReactNode
}

interface TimedCarouselProps {
    items: CarouselItem[]
    autoAdvance?: boolean
}

export default function TimedCarousel({ items, autoAdvance = true }: TimedCarouselProps): JSX.Element {
    const [activeIndex, setActiveIndex] = useState(0)
    const [resetKey, setResetKey] = useState(0)

    useEffect(() => {
        if (!autoAdvance) {
            return
        }

        const timer = setInterval(() => {
            setActiveIndex(current => (current + 1) % items.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [autoAdvance, items.length, activeIndex])

    const handleItemClick = (index: number): void => {
        setActiveIndex(index)
        setResetKey(prev => prev + 1)
    }

    return (
        <div className="flex flex-col gap-6 lg:flex-row">
            <div className="w-full space-y-2 lg:w-1/2">
                {items.map((item, index) => (
                    <button
                        key={item.title}
                        type="button"
                        className={`relative block w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 p-5 text-left ${
                            activeIndex === index ? 'bg-white shadow-lg' : 'bg-white/10'
                        }`}
                        onClick={() => handleItemClick(index)}
                    >
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>

                        <TimedProgressBar isActive={activeIndex === index} resetKey={resetKey} />
                    </button>
                ))}
            </div>

            <div className="w-full lg:w-2/3">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg">
                    {items.map((item, index) => (
                        <div
                            key={item.title}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                activeIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        >
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

function TimedProgressBar({ isActive, resetKey }: { isActive: boolean; resetKey: number }): JSX.Element {
    const [activeSegments, setActiveSegments] = useState(0)

    useEffect(() => {
        setActiveSegments(0)

        if (!isActive) {
            return
        }

        const timer = setInterval(() => {
            setActiveSegments(current => {
                if (current >= 5) {
                    return 0
                }
                return current + 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isActive, resetKey])

    return (
        <div className="absolute inset-x-0 bottom-0 grid h-1 w-full grid-cols-5">
            {[...new Array<number>(5)].map((unused, index) => (
                <div
                    key={index}
                    className={`h-full transition-colors duration-200 ${
                        index < activeSegments ? 'bg-blurple-500' : 'bg-gray-200'
                    }`}
                />
            ))}
        </div>
    )
}
