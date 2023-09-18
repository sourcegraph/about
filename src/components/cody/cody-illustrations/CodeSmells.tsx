/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent, useEffect, useState } from 'react'

import { CodeBlock } from '../CodeBlock'
import { CodyAnswer } from '../CodyAnswer'
import { WordStyle } from '../ColoredCode'

import styles from './CodeCompletions.module.css'

interface CodeSmellsProps {
    answerDelay?: number
}

export const CodeSmells: FunctionComponent<CodeSmellsProps> = ({ answerDelay = 0 }) => {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true)
        }, answerDelay * 1000)

        return () => clearTimeout(timer)
    }, [answerDelay])

    const wordsStyle: WordStyle[] = [
        { word: 'function', style: styles.colorFunction },
        { word: 'return', style: styles.colorCommands },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
        { word: '[', style: styles.colorParenthesis },
        { word: ']', style: styles.colorParenthesis },
        { word: 'updateUsersWithAge', style: styles.colorSymbol },
        { word: 'map', style: styles.colorSymbol },
        { word: 'getAge', style: styles.colorSymbol },
        { word: 'users', style: styles.colorVariable },
        { word: 'usr', style: styles.colorVariable },
        { word: 'i', style: styles.colorVariable },
        { word: 'for', style: styles.colorFunction },
        { word: 'let', style: styles.colorFunction },
    ]

    const code = `function updateUsersWithAge(users) {
  for (let i = 0; i < users.length; i++) {
    users[i].age = getAge(users[i].dateOfBirth);
  }
  return users;
}`

    const codyAnswer = "Consider using the 'map' method for array iteration instead of a 'for' loop."
    const codeAnswer = 'users.map(user => ({ ...user, age: getAge(user.dateOfBirth)}))'

    return (
        <div>
            <div className={styles.slideInFromRight} style={{ position: 'relative', left: '60px' }}>
                <CodeBlock
                    code={code}
                    wordsStyle={wordsStyle}
                    gutter={{ from: 12, to: 17 }}
                    isSelected={true}
                    width="500px"
                />
            </div>

            {shouldRender && (
                <div style={{ position: 'relative', top: '-28px' }} className={styles.slideInFromRight}>
                    <CodyAnswer text={codyAnswer} code={codeAnswer} wordsStyle={wordsStyle} width="570px" />
                </div>
            )}
        </div>
    )
}
