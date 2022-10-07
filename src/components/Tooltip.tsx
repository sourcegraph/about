import { FunctionComponent, ReactNode, useState } from 'react'

interface Tooltip {
    text: string
    position: 'top' | 'bottom' | 'right' | 'left'
    children: ReactNode
}

export const Tooltip: FunctionComponent<Tooltip> = ({ text, position = 'right', children }) => {
    const [visible, setVisibility] = useState(false)

    return (
        <>
            <div
                onMouseEnter={() => setVisibility(!visible)}
                onMouseLeave={() => setVisibility(!visible)}
                onFocus={() => setVisibility(!visible)}
                onBlur={() => setVisibility(!visible)}
                className="tw-cursor-pointer tw-my-auto tooltip-wrapper"
                role="button"
                tabIndex={0}
            >
                {children}
                {visible && (
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
