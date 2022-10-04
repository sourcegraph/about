import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

interface Tooltip {
    text: string
    position: 'top' | 'bottom' | 'right' | 'left'
    color?: 'light' | 'dark'
    children: ReactNode
}

export const Tooltip: FunctionComponent<Tooltip> = ({ text, position, color = 'light' , children }) => {
    const node = useRef<HTMLDivElement | null>(null)
    const [isVisible, setVisibility] = useState(false)

    const handleHover = ({ target }): void => {
        if (node?.current?.contains(target)) {
            // inside hover
            return;
        }
        // outside hover
        setVisibility(false)
    }

    useEffect(() => {
        document.addEventListener('hover', handleHover)
        return () => document.removeEventListener('hover', handleHover)
    }, [])

    // TODO: Style, theme color, z-index, arrow

    return (
        <div
            ref={node}
            onMouseEnter={() => setVisibility(!isVisible)}
            onMouseLeave={() => setVisibility(!isVisible)}
            className="tw-my-auto"
        >
            <div className="tw-cursor-pointer">{children}</div>
            {isVisible && (
                <div>
                    {text}
                </div>
            )}
        </div>
    )
}
