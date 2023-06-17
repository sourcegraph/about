import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodeBlock from './components/CodeBlock'
import { WordStyle } from './components/ColoredCode'

const UnitTest: FunctionComponent = () => {
    const code = `function sortArray(array) { 
    return array.sort((a, b) => a - b); 
}`

    const wordsStyle: WordStyle[] = [
        { word: 'function', style: styles.colorFunction },
        { word: 'sortArray', style: styles.colorSymbol },
        { word: 'array', style: styles.colorVariable },
        { word: 'return', style: styles.colorCommands },
        { word: 'sort', style: styles.colorFunction },
        { word: 'a', style: styles.colorVariable },
        { word: 'b', style: styles.colorVariable },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
    ]

    return <CodeBlock code={code} wordsStyle={wordsStyle} gutter={{ from: 7, to: 9 }} />
}

export default UnitTest
