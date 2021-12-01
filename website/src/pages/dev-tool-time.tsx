import { PageProps } from 'gatsby'
import * as React from 'react'
import Layout from '../components/Layout'
import { PostsList } from '../components/blog/PostsList'
import { BlogType, BLOG_TYPE_TO_INFO, urlToPost } from '../components/blog/postTypes'
import { BlogHeader } from '../components/blog/BlogHeader'
import { FeaturedEpisode } from '../components/blog/FeaturedEpisode'
import HubspotForm from '../components/HubspotForm'

import upcomingProfile from '../../static/blog/lorna-jane-mitchell-profile.jpg'

export const DttPage: React.FunctionComponent<PageProps<{ allMarkdownRemark: any }>> = props => {
    const posts = props.data.allMarkdownRemark.edges.filter((post: any) => post.node.frontmatter.published === true)
    const postDefaultProps = {
        full: false,
        className: 'posts-list__post card featured-episode',
        headerClassName: 'card-header bg-white border-bottom-0 text-center',
        titleClassName: 'posts-list__post-title',
        titleLinkClassName: 'posts-list__post-title-link',
        tag: 'li',
        renderTitleAsLink: true,
    }
    return (
        <Layout
            location={props.location}
            meta={{
                title: 'Dev Tool Time',
                description:
                    'Sourcegraph engineers interview other devs in the community about their desk set up, favorite dev tools, productivity hacks, and more.',
                image: 'https://about.sourcegraph.com/DTT-social-image.png',
            }}
        >
            <div className="container-lg">
                <div className="dtt-header mt-4">
                    <div className="dtt-brand">
                        <p className="dtt-description mb-1">
                            <BlogHeader title={'Dev Tool Time'} baseUrl={'/dtt'} />
                            <p>
                                Sourcegraph engineers interview other devs in the community about their desk set up,
                                favorite dev tools, productivity hacks, and more. Episodes stream on{' '}
                                <a href="https://www.twitch.tv/sourcegraph">Twitch</a> every other Wednesday at 11AM
                                PT//2PM ET//8PM CEST.
                            </p>
                            <p>
                                Hosted by <a href="https://twitter.com/TeejDeVries">TJ DeVries</a> and{' '}
                                <a href="https://twitter.com/thorstenball">Thorsten Ball.</a>
                            </p>
                        </p>
                    </div>
                </div>
                <div className="dtt-upcoming card mt-3">
                    <h2 className="card-header">Join us for our next episode!</h2>
                    <div className="card-body upcoming-content">
                        <div className="upcoming-description">
                            <p className="upcoming-details">Lorna Jane Mitchell- Developer Advocate at Aiven</p>
                            <p className="upcoming-date">December 8, 2021 | 11am PT / 2pm ET / 8pm CEST</p>
                            <p>
                                Lorna Jane Mitchell, known by many of her online colleagues and peers as lornajane, is a
                                Developer Advocate for Aiven and is based in Huddersfield in northern England. She
                                supports developers doing amazing things with open source data platforms. Lorna is the
                                author of "Git Workbook", "PHP Web Services" and "PHP Master" as well as being a regular
                                conference speaker and writer for a number of outlets.
                            </p>
                        </div>
                        <div className="upcoming-profile-container">
                            <img
                                src={upcomingProfile}
                                alt="Lorna Jane Mitchell profile image"
                                className="upcoming-profile"
                            />
                        </div>
                    </div>
                </div>
                <section className="py-5">
                    {' '}
                    <h2>Recent episodes:</h2>
                    <FeaturedEpisode
                        post={posts[0].node}
                        url={urlToPost(posts[0].node, BLOG_TYPE_TO_INFO[BlogType.DTT])}
                        key={posts[0].node.frontmatter.slug}
                        {...postDefaultProps}
                    />
                    <div className="featured-episode-container">
                        <FeaturedEpisode
                            post={posts[1].node}
                            url={urlToPost(posts[1].node, BLOG_TYPE_TO_INFO[BlogType.DTT])}
                            key={posts[1].node.frontmatter.slug}
                            {...postDefaultProps}
                        />
                        <div className="card p-4 hubspot-form">
                            <h2>Sign up for reminders</h2>
                            <HubspotForm
                                portalId="2762526"
                                formId="cbc1b817-2ab7-4d73-b504-2467b93d3b67"
                                campaignId="7013t0000022mdYAAQ"
                            />
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Other episodes:</h2>
                    <p>
                        You can view the full archive of Dev Tool Time episodes on{' '}
                        <a href="https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF">Youtube</a>.
                    </p>
                    <PostsList blogInfo={BLOG_TYPE_TO_INFO[BlogType.DTT]} posts={posts.slice(2, -1)} />
                </section>
            </div>
        </Layout>
    )
}

export default DttPage

export const pageQuery = graphql`
    query Dtt {
        allMarkdownRemark(
            filter: { frontmatter: { tags: { in: "dtt" } } }
            sort: { fields: [frontmatter___publishDate], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        description
                        heroImage
                        author
                        authorUrl
                        canonical
                        tags
                        publishDate(formatString: "MMMM D, YYYY")
                        slug
                        published
                        changelogItems {
                            url
                            category
                            description
                        }
                        style
                        youtube
                    }
                    html
                    excerpt(pruneLength: 300)
                    fields {
                        slug
                        permalink
                        blogType
                    }
                    fileAbsolutePath
                }
            }
        }
    }
`
