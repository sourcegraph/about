import React from 'react'

export interface BlogPost {
    title: string
    thumbnail: string
    url: string
}

interface Props {
    posts: BlogPost[]
}

export const FeaturedBlogPosts: React.FunctionComponent<Props> = ({ posts }) => (
    <div className="container">
        <div className="row text-dark justify-content-center">
            {posts.map(({ title, thumbnail, url }, i) => (
                <div className="blog-posts-home__post col-md-4 px-2">
                    <div className="card">
                        <div className="text-center">
                            <a href={url}>
                                <img
                                    className="blog-posts-home__thumbnail py-3 px-3"
                                    src={thumbnail}
                                    aria-hidden="true"
                                />
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <a href={url} className="btn btn-primary">
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
