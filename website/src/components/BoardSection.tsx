import React from 'react'

const BOARD: {
    name: string
    image: string
    title: string
    bio: string
}[] = [
        {
            name: 'Sarah Wang',
            image: '/board/sarah-wang.png',
            title: 'Andreessen Horowitz',
            bio: '/handbook/company/team#',
        },
        {
            name: 'David Sacks',
            image: '/board/david-sacks.jpg',
            title: 'Craft Ventures',
            bio: '/handbook/company/team#',
        },
        {
            name: 'Adam Ross',
            image: '/board/adam-ross.jpg',
            title: 'Goldcrest Capital',
            bio: '/handbook/company/team#',
        },
        {
            name: 'Andrew Reed',
            image: '/board/andrew-reed.jpg',
            title: 'Sequoia Capital',
            bio: '/handbook/company/team#',
        },
        {
            name: 'Scott Raney',
            image: '/board/scott-raney.jpg',
            title: 'Redpoint Ventures',
            bio: '/handbook/company/team#',
        },
        {
            name: 'Brian Murray',
            image: '/board/brian-murray.jpg',
            title: 'Craft Ventures',
            bio: '/handbook/company/team#',
        },
        {
            name: 'Dan Friedland',
            image: '/board/dan-friedland.jpg',
            title: 'Goldcrest Capital',
            bio: '/handbook/company/team#',
        },
    ];

export const BoardSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="board" className={`leadership-section board-section`}>
        <h2>Board of Directors</h2>
        <div className="row mt-5">
            {BOARD.map((boardMembers, i) => (
                <div key={i} className="col-lg-4 mb-6">
                    <div className={`leadership-section__item ${boardMembers.name.replace(' ', '-').toLowerCase()}`}>
                        <img className="leadership-section__item-image" src={boardMembers.image} alt={`Sourcegraph Board of Directors: ${boardMembers.name} - ${boardMembers.title}`} />
                        <h5>{boardMembers.name}</h5>
                        <p className="leadership-section__item-title">{boardMembers.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
