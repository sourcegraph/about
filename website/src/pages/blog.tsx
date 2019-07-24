import { graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
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

        return (
            <Layout location={this.props.location}>
                <div className="blog bg-white text-dark">
                    <Helmet>
                        <title>Plain Text - the official Sourcegraph blog</title>
                        <meta name="twitter:title" content="Plain Text - the official Sourcegraph blog" />
                        <meta property="og:title" content="Plain Text - the official Sourcegraph blog" />
                    </Helmet>
                    <div className="blog blog__head">
                        <h1>Plain Text</h1>
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
                        heroImage
                        author
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
                        published
                        description
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
