import { graphql } from 'gatsby'
import * as React from 'react'
import BlogHeadLinks from '../components/BlogHeadLinks'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layout'

export default class BlogList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        const markdownBlogPosts = this.props.data.allMarkdownRemark.edges.filter(
            (post: any) => post.node.frontmatter.published === true
        )
        const metaProps = {
            title: 'Sourcegraph blog',
            description: 'Plain text - the official Sourcegraph blog.',
        }

        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: metaProps.title,
                    description: metaProps.description,
                }}
            >
                <div className="blog bg-white text-dark">
                    <div className="blog blog__head">
                        <h1>Sourcegraph blog</h1>
                        <BlogHeadLinks />
                    </div>
                    <BlogPosts blogType="blog" posts={markdownBlogPosts} />
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query BlogPosts {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "blog" } } }
            sort: { fields: [frontmatter___publishDate], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        heroImage
                        author
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
                        published
                    }
                    html
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                    }
                }
            }
        }
    }
`
