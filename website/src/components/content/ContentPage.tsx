import { Link } from 'gatsby'
import ChevronRightIcon from 'mdi-react/ChevronRightIcon'
import CityIcon from 'mdi-react/CityIcon'
import MagnifyIcon from 'mdi-react/MagnifyIcon'
import OpenInAppIcon from 'mdi-react/OpenInAppIcon'
import PowerPlugIcon from 'mdi-react/PowerPlugIcon'
import WebIcon from 'mdi-react/WebIcon'
import React from 'react'
import { Jumbotron } from '../Jumbotron'

interface Props {
    title: string
    description: string
    mainActions: React.ReactFragment
    children: React.ReactNode
}

export const ContentPage: React.FunctionComponent<Props> = ({ title, description, mainActions, children }) => (
    <div className="content-page">
        <Jumbotron className="mb-5" title={title} description={description}>
            {mainActions}
        </Jumbotron>
        {children}
    </div>
)
