import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import { buttonStyle, buttonLocation } from '../../data/tracking'

import { ReactComponent as CopyIcon } from './copyIcon.svg'

const installText =
    'docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:4.4.2'

export const Install: FunctionComponent = () => {
    const [copied, setCopied] = useState(false)
    const [close, setClose] = useState(false)

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

    useEffect(() => {
        const closeClicked = setTimeout(() => {
            if (close) {
                setClose(false)
            }
        }, 1000)
        return () => clearTimeout(closeClicked)
    }, [close])

    return (
        <div
            className={classNames(
                'bg-white rounded-[20px] overflow-hidden shadow-[-4px_4px_10px_0_rgba(0,0,0,0.25)]',
                {
                    'animate-fadeOutSlow': close,
                }
            )}
        >
            <div className="flex items-center px-4 bg-[#f1f1f1] h-11">
                {['close', 'minimize', 'fullscreen'].map(action => (
                    <span
                        key={action}
                        className={classNames('bg-white rounded-full mr-2 w-3.5 h-3.5', {
                            'hover:bg-vermillion-300': action === 'close',
                            'hover:bg-lemon-300 cursor-help': action === 'minimize',
                            'hover:bg-green-400 cursor-help': action === 'fullscreen',
                        })}
                        onClick={action === 'close' ? () => setClose(true) : undefined}
                        onKeyDown={action === 'close' ? () => setClose(true) : undefined}
                        role="button"
                        tabIndex={0}
                    />
                ))}
            </div>

            <div className="p-8">
                <h3>
                    Install Sourcegraph locally
                    <span
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onClick={copy}
                        // eslint-disable-next-line @typescript-eslint/no-misused-promises
                        onKeyDown={copy}
                        role="button"
                        className="ml-4 align-text-top"
                        tabIndex={0}
                    >
                        <CopyIcon className="inline align-text-top w-9 h-9" />
                    </span>
                </h3>

                <code className="block my-6 pr-8 text-lg bg-white">
                    <small className={classNames('break-words', { 'animate-flash-background': copied })}>
                        {installText}
                    </small>
                </code>

                <a
                    className="inline-block text-lg"
                    href="https://docs.sourcegraph.com"
                    title="Deploy to a server or cluster"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.trySourcegraph}
                    data-button-type="cta"
                >
                    Deploy to a server or cluster
                </a>
            </div>
        </div>
    )
}
