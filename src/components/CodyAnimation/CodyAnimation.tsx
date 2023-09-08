'use client'
import { FunctionComponent, useState, useCallback, useRef } from 'react'

import { useInView } from '../../hooks/useInView'

import { BlinkCursor } from './BlinkCursor'
import { CodeHighlighter } from './CodeHighlighter'
import { Line } from './Line'
import { SideSection } from './SideSection'
import { TypingAnimation } from './TypingAnimation'

const timingFrames = {
    frame2: 800,
    frame3: 1500,
}

const codes: string[] = [
    'function bubbleSort(array) {',
    '   let swapped;',
    `   do {
       swapped = false;
       for (let i = 0; i < array.length - 1; i++) {
           if (array[i] > array [i+1]) {
              let temp = array[i];
              array[i] = array[i+1];
              array[i+1] = temp;
              swapped = true;
           }
       }
   } while (swapped);
   return array;
`,
    '}',
]

export const CodyAnimation: FunctionComponent = () => {
    const [nextLine, SetNextLine] = useState(false)
    const [showSuggestion, SetShowSuggestion] = useState(false)
    const [applySuggestion, SetApplySuggestion] = useState(false)

    const CodyAnimationRef = useRef<HTMLDivElement>(null)

    const isCodyAnimationRefInView = useInView(CodyAnimationRef)

    const showSuggestionHandler = useCallback(() => {
        setTimeout(() => {
            SetShowSuggestion(true)
            acceptHandler()
        }, timingFrames.frame2)
        SetNextLine(true)
    }, [])

    const acceptHandler = (): void => {
        setTimeout(() => SetApplySuggestion(true), timingFrames.frame3)
    }

    const lines = showSuggestion ? 15 : nextLine ? 2 : 1

    return (
        <>
            <div className=" relative overflow-hidden" ref={CodyAnimationRef}>
                <div className="relative left-[56px] mx-auto flex w-[743.091px] rounded-md border border-[#343A4D] bg-[#191B21] pl-[34px] pt-[40px] pb-[26px] text-sm leading-[19.6px] md:left-[0px]">
                    <SideSection lines={lines} accepted={applySuggestion} suggestion={showSuggestion} />
                    <div className="ml-[21px] flex-1">
                        <Line active={!nextLine} className="flex flex-row items-center">
                            {isCodyAnimationRefInView ? (
                                <TypingAnimation
                                    code="function bubbleSort(array) {"
                                    completed={showSuggestionHandler}
                                />
                            ) : (
                                <BlinkCursor />
                            )}
                            {!nextLine && <BlinkCursor />}
                        </Line>
                        {nextLine && (
                            <Line active={nextLine && !applySuggestion} className="flex flex-row items-center">
                                {!applySuggestion && <BlinkCursor className="ml-[-2px]" />}
                                {showSuggestion && (
                                    <>
                                        <CodeHighlighter styled={applySuggestion}>{codes[1]}</CodeHighlighter>
                                    </>
                                )}
                            </Line>
                        )}
                        {showSuggestion && (
                            <>
                                <CodeHighlighter styled={applySuggestion}>{codes[2]}</CodeHighlighter>
                                <Line active={applySuggestion} className="flex flex-row items-center">
                                    <CodeHighlighter styled={applySuggestion}>{codes[3]}</CodeHighlighter>
                                    {applySuggestion && <BlinkCursor />}
                                </Line>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
