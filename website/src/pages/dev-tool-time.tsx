import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import BlogHeadLinks from '../components/blog/BlogHeadLinks'
import { PostsListPage } from '../components/blog/PostsListPage'
import { BLOG_TYPE_TO_INFO, BlogType } from '../components/blog/postTypes'

export const Page: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <PostsListPage
        blogInfo={BLOG_TYPE_TO_INFO[BlogType.DTT]}
        posts={props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)}
        location={props.location}
    >
        <div className="d-flex flex-column align-items-center">
            <BlogHeadLinks />
        </div>
    </PostsListPage>
)

export default Page

export const pageQuery = graphql`
    query DTTEpisodes {
        allMarkdownRemark(
            filter: {frontmatter: {tags: {in: "dtt"}}},
            sort: { fields: [frontmatter___publishDate], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
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
