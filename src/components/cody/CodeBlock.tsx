import React, { FunctionComponent, CSSProperties } from 'react'

import classNames from 'classnames'

import styles from './cody-illustrations/CodeCompletions.module.css'
import { ColoredCode, WordStyle } from './ColoredCode'

interface GutterRange {
    from: number
    to: number
}

interface CodeBlockProps {
    code: string
    codeGenerated?: string
    wordsStyle: WordStyle[]
    gutter: GutterRange
    isSelected?: boolean
    width?: string
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
    code,
    codeGenerated,
    wordsStyle,
    gutter,
    isSelected = false,
    width = 'auto',
}) => {
    const gutterLines = Array.from(
        { length: gutter.to - gutter.from + 1 },
        (unused, index) => index + gutter.from
    ).join(' ')

    const containerStyle: CSSProperties = {
        width,
    }

    return (
        // eslint-disable-next-line react/forbid-dom-props
        <div className={classNames(styles.frame, styles.codeFrame)} style={containerStyle}>
            <div className={styles.gutter}>{gutterLines}</div>
            <div className={styles.code}>
                <ColoredCode
                    words={wordsStyle}
                    code={code}
                    selectedStyle={isSelected ? styles.codeSelected : undefined}
                />

                {codeGenerated && (
                    <div className={classNames(styles.fadeIn, styles.codeGenerated)}>{codeGenerated}</div>
                )}
            </div>
        </div>
    )
}
