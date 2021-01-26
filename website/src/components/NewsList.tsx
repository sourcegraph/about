import * as React from 'react'
import NewsData from '../data/news-listing'

class News extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="container">
                {NewsData.map((newsYear: { year: React.ReactNode }, index: any) => (
                    <div className="row">
                        <div className="col-lg-2">
                            <h3 id={'news' + newsYear.year} className="news__year">{newsYear.year}</h3>
                        </div>
                        <div className="col-lg-10 container-fluid">
                            {newsYear.articles.map((a, i) => (
                                <div className="row mb-4 news__item">
                                    <div
                                        className="col-sm-4 col-lg-2 text-center d-flex align-items-center"
                                        style={{ minHeight: '120px' }}
                                    >
                                        <a href={a.newsLink} target="_blank" rel="nofollow noopener"><img
                                            className="news__image"
                                            src={a.newsImage}
                                            alt={a.newsTitle}
                                        /></a>
                                    </div>
                                    <div className="col-sm-10 col-lg-10 align-self-center">
                                        <p>
                                            <strong>{a.newsSource}</strong>{' '}
                                            <span className="news__date">{a.newsDate}</span>
                                            <br />
                                            <a href={a.newsLink} target="_blank" rel="nofollow noopener">
                                                {a.newsTitle}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
export default News
