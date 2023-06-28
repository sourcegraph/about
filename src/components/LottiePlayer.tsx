import React, { useEffect, useRef, useImperativeHandle, forwardRef, MouseEvent } from 'react'

import lottie, { AnimationItem } from 'lottie-web'

interface LottiePlayerProps {
    animationData: object
    loop?: boolean
    autoplay?: boolean
    onClick?: (event: MouseEvent<HTMLDivElement>) => void
    className?: string
}

export interface LottiePlayerHandles {
    play: () => void
    pause: () => void
    isPlaying: () => boolean
}

const LottiePlayer = forwardRef<LottiePlayerHandles, LottiePlayerProps>(
    ({ animationData, loop = true, autoplay = true, onClick, className }, ref) => {
        const containerRef = useRef<HTMLDivElement>(null)
        const animationRef = useRef<AnimationItem | null>(null)

        useEffect(() => {
            if (!containerRef.current) {
                return
            }

            animationRef.current = lottie.loadAnimation({
                container: containerRef.current,
                renderer: 'svg',
                loop,
                autoplay,
                animationData,
            })

            return () => {
                if (animationRef.current) {
                    animationRef.current.destroy()
                }
            }
        }, [animationData, autoplay, loop])

        // Player controls
        useImperativeHandle(ref, () => ({
            play: () => {
                animationRef.current?.play()
            },
            pause: () => {
                animationRef.current?.pause()
            },
            isPlaying: () => !animationRef.current?.isPaused,
        }))

        // Keyboard events for accessibility.
        const handleClickOrKeyDown = (
            event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>
        ): void => {
            if ('key' in event && event.key !== 'Enter') {
                return
            }

            if (onClick) {
                onClick(event as React.MouseEvent<HTMLDivElement>)
            }
        }

        return (
            <div
                className={className}
                ref={containerRef}
                onClick={handleClickOrKeyDown}
                onKeyDown={handleClickOrKeyDown}
                role="button"
                tabIndex={0}
            />
        )
    }
)

LottiePlayer.displayName = 'LottiePlayer'

export default LottiePlayer
