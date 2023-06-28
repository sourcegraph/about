/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent } from 'react'

import { CodeBlock } from '../CodeBlock'
import { CodyAnswer } from '../CodyAnswer'
import { WordStyle } from '../ColoredCode'

import styles from './CodeCompletions.module.css'

export const UnitTest: FunctionComponent = () => {
    const code = `function sortArray(array) { 
    return array.sort((a, b) => a - b); 
}`

    const wordsStyle: WordStyle[] = [
        { word: 'Test sorted array', style: styles.colorText },
        { word: 'function', style: styles.colorFunction },
        { word: 'sortArray', style: styles.colorSymbol },
        { word: 'toEqual', style: styles.colorSymbol },
        { word: 'array', style: styles.colorVariable },
        { word: 'a', style: styles.colorVariable },
        { word: 'b', style: styles.colorVariable },
        { word: 'return', style: styles.colorCommands },
        { word: 'sort', style: styles.colorFunction },
        { word: 'expect', style: styles.colorSymbol },
        { word: 'test', style: styles.colorSymbol },
        { word: '{', style: styles.colorBrackets },
        { word: '}', style: styles.colorBrackets },
        { word: '[', style: styles.colorParenthesis },
        { word: ']', style: styles.colorParenthesis },
        { word: '(', style: styles.colorParenthesis },
        { word: ')', style: styles.colorParenthesis },
    ]

    const codyAnswer = "Here's a unit test for the selected code:"
    const codeAnswer = `
test('Test sorted array', () => {
    expect(sortArray([3, 1, 2])).toEqual([1, 2, 3]);
});`

    return (
        <div>
            <div className={styles.slideInFromRight}>
                <CodeBlock
                    code={code}
                    wordsStyle={wordsStyle}
                    gutter={{ from: 7, to: 9 }}
                    isSelected={true}
                    width="400px"
                />
            </div>

            <div style={{ position: 'relative', left: '65px', top: '-27px' }} className={styles.slideInFromRight}>
                <CodyAnswer text={codyAnswer} width="500px" code={codeAnswer} wordsStyle={wordsStyle} />
            </div>
        </div>
    )
}
