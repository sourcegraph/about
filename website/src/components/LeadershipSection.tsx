import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import React from 'react'

const LEADERS: {
    name: string
    image: string
    title: string
    bio: string
    github: string
    linkedin: string
    twitter: string
}[] = [
    {
        name: 'Quinn Slack',
        image: '/staff/avatar-quinn.jpg',
        title: 'CEO and Cofounder',
        bio: 'https://handbook.sourcegraph.com/company/team#quinn-slack',
        github: 'https://github.com/sqs',
        linkedin: 'https://www.linkedin.com/in/quinnslack',
        twitter: 'https://twitter.com/sqs',
    },
    {
        name: 'Beyang Liu',
        image: '/staff/avatar-beyang.jpg',
        title: 'CTO and Cofounder',
        bio: 'https://handbook.sourcegraph.com/company/team#beyang-liu',
        github: 'https://github.com/beyang',
        linkedin: 'https://www.linkedin.com/in/beyang-liu',
        twitter: 'https://twitter.com/beyang',
    },
    {
        name: 'Christina Forney',
        image: '/staff/avatar-christina.jpg',
        title: 'VP of Product and Engineering',
        bio: 'https://handbook.sourcegraph.com/company/team#christina-forney',
        github: 'https://github.com/christinaforney',
        linkedin: 'https://www.linkedin.com/in/christinaforney',
        twitter: 'https://twitter.com/christina4nee',
    },
    {
        name: 'Dan Adler',
        image: '/staff/avatar-dan.jpg',
        title: 'VP Operations',
        bio: 'https://handbook.sourcegraph.com/company/team#dan-adler',
        github: 'https://github.com/dadlerj',
        linkedin: 'https://www.linkedin.com/in/danielnealadler',
        twitter: 'https://twitter.com/DanielNealAdler',
    },
    {
        name: 'Gregg Stone',
        image: '/staff/avatar-gregg.jpg',
        title: 'VP Sales',
        bio: 'https://handbook.sourcegraph.com/company/team#gregg-stone',
        github: 'https://github.com/sourcegraph',
        linkedin: 'https://www.linkedin.com/in/stonegregg',
        twitter: 'https://twitter.com/sourcegraph',
    },
    {
        name: 'Kacie Jenkins',
        image: '/staff/avatar-kacie.jpg',
        title: 'VP Marketing',
        bio: 'https://handbook.sourcegraph.com/company/team#kacie-jenkins',
        github: 'https://github.com/sourcegraph',
        linkedin: 'https://www.linkedin.com/in/kaciejenkins',
        twitter: 'https://twitter.com/mskaciej',
    },
    {
        name: 'Carly Jones',
        image: '/staff/avatar-carly.jpg',
        title: 'VP Talent',
        bio: 'https://handbook.sourcegraph.com/company/team#carly-jones',
        github: 'https://github.com/carlyj0nes',
        linkedin: 'https://www.linkedin.com/in/carlycjones/',
        twitter: 'https://twitter.com/sourcegraph',
    },
    {
        name: 'Aimee Menne',
        image: '/staff/avatar-aimee.jpg',
        title: 'VP Customer Engineering',
        bio: 'https://handbook.sourcegraph.com/company/team#aimee-menne',
        github: 'https://github.com/amenne',
        linkedin: 'https://www.linkedin.com/in/aimee-menne-8343487/',
        twitter: 'https://twitter.com/sourcegraph',
    },
]

export const LeadershipSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="leadership" className={`leadership-section ${className}`}>
        <h2>Leadership</h2>
        <div className="row mt-5">
            {LEADERS.map((staff, i) => (
                <div key={i} className="col-lg-4 mb-6">
                    <div className={`leadership-section__item ${staff.name.replace(' ', '-').toLowerCase()}`}>
                        <a href={staff.bio}>
                            <img
                                className="leadership-section__item-image"
                                src={staff.image}
                                alt={`Sourcegraph team: ${staff.name} - ${staff.title}`}
                            />
                        </a>
                        <h5>
                            <a href={staff.bio}>{staff.name}</a>
                        </h5>
                        <p className="leadership-section__item-title">{staff.title}</p>
                        <ul className="nav leadership-section__item-social mt-1">
                            <li className="nav-item">
                                <a href={staff.github} target="_blank" rel="nofollow noopener" aria-label="GitHub">
                                    <GithubIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href={staff.twitter} target="_blank" rel="nofollow noopener" aria-label="Twitter">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href={staff.linkedin} target="_blank" rel="nofollow noopener" aria-label="LinkedIn">
                                    <LinkedinIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
