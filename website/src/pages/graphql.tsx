import { graphql, PageProps } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { BLOGS } from './blog'
import { PostsListPage } from '../components/blog/PostsListPage'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        meta={{
            title: 'GraphQL Summit 2017 Liveblog',
            description: 'Check out the official GraphQL Summit 2017 Liveblog proudly hosted by Sourcegraph.',
        }}
        blogType={BLOGS.GraphQLSummit}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    ></PostsListPage>
)

export default Page

export const pageQuery = graphql`
    query GraphQLPosts {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "graphql" } } }
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
