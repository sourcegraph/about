'use client'
import { FunctionComponent, useState, useRef, useEffect } from 'react'

import { CodeHighlighter } from './CodeHighlighter'

interface TypingAnimationProps {
    code: string
    completed: () => void
    speed?: number
}

export const TypingAnimation: FunctionComponent<TypingAnimationProps> = ({ code, completed, speed = 40 }) => {
    const [animatedCode, setText] = useState('')
    const [index, setIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (index < code.length) {
                setText((prev: string) => prev + code[index])
                setIndex((prev: number) => prev + 1)
            } else {
                clearInterval(intervalRef.current ?? undefined)
                completed()
            }
        }, speed)
        return () => clearInterval(intervalRef.current ?? undefined)
    }, [index, code, completed, speed])

    return <CodeHighlighter text={animatedCode} inline={true} />
}
