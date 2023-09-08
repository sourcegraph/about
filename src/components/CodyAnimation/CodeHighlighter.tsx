import React, { useEffect, useRef, FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import Prism from 'prismjs'

interface CodeHighlighterProps {
    children?: ReactNode
    text?: string
    styled?: boolean
    inline?: boolean
}
export const CodeHighlighter: FunctionComponent<CodeHighlighterProps> = ({
    children,
    text,
    styled = true,
    inline = false,
}) => {
    const codeRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current)
        }
    }, [text])

    return (
        <div
            className={classNames('cody-animation m-0 p-0', {
                'apply-gray': !styled,
                'inline-block': inline,
            })}
        >
            <pre>
                <code ref={codeRef} className="language-javascript">
                    {text || children}
                </code>
            </pre>
        </div>
    )
}
