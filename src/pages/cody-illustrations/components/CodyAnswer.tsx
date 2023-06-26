import React, { CSSProperties, FunctionComponent } from 'react'

import classNames from 'classnames'

import styles from '../CodeCompletions.module.css'

import { CodyLogo } from './Atoms'
import { ColoredCode, WordStyle } from './ColoredCode'

interface CodyAnswerProps {
    text: string
    width?: string
    code?: string
    wordsStyle?: WordStyle[]
}

const CodyAnswer: FunctionComponent<CodyAnswerProps> = ({ text, width = 'auto', code = '', wordsStyle }) => {
    const lines = text.split('\n')

    const containerStyle: CSSProperties = {
        width,
    }

    return (
        // eslint-disable-next-line react/forbid-dom-props
        <div className={classNames(styles.frame, styles.answerFrame)} style={containerStyle}>
            <div className={styles.codyLogo}>
                <CodyLogo />
            </div>
            <div className={styles.text}>
                {lines.map((line, index) => (
                    // eslint-disable-next-line react/forbid-dom-props
                    <div key={line} className={styles.typewriter} style={{ animationDelay: `${index * 0.6}s` }}>
                        {line}
                    </div>
                ))}

                {code && wordsStyle && (
                    <ColoredCode words={wordsStyle} code={code} isTypeWrited={true} showCursor={false} />
                )}
            </div>
        </div>
    )
}

export default CodyAnswer
