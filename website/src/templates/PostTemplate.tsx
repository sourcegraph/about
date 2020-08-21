import { graphql, PageProps } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import { POST_TYPE_TO_COMPONENT, postType } from '../components/blog/postTypes'
import { BlogHeader } from '../components/blog/BlogHeader'

interface Props extends PageProps<{ markdownRemark: any }> {}

export const PostTemplate: React.FunctionComponent<Props> = ({ data, location }) => {
    const md = data.markdownRemark
    const title = md.frontmatter.title
    const description = md.frontmatter.description ? md.frontmatter.description : md.excerpt
    const image = 'https://about.sourcegraph.com/sourcegraph-mark.png'
    const meta = {
        title,
        image,
        description,
    }

    const C = POST_TYPE_TO_COMPONENT[postType(md)]

    return (
        <Layout location={location} meta={meta} className="bg-light-transparent navbar-light">
            <div className="">
                <div className="container-lg">
                    <BlogHeader />
                </div>
                <div className="post-template mt-5 bg-white">
                    <div className="container-lg">
                        <C
                            post={md}
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
    query blogPostTemplate($fileSlug: String) {
        markdownRemark(fields: { slug: { eq: $fileSlug } }) {
            frontmatter {
                title
                description
                heroImage
                author
                authorUrl
                tags
                publishDate(formatString: "MMMM D, YYYY")
                slug
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
