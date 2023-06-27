import { useState, useEffect, RefObject } from 'react'

export const useInView = (elementRef: RefObject<Element>, customThreshold?: number): boolean => {
    const [isInView, setIsInView] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting)
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
