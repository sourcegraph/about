import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodeBlock from './components/CodeBlock'
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
        { word: 'calcAge', style: styles.colorSymbol },
        { word: 'users', style: styles.colorVariable },
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

    return <CodeBlock code={code} wordsStyle={wordsStyle} gutter={{ from: 12, to: 17 }} isSelected={true} />
}

export default CodeSmells
