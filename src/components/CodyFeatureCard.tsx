import { FunctionComponent, MouseEvent, useRef, useState } from 'react'

import classNames from 'classnames'

import { breakpoints } from '../data/breakpoints'
import { useInView } from '../hooks/useInView'
import { useWindowWidth } from '../hooks/windowWidth'

import { Heading } from './Heading'

interface Props {
    heading?: string | React.ReactNode
    subHeading?: string | React.ReactNode
    description: string
    className?: string
    descriptionClassName?: string
    plainOnMobile?: boolean
    animation?: React.ReactNode
    icon?: string
    onClick?: () => void
}

export const CodyFeatureCard: FunctionComponent<Props> = ({
    heading,
    description,
    className,
    subHeading,
    descriptionClassName,
    plainOnMobile = true,
    animation,
    icon,
    onClick,
}) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.sm
    const [hovered, setHovered] = useState(false)

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const cardRef = useRef<HTMLDivElement>(null)
    const hoverEffectRef = useRef<HTMLDivElement>(null)

    const shouldHideHoverEffect = isMobile && plainOnMobile

    const handleMouseMove = (event: MouseEvent): void => {
        if (!hoverEffectRef.current || !cardRef.current || shouldHideHoverEffect) {
            return
        }
        const { clientX, clientY } = event
        const { top, left } = cardRef.current.getBoundingClientRect()

        const relativeX = clientX - left - 150
        const relativeY = clientY - top - 180

        setMousePosition({
            x: relativeX,
            y: relativeY,
        })
    }

    const toggleHovered = (shouldHover: boolean): void => {
        if (shouldHideHoverEffect) {
            return
        }
        setHovered(shouldHover)
    }

    const animationContainerRef = useRef<HTMLDivElement>(null)
    const isInViewport = useInView(animationContainerRef)

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div
            className={classNames(
                className,
                'relative flex w-full max-w-[509px] flex-col overflow-hidden text-left text-white',
                plainOnMobile && isMobile
                    ? '!bg-transparent p-0'
                    : 'sg-cody-feature-card rounded-lg border border-white border-opacity-[0.04] p-6',
                onClick && 'cursor-pointer'
            )}
            ref={cardRef}
            onClick={onClick}
            onMouseEnter={() => toggleHovered(true)}
            onMouseLeave={() => toggleHovered(false)}
            onMouseMove={handleMouseMove}
        >
            {animation && (
                <div
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{ height: 190, overflow: 'hidden' }}
                    className={classNames('w-full', plainOnMobile && 'hidden sm:block')}
                    ref={animationContainerRef}
                >
                    {isInViewport && animation}
                </div>
            )}
            {icon && <img className="mb-4" src={icon} height={38} width={38} alt="Icon" />}
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
                    className="sg-cody-feature-card-highlight absolute z-10 h-72 w-72 rounded-[50%]"
                    ref={hoverEffectRef}
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    }}
                />
            )}
        </div>
    )
}
