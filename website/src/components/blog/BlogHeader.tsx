import React from 'react'
import { Link } from 'gatsby'

export const BlogHeader: React.FunctionComponent = () => (
    <h2 className="display-4 mt-3">
        <Link to="/blog" className="text-body">
            Blog
        </Link>
    </h2>
)
