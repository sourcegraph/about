import { FunctionComponent } from 'react'

import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'

import { buttonStyle, buttonLocation } from '../data/tracking'

const LEADERS: {
    name: string
    image: string
    title: string
    bio: string
    github?: string
    linkedin: string
    twitter?: string
}[] = [
    {
        name: 'Quinn Slack',
        image: '/staff/avatar-quinn.png',
        title: 'CEO/cofounder',
        bio: 'https://handbook.sourcegraph.com/company/team#quinn-slack',
        github: 'https://github.com/sqs',
        linkedin: 'https://www.linkedin.com/in/quinnslack',
        twitter: 'https://twitter.com/sqs',
    },
    {
        name: 'Beyang Liu',
        image: '/staff/avatar-beyang.png',
        title: 'CTO/cofounder',
        bio: 'https://handbook.sourcegraph.com/company/team#beyang-liu',
        github: 'https://github.com/beyang',
        linkedin: 'https://www.linkedin.com/in/beyang-liu',
        twitter: 'https://twitter.com/beyang',
    },
    {
        name: 'Erika Rice Scherpelz',
        image: '/staff/erika-rice-scherpelz.png',
        title: 'Head of Engineering',
        bio: 'https://handbook.sourcegraph.com/team/#erika-rice-scherpelz',
        github: 'https://github.com/erikars',
        linkedin: 'https://www.linkedin.com/in/erikars/',
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
        name: 'Carly Jones',
        image: '/staff/avatar-carly.png',
        title: 'VP Talent & People',
        bio: 'https://handbook.sourcegraph.com/company/team#carly-jones',
        github: 'https://github.com/carlyj0nes',
        linkedin: 'https://www.linkedin.com/in/carlycjones/',
    },
    {
        name: 'Aimee Menne',
        image: '/staff/avatar-aimee.jpg',
        title: 'VP Technical Success',
        bio: 'https://handbook.sourcegraph.com/company/team#aimee-menne',
        github: 'https://github.com/amenne',
        linkedin: 'https://www.linkedin.com/in/aimee-menne-8343487/',
    },
    {
        name: 'Brock Perko',
        image: '/staff/brock-perko.png',
        title: 'VP Sales',
        bio: 'https://handbook.sourcegraph.com/team/#brock-perko',
        github: 'https://github.com/0xPerko',
        linkedin: 'https://www.linkedin.com/in/brock-perko-5094349/',
    },
]

export const LeadershipSection: FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="leadership" className={`leadership-section ${className}`}>
        <h2>Leadership</h2>
        <div className="my-8 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
            {LEADERS.map(staff => (
                <div key={`${staff.name.replace(' ', '-').toLowerCase()}`} className="">
                    <a
                        href={staff.bio}
                        title={`Sourcegraph team: ${staff.name} - ${staff.title}`}
                        data-button-style={buttonStyle.image}
                        data-button-location={buttonLocation.body}
                        data-button-type="cta"
                    >
                        <img
                            className="mb-6 max-w-[200px] rounded-full"
                            src={staff.image}
                            alt={`Sourcegraph team: ${staff.name} - ${staff.title}`}
                        />
                    </a>

                    <h5>
                        <a
                            href={staff.bio}
                            className="text-black"
                            title={staff.name}
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {staff.name}
                        </a>
                    </h5>

                    <p className="mb-0">{staff.title}</p>

                    <ul className="ml-0 mt-1 flex list-none">
                        {staff.github && (
                            <li className="mr-2">
                                <a
                                    href={staff.github}
                                    target="_blank"
                                    rel="nofollow noreferrer"
                                    aria-label="GitHub"
                                    className="text-black"
                                    title="Github icon"
                                    data-button-style={buttonStyle.image}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <GithubIcon />
                                </a>
                            </li>
                        )}
                        {staff.twitter && (
                            <li className="mr-2">
                                <a
                                    href={staff.twitter}
                                    target="_blank"
                                    rel="nofollow noreferrer"
                                    aria-label="Twitter"
                                    className="text-black"
                                    title="Twitter icon"
                                    data-button-style={buttonStyle.image}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <TwitterIcon />
                                </a>
                            </li>
                        )}
                        <li className="mr-2">
                            <a
                                href={staff.linkedin}
                                target="_blank"
                                rel="nofollow noreferrer"
                                aria-label="LinkedIn"
                                className="text-black"
                                title="Linkedin icon"
                                data-button-style={buttonStyle.image}
                                data-button-location={buttonLocation.body}
                                data-button-type="cta"
                            >
                                <LinkedinIcon />
                            </a>
                        </li>
                    </ul>
                </div>
            ))}
        </div>
    </div>
)
