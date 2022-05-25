import React from 'react'
import { Jumbotron } from '../Jumbotron'

interface Props {
    title: string
    description?: string
    extraDescription?: React.ReactFragment
    mainActions?: React.ReactFragment
    titleClassName?: string
    className?: string
    children?: React.ReactNode
}

export const ContentPage: React.FunctionComponent<Props> = ({
    title,
    description,
    extraDescription,
    mainActions,
    titleClassName,
    className = '',
    children,
}) => (
    <div className={`${className} content-page`}>
        <Jumbotron title={title} description={description} titleClassName={titleClassName} className={`${className}`}>
            {extraDescription}
            {mainActions}
        </Jumbotron>
        {children}
    </div>
)
