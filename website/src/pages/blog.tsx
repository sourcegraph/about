import { graphql } from 'gatsby'
import * as React from 'react'
import { ContentPage } from '../components/content/ContentPage'
import { ContentSection } from '../components/content/ContentSection'
import BlogHeadLinks from '../components/BlogHeadLinks'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layout'

export enum BLOGS {
    GopherCon = 'go',
    DotGo = 'go',
    GraphQLSummit = 'graphql',
    StrangeLoop = 'strange-loop',
    Blog = 'blog',
}

export default class BlogList extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public render(): JSX.Element | null {
        const markdownBlogPosts = this.props.data.allMarkdownRemark.edges.filter(
            (post: any) => post.node.frontmatter.published === true
        )
        const metaProps = {
            title: 'Sourcegraph blog',
            description: 'Plain text - the official Sourcegraph blog.',
        }

        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: metaProps.title,
                    description: metaProps.description,
                }}
            >
                <ContentPage
                    title="Sourcegraph blog"
                    mainActions={
                        <div className="d-flex flex-column align-items-center">
                            <BlogHeadLinks />
                        </div>
                    }
                >
                    <ContentSection color="white">
                        <div className="pt-4">
                            <BlogPosts blogType="blog" posts={markdownBlogPosts} />
                        </div>
                    </ContentSection>
                </ContentPage>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query BlogPosts {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "blog" } } }
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
