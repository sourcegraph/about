/* eslint-disable react/forbid-dom-props */
import React, { CSSProperties, FunctionComponent } from 'react'

import classNames from 'classnames'

import { CodyLogo } from './Atoms'
import styles from './cody-illustrations/CodeCompletions.module.css'
import { ColoredCode, WordStyle } from './ColoredCode'

interface CodyAnswerProps {
    text: string
    width?: string
    code?: string
    wordsStyle?: WordStyle[]
}

export const CodyAnswer: FunctionComponent<CodyAnswerProps> = ({ text, width = 'auto', code = '', wordsStyle }) => {
    const lines = text.split('\n')

    const delayByLine = 1 // seconds
    const delayBeforeCodeStart = lines.length * delayByLine

    const containerStyle: CSSProperties = {
        width,
    }

    return (
        <div className={classNames(styles.frame, styles.answerFrame)} style={containerStyle}>
            <div className={styles.codyLogo}>
                <CodyLogo />
            </div>
            <div className={styles.text}>
                {lines.map((line, index) => (
                    <div key={line} className={styles.typewriter} style={{ animationDelay: `${index * delayByLine}s` }}>
                        {line}
                    </div>
                ))}

                {code && wordsStyle && (
                    <ColoredCode
                        words={wordsStyle}
                        code={code}
                        isTypeWrited={true}
                        showCursor={false}
                        animationDelay={delayBeforeCodeStart}
                    />
                )}
            </div>
        </div>
    )
}
