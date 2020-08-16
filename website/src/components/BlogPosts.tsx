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
            <ul className="blog-posts container list-unstyled">
                {this.props.posts.map(
                    (post: any, i: number) =>
                        postIsComplete(post) && (
                            <li className="blog-posts__post row pt-2" key={post.node.frontmatter.slug}>
                                <div className="col-sm-12 col-md-3 text-center pt-3 pb-4">
                                    <Link
                                        to={`/${this.props.blogType}/${post.node.frontmatter.slug}`}
                                        key={i}
                                        className="d-block pt-2 align-self-center"
                                    >
                                        <img
                                            className="blog-posts__post__image"
                                            src={post.node.frontmatter.heroImage}
                                            alt={post.node.frontmatter.title}
                                        />
                                    </Link>
                                </div>
                                <div className="col-sm-12 col-md-9 pt-3 pb-2">
                                    <h2 className="blog-posts__post__title">
                                        <Link to={`/${this.props.blogType}/${post.node.frontmatter.slug}`} key={i}>
                                            {post.node.frontmatter.title}
                                        </Link>
                                    </h2>
                                    <p className="blog-posts__post__byline">
                                        By {post.node.frontmatter.author} on {post.node.frontmatter.publishDate}
                                    </p>
                                    <p className="blog-posts__post__excerpt">
                                        {post.node.frontmatter.description
                                            ? truncate(post.node.frontmatter.description, { length: 300 })
                                            : truncate(post.node.excerpt, { length: 300 })}{' '}
                                        <Link
                                            to={`/${this.props.blogType}/${post.node.frontmatter.slug}`}
                                            key={i}
                                            className="blog-posts__post__read-more"
                                        >
                                            Read more
                                        </Link>
                                    </p>
                                </div>
                            </li>
                        )
                )}
            </ul>
        )
    }
}
