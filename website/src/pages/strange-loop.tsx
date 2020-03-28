import { graphql } from 'gatsby'
import * as _ from 'lodash'
import * as React from 'react'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layout'
export default class GoList extends React.Component<any, any> {
    // public componentDidMount(): void {
    //     const script = document.createElement('script')
    //     script.src = '//js.hsforms.net/forms/v2.js'
    //     const hubspot = document.getElementById('strangeLoopForm')
    //     hubspot.appendChild(script)
    //     script.addEventListener('load', () => {
    //         ;(window as any).hbspt.forms.create({
    //             portalId: '2762526',
    //             formId: 'b4b2b911-0515-4a76-bfc0-2f4ca384bdbc',
    //             target: '#strangeLoopForm',
    //         })
    //     })
    // }

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

                {/* <div className="strange-loop-liveblog gray-9 bg-white text-dark">
                    <div>
                        <div className="blog blog__head">
                            <h1 className="pb-4 sr-only">{metaProps.title}</h1>
                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <p className="text-center col-12 mt-4">
                                        <img
                                            className="strange-loop-liveblog__header"
                                            alt="Strange Loop 2019 Banner"
                                            src="/blog/strange-loop-banner-landscape.jpg"
                                        />
                                    </p>
                                </div>
                                <div className="row justify-content-md-center">
                                    <div className="rounded col-8 rounded-lg bg-white h-100">
                                        <h4>Subscribe to the daily feed</h4>
                                        <div className="form-area">
                                            <div className="form">
                                                <div id="strangeLoopForm" className="d-flex justify-center" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-0" />
                    </div>
                </div> */}
                <div className="gray-9 bg-white text-dark">
                    <BlogPosts blogType="go" posts={strangeLoopPosts} />
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
