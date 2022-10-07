import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

interface Tooltip {
    text: string
    position: 'top' | 'bottom' | 'right' | 'left'
    children: ReactNode
}

export const Tooltip: FunctionComponent<Tooltip> = ({ text, position = 'right', children }) => {
    const node = useRef<HTMLDivElement | null>(null)
    const [isVisible, setVisibility] = useState(false)

    const handleHover = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>): void => {
        if (node?.current?.contains(currentTarget)) {
            // inside hover
            return
        }
        // outside hover
        setVisibility(false)
    }

    useEffect(() => {
        document.addEventListener('hover', handleHover)
        return () => document.removeEventListener('hover', handleHover)
    }, [])

    // TODO: Dynamic positioning
    return (
        <>
            <div
                ref={node}
                onMouseEnter={() => setVisibility(!isVisible)}
                onMouseLeave={() => setVisibility(!isVisible)}
                className="tw-cursor-pointer tw-my-auto tooltip-wrapper"
            >
                {children}
                {isVisible && (
                    <div
                        className={`tooltip ${position} tw-min-w-[250px] tw-p-xxs tw-shadow-lg tw-bg-gray-400 tw-white tw-opacity-100 tw-text-white tw-rounded-md`}
                    >
                        {text}
                    </div>
                )}
            </div>
        </>
    )
}
