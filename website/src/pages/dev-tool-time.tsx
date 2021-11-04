import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { BLOG_TYPE_TO_INFO, BlogType } from '../components/blog/postTypes'
import { PostsListPage } from '../components/blog/PostsListPage'

// TODOS:
// -[] Replace PostListPage w / subcomponents
// -[] Add featured video that is most recent
// -[] Add hubspot form
// -[] Add list of all guests, even without recaps

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        blogInfo={BLOG_TYPE_TO_INFO[BlogType.DTT]}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    />
)

export default Page

export const pageQuery = graphql`
    query DTTEpisodes {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "dtt" } } }
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
                        canonical
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
                        published
                        changelogItems {
                            url
                            category
                            description
                        }
                        style
                    }
                    html
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                        permalink
                        blogType
                    }
                    fileAbsolutePath
                }
            }
        }
    }
`
