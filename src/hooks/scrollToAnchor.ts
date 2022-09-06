import { useEffect } from 'react'

/**
 * This scrolls anchor links to their top position with a buffer to
 * compensate for our sticky nav height.
 */
export const useScrollToAnchor = (): void => {
    useEffect(() => {
        const scrollToElement = setTimeout(() => {
            const { hash } = window.location

            if (hash) {
                const element = document.querySelector(hash)
                const elementTop = element?.getBoundingClientRect().top
                const elementPosition: number =
                    (typeof elementTop === 'number' && elementTop + window.scrollY) || window.scrollY

                const topNav = document.querySelector('.navbar')
                const topNavHeight: number = topNav?.getBoundingClientRect().height || 0
                const scrollToPosition: number = elementPosition - topNavHeight

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                })
            }
        }, 100)

        return () => clearTimeout(scrollToElement)
    }, [])
}
