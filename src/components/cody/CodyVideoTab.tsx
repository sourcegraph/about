import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { ContentSection } from '..'

export const CodyVideoTab: FunctionComponent<{
    icon: string
    headerText: string
    description: string | ReactNode
    tabContent: { header: string; description: string; videoSrc: string }[]
}> = ({ icon, headerText, description, tabContent }) => {
    const [selectedContentIndex, setSelectedContentIndex] = useState(0)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>(new Array(tabContent.length).fill(null))
    const [videoTime, setVideoTime] = useState({ currentTime: 0, duration: 0 })

    // Reset the video playback
    useEffect(() => {
        const videoElement = videoRefs.current[selectedContentIndex]
        if (videoElement) {
            videoElement.currentTime = 0
        }
    }, [selectedContentIndex, tabContent])

    const changeSelectedContent = (index: number): void => {
        if (index === tabContent.length - 1) {
            setSelectedContentIndex(0)
        } else {
            setSelectedContentIndex(index + 1)
        }
    }
    const onTimeUpdateHandler = (event: React.SyntheticEvent<HTMLVideoElement>): void => {
        const video = event.target as HTMLVideoElement
        setVideoTime({
            currentTime: video.currentTime,
            duration: video.duration,
        })
    }

    const onLoadedMetadataHandler = (event: React.SyntheticEvent<HTMLVideoElement>): void => {
        const video = event.target as HTMLVideoElement
        setVideoTime(prev => ({
            ...prev,
            duration: video.duration,
        }))
    }

    return (
        <ContentSection
            parentClassName="!px-0 !pb-0"
            className="overflow-hidden border-y border-white border-opacity-20 bg-violet-700 px-6 py-8 md:h-auto md:rounded-lg md:border md:pl-[60px] md:pt-[72px]"
        >
            <div>
                <img className="h-[48px] w-[48px]" src={icon} alt="Cody logo" />
                <h2 className="mt-[18px] !text-4xl text-white">{headerText}</h2>
                {typeof description === 'string' ? (
                    <p className="mt-[18px] mb-0 text-lg text-gray-200">{description}</p>
                ) : (
                    description
                )}
                <div className="relative mt-16 flex h-[592px] flex-col gap-y-8 md:h-[400px] md:flex-row">
                    <div className="mb-8 flex min-w-fit flex-grow flex-col gap-[18px] md:mt-6 md:mb-0">
                        {tabContent.map((content, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedContentIndex(index)}
                                className={classNames(
                                    'rounded px-[10px] py-2 text-left text-white hover:bg-violet-600 hover:bg-opacity-40 md:rounded-r-none',
                                    {
                                        'bg-violet-600 hover:bg-opacity-100': selectedContentIndex === index,
                                    }
                                )}
                                type="button"
                            >
                                <h5>{content.header}</h5>
                                <p className="mb-0 text-lg">{content.description}</p>
                            </button>
                        ))}
                    </div>
                    <div className="relative bottom-0 ml-[-24px] h-auto w-[600px] max-w-[800px] md:absolute md:top-0 md:right-[-50px] md:mr-0 md:h-[426px] md:w-auto">
                        {tabContent.map((content, index) => (
                            <video
                                ref={element => (videoRefs.current[index] = element ?? null)}
                                id={`video-${content.header}`}
                                className={classNames({
                                    hidden: selectedContentIndex !== index,
                                })}
                                autoPlay={true}
                                muted={true}
                                playsInline={true}
                                controls={false}
                                data-cookieconsent="ignore"
                                key={index}
                                onEnded={() => changeSelectedContent(index)}
                                onTimeUpdate={onTimeUpdateHandler}
                                onLoadedMetadata={onLoadedMetadataHandler}
                            >
                                <source type="video/mp4" src={content.videoSrc} />
                            </video>
                        ))}
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}
