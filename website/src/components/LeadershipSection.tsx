import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import React from 'react'

const LEADERS: {
    name: string
    image: string
    title: string
    github: string
    linkedin: string
    twitter: string

}[] = [
        {
            name: 'Quinn Slack',
            image: '/staff/avatar-quinn.jpg',
            title: 'CEO and Co-founder',
            github: 'https://github.com/sqs',
            linkedin: 'https://www.linkedin.com/in/quinnslack',
            twitter: 'https://twitter.com/sqs'
        },
        {
            name: 'Beyang Liu',
            image: '/staff/avatar-beyang.jpg',
            title: 'CTO and Co-founder',
            github: 'https://github.com/beyang',
            linkedin: 'https://www.linkedin.com/in/beyang-liu',
            twitter: 'https://twitter.com/beyang'
        },
        {
            name: 'Christina Forney',
            image: '/staff/avatar-christina.jpg',
            title: 'VP Product',
            github: 'https://github.com/christinaforney',
            linkedin: 'https://www.linkedin.com/in/christinaforney',
            twitter: 'https://twitter.com/christina4nee'
        },
        {
            name: 'Dan Adler',
            image: '/staff/avatar-dan.jpg',
            title: 'VP Operations',
            github: 'https://github.com/dadlerj',
            linkedin: 'https://www.linkedin.com/in/danielnealadler',
            twitter: 'https://twitter.com/DanielNealAdler'
        },
        {
            name: 'Gregg Stone',
            image: '/staff/avatar-gregg.jpg',
            title: 'VP Sales',
            github: 'https://github.com/sourcegraph',
            linkedin: 'https://www.linkedin.com/in/stonegregg',
            twitter: 'https://twitter.com/srcgraph'
        },
        {
            name: 'Julia Gilinets',
            image: '/staff/avatar-julia.jpg',
            title: 'VP Customer Engineering',
            github: 'https://twitter.com/JuliaSourceress',
            linkedin: 'https://www.linkedin.com/in/juliagilinets',
            twitter: 'https://github.com/juliasourceress'
        },
        {
            name: 'Kacie Jenkins',
            image: '/staff/avatar-kacie.jpg',
            title: 'VP Marketing',
            github: 'https://github.com/sourcegraph',
            linkedin: 'https://www.linkedin.com/in/kaciejenkins',
            twitter: 'https://twitter.com/mskaciej'
        },
        {
            name: 'Nick Snyder',
            image: '/staff/avatar-nick.jpg',
            title: 'VP Engineering',
            github: 'https://github.com/nicksnyder',
            linkedin: 'https://www.linkedin.com/in/nickdsnyder',
            twitter: 'https://twitter.com/nickdsnyder'
        },
        {
            name: 'Noemi Mercado',
            image: '/staff/avatar-noemi.jpg',
            title: 'Head of People Ops',
            github: 'https://github.com/mercadon',
            linkedin: 'https://www.linkedin.com/in/noemí-mercado-3aa92798',
            twitter: 'https://twitter.com/srcgraph'
        },
    ]

export const LeadershipSection: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="leadership" className={`leadership-section container-fluid ${className}`}>
        <h2>Leadership</h2>
        <div className="row mt-5">
            {LEADERS.map((staff, i) => (
                <div className="col-lg-4 mb-6">
                    <div key={i} className={`leadership-section__item ${staff.name.replace(' ', '-').toLowerCase()}`}>
                        <img className="leadership-section__item-image " src={staff.image} alt={`Sourcegraph team: ${staff.name} - ${staff.title}`} />
                        <div>
                            <h5>{staff.name}</h5>
                            <p>{staff.title}</p>
                        </div>
                        <ul className="nav footer__social mt-1">
                            <li className="nav-item">
                                <a
                                    href={staff.github}
                                    target="_blank"
                                    rel="nofollow noopener"
                                    aria-label="GitHub"
                                >
                                    <GithubIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href={staff.twitter}
                                    target="_blank"
                                    rel="nofollow noopener"
                                    aria-label="Twitter"
                                >
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    href={staff.linkedin}
                                    target="_blank"
                                    rel="nofollow noopener"
                                    aria-label="LinkedIn"
                                >
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
