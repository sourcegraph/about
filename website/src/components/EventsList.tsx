import * as React from 'react'
import EventData from "../data/events-listing"
import NewsData from "../data/news-listing"

class Conferences extends React.Component {
	render() {		
		return (
			<div class="card-deck">
				
				{EventData.Conference.map((eventDetail, index)=> {
					return ( 					
						<div class="card col-sm-3">
							<img class="card-img-top img-fluid" src={eventDetail.eventImage} />
							<div class="card-body">
								<h5>{eventDetail.eventTitle}</h5>
								<p>{eventDetail.eventLocation}<br />
								{eventDetail.eventDate}<br />
								<a href={eventDetail.eventLink} ref="nofollow">Join us &rarr;</a></p>
							</div>
						</div>
					)
				})}
				{NewsData.y2020.map((newsDetail, index)=> {
					return ( 					
						<div class="card col-sm-3">
							<div class="card-body">
								<h5>{newsDetail.newsTitle}</h5>
								<p><a href={newsDetail.newsLink} ref="nofollow">Join us &rarr;</a></p>
							</div>
						</div>
					)
				})}

			</div>
			)
		}	       	
}

export default Conferences;
