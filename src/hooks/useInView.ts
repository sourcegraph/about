import { useState, useEffect, useRef, RefObject } from 'react'

export const useInView = (elementRef: RefObject<HTMLElement>, customThreshold?: number): boolean => {
    const [isInView, setIsInView] = useState(false)
    // Make sure that the animaton don't trigger every time the element enter the viewport
    const hasAppared = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!hasAppared.current && entry.isIntersecting) {
                    setIsInView(true)
                    hasAppared.current = true
                }
            },
            { threshold: customThreshold || 1 }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [elementRef, customThreshold])

    return isInView
}
