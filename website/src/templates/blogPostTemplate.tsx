import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import { eventLogger } from '../EventLogger'

export default class ContentfulTemplate extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    private logSelectDockercommand(): void {
        if (
            document.getSelection().baseNode &&
            document.getSelection().baseNode.parentNode &&
            document.getSelection().baseNode.parentNode.nodeName === 'CODE' &&
            document.getSelection().baseNode.parentNode.textContent.includes('docker run')
        ) {
            eventLogger.trackInstallServerCommandHighlighted('blog')
        }
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
            document.addEventListener('mouseup', this.logSelectDockercommand)
        }
    }

    public render(): JSX.Element | null {
        const md = this.props.data.markdownRemark
        const title = md.frontmatter.title
        const author = md.frontmatter.author
        const content = md.html
        const date = md.frontmatter.publishDate
        const excerpt = md.excerpt
        const tags = md.frontmatter.tags || ''
        const image = md.frontmatter.heroImage
            ? `${md.frontmatter.heroImage}`
            : 'https://about.sourcegraph.com/sourcegraph-mark.png'

        let slug = md.slug
        let readMoreLink
        if (tags.includes('graphql')) {
            slug = 'graphql/' + slug
            readMoreLink = '/graphql'
        } else if (tags.includes('gophercon') || tags.includes('dotGo')) {
            slug = 'go/' + slug
            readMoreLink = '/go'
        } else {
            slug = 'blog/' + slug
            readMoreLink = '/blog'
        }
        const meta = {
            image,
        }
        return (
            <Layout location={this.props.location} meta={meta}>
                <div className="bg-white text-dark">
                    <Helmet>
                        <title>{title}</title>
                        <meta property="og:title" content={title} />
                        <meta property="og:url" content={`https://about.sourcegraph.com/${slug}`} />
                        <meta property="og:description" content={excerpt} />
                        <meta property="og:image" content={image} />
                        <meta property="og:type" content="website" />

                        <meta name="twitter:site" content="@srcgraph" />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:title" content={title} />
                        <meta name="twitter:image" content={image} />
                        <meta name="twitter:description" content={excerpt} />
                        <meta name="description" content={excerpt} />
                    </Helmet>
                    <div className="blog-post">
                        <div className="blog-post__wrapper">
                            <section className="blog-post__title">
                                <h1>{title}</h1>
                                <p>
                                    By {author} on {date}
                                </p>
                            </section>
                            <hr className="blog-post__title--rule" />
                            <section className="blog-post__body">
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                                <hr />
                                <div style={{ height: '0.5em' }} />
                                <Link to={readMoreLink}>
                                    <button className="btn btn-outline-primary">Read more posts</button>
                                </Link>
                                <div style={{ height: '1em' }} />
                                <div>
                                    <div className="mb-4">
                                        <SocialLinks url={`https://about.sourcegraph.com/${slug}`} title={title} />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query blogPostTemplate($fileSlug: String) {
        markdownRemark(fields: { slug: { eq: $fileSlug } }) {
            frontmatter {
                title
                heroImage
                author
                tags
                publishDate(formatString: "MMMM D, YYYY")
            }
            html
            excerpt
            fields {
                slug
            }
        }
    }
`
