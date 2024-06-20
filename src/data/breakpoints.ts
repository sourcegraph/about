// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

const config = resolveConfig(tailwindConfig)

interface Breakpoints {
    [name: string]: number
}

interface Screens {
    [name: string]: string
}

const screens: Screens = config.theme?.screens
const breaks: Breakpoints = {}

for (const screen in screens) {
    if (screens[screen]) {
        if (typeof screens[screen] === 'object' && screens[screen] !== null) {
            breaks[screen] = Number(screens[screen].min.slice(0, -2))
        } else {
            breaks[screen] = Number(screens[screen].slice(0, -2))
        }
    }
}

// These are our breakpoints as defined in our Tailwind config
export const breakpoints: Breakpoints = breaks
