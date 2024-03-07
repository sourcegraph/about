import { FunctionComponent, ReactNode, useEffect, useRef } from 'react'

import classNames from 'classnames'
import CloseIcon from 'mdi-react/CloseIcon'
import useOnClickOutside from 'use-onclickoutside'

import { Portal } from './Portal'

interface Modal {
    title?: string
    children: ReactNode
    open: boolean
    handleClose: () => void
    showCloseIcon?: boolean
    modalClassName?: string
    modalBackdropClassName?: string
}

export const Modal: FunctionComponent<Modal> = ({
    title,
    children,
    open,
    handleClose,
    showCloseIcon = false,
    modalClassName,
    modalBackdropClassName,
}) => {
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
                    'fixed top-0 left-0 z-[9999] flex h-full w-full items-center justify-center px-sm',
                    {
                        hidden: !open,
                        'block animate-fadeIn': open,
                    },
                    modalBackdropClassName
                )}
            >
                <div className="relative flex items-center">
                    <div className="sign-up-modal-gradient absolute z-10 h-[531.097px] w-[570.405px]" />
                    <div
                        className={classNames(
                            'relative z-20 mx-auto w-full max-w-[507px] rounded-md bg-white p-sm shadow-modal md:p-16',
                            modalClassName
                        )}
                        ref={modalReference}
                    >
                        {title && <h4 className="mb-md pr-lg">{title}</h4>}
                        {showCloseIcon && (
                            <CloseIcon
                                className="absolute top-6 right-6 cursor-pointer text-blurple-400"
                                onClick={handleClose}
                            />
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
