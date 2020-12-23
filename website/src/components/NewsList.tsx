import * as React from 'react'
import NewsData from '../data/news-listing'

class News extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2">
                        <h3 id="news2020">2020</h3>
                    </div>
                    <div className="col-lg-10 container-fluid">
                        {NewsData.y2020.map((newsDetail, index) => (
                            <div className="row mb-4 news__item">
                                <div
                                    className="col-sm-4 col-lg-2 text-center d-flex align-items-center"
                                    style={{ minHeight: '120px' }}
                                >
                                    <a href={newsDetail.newsLink} target="_blank" rel="nofollow noopener"><img
                                        className="news__image"
                                        src={newsDetail.newsImage}
                                        alt={newsDetail.newsTitle}
                                    /></a>
                                </div>
                                <div className="col-sm-10 col-lg-10 align-self-center">
                                    <p>
                                        <strong>{newsDetail.newsSource}</strong>{' '}
                                        <span className="news__date">{newsDetail.newsDate}</span>
                                        <br />
                                        <a href={newsDetail.newsLink} target="_blank" rel="nofollow noopener">
                                            {newsDetail.newsTitle}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2">
                        <h3 id="news2020">2019</h3>
                    </div>
                    <div className="col-lg-10 container-fluid">
                        {NewsData.y2019.map((newsDetail, index) => (
                            <div className="row mb-4 news__item">
                                <div className="col-sm-4 col-lg-2 text-center">
                                    <img
                                        className="news__image"
                                        src={newsDetail.newsImage}
                                        alt={newsDetail.newsTitle}
                                    />
                                </div>
                                <div className="col-sm-10 col-lg-10 align-self-center">
                                    <p>
                                        <strong>{newsDetail.newsSource}</strong>{' '}
                                        <span className="news__date">{newsDetail.newsDate}</span>
                                        <br />
                                        <a href={newsDetail.newsLink} target="_blank" rel="nofollow noopener">
                                            {newsDetail.newsTitle}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
export default News
