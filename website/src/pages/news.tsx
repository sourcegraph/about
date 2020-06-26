import { graphql, Link } from 'gatsby'
import * as React from 'react'
import { ContentPage } from '../components/content/ContentPage'
import Layout from '../components/Layout'
import News from '../components/NewsList'

interface PressRelease {
    title: string
    image: string
    publishDate: string
    url: string
}
// tslint:disable-next-line: no-any
export default class NewsPage extends React.Component<any, any> {
    // tslint:disable-next-line: no-any
    constructor(props: any) {
        super(props)
        this.state = {
            events: [],
        }
    }

    public render(): JSX.Element | null {
        const pressReleases: PressRelease[] = this.props.data.allMarkdownRemark.edges
            // tslint:disable-next-line: no-any
            .filter((post: any) => post.node.frontmatter.published === true)
            .map(
                // tslint:disable-next-line: no-any
                (item: any): PressRelease => ({
                    title: item.node.frontmatter.title,
                    image: item.node.frontmatter.heroImage,
                    publishDate: item.node.frontmatter.publishDate,
                    url: `/press-releases/${item.node.frontmatter.slug}`,
                })
            )
        return (
            <Layout location={this.props.location}>
                <ContentPage
                    title="Sourcegraph in the news"
                    description="The latest Sourcegraph news and press releases"
                    className="bg-gradient-primary"
                    titleClassName="display-2 font-weight-bold"
                >
                    <div className="news bg-white text-dark">
                        <section>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-10">
                                        <h2 className="py-4">Press releases</h2>
                                        {pressReleases.map(({ title, image, publishDate, url }, i: number) => (
                                            <div className="row mb-4 news__item">
                                                <div className="col-sm-3 col-lg-2 text-center">
                                                    <img
                                                        className="news__image"
                                                        src={image}
                                                        style={{ maxWidth: '100px' }}
                                                    />
                                                </div>
                                                <div className="col-sm-9 col-lg-10 align-self-center">
                                                    <p>
                                                        <Link to={url} rel="nofollow" key={i} className="d-block">
                                                            {title}
                                                        </Link>
                                                        <span className="news__date ml-0">{publishDate}</span>
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-10">
                                        <h2>News</h2>
                                        <News></News>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row justify-content-md-center">
                                    <div className="col mt-5">
                                        <h3>Media contact</h3>
                                        <p>
                                            Tanya Carlsson
                                            <br />
                                            Offleash PR for Sourcegraph
                                            <br />
                                            <a href="mailto:tanya@offleashpr.com">tanya@offleashpr.com</a>
                                            <br />
                                            <a href="tel:+17075296139">+1 707-529-6139</a>
                                            <br />
                                            &nbsp;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </ContentPage>
            </Layout>
        )
    }
}

export const pageQuery = graphql`
    query PressReleases {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "press-release" } } }
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
