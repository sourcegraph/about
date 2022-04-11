import React, { useEffect, useState } from 'react'

import styles from './install.module.scss'

const installText = `
docker run
--publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm
--volume ~/.sourcegraph/config:/etc/sourcegraph
--volume ~/.sourcegraph/data:/var/opt/sourcegraph
sourcegraph/server:3.37.0
`

export const Install: React.FunctionComponent = () => {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(installText)
        } else {
            /**
             * Warning: execCommand is deprecated but we use it as a fallback.
             * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
             */
            const tempEl = document.createElement('textarea')
            document.body.appendChild(tempEl)
            tempEl.value = installText
            tempEl.select()
            document.execCommand('copy')
            document.body.removeChild(tempEl)
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
                <span onClick={copy} role="button">
                    <img src="/copy-text-icon.svg" alt="copy script to clipboard" className="icon-inline ml-4" />
                </span>
            </h4>

            <code>
                <small className={copied ? styles.flashBackground : ''}>{installText}</small>
            </code>
        </div>
    )
}
