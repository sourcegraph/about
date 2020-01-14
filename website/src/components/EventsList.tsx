import * as React from 'react'
import EventData from "../data/events-listing"

class Conferences extends React.Component {
	render() {		
		return (
			<div class="card-deck">
				
				{EventData.Conference.map((eventDetail, index)=> {
				 return ( 					
					<div class="card">
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

			</div>
			)
		}	       	
}

export default Conferences;