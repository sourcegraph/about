import React, { useRef } from 'react'

import animationData from '/public/animations/3ExplainCode.json'

import LottiePlayer, { LottiePlayerHandles } from '../../components/LottiePlayer'

const LottieAnimation = () => {
    const playerRef = useRef<LottiePlayerHandles>(null)

    const handleClick = () => {
        if (playerRef.current) {
            const player = playerRef.current
            if (player.isPlaying()) {
                player.pause()
            } else {
                player.play()
            }
        }
    }

    return <LottiePlayer ref={playerRef} animationData={animationData} autoplay={false} onClick={handleClick} />
}

export default LottieAnimation
