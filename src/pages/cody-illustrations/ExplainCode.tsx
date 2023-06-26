import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import { Widget, Submenu, Pointer } from './components/Atoms'
import CodeBlock from './components/CodeBlock'
import CodyAnswer from './components/CodyAnswer'
import { WordStyle } from './components/ColoredCode'

const ExplainCode: FunctionComponent = () => {
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
            <div className={styles.slideIn}>
                <CodeBlock
                    code={code}
                    wordsStyle={wordsStyle}
                    gutter={{ from: 6, to: 8 }}
                    isSelected={true}
                    width="400px"
                />
            </div>

            <div style={{ position: 'relative', left: '100px', top: '-20px' }} className={styles.slideIn}>
                <CodyAnswer text={codyAnswer} width="490px" />
            </div>
        </div>
    )
}

export default ExplainCode
