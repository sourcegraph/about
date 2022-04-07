import { FunctionComponent } from 'react'

interface Props {
    blog: Blog
}

interface Blog {
    title: string
    description: string
    type: string
    href: string
    image?: string
}

export const BlogListItem: FunctionComponent<Props> = ({ blog }) => (
    <div className="w-100 d-flex flex-lg-row flex-column mb-5 pb-4 border-bottom justify-content-between">
        <div className="col-lg-9">
            <a className="posts-list__post-title-link" href={blog.href}>
                <h3 className="font-weight-bold">{blog.title}</h3>
            </a>
            <p className="text-muted">{blog.type}</p>
            <p>{blog.description}</p>
        </div>
        <div className="col-lg-3">
            {blog.image && <img className="flex-1 blog-post__image" alt={`${blog.title}`} src={blog.image} />}
        </div>
    </div>
)
