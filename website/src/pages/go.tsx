import { graphql } from 'gatsby'
import _ from 'lodash'
import * as React from 'react'
import { BlogPosts } from '../components/blog/BlogPosts'
import Layout from '../components/Layout'

export default class GoList extends React.Component<any, any> {
    public render(): JSX.Element | null {
        const metaProps = {
            title: 'GopherCon and dotGo liveblogs',
            description: 'Check out the official GopherCon 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/gophercon-2019/gophercon-2019-banner.png',
        }
        const goPosts = this.props.data.allMarkdownRemark.edges.filter(
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
                    <BlogPosts blogType="go" posts={goPosts} />
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
