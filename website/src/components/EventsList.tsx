import * as React from 'react'
import EventData from '../data/events-listing'

class Conferences extends React.Component {
    public render(): JSX.Element {
        return (
            <div className="container">
                <div className="row">
                    {EventData.Livestream.map((eventDetail, index) => (
                        <div className="col-md-6 col-lg-4 py-2">
                            <div className="card event__item">
                                <a href={eventDetail.eventLink} rel="nofollow">
                                    <img className="card-img-top img-fluid" src={eventDetail.eventImage} />
                                </a>
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
                        </div>
                    ))}
                    {EventData.Video.map((eventDetail, index) => (
                        <div className="col-md-6 col-lg-4 py-2">
                            <div className="card event__item">
                                <a href={eventDetail.videoLink} rel="nofollow">
                                    <img className="card-img-top img-fluid" src={eventDetail.videoImage} />
                                </a>
                                <div className="card-body">
                                    <h6>VIDEO</h6>
                                    <h5>{eventDetail.videoTitle}</h5>
                                    <p>
                                        <a href={eventDetail.videoLink} rel="nofollow">
                                            Watch now &rarr;
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Conferences
