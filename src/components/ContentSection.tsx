import { FunctionComponent, ReactNode } from 'react'

import classNames from 'classnames'

import { Background } from './Background'

export interface ContentSection {
    id?: string
    background?: Background['variant']
    illustration?: Background['illustration']
    slimWidth?: boolean // For long form content (Blog, Case studies, etc)
    parentClassName?: string
    className?: string
    children: ReactNode
}

export const ContentSection: FunctionComponent<ContentSection> = ({
    id,
    background = 'transparent',
    illustration,
    slimWidth = false,
    parentClassName,
    className = '',
    children,
}) => (
    <div id={id}>
        <Background
            variant={background}
            illustration={illustration}
            className={classNames('px-sm md:py-16', parentClassName)}
        >
            <section className={classNames('mx-auto', className, slimWidth ? 'max-w-[840px]' : 'max-w-screen-xl')}>
                {children}
            </section>
        </Background>
    </div>
)
