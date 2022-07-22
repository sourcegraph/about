import { FunctionComponent, useEffect, useState, ReactNode } from 'react'

import classNames from 'classnames'
import { StaticImageData } from 'next/image'

import { breakpoints } from '@data'
import { useWindowWidth } from '@hooks'

import auroraGrid from './assets/backgrounds/aurora-grid.jpg'
import darkMultiGrid from './assets/backgrounds/dark-multi-grid.jpg'
import lightNebulousAurora from './assets/backgrounds/light-nebulous-aurora.jpg'
import lightNebulousMars from './assets/backgrounds/light-nebulous-mars.jpg'
import lightNebulusVenus2 from './assets/backgrounds/light-nebulous-venus-2.jpg'
import marsCode from './assets/backgrounds/mars-code.jpg'
import saturnCode from './assets/backgrounds/saturn-code.jpg'
import venusCode from './assets/backgrounds/venus-code.jpg'
import changes from './assets/illustrations/changes.svg'
import insights from './assets/illustrations/insights.svg'
import navigation from './assets/illustrations/navigation.svg'

export interface Background {
    variant: 
        'auroraGrid' | 
        'darkMultiGrid' |
        'lightNebulousAurora' |
        'lightNebulousMars' |
        'lightNebulousVenus2' |
        'marsCode' |
        'saturnCode' |
        'venusCode'
    children: ReactNode
    illustration?: 'changes' | 'insights' | 'navigation'
    className?: string
    displayUnderNav?: boolean
}

const backgrounds: {[key: string]: StaticImageData} = {
    auroraGrid,
    darkMultiGrid,
    lightNebulousAurora,
    lightNebulousMars,
    lightNebulusVenus2,
    marsCode,
    saturnCode,
    venusCode,
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const illustrations: { [key: string]: string } = { changes, insights, navigation }

export const Background: FunctionComponent<Background> = ({
    variant,
    children,
    illustration,
    className,
    displayUnderNav = false
}) => {

    const [navHeight, setNavHeight] = useState(74)
    
    useEffect(() => {
        const nav = document.querySelector('.navbar')
        setNavHeight(nav?.getBoundingClientRect().height || 74)
    }, [])

    const windowWidth = useWindowWidth()
    const isMobile = windowWidth < breakpoints.lg

    let background = `url("${backgrounds[variant].src}") center / cover no-repeat`
    if (illustration) {
        background = `url(${illustrations[illustration]}) center right 10% / ${isMobile ? 'cover' : '45%'} no-repeat, ${background}`
    }

    const style = { background, marginTop: '' }
    if (displayUnderNav) {            
        style.marginTop = `-${navHeight}px`
    }
    
    return (
        <div
            // eslint-disable-next-line react/forbid-dom-props
            style={style}
            className={classNames('min-h-600', className)}
        >
            {children}
        </div>
    )
}
