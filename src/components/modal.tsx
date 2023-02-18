import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'

import classNames from 'classnames'
import CloseIcon from 'mdi-react/CloseIcon'
import useOnClickOutside from 'use-onclickoutside'

import { Portal } from './Portal'

interface Modal {
    title: string
    children: ReactNode
    open: boolean
    handleClose: () => void
}

export const Modal: FunctionComponent<Modal> = ({ title, children, open, handleClose }) => {
    const modalReference = useRef(null)
    useOnClickOutside(modalReference, handleClose)

    useEffect(() => {
        const closeOnEscapeKey = (event: { key: string }): void | null =>
            event.key === 'Escape' ? handleClose() : null
        document.body.addEventListener('keydown', closeOnEscapeKey)

        if (open) {
            document.body.style.overflowY = 'hidden'
            document.documentElement.style.overflowY = 'hidden'
            document.body.style.position = 'relative'
        }

        return () => {
            document.body.removeEventListener('keydown', closeOnEscapeKey)
            document.body.style.removeProperty('overflow-y')
            document.documentElement.style.removeProperty('overflow-y')
            document.body.style.removeProperty('position')
        }
    }, [handleClose, open])

    return (
        <Portal>
            <div
                className={classNames(
                    'fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-[9999] px-sm',
                    { 'hidden': !open, 'block animate-fadeIn': open }
                )}
            >
                <div
                    className="relative max-w-2xl w-full mx-auto bg-white p-lg rounded-lg"
                    ref={modalReference}
                >
                    <h4 className="mb-md pr-lg">{title}</h4>
                    <CloseIcon
                        className="absolute top-6 right-6 text-blurple-400 cursor-pointer"
                        onClick={handleClose}
                    />
                    {children}
                </div>
            </div>
        </Portal>
    )
}
