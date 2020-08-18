import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import { TrySourcegraph } from '../components/TrySourcegraph'
import { BLOGS } from '../pages/blog'

// Question: Should these be local to the render function since they are not used elsewhere?
interface AuthorProps {
    author: string
    authorUrl: string
}

export default class BlogPostTemplate extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }

    public componentDidMount(): void {
        if (document) {
            document.getElementsByTagName('body')[0].setAttribute('style', 'background-image:none')
        }
    }
    // Question: Should this be a Function Component?
    public Author(props: AuthorProps): Element {
        let element: any

        if (props.authorUrl) {
            element = (
                <span>
                    By <a href={props.authorUrl}>{props.author}</a>
                </span>
            )
        } else {
            element = <span>By {props.author}</span>
        }

        return element
    }

    public render(): JSX.Element | null {
        const md = this.props.data.markdownRemark
        const title = md.frontmatter.title
        const publishDate = md.frontmatter.publishDate
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
            <Layout location={this.props.location} meta={meta}>
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
                                <div className="blog__posts--post-byline">
                                    <this.Author author={md.frontmatter.author} authorUrl={md.frontmatter.authorUrl} />{' '}
                                    on {publishDate}
                                </div>
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
}

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
