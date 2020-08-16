import * as React from 'react'
import { BlogPostSummary } from './BlogPostSummary'

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
                    (post: any) =>
                        postIsComplete(post) && (
                            <BlogPostSummary
                                post={post}
                                key={post.node.frontmatter.slug}
                                blogType={this.props.blogType}
                                className="blog-posts__post pt-2"
                            />
                        )
                )}
            </ul>
        )
    }
}
