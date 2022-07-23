import { CSSProperties, FunctionComponent, ReactNode } from 'react'

import { StaticImageData } from 'next/image'

import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

// TODO(Brett): Add other background variants
import auroraGrid from './assets/backgrounds/aurora-grid.jpg'
import darkMultiGrid from './assets/backgrounds/dark-multi-grid.jpg'
import lightNebulousAurora from './assets/backgrounds/light-nebulous-aurora.jpg'
import lightNebulousMars from './assets/backgrounds/light-nebulous-mars.jpg'
import lightNebulousVenus2 from './assets/backgrounds/light-nebulous-venus-2.jpg'
import marsCode from './assets/backgrounds/mars-code.jpg'
import saturnCode from './assets/backgrounds/saturn-code.jpg'
import venusCode from './assets/backgrounds/venus-code.jpg'
import changes from './assets/illustrations/changes.svg'
import insights from './assets/illustrations/insights.svg'
import search from './assets/illustrations/search.svg'

export interface Background {
    variant:
        | 'auroraGrid'
        | 'darkMultiGrid'
        | 'lightNebulousAurora'
        | 'lightNebulousMars'
        | 'lightNebulousVenus2'
        | 'marsCode'
        | 'saturnCode'
        | 'venusCode'
    children: ReactNode
    illustration?: 'search' | 'changes' | 'insights'
    className?: string
    style?: CSSProperties
}

// Background variant to image mapping
const backgrounds: { [key: string]: StaticImageData } = {
    auroraGrid,
    darkMultiGrid,
    lightNebulousAurora,
    lightNebulousMars,
    lightNebulousVenus2,
    marsCode,
    saturnCode,
    venusCode,
}

// Illustration to svg mapping
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const illustrations: { [key: string]: string } = { changes, insights, search }

interface IllustrationStyle {
    [key: string]: {
        size: string
        position: string
    }
}

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
 * @param variant - a requires string for a background variant
 * @param children - ReactNode
 * @param illustration - an optional string for an illustration bg image
 * @param className - optional classNames
 * @param style - optional CSS style properties
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
