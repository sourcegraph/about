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
            className={classNames('tw-px-sm tw-py-3xl md:tw-py-5xl', parentClassName)}
        >
            <section
                className={classNames('tw-mx-auto', className, slimWidth ? 'tw-max-w-[840px]' : 'tw-max-w-screen-xl')}
            >
                {children}
            </section>
        </Background>
    </div>
)
