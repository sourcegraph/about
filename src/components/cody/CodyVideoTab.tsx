import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react'

import classNames from 'classnames'

import { Heading, ContentSection } from '..'

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
            className="rounded-lg border border-white border-opacity-20 bg-[#612590] px-6 py-8 md:px-[60px] md:py-[72px]"
        >
            <div>
                <img src={icon} alt="Cody logo" />
                <Heading size="h2" className="mt-[18px] !text-4xl text-white">
                    {headerText}
                </Heading>
                {typeof description === 'string' ? (
                    <p className="mt-[18px] mb-0 text-lg text-gray-200">{description}</p>
                ) : (
                    description
                )}
                <div className="mt-16 flex flex-col gap-y-8 md:h-[400px] md:flex-row md:items-center">
                    <div className="flex min-w-fit flex-grow flex-col gap-[18px]">
                        {tabContent.map((content, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedContentIndex(index)}
                                className={classNames(
                                    'rounded px-[10px] py-2 text-left text-white hover:bg-[#270741] hover:bg-opacity-40 md:rounded-r-none',
                                    {
                                        'bg-[#270741] hover:bg-opacity-100': selectedContentIndex === index,
                                    }
                                )}
                                type="button"
                            >
                                <Heading size="h5">{content.header}</Heading>
                                <p className="mb-0">{content.description}</p>
                            </button>
                        ))}
                    </div>
                    <div className="max-w-[750px]">
                        {tabContent.map((content, index) => (
                            <video
                                ref={element => (videoRefs.current[index] = element ?? null)}
                                id={`video-${content.header}`}
                                className={classNames('rounded-lg border-[6px] border-[#4E2A72]', {
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
                        <div className="h-[10px] w-full rounded-lg pt-[16px]">
                            <div
                                // eslint-disable-next-line react/forbid-dom-props
                                style={{
                                    width: `${(videoTime.currentTime / videoTime.duration) * 100}%`,
                                    transition: 'width 0.3s ease-out',
                                }}
                                className="h-[10px] rounded-lg bg-[#CE9CFF66]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </ContentSection>
    )
}
