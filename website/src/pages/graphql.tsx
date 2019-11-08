import { graphql } from 'gatsby'
import * as _ from 'lodash'
import * as React from 'react'
import BlogPosts from '../components/BlogPosts'
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
                <div className="gray-9 bg-white text-dark">
                    <div>
                        <div className="blog blog__head">
                            <h1>GraphQL Summit 2017 Liveblog</h1>
                        </div>
                        <BlogPosts blogType="graphql" posts={graphqlPosts} />
                    </div>
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
