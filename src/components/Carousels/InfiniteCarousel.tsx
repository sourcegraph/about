import React, { FC, memo, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'
import { AnimationPlaybackControls, useAnimate, useInView } from 'framer-motion'
import Link from 'next/link'

const TICKER_DIRECTION_LEFT = -1

interface InfiniteCarouselProps {
    children: JSX.Element[]
    duration?: number
    isPlaying?: boolean
    direction?: number
}

const TickerAnimation: FC<InfiniteCarouselProps> = memo((props: InfiniteCarouselProps) => {
    const { children, duration = 200, isPlaying = true, direction = TICKER_DIRECTION_LEFT } = props

    const tickerRef = useRef<HTMLDivElement>(null)
    const [tickerUUID, setTickerUUID] = useState<string>('')
    const [tickerContentWidth, setTickerContentWidth] = useState<number | null>(0)
    const [numItemDupes, setNumItemDupes] = useState<number>(1)
    const [scope, animate] = useAnimate()
    const [animationControls, setAnimationControls] = useState<AnimationPlaybackControls | undefined>(undefined)
    const isInView = useInView(scope)

    useEffect(() => {
        const randomNum = Math.random()
        setTickerUUID(randomNum.toString().split('.').pop() ?? '')
    }, [])

    useEffect(() => {
        let contentWidth = 0

        for (let index = 0; index < children.length; index++) {
            // eslint-disable-next line @unicornn/prefer-query-selector
            const element = document.getElementById(`${tickerUUID}_${index}`)?.clientWidth
            if (element) {
                contentWidth += element
            }
        }

        setTickerContentWidth(contentWidth)
    }, [children.length, tickerUUID])

    useEffect(() => {
        if (tickerRef.current && tickerContentWidth) {
            setNumItemDupes(Math.max(Math.ceil((2 * tickerRef.current.clientWidth) / tickerContentWidth), 1))
        }
    }, [tickerContentWidth])

    useEffect(() => {
        if (isInView && !animationControls) {
            const controls = animate(
                scope.current,
                { x: tickerContentWidth ? tickerContentWidth * direction : 0 },
                { ease: 'linear', duration, repeat: Infinity }
            )
            controls.play()
            setAnimationControls(controls)
        }
    }, [animate, animationControls, direction, duration, isInView, scope, tickerContentWidth])

    useEffect(() => {
        if (animationControls) {
            if (!isPlaying) {
                animationControls.pause()
            } else {
                animationControls.play()
            }
        }
    }, [animationControls, isInView, isPlaying])

    const handleMouse = (duration: number): void => {
        const controls = animate(
            scope.current,
            { x: tickerContentWidth ? tickerContentWidth * direction : 0 },
            { ease: 'linear', duration, repeat: Infinity }
        )
        controls.play()
        setAnimationControls(controls)
        if (animationControls) {
            animationControls.play()
        }
    }

    const handleMouseEnter = (): void => {
        handleMouse(600)
    }

    const handleMouseLeave = (): void => {
        handleMouse(duration)
    }

    return (
        <div
            className="FMT__container h-full w-full overflow-hidden"
            ref={tickerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={scope}
                className="FMT__container__contents inline-block flex items-center justify-center align-middle"
            >
                {children.map((item, index) => (
                    <div key={index} id={`${tickerUUID}_${index}`}>
                        {item}
                    </div>
                ))}
                {Array.from({ length: numItemDupes }).map(() =>
                    children.map((item, index) => <div key={index}>{item}</div>)
                )}
            </div>
        </div>
    )
})

TickerAnimation.displayName = 'TickerAnimation'

export const InfiniteCarousel: FC<{
    images: { src: string; className?: string; url?: string }[]
    duration?: number
}> = ({ images, duration = 50 }) => { // Set a faster default duration
    const duplicatedImages = [...images, ...images] // Duplicate images once for seamless looping
    return (
        <TickerAnimation duration={duration}>
            {duplicatedImages.map((img, index) => (
                <div key={index} className={classNames('flex items-center justify-center', img.className)}>
                    {img.url ? (
                        <Link href={img.url}>
                            <img src={img.src} alt={`slide-${index}`} className="h-auto w-full" />
                        </Link>
                    ) : (
                        <img src={img.src} alt={`slide-${index}`} className="h-auto w-full" />
                    )}
                </div>
            ))}
        </TickerAnimation>
    )
}
