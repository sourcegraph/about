import { graphql, PageProps } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { BLOGS } from './blog'
import { PostsListPage } from '../components/blog/PostsListPage'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        meta={{
            title: 'GopherCon and dotGo liveblogs',
            description: 'Check out the official GopherCon 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/gophercon-2019/gophercon-2019-banner.png',
        }}
        blogType={BLOGS.GopherCon}
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
