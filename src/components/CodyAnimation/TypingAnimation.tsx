'use client'
import { FunctionComponent, useState, useRef, useEffect } from 'react'

import { CodeHighlighter } from './CodeHighlighter'

const heightTextSize = 20

interface TypingAnimationProps {
    code: string
    onCompleted: () => void
    speed?: number
    showCursor?: boolean
    setCodeLines?: (height: number) => void
}

export const TypingAnimation: FunctionComponent<TypingAnimationProps> = ({
    code,
    onCompleted,
    speed = 40,
    showCursor = false,
    setCodeLines,
}) => {
    const [animatedCode, setAnimatedCode] = useState('')
    const [index, setIndex] = useState(0)
    const intervalRef = useRef<NodeJS.Timeout>()
    const divRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (const entry of entries) {
                setCodeLines?.(Math.floor(entry.contentRect.height / heightTextSize) || 0)
            }
        })

        if (divRef.current) {
            observer.observe(divRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [setCodeLines])

    return (
        <div className="m-0 w-full p-0" ref={divRef}>
            <CodeHighlighter text={animatedCode} inline={true} showCursor={showCursor} />
        </div>
    )
}
