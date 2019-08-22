import React, { useLayoutEffect, useRef, useState } from 'react'
import Overlay, { Placement } from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'

export const HoverablePopover: React.FunctionComponent<{
    delay?: number | { show: number; hide: number }
    placement?: Placement
    onMouseEnter?: () => void
    children: React.ReactElement
    component: React.ReactNode
}> = ({ delay = 0, placement, children, component }) => {
    const targetRef = useRef<HTMLDivElement>(null)
    const [target, setTarget] = useState<HTMLDivElement | null>(null)
    useLayoutEffect(() => setTarget(targetRef.current))

    const [isOpen, setIsOpen] = useState(false)

    const setIsOpenTrue = () => setIsOpen(true)
    const setIsOpenFalse = () => setIsOpen(false)

    const child = React.Children.only(children)
    const triggerProps = {
        onClick: setIsOpenTrue,
        onFocus: setIsOpenTrue,
        onBlur: setIsOpenFalse,
        onMouseOver: setIsOpenTrue,
        onMouseOut: setIsOpenFalse,
    }

    return (
        <span ref={targetRef}>
            {child && React.cloneElement(child, triggerProps)}
            <Overlay show={isOpen} placement={placement} target={target || undefined}>
                <Popover onMouseEnter={setIsOpenTrue} onMouseLeave={setIsOpenFalse} id="popover">
                    {component}
                </Popover>
            </Overlay>
        </span>
    )
}
