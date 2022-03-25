import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import styles from './install.module.scss'

const installText = `
docker run
--publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm
--volume ~/.sourcegraph/config:/etc/sourcegraph
--volume ~/.sourcegraph/data:/var/opt/sourcegraph
sourcegraph/server:3.37.0
`

export const Install: FunctionComponent = () => {
    const [copied, setCopied] = useState(false)

    const copy = async (): Promise<void> => {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(installText)
        } else {
            /**
             * Warning: execCommand is deprecated but we use it as a fallback.
             * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
             */
            const element = document.createElement('textarea')
            document.body.append(element)
            element.value = installText
            element.select()
            // eslint-disable-next-line etc/no-deprecated
            document.execCommand('copy')
            element.remove()
        }

        setCopied(true)
    }

    useEffect(() => {
        const resetCopied = setTimeout(() => setCopied(false), 1000)
        return () => clearTimeout(resetCopied)
    }, [copied])

    return (
        <div className="bg-white p-5">
            <h4>
                Install Sourcegraph locally
                <span onClick={copy} role="button" onKeyUp={copy} tabIndex={0}>
                    <img src="/copy-text-icon.svg" alt="copy script to clipboard" className="icon-inline ml-4" />
                </span>
            </h4>

            <code>
                <small className={copied ? classNames(styles.flashBackground, 'text-break') : 'text-break'}>
                    {installText}
                </small>
            </code>
        </div>
    )
}
