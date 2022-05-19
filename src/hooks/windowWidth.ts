import { useEffect, useState } from 'react'

export const useWindowWidth = (): number => {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        setWindowWidth(window.innerWidth)

        const resizeListener = (): void => setWindowWidth(window.innerWidth)

        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener('resize', resizeListener)
        }
    }, [])

    return windowWidth
}
