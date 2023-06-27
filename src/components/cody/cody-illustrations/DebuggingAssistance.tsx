/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent, useEffect, useState } from 'react'

import { CodeBlock } from '../CodeBlock'
import { CodyAnswer } from '../CodyAnswer'
import { WordStyle } from '../ColoredCode'

import styles from './CodeCompletions.module.css'

interface DebuggingAssistanceProps {
    answerDelay?: number
}

export const DebuggingAssistance: FunctionComponent<DebuggingAssistanceProps> = ({ answerDelay = 0 }) => {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true)
        }, answerDelay * 1000)

        return () => clearTimeout(timer)
    }, [answerDelay])

    const wordsStyle: WordStyle[] = [
        { word: 'async', style: styles.colorFunction },
        { word: 'const', style: styles.colorFunction },
        { word: 'constructor', style: styles.colorFunction },
        { word: 'class', style: styles.colorFunction },
        { word: 'await', style: styles.colorFunction },
        { word: 'awai', style: styles.colorError },
        { word: 'json', style: styles.colorSymbol },
        { word: 'fetchUser', style: styles.colorSymbol },
        { word: 'UserFetcher', style: styles.colorSymbol },
        { word: 'fetch', style: styles.colorSymbol },
        { word: 'user', style: styles.colorVariable },
        { word: 'userId', style: styles.colorVariable },
        { word: 'response', style: styles.colorVariable },
        { word: 'return', style: styles.colorCommands },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
    ]

    const codeAnswer = `async fetchUser() {
    const response = await fetch("https://api.example.com/users/{this.userId}");
    const user = await response.json();
    return user;
}`

    const code = `class UserFetcher { 
    constructor(userId) {
        this.userId = userId; 
    } 
    async fetchUser() { 
        const response = await fetch("https://api.example.com/users/{t 
        const user = awai response.json();
            return user; 
        }`

    const codyAnswer = "The keyword `await` is misspelled\nas `awai`. Here's the fixed code:"

    return (
        <div>
            <div className={styles.slideInFromRight}>
                <CodeBlock
                    code={code}
                    wordsStyle={wordsStyle}
                    gutter={{ from: 7, to: 15 }}
                    isSelected={false}
                    width="570px"
                />
            </div>

            {shouldRender && (
                <div className={styles.slideInFromRight} style={{ position: 'relative', left: '270px', top: '-178px' }}>
                    <CodyAnswer text={codyAnswer} width="570px" code={codeAnswer} wordsStyle={wordsStyle} />
                </div>
            )}
        </div>
    )
}
