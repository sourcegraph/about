'use client'
import { FunctionComponent, useState, useCallback, useRef, useEffect } from 'react'

import classNames from 'classnames'

import { breakpoints } from '../../data/breakpoints'
import { useInViewCody } from '../../hooks/useInViewCody'
import { useWindowWidth } from '../../hooks/windowWidth'

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
    `// UpdateSubscriptionOptions describes a change to apply to a subscription
// Any nil field will be left unchanged
func UpdateSubscriptionOptions struct {
  NewSeatCount         *int
  NewBillingInterval   *BillingInterval
  NewCancelAtPeriodEnd *bool
}

func (opts UpdateCustomerOptions) Validate() error {`,
    '   if opts.NewSeatCount != nil {',
    `      if *opts.NewSeatCount <= 0 {
        }
    }

    if opts.NewBillingInterval != nil {
        if !opts.NewBillingInterval.IsValid() {
            return invalidValueError(“NewBillingInterval”)
        }
    }`,
    '}',
]

export const CodyAnimation: FunctionComponent = () => {
    const [startAnimation, setStartAnimation] = useState(false)
    const [nextLine, setNextLine] = useState(false)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [applySuggestion, setApplySuggestion] = useState(false)

    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const codyAnimationRef = useRef<HTMLDivElement>(null)

    const isCodyAnimationRefInView = useInViewCody(codyAnimationRef, {
        bottomOffset: isMobile ? 250 : 400, // Clear animation when CodyAnimation is out of view.
        viewportHeightOffset: isMobile ? -100 : 30, // Prevent animation restart under fixed navigation
    })

    const showSuggestionHandler = useCallback(() => {
        setTimeout(() => {
            setShowSuggestion(true)
            acceptHandler()
        }, timingFrames.frame2)
        setNextLine(true)
    }, [])

    const acceptHandler = (): void => {
        setTimeout(() => setApplySuggestion(true), timingFrames.frame3)
    }

    useEffect(() => {
        if (isCodyAnimationRefInView && !applySuggestion) {
            setStartAnimation(true)
        }

        if (!isCodyAnimationRefInView && applySuggestion) {
            setStartAnimation(false)
            setNextLine(false)
            setShowSuggestion(false)
            setApplySuggestion(false)
        }
    }, [isCodyAnimationRefInView, applySuggestion])

    const lineNumbers = countTotalLines(codes)
    const activeLine = showSuggestion ? lineNumbers : nextLine ? 2 : 1

    return (
        <>
            <div className="relative overflow-hidden md:overflow-visible" ref={codyAnimationRef}>
                <div className="relative left-[81px] mx-auto flex min-h-[412px] w-[728px] rounded-md border border-[#343A4D] bg-[#191B21] py-4 pl-4 text-sm leading-[19.6px] md:left-[0px]">
                    <SideSection activeLine={activeLine} accepted={applySuggestion} totalLines={lineNumbers} />
                    <div className="relative ml-[9px] flex-1">
                        <Line
                            className={classNames('flex flex-row items-center', {
                                'cody-multiple-lines': !nextLine,
                            })}
                        >
                            {startAnimation ? (
                                <TypingAnimation
                                    showCursor={!nextLine}
                                    code={codes[0]}
                                    onCompleted={showSuggestionHandler}
                                />
                            ) : (
                                <BlinkCursor />
                            )}
                        </Line>
                        {nextLine && (
                            <Line active={nextLine && !applySuggestion} className="flex flex-row items-center">
                                {!applySuggestion && <BlinkCursor className="ml-[-2px]" />}
                                {showSuggestion && (
                                    <>
                                        <CodeHighlighter highlighted={applySuggestion}>{codes[1]}</CodeHighlighter>
                                    </>
                                )}
                            </Line>
                        )}
                        {showSuggestion && (
                            <>
                                <CodeHighlighter highlighted={applySuggestion}>{codes[2]}</CodeHighlighter>
                                <Line active={applySuggestion} className="flex flex-row items-center">
                                    <CodeHighlighter highlighted={applySuggestion}>{codes[3]}</CodeHighlighter>
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

const countTotalLines = (codes: string[]): number => {
    let totalLines = 0
    for (const code of codes) {
        const lines = code.split('\n')
        for (const line of lines) {
            if (line.trim() !== '') {
                totalLines++
            }
        }
    }
    return totalLines
}
