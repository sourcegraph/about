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
        name: 'Steve Yegge',
        image: '/staff/avatar-stevey.png',
        title: 'Head of Engineering',
        bio: 'https://handbook.sourcegraph.com/company/team#steve-yegge',
        github: 'https://github.com/steveyegge',
        linkedin: 'https://www.linkedin.com/in/steveyegge/',
        twitter: 'https://twitter.com/steve_yegge',
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
        name: 'Tammy Zhu',
        image: '/staff/avatar-tammy.png',
        title: 'VP Legal',
        bio: 'https://handbook.sourcegraph.com/company/team#tammy-zhu',
        github: 'https://github.com/tammy-zhu',
        linkedin: 'https://www.linkedin.com/in/tammy-zhu-30040820/',
    },
    {
        name: 'Greg Bastis',
        image: '/staff/avatar-greg.jpg',
        title: 'VP Sales',
        bio: 'https://handbook.sourcegraph.com/company/team#greg-bastis',
        linkedin: 'https://www.linkedin.com/in/gregbastis/',
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
        title: 'VP Customer Engineering',
        bio: 'https://handbook.sourcegraph.com/company/team#aimee-menne',
        github: 'https://github.com/amenne',
        linkedin: 'https://www.linkedin.com/in/aimee-menne-8343487/',
    },
]

export const LeadershipSection: FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div id="leadership" className={`leadership-section ${className}`}>
        <h2>Leadership</h2>
        <div className="tw-my-8 tw-grid tw-gap-xl tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-3">
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
                            className="tw-mb-6 tw-max-w-[200px] tw-rounded-full"
                            src={staff.image}
                            alt={`Sourcegraph team: ${staff.name} - ${staff.title}`}
                        />
                    </a>

                    <h5>
                        <a
                            href={staff.bio}
                            className="tw-text-black"
                            title={staff.name}
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            {staff.name}
                        </a>
                    </h5>

                    <p className="tw-mb-0">{staff.title}</p>

                    <ul className="tw-ml-0 tw-mt-1 tw-list-none tw-flex">
                        {staff.github && (
                            <li className="tw-mr-2">
                                <a
                                    href={staff.github}
                                    target="_blank"
                                    rel="nofollow noreferrer"
                                    aria-label="GitHub"
                                    className="tw-text-black"
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
                            <li className="tw-mr-2">
                                <a
                                    href={staff.twitter}
                                    target="_blank"
                                    rel="nofollow noreferrer"
                                    aria-label="Twitter"
                                    className="tw-text-black"
                                    title="Twitter icon"
                                    data-button-style={buttonStyle.image}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    <TwitterIcon />
                                </a>
                            </li>
                        )}
                        <li className="tw-mr-2">
                            <a
                                href={staff.linkedin}
                                target="_blank"
                                rel="nofollow noreferrer"
                                aria-label="LinkedIn"
                                className="tw-text-black"
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
