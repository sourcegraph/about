import React from 'react'
import { Link } from 'gatsby'
import { BlogTypeInfo } from './postTypes'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'image'> { }

export const BlogPostsListHeader: React.FunctionComponent<Props> = ({ title, belowTitle, image }) => (
    <div>
        <img
            className=""
            src={image}
        />
    </div>
)
