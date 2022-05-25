import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout, BlogHeader, BLOG_TYPE_TO_INFO } from '@components'
import { BlogType } from '@interfaces/posts'

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

const Resource: FunctionComponent<ResourceProps> = ({ title, url, description, heroImage }) => (
    <li className="blog-post posts-list__post card">
        <header className="card-header bg-white border-bottom-0 text-center">
            <h1 className="posts-list__post-title">
                <Link href={url} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="d-block posts-list__post-title-link">{title}</a>
                </Link>
            </h1>
        </header>
        <div className="card-body pt-0 d-flex flex-card">
            <div className="flex-1">
                <p className="blog-post__excerpt">{description}</p>
                <Link href={url} passHref={true}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="blog-post__read-more">Read more</a>
                </Link>
            </div>
            <Link href={url} passHref={true}>
                <img className="blog-post__image flex-1" src={heroImage} alt={title} />
            </Link>
        </div>
    </li>
)

export const ResourcesPage: FunctionComponent = props => (
    <Layout
        meta={BLOG_TYPE_TO_INFO[BlogType.Resource].meta}
        className="bg-light navbar-light"
    >
        <div className="container-lg">
            <BlogHeader {...BLOG_TYPE_TO_INFO[BlogType.Resource]} />
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
