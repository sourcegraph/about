import React from 'react'
import { Link } from 'gatsby'
import { BlogTypeInfo } from './postTypes'

interface Props extends Pick<BlogTypeInfo, 'title' | 'belowTitle' | 'baseUrl' | 'blogImage'> { }

export const BlogHeader: React.FunctionComponent<Props> = ({ title, belowTitle, baseUrl, blogImage }) => (
    <div>
        <h1 className="display-4 mt-3">
            <Link to={baseUrl} className="text-body">
                <img
                    className=""
                    src={blogImage}
                />
            </Link>
        </h1>
        {belowTitle}
    </div>
)
