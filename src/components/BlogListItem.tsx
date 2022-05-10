import { FunctionComponent } from 'react'

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

export const BlogListItem: FunctionComponent<Props> = ({ blog }) => (
    <div className="w-100 row mx-0 mb-5 pb-4 border-bottom">
        <div className="col-sm-8 col-md-9">
            <a className="posts-list__post-title-link" href={blog.href}>
                <h3 className="font-weight-bold">{blog.title}</h3>
            </a>
            <p className="text-muted">{blog.type}</p>
            <p>{blog.description}</p>
        </div>
        <div className="col-sm-4 col-md-3 d-flex align-items-center">
            {blog.img && <img className="flex-1 w-100" alt={blog.img.alt} src={blog.img.src} />}
        </div>
    </div>
)
