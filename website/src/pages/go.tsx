import { graphql } from 'gatsby'
import * as _ from 'lodash'
import * as React from 'react'
import Helmet from 'react-helmet'
import BlogHeadLinks from '../components/BlogHeadLinks'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layout'
export default class GoList extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('gopherConForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: '9cfe9111-fe45-45f5-873a-9f4925affdfd',
                target: '#gopherConForm',
            })
        })
    }

    public render(): JSX.Element | null {
        const goPosts = this.props.data.allMarkdownRemark.edges.filter(
            (post: any) => post.node.frontmatter.published === true
        )

        return (
            <Layout location={this.props.location}>
                <div className="gray-9 bg-white text-dark">
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
                            <div className="container subscription-grid">
                                <div className="grid-item-1 flex-0 rounded rounded-lg py-4 px-6 bg-white h-100">
                                    <h4>Subscribe to the GopherCon 2019 Liveblog</h4>
                                    <p>Get notified as each post goes live.</p>
                                    <div className="form-area">
                                        <div className="form">
                                            <div id="gopherConForm" className="d-flex justify-center" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid-item-2">
                                    <img className="grid-image" height="270" width="270" src="/gophercon2019.png"></img>
                                </div>
                            </div>
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
