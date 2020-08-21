import { graphql, PageProps } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { PostsListPage } from '../components/blog/PostsListPage'
import { BLOGS } from '../components/blog/postTypes'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        title="Strange Loop liveblog"
        meta={{
            title: 'Strange Loop liveblog',
            description: 'Check out the official Strange Loop 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/blog/strange-loop-banner-landscape.jpg',
        }}
        blogType={BLOGS.StrangeLoop}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    ></PostsListPage>
)

export default Page

export const pageQuery = graphql`
    query strangeLoopPosts {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "strange-loop" } } }
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
