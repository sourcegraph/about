import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { BlogHeader } from '../components/blog/BlogHeader'
import { BLOG_TYPE_TO_INFO, Post, POST_TYPE_TO_COMPONENT, postType, urlToPost } from '../components/blog/postTypes'
import Layout from '../components/Layout'

interface Props extends PageProps<{ markdownRemark: Post }> {}

export const PostTemplate: React.FunctionComponent<Props> = ({ data, location }) => {
    const post = data.markdownRemark
    const title = post.frontmatter.title
    const description = post.frontmatter.description ? post.frontmatter.description : post.excerpt
    const image = 'https://about.sourcegraph.com/sourcegraph-mark.png'
    const socialImage = post.frontmatter.socialImage
    const canonical = post.frontmatter.canonical
    const seoTitle = post.frontmatter.seoTitle
    const seoDescription = post.frontmatter.seoDescription
    const meta = {
        title,
        image,
        description,
        seoTitle,
        seoDescription
    }

    const C = POST_TYPE_TO_COMPONENT[postType(post)]
    const blogInfo = BLOG_TYPE_TO_INFO[post.fields.blogType]

    return (
        <Layout location={location} meta={meta} className="bg-light navbar-light">
            <Helmet>
                {canonical ? <link rel="canonical" href={canonical} /> : ''}
                {socialImage ? <meta name="twitter:card" content="summary_large_image" /> : ''}
                {socialImage ? (
                    <meta name="twitter:image" content={socialImage} />
                ) : (
                    <meta name="twitter:image" content="https://about.sourcegraph.com/sourcegraph-mark.png" />
                )}
                {socialImage ? (
                    <meta property="og:image" content={socialImage} />
                ) : (
                    <meta property="og:image" content="https://about.sourcegraph.com/sourcegraph-mark.png" />
                )}
            </Helmet>
            <div className="">
                <div className="container-lg">
                    <BlogHeader {...blogInfo} />
                </div>
                <div className="post-template mt-5 bg-white">
                    <div className="container-lg">
                        <C
                            post={post}
                            url={urlToPost(post, blogInfo)}
                            full={true}
                            className="post-template__post"
                            headerClassName="card-header bg-white border-bottom-0 text-center pt-5"
                            titleClassName=""
                            titleLinkClassName="post-template__post-title-link"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostTemplate

export const pageQuery = graphql`
    query PostTemplate($path: String) {
        markdownRemark(fields: { permalink: { eq: $path } }) {
            frontmatter {
                title
                description
                seoTitle
                seoDescription
                heroImage
                socialImage
                author
                authorUrl
                tags
                publishDate(formatString: "MMMM D, YYYY")
                slug
                canonical
                changelogItems {
                    url
                    category
                    description
                }
                style
            }
            html
            excerpt
            fields {
                slug
                permalink
                blogType
            }
            fileAbsolutePath
        }
    }
`
