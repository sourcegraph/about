import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import { PostsList } from '../components/blog/PostsList'
import { BlogType, BLOG_TYPE_TO_INFO } from '../components/blog/postTypes'

export const DttPage: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => (
    <Layout
        location={props.location}
        meta={{
            title: 'Welcome to the Sourcegraph Community',
            description:
                "Sourcegraph is so much more than a universal code search engine. It's the story of new gen-developers who renaissance-d the way we work, live, and collaborate. It's our unparalleled thinking that creates endless possibilities, to rebuild, to disrupt and to innovate relentlessly despite all the complexities of the big code. But we're just getting started. Imagine the road ahead if we take this journey together.",
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
    >
        <div className="container-lg">
            <h1>Hello</h1>
            <PostsList
                blogInfo={BLOG_TYPE_TO_INFO[BlogType.DTT]}
                posts={props.data.allMarkdownRemark.edges.filter(
                    (post: any) => post.node.frontmatter.published === true
                )}
            />
        </div>
    </Layout>
)

export default DttPage

export const pageQuery = graphql`
    query Dtt {
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
