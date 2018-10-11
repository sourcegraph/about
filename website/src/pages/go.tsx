import { graphql } from 'gatsby'
import * as _ from 'lodash'
import * as React from 'react'
import Helmet from 'react-helmet'
import BlogHeadLinks from '../components/BlogHeadLinks'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layout'
export default class GoList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        const goPosts = this.props.data.allMarkdownRemark.edges

        return (
            <Layout location={this.props.location}>
                <div className="gray-9">
                    <Helmet>
                        <title>Go conference liveblogs by Sourcegraph</title>
                        <meta name="twitter:title" content="Go conference liveblogs by Sourcegraph" />
                        <meta property="og:title" content="Go conference liveblogs by Sourcegraph" />
                        <meta
                            property="og:image"
                            content="https://images.ctfassets.net/le3mxztn6yoo/5nOlXCLdhSk6ESWEW8iC24/01978fdff3206c78ad8bee4c0cdfee87/mechanic-tire.jpg?w=400"
                        />
                    </Helmet>

                    <div>
                        <div className="blog blog__head">
                            <h1>Plain Text</h1>
                            <BlogHeadLinks />
                        </div>
                        <BlogPosts blogType="go" posts={goPosts} />
                    </div>
                </div>
            </Layout>
        )
    }
}

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
