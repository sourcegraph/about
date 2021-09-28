import ArrowRightIcon from 'mdi-react/ArrowRightIcon'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import React from 'react'

const EVENTS: {
    name: string
    logo: string
    title: string
    url: string
    external?: boolean
}[] = [
    {
        name: 'Open Source Summit',
        logo: '',
        title: 'Open Source Summit 9/27 - 9/30',
        url: '',
    },
    {
        name: 'React Conference',
        logo: '',
        title: 'React Conference Live in Amsterdam - 10/7 - 10/8',
        url: '',
    },
    {
        name: 'React Advance London',
        logo: '',
        title: 'React Advance London - 10/22',
        url: '',
    },
    {
        name: 'JSWorld Africa',
        logo: '',
        title: 'JSWorld Africa - 10/30',
        url: '',
    },
    {
        name: 'Open Source Festival',
        logo: '',
        title: 'Open Source Festival - 11/11 - 11/13',
        url: '',
    },
    {
        name: 'AWS re:Invent',
        logo: '',
        title: 'AWS re:Invent - 11/29-12/03',
        url: '',
    },
    {
        name: 'GopherCon',
        logo: '',
        title: 'GopherCon - 12/5 - 12/8',
        url: '',
    },
]

export const EventsSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="events" className={`events-section container-fluid ${className}`}>
        <div className="card-deck">
            {EVENTS.map((study, i) => (
                <div key={i} className="col-lg-4 mb-6">
                    <div key={i} className={`${study.name.replace(' ', '-').toLowerCase()} card`}>
                        <div className="card-body">
                            <img className="events-section__item-logo " src={study.logo} alt="Card image cap" />
                            {study.external ? (
                                <a href={study.url} className="card-link" target="_blank" rel="nofollow noopener">
                                    <p className="card-text">{study.title}</p>
                                    <ExternalLinkIcon className="icon-inline ml-1" />
                                </a>
                            ) : (
                                <a href={study.url} className="card-link">
                                    <p className="card-text">{study.title}</p>
                                    <ArrowRightIcon className="icon-inline ml-1" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
