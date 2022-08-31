import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { Background } from './Background'

export interface ContentSection {
    id?: string
    background?: Background['variant']
    illustration?: Background['illustration']
    parentClassName?: string
    className?: string
    children: ReactNode
}

export const ContentSection: FunctionComponent<ContentSection> = ({
    id,
    background = 'transparent',
    illustration,
    parentClassName,
    className = '',
    children,
}) => (
    <div id={id}>
        <Background
            variant={background}
            illustration={illustration}
            className={classNames('tw-px-sm tw-py-3xl md:tw-py-5xl', parentClassName)}
        >
            <section className={`tw-max-w-screen-xl tw-mx-auto ${className}`}>{children}</section>
        </Background>
    </div>
)
