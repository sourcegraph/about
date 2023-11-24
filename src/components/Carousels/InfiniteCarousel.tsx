import React from 'react'

interface InfiniteCarouselProps {
    images: string[]
}

export const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
    const duplicatedImages = [...images, ...images, ...images, ...images] // Duplicate images for seamless looping

    return (
        <div className="slider">
            <div className="slide-tracker">
                {duplicatedImages.map((image, index) => (
                    <div key={index} className="slide">
                        <img src={image} alt={`slide-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}
