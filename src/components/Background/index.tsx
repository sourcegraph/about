/* eslint-disable import/order */
import { CSSProperties, FunctionComponent, ReactNode } from 'react'

import { StaticImageData } from 'next/image'

import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

// Light Nebulous Variants
import lightNebulousSaturn1 from './assets/backgrounds/light-nebulous-saturn-1.jpg'
import lightNebulousSaturn2 from './assets/backgrounds/light-nebulous-saturn-2.jpg'
import lightNebulousVenus1 from './assets/backgrounds/light-nebulous-venus-1.jpg'
import lightNebulousVenus2 from './assets/backgrounds/light-nebulous-venus-2.jpg'
import lightNebulousMars from './assets/backgrounds/light-nebulous-mars.jpg'
import lightNebulousAurora from './assets/backgrounds/light-nebulous-aurora.jpg'
// Dark Nebulous Variants
import darkNebulous1 from './assets/backgrounds/dark-nebulous-1.jpg'
import darkNebulous1Md from './assets/backgrounds/dark-nebulous-1-md.jpg'
import darkNebulous1Sm from './assets/backgrounds/dark-nebulous-1-sm.jpg'
import darkNebulous2 from './assets/backgrounds/dark-nebulous-2.jpg'
import darkNebulous2Md from './assets/backgrounds/dark-nebulous-2-md.jpg'
import darkNebulous2Sm from './assets/backgrounds/dark-nebulous-2-sm.jpg'
import darkNebulous3 from './assets/backgrounds/dark-nebulous-3.jpg'
import darkNebulous3Md from './assets/backgrounds/dark-nebulous-3-md.jpg'
import darkNebulous3Sm from './assets/backgrounds/dark-nebulous-3-sm.jpg'
import darkNebulous4 from './assets/backgrounds/dark-nebulous-4.jpg'
import darkNebulous4Md from './assets/backgrounds/dark-nebulous-4-md.jpg'
import darkNebulous4Sm from './assets/backgrounds/dark-nebulous-4-sm.jpg'
// Code Variants
import venusCode from './assets/backgrounds/venus-code.jpg'
import venusCode2 from './assets/backgrounds/venus-code-2.jpg'
import saturnCode from './assets/backgrounds/saturn-code.jpg'
import marsCode from './assets/backgrounds/mars-code.jpg'
// Grid Variants
import darkMultiGrid from './assets/backgrounds/dark-multi-grid.jpg'
import darkSimpleGrid from './assets/backgrounds/dark-simple-grid.jpg'
import auroraGrid from './assets/backgrounds/aurora-grid.jpg'
// Illustrations
import changes from './assets/illustrations/changes.svg'
import insights from './assets/illustrations/insights.svg'
import search from './assets/illustrations/search.svg'

export interface Background {
    variant: // Light Nebulous Variants
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
        | 'auroraGrid'
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

// Background variant to image mapping
const backgrounds: { [key: string]: StaticImageData } = {
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
    darkNebulous4,
    darkNebulous4Md,
    darkNebulous4Sm,
    // Code Variants
    venusCode,
    venusCode2,
    saturnCode,
    marsCode,
    // Grid Variants
    darkMultiGrid,
    darkSimpleGrid,
    auroraGrid,
}

// Illustration to svg mapping
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const illustrations: { [key: string]: string } = { changes, insights, search }

// Illustration style for size and positioning
const illustrationStyle: IllustrationStyle = {
    search: {
        size: '700px',
        position: '30%',
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

/**
 * This is a Background component as described in our DLS.
 *
 * @param props - props
 * @param props.variant - a required string for a background variant
 * @param props.children - ReactNode
 * @param props.illustration - an optional string for an illustration bg image
 * @param props.className - optional classNames
 * @param props.style - optional CSS style properties
 * @returns ReactNode
 */
export const Background: FunctionComponent<Background> = ({ variant, children, illustration, className, style }) => {
    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    const backgroundSource: string = backgrounds[variant].src

    let background = `url("${backgroundSource}") center / cover no-repeat`
    if (illustration) {
        const illustrationSource: string = illustrations[illustration]
        const illustrationSize: string = illustrationStyle[illustration].size
        const illustrationPosition: string = illustrationStyle[illustration].position

        background = `url(${illustrationSource}) center right ${illustrationPosition} / ${
            isMobile ? 'contain' : illustrationSize
        } no-repeat, ${background}`
    }

    return (
        <div
            // eslint-disable-next-line react/forbid-dom-props
            style={{ background, ...style }}
            className={className}
        >
            {children}
        </div>
    )
}
