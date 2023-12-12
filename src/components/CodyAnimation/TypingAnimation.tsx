'use client'
import { FunctionComponent, useState, useRef, useEffect } from 'react'

import { CodeHighlighter } from './CodeHighlighter'

interface TypingAnimationProps {
    code: string
    onCompleted: () => void
    speed?: number
    showCursor?: boolean
}

export const TypingAnimation: FunctionComponent<TypingAnimationProps> = ({
    code,
    onCompleted,
    speed = 40,
    showCursor = false,
}) => {
    const [animatedCode, setAnimatedCode] = useState('')
    const [index, setIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            if (index < code.length) {
                setAnimatedCode(prev => prev + code[index])
                setIndex(prev => prev + 1)
            } else {
                clearInterval(intervalRef.current)
                onCompleted()
            }
        }, speed)
        return () => clearInterval(intervalRef.current)
    }, [index, code, onCompleted, speed])

    return <CodeHighlighter text={animatedCode} inline={true} showCursor={showCursor} />
}
