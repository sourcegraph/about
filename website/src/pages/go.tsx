import { graphql } from 'gatsby'
import * as _ from 'lodash'
import * as React from 'react'
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
        const metaProps = {
            title: 'GopherCon and dotGo Liveblogs by Sourcegraph',
            description: 'Checkout the official GopherCon 2019 Liveblog proudly hosted by Sourcegraph.',
            image: 'https://about.sourcegraph.com/gophercon-2019/gophercon-2019-banner.png'
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
                image: metaProps.image
            }}>
                <div className="gray-9 bg-white text-dark">
                    <div>
                        <div className="blog blog__head">
                            <h1 class="pb-4 sr-only">{metaProps.title}</h1>
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
                                    <img className="grid-image" src="/gophercon-2019/gophercon-thumbnail.png" alt="GopherCon 2019 Liveblog proudly hosted by Sourcegraph"></img>
                                </div>
                            </div>
                        </div>

                        <hr/>

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
