import React, { useEffect, useRef, FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import Prism from 'prismjs'

import { BlinkCursor } from './BlinkCursor'

interface CodeHighlighterProps {
    children?: ReactNode
    text?: string
    highlighted?: boolean
    inline?: boolean
    showCursor?: boolean
}
export const CodeHighlighter: FunctionComponent<CodeHighlighterProps> = ({
    children,
    text,
    highlighted = true,
    inline = false,
    showCursor = false,
}) => {
    const codeRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
        }
    }, [text])

    return (
        <div
            className={classNames('cody-animation relative m-0 p-0', {
                'apply-gray': !highlighted,
                'inline-block': inline,
            })}
        >
            <pre>
                <code ref={codeRef} className="language-javascript">
                    {text || children}
                </code>
                {showCursor && (
                    <div className="absolute inline-block pl-0.5">
                        <BlinkCursor />
                    </div>
                )}
            </pre>
        </div>
    )
}
