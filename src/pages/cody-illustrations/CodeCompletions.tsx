import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodeBlock from './components/CodeBlock'
import { WordStyle } from './components/ColoredCode'

const CodeCompletions: FunctionComponent = () => {
    const wordsStyle: WordStyle[] = [
        { word: 'function', style: styles.colorFunction },
        { word: 'const', style: styles.colorFunction },
        { word: 'removeCommonWordsFromText', style: styles.colorSymbol },
        { word: 'text', style: styles.colorVariable },
        { word: 'commonWords', style: styles.colorVariable },
        { word: 'words', style: styles.colorVariable },
        { word: 'word', style: styles.colorVariable },
        { word: 'return', style: styles.colorCommands },
        { word: 'filter', style: styles.colorFunction },
        { word: 'join', style: styles.colorFunction },
        { word: 'split', style: styles.colorFunction },
        { word: 'includes', style: styles.colorFunction },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
    ]

    const coloredCode = 'function removeCommonWordsFromText(text) {'
    const grayCode = `  const commonWords = ["a", "the", "and", "or", "but"];
    let words = text.split(" ");

    return words
      .filter(word => !commonWords.includes(word)
      .join(" ");
}`

    return (
        <CodeBlock code={coloredCode} codeGenerated={grayCode} wordsStyle={wordsStyle} gutter={{ from: 8, to: 15 }} />
    )
}

export default CodeCompletions
