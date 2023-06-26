/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodeBlock from './components/CodeBlock'
import CodyAnswer from './components/CodyAnswer'
import { WordStyle } from './components/ColoredCode'
import { Debugging } from './components/Atoms'

const DebuggingAssistance: FunctionComponent = () => {
    const codeAnswer = `async fetchUser() {
    const response = await fetch("https://api.example.com/users/\${this.userId}\");
    const user = await response.json();
    return user;
}`

    const wordsStyle: WordStyle[] = [
        { word: 'async', style: styles.colorFunction },
        { word: 'const', style: styles.colorFunction },
        { word: 'await', style: styles.colorFunction },
        { word: 'json', style: styles.colorSymbol },
        { word: 'fetchUser', style: styles.colorSymbol },
        { word: 'fetch', style: styles.colorSymbol },
        { word: 'user', style: styles.colorVariable },
        { word: 'response', style: styles.colorVariable },
        { word: 'return', style: styles.colorCommands },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
    ]

    const codyAnswer = "The keyword `await` is misspelled\nas `awai`. Here's the fixed code:"

    return (
        <div>
            <div className={styles.slideIn}>
                <CodyAnswer text={codyAnswer} width="570px" code={codeAnswer} wordsStyle={wordsStyle} />
            </div>
            <div style={{ position: 'relative', left:'310px', top: '-180px' }} className={styles.slideIn}>
                <Debugging />
            </div>
        </div>
    )
}

export default DebuggingAssistance
