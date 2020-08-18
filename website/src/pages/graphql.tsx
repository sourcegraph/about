import { graphql } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { PostsList } from '../components/blog/PostsList'
import Layout from '../components/Layout'

export default class GraphQLSummitList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        const metaProps = {
            title: 'GraphQL Summit 2017 Liveblog',
            description: 'Check out the official GraphQL Summit 2017 Liveblog proudly hosted by Sourcegraph.',
        }
        const graphqlPosts = this.props.data.allMarkdownRemark.edges

        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: metaProps.title,
                    description: metaProps.description,
                }}
            >
                <section className="content-section container hero-section text-center py-5">
                    <h1>{metaProps.title}</h1>
                </section>

                <div className="gray-9 bg-white text-dark">
                    <PostsList blogType="graphql" posts={graphqlPosts} />
                </div>
            </Layout>
        )
    }
}

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
