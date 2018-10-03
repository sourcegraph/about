import * as _ from 'lodash'
import * as React from 'react'
import Helmet from 'react-helmet'
import BlogHeadLinks from '../components/BlogHeadLinks'
import BlogPosts from '../components/BlogPosts'

export default class GraphQLSummitList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        const graphqlPosts = this.props.data.allMarkdownRemark.edges

        return (
            <div className="gray-9">
                <Helmet>
                    <title>GraphQL Summit 2017 liveblog by Sourcegraph</title>
                    <meta name="twitter:title" content="GraphQL Summit 2017 liveblog by Sourcegraph" />
                    <meta property="og:title" content="GraphQL Summit 2017 liveblog by Sourcegraph" />
                </Helmet>
                <div>
                    <div className="blog blog__head">
                        <h1>Plain Text</h1>
                        <BlogHeadLinks />
                    </div>
                    <BlogPosts blogType="graphql" posts={graphqlPosts} />
                </div>
            </div>
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
                        heroImage
                        author
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
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
