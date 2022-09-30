// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../../tailwind.config'

const config = resolveConfig(tailwindConfig)

interface Breakpoints {
    [name: string]: number
}

// These are our breakpoints as defined in our Tailwind config
export const breakpoints: Breakpoints = config.theme?.screens
