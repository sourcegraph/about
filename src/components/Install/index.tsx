import { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import { buttonStyle, buttonLocation } from '../../data/tracking'
import { copy } from '../../lib/utils'

import { ReactComponent as CopyIcon } from './copyIcon.svg'

const installText =
    'docker run --publish 7080:7080 --publish 127.0.0.1:3370:3370 --rm --volume ~/.sourcegraph/config:/etc/sourcegraph --volume ~/.sourcegraph/data:/var/opt/sourcegraph sourcegraph/server:5.2.3'

export const Install: FunctionComponent = () => {
    const [copied, setCopied] = useState(false)
    const [close, setClose] = useState(false)

    const handleCopy = (): void => {
        copy(installText)
            .then(() => setCopied(true))
            .catch(() => setCopied(false))
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
            className={classNames('overflow-hidden rounded-[20px] bg-white shadow-[-4px_4px_10px_0_rgba(0,0,0,0.25)]', {
                'animate-fadeOutSlow': close,
            })}
        >
            <div className="flex h-11 items-center bg-[#f1f1f1] px-4">
                {['close', 'minimize', 'fullscreen'].map(action => (
                    <span
                        key={action}
                        className={classNames('mr-2 h-3.5 w-3.5 rounded-full bg-white', {
                            'hover:bg-vermillion-300': action === 'close',
                            'cursor-help hover:bg-lemon-300': action === 'minimize',
                            'cursor-help hover:bg-green-400': action === 'fullscreen',
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
                        onClick={handleCopy}
                        onKeyDown={handleCopy}
                        role="button"
                        className="ml-4 align-text-top"
                        tabIndex={0}
                    >
                        <CopyIcon className="inline h-9 w-9 align-text-top" />
                    </span>
                </h3>

                <code className="my-6 block bg-white pr-8 text-lg">
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
