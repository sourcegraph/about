/* eslint-disable import/order */
import { CSSProperties, FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'
import { StaticImageData } from 'next/image'

// Light Nebulous Variants
import lightNebulousSaturn1 from './Background-assets/backgrounds/light-nebulous-saturn-1.jpg'
import lightNebulousSaturn2 from './Background-assets/backgrounds/light-nebulous-saturn-2.jpg'
import lightNebulousVenus1 from './Background-assets/backgrounds/light-nebulous-venus-1.jpg'
import lightNebulousVenus2 from './Background-assets/backgrounds/light-nebulous-venus-2.jpg'
import lightNebulousMars from './Background-assets/backgrounds/light-nebulous-mars.jpg'
import lightNebulousAurora from './Background-assets/backgrounds/light-nebulous-aurora.jpg'
// Dark Nebulous Variants
import darkNebulous1 from './Background-assets/backgrounds/dark-nebulous-1.jpg'
import darkNebulous1Md from './Background-assets/backgrounds/dark-nebulous-1-md.jpg'
import darkNebulous1Sm from './Background-assets/backgrounds/dark-nebulous-1-sm.jpg'
import darkNebulous2 from './Background-assets/backgrounds/dark-nebulous-2.jpg'
import darkNebulous2Md from './Background-assets/backgrounds/dark-nebulous-2-md.jpg'
import darkNebulous2Sm from './Background-assets/backgrounds/dark-nebulous-2-sm.jpg'
import darkNebulous3 from './Background-assets/backgrounds/dark-nebulous-3.jpg'
import darkNebulous3Md from './Background-assets/backgrounds/dark-nebulous-3-md.jpg'
import darkNebulous3Sm from './Background-assets/backgrounds/dark-nebulous-3-sm.jpg'
// Code Variants
import venusCode from './Background-assets/backgrounds/venus-code.jpg'
import venusCode2 from './Background-assets/backgrounds/venus-code-2.jpg'
import saturnCode from './Background-assets/backgrounds/saturn-code.jpg'
import marsCode from './Background-assets/backgrounds/mars-code.jpg'
// Grid Variants
import darkMultiGrid from './Background-assets/backgrounds/dark-multi-grid.jpg'
import darkSimpleGrid from './Background-assets/backgrounds/dark-simple-grid.jpg'
import darkAuroraGrid from './Background-assets/backgrounds/dark-aurora-grid.jpg'
// Starship Variants
import starshipLaunchPills from './Background-assets/backgrounds/starship-launch-pills.svg'
// Illustrations
import changes from './Background-assets/illustrations/changes.svg'
import insights from './Background-assets/illustrations/insights.svg'
import search from './Background-assets/illustrations/search.svg'

import { useWindowWidth } from '../hooks/windowWidth'
import { breakpoints } from '../data/breakpoints'

export interface Background {
    variant: // Standard Variants
    | 'transparent'
        | 'white'
        | 'black'
        // Light Nebulous Variants
        | 'lightNebulousSaturn1'
        | 'lightNebulousSaturn2'
        | 'lightNebulousVenus1'
        | 'lightNebulousVenus2'
        | 'lightNebulousMars'
        | 'lightNebulousAurora'
        // Dark Nebulous Variants
        | 'darkNebulous1'
        | 'darkNebulous1Md'
        | 'darkNebulous1Sm'
        | 'darkNebulous2'
        | 'darkNebulous2Md'
        | 'darkNebulous2Sm'
        | 'darkNebulous3'
        | 'darkNebulous3Md'
        | 'darkNebulous3Sm'
        | 'darkNebulous4'
        | 'darkNebulous4Md'
        | 'darkNebulous4Sm'
        // Code Variants
        | 'venusCode'
        | 'venusCode2'
        | 'saturnCode'
        | 'marsCode'
        // Grid Variants
        | 'darkMultiGrid'
        | 'darkSimpleGrid'
        | 'darkAuroraGrid'
        // Simple Variants
        | 'venus'
        | 'saturn'
        | 'mars'
        | 'aquamarine'
        | 'infrared'
        | 'aurora'
        | 'radialSpace'
        | 'purple'
        // Starship Variants
        | 'starshipLaunchPills'
    children?: ReactNode
    illustration?: 'search' | 'changes' | 'insights'
    className?: string
    style?: CSSProperties
}

interface IllustrationStyle {
    [key: string]: {
        size: string
        position: string
    }
}

// Background variant to image or gradient class mapping
const backgrounds: { [key: string]: StaticImageData | string } = {
    // Standard Variants
    white: 'bg-white text-black',
    black: 'bg-black text-white',
    // Light Nebulous Variants
    lightNebulousSaturn1,
    lightNebulousSaturn2,
    lightNebulousVenus1,
    lightNebulousVenus2,
    lightNebulousMars,
    lightNebulousAurora,
    // Dark Nebulous Variants
    darkNebulous1,
    darkNebulous1Md,
    darkNebulous1Sm,
    darkNebulous2,
    darkNebulous2Md,
    darkNebulous2Sm,
    darkNebulous3,
    darkNebulous3Md,
    darkNebulous3Sm,
    darkNebulous4: 'sg-bg-gradient-dark-nebulous-4',
    // Code Variants
    venusCode,
    venusCode2,
    saturnCode,
    marsCode,
    // Grid Variants
    darkMultiGrid,
    darkSimpleGrid,
    darkAuroraGrid,
    // Simple Variants
    venus: 'sg-bg-gradient-venus',
    saturn: 'sg-bg-gradient-saturn',
    mars: 'sg-bg-gradient-mars',
    aquamarine: 'sg-bg-gradient-aquamarine',
    infrared: 'sg-bg-gradient-infrared',
    aurora: 'sg-bg-gradient-aurora',
    radialSpace: 'sg-bg-radial-space',
    purple: 'sg-bg-gradient-purple',
    // Starship Variants
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    starshipLaunchPills,
}

// Illustration to svg mapping
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const illustrations: { [key: string]: string } = { changes, insights, search }

/**
 * This is a Background component as described in our DLS.
 *
 * @param props - props
 * @param props.variant - a required string for a background variant
 * @param props.children - ReactNode
 * @param props.illustration - an optional string for an illustration bg image
 * @param props.className - optional classNames
 * @returns ReactNode
 */
export const Background: FunctionComponent<Background> = ({ variant, children, illustration, className }) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg
    const isLargeDesktop = windowWidth > 1600

    // Illustration style for size and positioning
    const illustrationStyle: IllustrationStyle = {
        search: {
            size: '650px',
            position: isLargeDesktop ? '20%' : '5%',
        },
        changes: {
            size: '520px',
            position: '30%',
        },
        insights: {
            size: '1200px',
            position: '5%',
        },
    }

    const backgroundVariant = backgrounds[variant]
    const isUtilityBackground = typeof backgroundVariant === 'string' && backgroundVariant.includes('-')
    const utilityBackground: string = (typeof backgroundVariant === 'string' && backgroundVariant) || ''
    const backgroundSource: string = typeof backgroundVariant === 'object' ? backgroundVariant.src : backgroundVariant
    let background = `url("${backgroundSource}") center / cover no-repeat`

    if (illustration) {
        const illustrationSource: string = illustrations[illustration]
        const illustrationSize: string = illustrationStyle[illustration].size
        const illustrationPosition: string = illustrationStyle[illustration].position

        if (!isMobile) {
            background = `url(${illustrationSource}) center right ${illustrationPosition} / ${illustrationSize} no-repeat, ${background}`
        }
    }

    const styleClasses = classNames(className, {
        [utilityBackground]: isUtilityBackground,
        'text-white':
            variant.includes('dark') ||
            variant.includes('starship') ||
            variant.includes('black') ||
            variant.toLowerCase().includes('space'),
        'text-black':
            (!variant.includes('dark') &&
                !variant.includes('starship') &&
                !variant.includes('black') &&
                !variant.toLowerCase().includes('space')) ||
            variant === 'transparent',
    })

    return (
        <div
            // eslint-disable-next-line react/forbid-dom-props
            style={backgroundVariant && !isUtilityBackground ? { background } : undefined}
            className={styleClasses}
        >
            {children}
        </div>
    )
}
