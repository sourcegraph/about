import * as React from 'react'
import EventData from '../data/events-listing'

class Conferences extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="card-deck mx-auto">
                {EventData.Conference.map((eventDetail, index) => (
                    <div className="card col-lg-4 event__item">
                        <img className="card-img-top img-fluid" src={eventDetail.eventImage} />
                        <div className="card-body">
                            <h6>CONFERENCE</h6>
                            <h5>{eventDetail.eventTitle}</h5>
                            <p>
                                {eventDetail.eventLocation}
                                <br />
                                {eventDetail.eventDate}
                                <br />
                                <a href={eventDetail.eventLink} rel="nofollow">
                                    Join us &rarr;
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
                {EventData.Livestream.map((eventDetail, index) => (
                    <div className="card col-lg-4 event__item">
                        <img className="card-img-top img-fluid" src={eventDetail.eventImage} />
                        <div className="card-body">
                            <h6>LIVESTREAM</h6>
                            <h5>{eventDetail.eventTitle}</h5>
                            <p>
                                {eventDetail.eventDate}
                                <br />
                                <a href={eventDetail.eventLink} rel="nofollow">
                                    Sign up &rarr;
                                </a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Conferences
