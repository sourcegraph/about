import { PageProps, Link } from 'gatsby'
import * as React from 'react'
import { BlogHeader } from '../components/blog/BlogHeader'
import Layout from '../components/Layout'
import { BLOG_TYPE_TO_INFO, BlogType } from '../components/blog/postTypes'

interface ResourceProps {
    url: string
    title: string
    description: string
    heroImage: string
}

const guides = [
    {
        title: 'Continuous developer onboarding',
        url: '/guides/continuous-developer-onboarding',
        description:
            'Continuous onboarding shifts traditional onboarding practices to cultivate an environment that enables developers to build themselves as flexible and resilient engineers.',
        heroImage: '/guides/dev-onboarding/hero-mobile.png',
    },
]

const Resource: React.FunctionComponent<ResourceProps> = ({ title, url, description, heroImage }) => (
    <li className="blog-post posts-list__post card">
        <header className="card-header bg-white border-bottom-0 text-center">
            <h1 className="posts-list__post-title">
                <Link to={url} className="d-block posts-list__post-title-link">
                    {title}
                </Link>
            </h1>
        </header>
        <div className="card-body pt-0 d-flex flex-card">
            <div className="flex-1">
                <p className="blog-post__excerpt">{description}</p>
                <Link to={url} className="blog-post__read-more">
                    Read more
                </Link>
            </div>
            <Link to={url}>
                <img className="blog-post__image flex-1" src={heroImage} alt={title} />
            </Link>
        </div>
    </li>
)

export const ResourcesPage: React.FunctionComponent<PageProps> = props => (
    <Layout
        location={props.location}
        meta={BLOG_TYPE_TO_INFO[BlogType.Resources].meta}
        className="bg-light navbar-light"
    >
        <div className="container-lg">
            <BlogHeader {...BLOG_TYPE_TO_INFO[BlogType.Resources]} />
            <div className="pt-4">
                <ul className="posts-list list-unstyled">
                    {guides.map(guide => (
                        <Resource
                            key={guide.title}
                            title={guide.title}
                            url={guide.url}
                            description={guide.description}
                            heroImage={guide.heroImage}
                        />
                    ))}
                </ul>
            </div>
            {props.children}
        </div>
    </Layout>
)

export default ResourcesPage
