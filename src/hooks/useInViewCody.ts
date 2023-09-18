import { useState, useEffect, useRef, RefObject } from 'react'

interface OptionsProp {
    bottomOffset: number
    viewportHeightOffset: number
}

export const useInViewCody = (ref: RefObject<HTMLDivElement>, options?: OptionsProp): boolean => {
    const [isInView, setIsInView] = useState(false)
    const outOfTheWindow = useRef(false)

    useEffect(() => {
        const handleScroll = (): void => {
            if (ref.current) {
                const { top, bottom } = ref.current.getBoundingClientRect()
                const windowHeight = window.innerHeight

                const bottomOffset = options?.bottomOffset ?? 0
                const viewportHeightOffset = options?.viewportHeightOffset ?? 0

                if (top > windowHeight / 2) {
                    return
                }

                if (bottom + bottomOffset < windowHeight / 2 && isInView && !outOfTheWindow.current) {
                    setIsInView(false)
                    outOfTheWindow.current = true
                } else {
                    if (bottom + viewportHeightOffset >= windowHeight / 2 && outOfTheWindow.current) {
                        outOfTheWindow.current = false
                    }
                    if (!outOfTheWindow.current && !isInView) {
                        setIsInView(true)
                    }
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [ref, isInView, options])

    return isInView
}
