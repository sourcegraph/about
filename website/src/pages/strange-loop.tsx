import { graphql, PageProps } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { PostsListPage } from '../components/blog/PostsListPage'
import { BlogType, BLOG_TYPE_TO_INFO } from '../components/blog/postTypes'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        blogInfo={BLOG_TYPE_TO_INFO[BlogType.StrangeLoop]}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    />
)

export default Page

export const pageQuery = graphql`
    query strangeLoopPosts {
        allMarkdownRemark(
            filter: { fields: { blogType: { eq: "strange-loop" } } }
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
                        description
                        published
                    }
                    html
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                        permalink
                        blogType
                    }
                }
            }
        }
    }
`
