import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodeBlock from './components/CodeBlock'
import CodyAnswer from './components/CodyAnswer'
import { WordStyle } from './components/ColoredCode'

const CodeSmells: FunctionComponent = () => {
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
        { word: 'calcAge', style: styles.colorSymbol },
        { word: 'users', style: styles.colorVariable },
        { word: 'user', style: styles.colorVariable },
        { word: 'i', style: styles.colorVariable },
        { word: 'for', style: styles.colorFunction },
        { word: 'let', style: styles.colorFunction },
    ]

    const code = `function updateUsersWithAge(users) {
  for (let i = 0; i < users.length; i++) {
    users[i].age = calcAge(users[i].dateOfBirth);
  }
  return users;
}`

    const codyAnswer = "Consider using the 'map' method for array iteration instead of a 'for' loop."
    const codeAnswer = 'users.map(user => ({ ...user, age: calcAge(user.dateOfBirth)}))'

    return (
        <div>
            <div className={styles.slideIn}>
                <CodeBlock
                    code={code}
                    wordsStyle={wordsStyle}
                    gutter={{ from: 12, to: 17 }}
                    isSelected={true}
                    width="450px"
                />
            </div>
            <div style={{ position: 'relative', left: '40px', top: '-15px' }} className={styles.slideIn}>
                <CodyAnswer text={codyAnswer} code={codeAnswer} wordsStyle={wordsStyle} width="585px" />
            </div>
        </div>
    )
}

export default CodeSmells
