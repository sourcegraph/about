import { useState, useEffect, ReactPortal, ReactNode } from 'react'

import { createPortal } from 'react-dom'

interface Portal {
    children: ReactNode
    id?: string
}

function createWrapper(id: string): HTMLDivElement {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', id)
    document.body.append(wrapperElement)

    return wrapperElement
}

export const Portal = ({ children, id = 'portal' }: Portal): ReactPortal | null => {
    const [wrapperElement, setWrapperElement] = useState<Element | null>(null)

    useEffect(() => {
        let element = document.querySelector(`#${id}`)
        let created = false

        if (!element) {
            created = true
            element = createWrapper(id)
        }
        setWrapperElement(element)

        return () => {
            if (created && element) {
                element.remove()
            }
        }
    }, [id])

    if (wrapperElement === null) {
        return null
    }

    return createPortal(children, wrapperElement)
}
