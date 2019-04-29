import React from 'react'
import { Jumbotron } from '../Jumbotron'

interface Props {
    title: string
    description?: string
    extraDescription?: React.ReactFragment
    mainActions?: React.ReactFragment
    children: React.ReactNode
}

export const ContentPage: React.FunctionComponent<Props> = ({
    title,
    description,
    extraDescription,
    mainActions,
    children,
}) => (
    <div className="content-page">
        <Jumbotron className="mb-5" title={title} description={description}>
            {extraDescription}
            {mainActions}
        </Jumbotron>
        {children}
    </div>
)
