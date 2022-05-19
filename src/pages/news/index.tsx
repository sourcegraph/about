import { FunctionComponent } from 'react'

import Link from 'next/link'

import { Layout } from '@components'

import articles from './articles'

const News: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph - News',
            description: 'The latest Sourcegraph news and press releases.',
        }}
    >
        <div className="container">
            <div className="text-center py-5">
                <h1 className="display-2 font-weight-bold">Sourcegraph News</h1>
                <p>
                    The latest Sourcegraph news and <Link href="/press-release">press releases</Link>
                </p>

                <div className="container">
                    <div className="row justify-content-md-center">
                        <div className="col mt-5">
                            <h3>Media contact</h3>
                            <p>
                                <a href="mailto:press@sourcegraph.com">press@sourcegraph.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="container">
                {articles.map(article => (
                    <div className="row" key={article.year}>
                        <div className="col-lg-2 mt-5 mt-lg-0">
                            <h1 className="d-block d-md-none text-center">
                                <time dateTime={article.year.toString()}>{article.year}</time>
                            </h1>
                            <h3 className="d-none d-md-block">
                                <time dateTime={article.year.toString()}>{article.year}</time>
                            </h3>
                        </div>

                        <div className="col-lg-10">
                            {article.articles.map(a => (
                                <article className="row border-bottom d-flex py-3" key={a.newsLink}>
                                    <div className="col-sm-4 col-lg-2 text-center d-flex align-items-center mb-2 mb-md-0">
                                        <a href={a.newsLink} target="_blank" rel="nofollow noreferrer">
                                            <img
                                                className="max-w-100 max-w-sm-150 w-100"
                                                src={a.newsImage}
                                                alt={a.newsTitle}
                                            />
                                        </a>
                                    </div>

                                    <div className="col-sm-10 col-lg-10 align-self-center">
                                        <h6 className="d-inline-block mb-2">{a.newsSource}</h6>{' '}
                                        <time
                                            dateTime={new Date(a.newsDate).toISOString().split('T')[0]}
                                            className="ml-2 text-muted"
                                        >
                                            {a.newsDate}
                                        </time>
                                        <cite className="text-normal">
                                            <a
                                                className="d-block"
                                                href={a.newsLink}
                                                target="_blank"
                                                rel="nofollow noreferrer"
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
