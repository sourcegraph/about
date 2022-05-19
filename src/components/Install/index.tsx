import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import { buttonStyle, buttonLocation } from '@data'

import { ReactComponent as CopyIcon } from './copyIcon.svg'

import styles from './install.module.scss'

const installText =
    'docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:3.39.1'

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
        <div className={classNames(styles.windowUI, 'bg-white overflow-hidden')}>
            <div className={classNames(styles.windowActions, 'd-flex align-items-center px-4')}>
                {['close', 'minimize', 'fullscreen'].map(action => (
                    <span key={action} className={classNames(styles.windowAction, 'bg-white rounded-circle mr-2')} />
                ))}
            </div>

            <div className="p-5">
                <h3 className="font-weight-bold">
                    Install Sourcegraph locally
                    <span
                        onClick={copy}
                        onKeyDown={copy}
                        role="button"
                        className={classNames(styles.icon, 'icon-inline ml-4 align-text-top')}
                        tabIndex={0}
                    >
                        <CopyIcon />
                    </span>
                </h3>

                <code className="d-block my-4 pr-5 text-lg">
                    <small className={copied ? classNames(styles.flashBackground, 'text-break') : 'text-break'}>
                        {installText}
                    </small>
                </code>

                <a
                    className="d-inline-block text-lg"
                    href="https://docs.sourcegraph.com"
                    data-button-style={buttonStyle.textWithArrow}
                    data-button-location={buttonLocation.trySourcegraph}
                    data-button-type="cta"
                >
                    Deploy to a server or cluster
                </a>
            </div>
        </div>
    )
}
