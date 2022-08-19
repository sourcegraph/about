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
                    'tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black/50 tw-flex tw-items-center tw-justify-center tw-z-[9999] tw-px-sm',
                    { 'tw-hidden': !open, 'tw-block tw-animate-fadeIn': open }
                )}
            >
                <div
                    className="tw-relative tw-max-w-2xl tw-w-full tw-mx-auto tw-bg-white tw-p-lg tw-rounded-lg"
                    ref={modalReference}
                >
                    <h4 className="tw-mb-md tw-pr-lg">{title}</h4>
                    <CloseIcon
                        className="tw-absolute tw-top-6 tw-right-6 tw-text-blurple-400 tw-cursor-pointer"
                        onClick={handleClose}
                    />
                    {children}
                </div>
            </div>
        </Portal>
    )
}
