import { Link } from 'gatsby'
import truncate from 'lodash/truncate'
import * as React from 'react'

interface BlogPostsProps {
    posts: any[]
    blogType: string
}

function postIsComplete(post: any): boolean {
    return (
        post.node &&
        post.node.frontmatter.title &&
        post.node.frontmatter.author &&
        post.node.frontmatter.publishDate &&
        post.node.frontmatter.slug &&
        post.node.frontmatter.heroImage &&
        post.node.html &&
        post.node.excerpt
    )
}
export default class BlogPosts extends React.Component<any, any> {
    constructor(props: BlogPostsProps) {
        super(props)
    }

    public render(): JSX.Element {
        return (
            <div>
                {this.props.posts.map(
                    (post: any, i: number) =>
                        postIsComplete(post) && (
                            <Link
                                to={`/${this.props.blogType}/${post.node.frontmatter.slug}`}
                                key={i}
                                className="text-decoration-none"
                            >
                                <div className="blog__posts--container" role="article">
                                    <div className="blog__posts--post">
                                        <div className="blog__posts--post-text">
                                            <h2 className="blog__posts--post-title">{post.node.frontmatter.title}</h2>
                                            <div className="blog__posts--post-byline">
                                                by {post.node.frontmatter.author} on {post.node.frontmatter.publishDate}
                                            </div>
                                            <div className="blog__posts--post-excerpt">
                                                <p>
                                                    {post.node.frontmatter.description
                                                        ? truncate(post.node.frontmatter.description, { length: 300 })
                                                        : post.node.excerpt}{' '}
                                                    <span className="blog__posts--post-readmore">Read more</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="blog__posts--post-image">
                                            <div
                                                style={{ position: 'relative', overflow: 'hidden', maxHeight: '250px' }}
                                            >
                                                <div style={{ width: '100%', paddingBottom: '93.90070921985814%' }} />
                                                <img
                                                    src={post.node.frontmatter.heroImage}
                                                    style={{
                                                        position: 'absolute',
                                                        top: '0px',
                                                        left: '0px',
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        objectPosition: 'center center',
                                                        maxHeight: '250px',
                                                        borderRadius: '0.25rem',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                )}
            </div>
        )
    }
}
