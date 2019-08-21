import React from 'react'
import { Jumbotron } from '../Jumbotron'
import slugify from 'slugify'

interface Props {
    title: string
    description?: string
    extraDescription?: React.ReactFragment
    mainActions?: React.ReactFragment
    titleClassName?: string
    children: React.ReactNode
}

export const ContentPage: React.FunctionComponent<Props> = ({
    title,
    description,
    extraDescription,
    mainActions,
    titleClassName,
    children,
}) => (
    <div className={`{slugify(title).toLowerCase()} content-page`}>
        <Jumbotron className="mb-5" title={title} description={description} titleClassName={titleClassName}>
            {extraDescription}
            {mainActions}
        </Jumbotron>
        {children}
    </div>
)
