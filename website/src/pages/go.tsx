import { graphql, PageProps } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { PostsListPage } from '../components/blog/PostsListPage'
import { BLOG_TYPE_TO_INFO } from '../components/blog/postTypes'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        blogInfo={BLOG_TYPE_TO_INFO['go']}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    ></PostsListPage>
)

export default Page

export const pageQuery = graphql`
    query GoPosts {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { regex: "/gophercon|dotGo/" } } }
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
                    }
                }
            }
        }
    }
`
