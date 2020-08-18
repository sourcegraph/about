import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import { TrySourcegraph } from '../components/TrySourcegraph'
import { BLOGS } from '../pages/blog'

// TODO(sqs)
export const ReleasePostTemplate: React.FunctionComponent<Props> = props => {
    const md = props.data.markdownRemark
    const title = md.frontmatter.title
    // TODO(sqs) const publishDate = md.frontmatter.publishDate
    let slug = md.slug
    const fileName = md.fileAbsolutePath.split('blogposts/').pop()
    const description = md.frontmatter.description ? md.frontmatter.description : md.excerpt
    const content = md.html
    const image = 'https://about.sourcegraph.com/sourcegraph-mark.png'
    const meta = {
        title,
        image,
        description,
    }

    switch (slug) {
        case BLOGS.GopherCon:
            slug = `/${BLOGS.GopherCon}/${slug}`
            break
        case BLOGS.GraphQLSummit:
            slug = `/${BLOGS.GraphQLSummit}/${slug}`
            break
        case BLOGS.StrangeLoop:
            slug = `/${BLOGS.StrangeLoop}/${slug}`
        case BLOGS.PressReleases:
            slug = `/${BLOGS.PressReleases}/${slug}`
        default:
            slug = `/${BLOGS.Blog}/${slug}`
    }

    return (
        <Layout location={props.location} meta={meta}>
            <Helmet>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
            </Helmet>
            <div className="bg-white text-dark">
                <div className="blog-post">
                    <div className="blog-post__wrapper">
                        <section className="blog-post__title pt-4">
                            <h1>{title}</h1>
                        </section>
                        <hr className="blog-post__title--rule" />
                        <section className="blog-post__body">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                            <section className="blog-post__footer mt-4 pt-4">
                                <Link to="/blog" className="button btn btn-outline-primary">
                                    Read more posts
                                </Link>
                                <a
                                    href={`https://github.com/sourcegraph/about/edit/master/blogposts/${fileName}`}
                                    className="btn btn-outline-primary ml-3"
                                >
                                    Edit this post
                                </a>
                                <div className="pt-4">
                                    <SocialLinks url={`https://about.sourcegraph.com/${slug}`} title={title} />
                                </div>
                            </section>
                        </section>
                    </div>
                </div>
                <hr className="mb-6" />
            </div>
            <TrySourcegraph />
        </Layout>
    )
}

export default ReleasePostTemplate

export const pageQuery = graphql`
    query ReleasePostTemplate($fileSlug: String) {
        markdownRemark(fields: { slug: { eq: $fileSlug } }) {
            frontmatter {
                title
                description
                tags
                publishDate(formatString: "MMMM D, YYYY")
                changelogItems {
                    url
                    category
                    description
                }
            }
            html
            excerpt
            fields {
                slug
            }
            fileAbsolutePath
        }
    }
`
