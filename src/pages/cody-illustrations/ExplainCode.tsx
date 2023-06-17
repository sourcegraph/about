import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodeBlock from './components/CodeBlock'
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

    return <CodeBlock code={code} wordsStyle={wordsStyle} gutter={{ from: 6, to: 8 }} />
}

export default ExplainCode
