declare module '*.svg' {
    import { FunctionComponent, SVGProps } from 'react'
    export const ReactComponent: FunctionComponent<SVGProps<SVGSVGElement>>
    const src: string
    export default src
}

declare module '*.mp4' {
    const src: string
    export default src
}

declare module '*.webm' {
    const src: string
    export default src
}

declare module 'rehype-pretty-code' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const src: Pluggable<any>
    export default src
}
