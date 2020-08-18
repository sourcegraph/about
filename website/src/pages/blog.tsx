import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import BlogHeadLinks from '../components/blog/BlogHeadLinks'
import { PostsList } from '../components/blog/PostsList'
import { ContentPage } from '../components/content/ContentPage'
import Layout from '../components/Layout'

export enum BLOGS {
    GopherCon = 'go',
    DotGo = 'go',
    GraphQLSummit = 'graphql',
    StrangeLoop = 'strange-loop',
    Blog = 'blog',
    PressReleases = 'press-releases',
}

export const BlogList: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => {
    const markdownBlogPosts = props.data.allMarkdownRemark.edges.filter(
        (post: any) => post.node.frontmatter.published === true
    )
    const metaProps = {
        title: 'Sourcegraph blog',
        description:
            "News from Sourcegraph: our changelog, announcements, tech blog posts, and anything else we think you'll find interesting.",
    }

    return (
        <Layout
            location={props.location}
            meta={{
                title: metaProps.title,
                description: metaProps.description,
            }}
            className="bg-light navbar-light"
        >
            <ContentPage title="Sourcegraph blog" className="bg-light" titleClassName="display-4">
                <div className="pt-4">
                    <PostsList blogType="blog" posts={markdownBlogPosts} />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <BlogHeadLinks />
                </div>
            </ContentPage>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPosts {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: ["blog"] } } }
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
                        changelogItems {
                            url
                            category
                            description
                        }
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

export default BlogList
