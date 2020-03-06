import * as React from 'react'
import NewsData from "../data/news-listing"

class News extends React.Component {
	render() {
		return (
			<div>
				<h5>2020</h5>
				<div className="container-fluid">
					{NewsData.y2020.map((newsDetail, index)=> {
						return (
							<div className="row mb-4 news__item">
								<div className="col-sm-4 col-lg-2 text-center">
									<img className="news__image" src={newsDetail.newsImage} />
								</div>
								<div className="col-sm-10 col-lg-10 align-self-center">
									<p><strong>{newsDetail.newsSource}</strong> <span className="news__date">{newsDetail.newsDate}</span><br />
									<a href={newsDetail.newsLink} rel="nofollow">{newsDetail.newsTitle}</a>
									</p>
								</div>
							</div>
						)
					})}
				</div>
				<h5>2019</h5>
				<div className="container-fluid">
					{NewsData.y2019.map((newsDetail, index)=> {
						return ( 					

								<div className="row mb-4 news__item">
									<div className="col-sm-4 col-lg-2 text-center">
										<img className="news__image" src={newsDetail.newsImage} />
									</div>
									<div className="col-sm-10 col-lg-10 align-self-center">
										<p><strong>{newsDetail.newsSource}</strong> <span className="news__date">{newsDetail.newsDate}</span><br />
										<a href={newsDetail.newsLink} rel="nofollow">{newsDetail.newsTitle}</a>
										</p>
									</div>
								</div>
						)
					})}
				</div>
			</div>
		)
	}	
}    	
export default News;	