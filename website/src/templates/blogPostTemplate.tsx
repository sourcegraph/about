import { graphql, Link } from 'gatsby'
import * as React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import SocialLinks from '../components/SocialLinks'
import { BLOGS } from '../pages/blog'
import { Jumbotron } from '../components/Jumbotron'
import { GetSourcegraphNowActions } from '../css/components/actions/GetSourcegraphNowActions'

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
             <span>By <a href={props.authorUrl}>{props.author}</a></span>
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
        const fileName = md.fileAbsolutePath.split('/').pop()
        const description = md.frontmatter.description ? md.frontmatter.description : md.excerpt
        const content = md.html
        const image = md.frontmatter.heroImage
            ? `${md.frontmatter.heroImage}`
            : 'https://about.sourcegraph.com/sourcegraph-mark.png'
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
                            <section className="blog-post__title">
                                <h1>{title}</h1>
                                <div className="blog__posts--post-byline">
				    <this.Author author={md.frontmatter.author} authorUrl={md.frontmatter.authorUrl} /> on {publishDate}
				</div>
                            </section>
                            <hr className="blog-post__title--rule" />
                            <section className="blog-post__body">
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                                <hr />
                                <div style={{ height: '0.5em' }} />
                                <Link to={BLOGS.Blog}>
                                    <button className="btn btn-outline-primary">Read more posts</button>
                                </Link>
                                <a
                                    href={`https://github.com/sourcegraph/about/edit/master/blogposts/${fileName}`}
                                    className="ml-3"
                                >
                                    <button className="btn btn-outline-primary">Edit this post</button>
                                </a>
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
                <Jumbotron
                color="purple"
                className="py-4"
                logomark={false}
                title="Try Sourcegraph now"
                description="Explore, navigate, and better understand all code, everywhere, faster, with Universal Code Search"
            >
                <GetSourcegraphNowActions />
            </Jumbotron>
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
