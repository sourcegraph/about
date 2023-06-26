import { FunctionComponent, MouseEvent, useRef, useState } from 'react'

import classNames from 'classnames'

import { breakpoints } from '../data/breakpoints'
import { useWindowWidth } from '../hooks/windowWidth'
import { debounce } from '../lib/utils'

import { Heading } from './Heading'

interface Props {
    image?: string
    heading?: string | React.ReactNode
    subHeading?: string | React.ReactNode
    description: string
    className?: string
    descriptionClassName?: string
    plainOnMobile?: boolean
}

export const CodyFeatureCard: FunctionComponent<Props> = ({
    image,
    heading,
    description,
    className,
    subHeading,
    descriptionClassName,
    plainOnMobile = true,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.sm
    const [hovered, setHovered] = useState(false)

    const cardRef = useRef<HTMLDivElement>(null)
    const hoverEffectRef = useRef<HTMLDivElement>(null)

    const shouldHideHoverEffect = isMobile && plainOnMobile

    const handleMouseMove = debounce((event: MouseEvent): void => {
        if (!hoverEffectRef.current || !cardRef.current || shouldHideHoverEffect) {
            return
        }
        const { clientX, clientY } = event
        const { top, left } = cardRef.current.getBoundingClientRect()

        const relativeX = clientX - left - 130
        const relativeY = clientY - top - 130

        hoverEffectRef.current.style.top = `${relativeY}px`
        hoverEffectRef.current.style.left = `${relativeX}px`
    }, 15)

    const toggleHovered = (shouldHover: boolean): void => {
        if (shouldHideHoverEffect) {
            return
        }
        setHovered(shouldHover)
    }

    return (
        <div
            className={classNames(
                className,
                'relative flex w-full max-w-[509px] flex-col overflow-hidden text-left text-white',
                plainOnMobile && isMobile
                    ? '!bg-transparent p-0'
                    : 'sg-cody-feature-card rounded-lg border border-white border-opacity-[0.04] p-6'
            )}
            ref={cardRef}
            onMouseEnter={() => toggleHovered(true)}
            onMouseLeave={() => toggleHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {image && (
                <img
                    src={image}
                    alt="Cody Feature"
                    height={180}
                    className={classNames('mb-5 w-full', plainOnMobile && 'hidden sm:block')}
                />
            )}
            {heading && (
                <Heading size="h2" className="mb-6 !text-4xl">
                    {heading}
                </Heading>
            )}
            {subHeading && (
                <Heading size="h4" className="mb-2">
                    {subHeading}
                </Heading>
            )}
            <p className={classNames(descriptionClassName, 'm-0 text-base font-normal text-gray-200')}>{description}</p>
            {hovered && (
                <div
                    className="sg-cody-feature-card-highlight absolute z-10 h-72 w-72 rounded-[50%] bg-white transition-all duration-300 ease-in-out"
                    ref={hoverEffectRef}
                />
            )}
        </div>
    )
}
