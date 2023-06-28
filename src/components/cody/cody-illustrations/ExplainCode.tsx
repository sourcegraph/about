/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent, useEffect, useState } from 'react'

import { CodeBlock } from '../CodeBlock'
import { CodyAnswer } from '../CodyAnswer'
import { WordStyle } from '../ColoredCode'

import styles from './CodeCompletions.module.css'

interface ExplainCodeProps {
    answerDelay?: number
}

export const ExplainCode: FunctionComponent<ExplainCodeProps> = ({ answerDelay = 0 }) => {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true)
        }, answerDelay * 1000)

        return () => clearTimeout(timer)
    }, [answerDelay])

    const wordsStyle: WordStyle[] = [
        { word: 'const', style: styles.colorFunction },
        { word: 'calculatePower', style: styles.colorSymbol },
        { word: 'base', style: styles.colorVariable },
        { word: 'exponent', style: styles.colorVariable },
        { word: 'return', style: styles.colorCommands },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
    ]

    const code = `const calculatePower = (base, exponent) => {
    return base ** exponent;
}`
    const codyAnswer =
        'This code helps you find the result of raising a number (base)\nto a specific power(exponent). For example, 2 and 3 are the\nbase and exponent, resulting in 8.'

    return (
        <div>
            <div className={styles.slideInFromRight}>
                <CodeBlock
                    code={code}
                    wordsStyle={wordsStyle}
                    gutter={{ from: 6, to: 8 }}
                    isSelected={true}
                    width="400px"
                />
            </div>

            {shouldRender && (
                <div style={{ position: 'relative', left: '78px', top: '-10px' }} className={styles.slideInFromRight}>
                    <CodyAnswer text={codyAnswer} width="485px" />
                </div>
            )}
        </div>
    )
}
