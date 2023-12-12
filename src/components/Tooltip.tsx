import { FunctionComponent, ReactNode, useRef, useState } from 'react'

import { BasePlacement } from '@popperjs/core'
import classNames from 'classnames'
import { usePopper } from 'react-popper'

interface Props {
    text: ReactNode
    placement?: BasePlacement
    children: ReactNode
    wrapperClassName?: string
    tooltipClassName?: string
}

export const Tooltip: FunctionComponent<Props> = ({
    text,
    children,
    wrapperClassName,
    tooltipClassName,
    placement = 'right',
}) => {
    const [showTooltip, setShowTooltip] = useState(false)
    const referenceElement = useRef<HTMLDivElement | null>(null)
    const popperElement = useRef<HTMLDivElement | null>(null)
    const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
        placement,
    })

    const handleMouseEnter = (): void => {
        setShowTooltip(true)
    }

    const handleMouseLeave = (): void => {
        setShowTooltip(false)
    }

    return (
        <>
            <div
                ref={referenceElement}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={wrapperClassName}
            >
                {children}
            </div>
            <div
                ref={popperElement}
                // eslint-disable-next-line react/forbid-dom-props
                style={styles.popper}
                {...attributes.popper}
                className={classNames(
                    tooltipClassName,
                    'ml-2.5 w-[170px] rounded-md border border-solid border-gray-200 bg-white py-2 px-3 font-normal text-gray-500 shadow-md',
                    'after:absolute after:h-[15px] after:w-[15px] after:rotate-45 after:border-solid after:border-gray-200 after:bg-white after:content-[""]',
                    {
                        'after:top-[43%] after:left-[-8px] after:border-b after:border-l': placement === 'right',
                        'mr-2.5 after:top-[43%] after:right-[-8px] after:border-t after:border-r': placement === 'left',
                        'mb-2.5 after:left-[43%] after:bottom-[-8px] after:border-b after:border-r':
                            placement === 'top',
                        'mt-2.5 after:left-[43%] after:top-[-8px] after:border-t after:border-l':
                            placement === 'bottom',
                    },
                    showTooltip ? 'visible' : 'invisible'
                )}
                role="tooltip"
            >
                {text}
            </div>
        </>
    )
}
