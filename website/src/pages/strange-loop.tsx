import { graphql } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { PostsList } from '../components/blog/PostsList'
import Layout from '../components/Layout'

export default class GoList extends React.Component<any, any> {
    public render(): JSX.Element | null {
        const metaProps = {
            title: 'Strange Loop liveblog',
            description: 'Check out the official Strange Loop 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/blog/strange-loop-banner-landscape.jpg',
        }
        const strangeLoopPosts = this.props.data.allMarkdownRemark.edges.filter(
            (post: any) => post.node.frontmatter.published === true
        )

        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: metaProps.title,
                    description: metaProps.description,
                    image: metaProps.image,
                }}
            >
                <section className="content-section container hero-section text-center py-5">
                    <h1>{metaProps.title}</h1>
                </section>
                <div className="gray-9 bg-white text-dark">
                    <PostsList blogType="strange-loop" posts={strangeLoopPosts} />
                </div>
            </Layout>
        )
    }
}

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
