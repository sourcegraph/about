import React from 'react'
import { Link } from 'gatsby'

interface Props {
    title: string
}

export const BlogHeader: React.FunctionComponent<Props> = ({ title = 'Blog' }) => (
    <h2 className="display-4 mt-3">
        <Link to="/blog" className="text-body">
            {title}
        </Link>
    </h2>
)
