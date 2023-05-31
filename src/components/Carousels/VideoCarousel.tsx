import { FunctionComponent, useEffect, useRef, useState, useCallback, ReactNode } from 'react'

import classNames from 'classnames'
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import Link from 'next/link'

import { breakpoints } from '../../data/breakpoints'
import { useCarousel } from '../../hooks/carousel'

interface Video {
    title: string
    description: string | ReactNode
    video: string
    link: string
}

interface VideosCarouselProps {
    videos: Video[]
}

export const VideoCarousel: FunctionComponent<VideosCarouselProps> = ({ videos }) => {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
    const [isLargeScreen, setIsLargeScreen] = useState(false)

    const carouselHook = useCarousel(
        videos.map(item => item.video),
        true
    )
    const currentVideo = carouselHook.carouselItems.currentItemIndex ?? 0

    const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(videos.length).fill(null))
    const containerRef = useRef<HTMLDivElement>(null)

    const handleResize = useCallback(() => {
        // Calculate and set the height of the container based on the aspect ratio of the video
        setIsLargeScreen(window.innerWidth >= breakpoints.lg)
        const videoElement = videoRefs.current[currentVideo]
        const containerElement = containerRef.current
        if (videoElement && containerElement) {
            const aspectRatio = videoElement.videoWidth / videoElement.videoHeight
            const containerWidth = containerElement.offsetWidth
            const containerHeight = containerWidth / aspectRatio
            containerElement.style.height = `${containerHeight}px`
        }
    }, [currentVideo])

    // Reset the video playback
    useEffect(() => {
        const videoElement = videoRefs.current[carouselHook.carouselItems.currentItemIndex ?? 0]
        if (videoElement) {
            videoElement.currentTime = 0
        }
    }, [carouselHook.carouselItems.currentItemIndex])

    useEffect(() => {
        // Update the height initially
        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [handleResize])

    useEffect(() => {
        const preLoadVideos = async (): Promise<void> => {
            try {
                await Promise.all(
                    videos.map(async (item, index) => {
                        const videoElement = videoRefs.current[index]
                        if (videoElement && videoElement.src !== item.video) {
                            await new Promise((resolve, reject) => {
                                videoElement.addEventListener('loadstart', resolve)
                                videoElement.addEventListener('error', reject)
                                videoElement.src = item.video
                            })
                        }
                    })
                )
            } catch (error) {
                console.error('Failed to preload videos:', error)
            }
        }

        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        preLoadVideos()
    }, [videos])

    const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        setTouchStart(event.touches[0].clientX)
    }, [])

    const handleTouchMove = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
        setTouchEnd(event.changedTouches[0].clientX)
    }, [])

    const handleTouchEnd = useCallback(() => {
        if (touchStart - touchEnd > 50) {
            // Swipe left, move to next video
            carouselHook.moveCarousel()
        } else if (touchEnd - touchStart > 50) {
            // Swipe right, move to previous video
            carouselHook.moveCarousel('decrement')
        }
    }, [touchStart, touchEnd, carouselHook])

    const prevVideo = (): void => {
        carouselHook.moveCarousel('decrement')
    }

    const nextVideo = (): void => {
        carouselHook.moveCarousel()
    }

    return (
        <div
            className="w-full"
            onTouchStart={isLargeScreen ? undefined : handleTouchStart}
            onTouchMove={isLargeScreen ? undefined : handleTouchMove}
            onTouchEnd={isLargeScreen ? undefined : handleTouchEnd}
        >
            <div ref={containerRef}>
                {videos.map((item, index) => (
                    <video
                        ref={element => (videoRefs.current[index] = element || null)}
                        key={item.video}
                        className={`sg-video-carousel-border-gradient mx-auto rounded-lg ${
                            index === currentVideo ? '' : 'hidden'
                        }`}
                        autoPlay={true}
                        muted={true}
                        loop={true}
                        playsInline={true}
                        controls={false}
                        data-cookieconsent="ignore"
                        onClick={isLargeScreen ? nextVideo : undefined}
                        id="videoPlayer"
                    >
                        <source type="video/webm" src={item.video} data-cookieconsent="ignore" />
                        <source type="video/mp4" src={item.video} data-cookieconsent="ignore" />
                    </video>
                ))}
            </div>
            <div className="flex flex-col-reverse md:flex-col">
                <div>
                    <p className="mb-2 text-center text-xl font-semibold text-white md:mt-4">
                        {videos[currentVideo].title}
                    </p>
                    <div className="flex flex-wrap justify-center">
                        <p className="mr-1 mb-0 text-center text-gray-200">{videos[currentVideo].description}</p>{' '}
                        <Link href={videos[currentVideo].link} className="text-gray-200 underline">
                            Learn more
                        </Link>
                    </div>
                </div>

                <div className="mb-6 mt-6 flex items-center justify-center md:mb-0 md:mt-4">
                    <ChevronLeftIcon
                        className="hidden cursor-pointer text-white opacity-80 hover:opacity-100 md:block"
                        onClick={prevVideo}
                    />
                    <div className="mx-4 flex gap-[16px]">
                        {videos.map((item, index) => (
                            <button
                                key={item.video}
                                type="button"
                                onClick={() => carouselHook.moveCarousel(index)}
                                className={classNames('h-[9px] w-[9px] rounded-[50%] bg-white', {
                                    'opacity-100': index === currentVideo,
                                    'opacity-50': index !== currentVideo,
                                })}
                            />
                        ))}
                    </div>
                    <ChevronRightIcon
                        className="hidden cursor-pointer text-white opacity-80 hover:opacity-100 md:block"
                        onClick={nextVideo}
                    />
                </div>
            </div>
        </div>
    )
}
