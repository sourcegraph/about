import { FunctionComponent, useEffect } from 'react'

export interface DemioForm {
    formId: string
    formClassName: string
    buttonText?: string
}

/**
 * Loads a script element and appends it to the document head
 *
 * @returns - an HTML Script Element
 */
const loadScriptElement = (): Promise<HTMLScriptElement | Element | null> =>
    new Promise(resolve => {
        const scriptElement = document.querySelector('#demio-js')

        if (!scriptElement) {
            const newScriptElement = document.createElement('script')
            newScriptElement.setAttribute('id', 'demio-js')
            newScriptElement.setAttribute('async', '')
            newScriptElement.src = '//cdn.demio.com/production/dashboard/embed.bundle.js'

            document.head.append(newScriptElement)
            resolve(newScriptElement)
        }

        resolve(scriptElement)
    })

/**
 * The Demio form component.
 *
 * @returns - a span element with a className where the Demio form renders
 */
export const DemioForm: FunctionComponent<DemioForm> = ({
    formId,
    formClassName,
    buttonText = 'Submit',
}: DemioForm) => {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        loadScriptElement()

        return () => {
            const scriptElement = document.querySelector('#demio-js')
            scriptElement?.remove()
        }
    }, [formId, formClassName, buttonText])

    return (
        <div
            className={formClassName}
            data-hash={formId}
            data-text={buttonText}
            data-api="api/v1"
            data-base-uri="https://my.demio.com/"
            data-form-width="100%"
            data-color="#5033E1"
        />
    )
}
