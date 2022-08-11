import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout } from '@components'
import { buttonStyle, buttonLocation } from '@data'

import articles from './articles'

const News: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - News',
            description: 'The latest Sourcegraph news and press releases.',
        }}
    >
        <div className="container">
            <div className="py-5 tw-text-center">
                <h1 className="">Sourcegraph News</h1>
                <p>
                    The latest Sourcegraph news and{' '}
                    <Link href="/press-release" passHref={true}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a
                            title="press releases"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            press releases
                        </a>
                    </Link>
                </p>

                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="mt-5 col">
                            <h3>Media contact</h3>
                            <p>
                                <a
                                    href="mailto:press@sourcegraph.com"
                                    title="press@sourcegraph.com"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.hero}
                                    data-button-type="cta"
                                >
                                    press@sourcegraph.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container">
                {articles.map(article => (
                    <div className="row" key={article.year}>
                        <div className="mt-5 col-lg-2 mt-lg-0">
                            <h2 className="tw-text-center tw-block md:tw-hidden">
                                <time dateTime={article.year.toString()}>{article.year}</time>
                            </h2>
                            <h2 className="tw-hidden md:tw-block">
                                <time dateTime={article.year.toString()}>{article.year}</time>
                            </h2>
                        </div>

                        <div className="col-lg-10">
                            {article.articles.map(a => (
                                <article className="py-3 row border-bottom tw-flex" key={a.newsLink}>
                                    <div className="mb-2 tw-text-center col-sm-4 col-lg-2 tw-flex tw-items-center mb-md-0">
                                        <a
                                            href={a.newsLink}
                                            target="_blank"
                                            rel="nofollow noreferrer"
                                            title={a.newsTitle}
                                            data-button-style={buttonStyle.image}
                                            data-button-location={buttonLocation.body}
                                            data-button-type="cta"
                                        >
                                            <img
                                                className="max-w-100 max-w-sm-150 w-100"
                                                src={a.newsImage}
                                                alt={a.newsTitle}
                                            />
                                        </a>
                                    </div>

                                    <div className="col-sm-10 col-lg-10 align-self-center">
                                        <h5 className="mb-2 tw-inline-block">{a.newsSource}</h5>{' '}
                                        <time
                                            dateTime={new Date(a.newsDate).toISOString().split('T')[0]}
                                            className="ml-2 tw-text-gray-500"
                                        >
                                            {a.newsDate}
                                        </time>
                                        <cite className="text-normal">
                                            <a
                                                className="tw-block"
                                                href={a.newsLink}
                                                target="_blank"
                                                rel="nofollow noreferrer"
                                                title={a.newsTitle}
                                                data-button-style={buttonStyle.text}
                                                data-button-location={buttonLocation.body}
                                                data-button-type="cta"
                                            >
                                                {a.newsTitle}
                                            </a>
                                        </cite>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    </Layout>
)

export default News
