import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import BlogHeadLinks from '../components/blog/BlogHeadLinks'
import { PostsListPage } from '../components/blog/PostsListPage'

// TODO(sqs)
export enum BLOGS {
    GopherCon = 'go', // TODO(sqs): combine with DotGo
    DotGo = 'go',
    GraphQLSummit = 'graphql',
    StrangeLoop = 'strange-loop',
    Blog = 'blog',
    PressReleases = 'press-releases',
}

export const BlogList: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        meta={{
            title: 'Sourcegraph blog',
            description:
                "News from Sourcegraph: our changelog, announcements, tech blog posts, and anything else we think you'll find interesting.",
        }}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    >
        <div className="d-flex flex-column align-items-center">
            <BlogHeadLinks />
        </div>
    </PostsListPage>
)

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
                        authorUrl
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
                    fileAbsolutePath
                }
            }
        }
    }
`

export default BlogList
