import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

interface Tooltip {
    text: string
    position: 'top' | 'bottom' | 'right' | 'left'
    children: ReactNode
}

export const Tooltip: FunctionComponent<Tooltip> = ({ text, position, children }) => {
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

    // TODO: z-index, arrow position

    // onMouseLeave={() => setVisibility(!isVisible)}
    return (
        <>
            <div
                ref={node}
                onMouseEnter={() => setVisibility(!isVisible)}
                className="tw-cursor-pointer tw-my-auto"
            >
                {children}
            </div>
            {isVisible && (
                <div className="tooltip tw-relative tw-z-[9999] -tw-top-10 tw-left-10 tw-max-w-[250px] tw-p-xxs tw-shadow-lg tw-bg-gray-400 tw-white tw-opacity-100 tw-text-white tw-rounded-md">
                    {text}
                </div>
            )}
        </>
    )
}
