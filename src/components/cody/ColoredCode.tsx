/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent, useEffect, useState } from 'react'

import classNames from 'classnames'

import { Cursor } from './Atoms'
import styles from './ColoredCode.module.css'

interface WordEntry {
    key: string
    val: string
}

interface WordEntries {
    words: WordEntry[]
    specials: WordEntry[]
}

export interface WordStyle {
    word: string
    style: string
}

export interface ColoredCodeProps {
    words: WordStyle[]
    code: string
    selectedStyle?: string | undefined
    isTypeWrited?: boolean
    showCursor?: boolean
    animationDelay?: number
}

export const ColoredCode: FunctionComponent<ColoredCodeProps> = ({
    words,
    code,
    selectedStyle,
    isTypeWrited: isAnimated = false,
    showCursor = true,
    animationDelay = 0,
}) => {
    const [lines, setLines] = useState<string[]>([])

    useEffect(() => {
        setLines(code.split('\n'))
    }, [code])

    const wordStyleDict: { [key: string]: string } = words.reduce(
        (wordStyleDict, { word, style }) => ({
            ...wordStyleDict,
            [word]: style,
        }),
        {}
    )

    const wordEntries: WordEntries = Object.entries(wordStyleDict).reduce(
        (acc, [key, val]: [string, string]) => {
            if (!/\w/.test(key)) {
                acc.specials.push({ key, val })
            } else {
                acc.words.push({ key, val })
            }
            return acc
        },
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        { words: [], specials: [] } as WordEntries
    )

    const wordsRegex = new RegExp(`\\b(${wordEntries.words.map(word => word.key).join('|')})\\b`, 'g')
    const specialsRegex = new RegExp(`(${wordEntries.specials.map(special => '\\' + special.key).join('|')})`, 'g')

    const coloredCode = lines.map((line, index) => {
        const wordsInLine = line.split(specialsRegex).flatMap((fragment, index) =>
            fragment.split(wordsRegex).map((innerFragment, innerIndex) => {
                const style = classNames(selectedStyle, wordStyleDict[innerFragment])
                const key = `${index}-${innerFragment}-${innerIndex}`
                return (
                    <span key={key} className={style}>
                        {innerFragment}
                    </span>
                )
            })
        )

        const key = `line-${index}-${line}`

        return (
            <div
                className={isAnimated ? styles.lineWrapper : undefined}
                key={key}
                style={isAnimated ? { animationDelay: `${animationDelay + index * 0.6}s` } : {}}
            >
                {wordsInLine}
                {showCursor && index === lines.length - 1 && <Cursor />}
            </div>
        )
    })

    return <>{coloredCode}</>
}
