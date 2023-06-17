import React, { FunctionComponent } from 'react'

import classNames from 'classnames'

import styles from '../CodeCompletions.module.css'

import { Cursor } from './Atoms'
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
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({ code, codeGenerated, wordsStyle, gutter }) => {
    const gutterLines = Array.from(
        { length: gutter.to - gutter.from + 1 },
        (unused, index) => index + gutter.from
    ).join(' ')

    return (
        <div className={styles.frame}>
            <div className={styles.gutter}>{gutterLines}</div>
            <div className={styles.code}>
                <ColoredCode words={wordsStyle} code={code} />
                <Cursor />
                {codeGenerated && (
                    <div className={classNames(styles.fadeIn, styles.codeGenerated)}>{codeGenerated}</div>
                )}
            </div>
        </div>
    )
}

export default CodeBlock
