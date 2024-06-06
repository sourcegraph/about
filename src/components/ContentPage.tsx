import { FunctionComponent, ReactNode, ReactFragment } from 'react'

import { Jumbotron } from '.'

interface Props {
    title: string
    description?: string
    extraDescription?: ReactFragment
    mainActions?: ReactFragment
    titleClassName?: string
    className?: string
    children?: ReactNode
}

export const ContentPage: FunctionComponent<Props> = ({
    title,
    description,
    extraDescription,
    mainActions,
    titleClassName,
    className = '',
    children,
}) => (
    <div className={`${className} mx-auto my-12 max-w-4xl`}>
        <Jumbotron title={title} description={description} titleClassName={titleClassName} className={`${className}`}>
            {extraDescription}
            {mainActions}
        </Jumbotron>
        {children}
    </div>
)
