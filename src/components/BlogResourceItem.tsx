import { FunctionComponent } from 'react'

import { buttonStyle, buttonLocation } from '@data'

interface Props {
    blog: Blog
}

interface Image {
    src: string
    alt: string
}

interface Blog {
    title: string
    description: string
    type: string
    href: string
    img?: Image
}

export const BlogResourceItem: FunctionComponent<Props> = ({ blog }) => (
    <div className="w-100 row mx-0 mb-5 pb-5 border-bottom">
        <div className="col-sm-8 col-md-9 pl-0">
            <h6 className="text-uppercase font-weight-bold text-primary">{blog.type}</h6>
            <a
                className="posts-list__post-title-link"
                href={blog.href}
                title={blog.title}
                data-button-style={buttonStyle.text}
                data-button-location={buttonLocation.body}
                data-button-type="cta"
            >
                <h3 className="font-weight-bold">{blog.title}</h3>
            </a>
            <p>{blog.description}</p>
        </div>
        <div className="col-sm-4 col-md-3 d-flex align-items-center">
            {/* eslint-disable-next-line react/forbid-dom-props */}
            <div className="d-inline-block max-w-250 w-100 min-h-150" style={{ height: '100%' }}>
                <img className="flex-1 w-100" alt={blog.img ? blog.img.alt : blog.title} src={blog.img ? blog.img.src : '/blog/thumbnails/default.jpg'} />
            </div>
        </div>
    </div>
)
