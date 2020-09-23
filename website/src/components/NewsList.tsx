import * as React from 'react'
import NewsData from '../data/news-listing'

class News extends React.Component {
    public render(): JSX.Element {
        return (
            <div>
                <h3 id="news2020">2020</h3>
                <div className="container-fluid">
                    {NewsData.y2020.map((newsDetail, index) => (
                        <div className="row mb-4 news__item">
                            <div className="col-sm-4 col-lg-2 text-center">
                                <img className="news__image" src={newsDetail.newsImage} alt={newsDetail.newsTitle} />
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
                <h3 id="news2019">2019</h3>
                <div className="container-fluid">
                    {NewsData.y2019.map((newsDetail, index) => (
                        <div className="row mb-4 news__item">
                            <div className="col-sm-4 col-lg-2 text-center">
                                <img className="news__image" src={newsDetail.newsImage} alt={newsDetail.newsTitle} />
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
        )
    }
}
export default News
