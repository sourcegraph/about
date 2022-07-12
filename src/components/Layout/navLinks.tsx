import React from 'react'

import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import TwitchIcon from 'mdi-react/TwitchIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'

export interface NavLink {
    section?: string
    items: {
        title: string
        href: string
        icon?: React.ReactFragment
    }[]
}

export const navLinks: NavLink[] = [
    {
        section: 'Product',
        items: [
            {
                title: 'Code Search',
                href: '/code-search',
            },
            {
                title: 'Batch Changes',
                href: '/batch-changes',
            },
            {
                title: 'Code Insights',
                href: '/code-insights',
            },
            {
                title: 'Code Intelligence',
                href: 'https://docs.sourcegraph.com/code_intelligence',
            },
        ],
    },
    {
        section: 'Resources',
        items: [
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Learn',
                href: 'https://learn.sourcegraph.com/',
            },
            {
                title: 'Dev Tool Time',
                href: 'https://www.youtube.com/playlist?list=PL6zLuuRVa1_iDEP4EicZ8972RgyccCRGF',
            },
            {
                title: 'Sourcegraph Podcast',
                href: '/podcast',
            },
            {
                title: 'Case Studies',
                href: '/case-studies',
            },
        ],
    },
    {
        section: 'Use Cases',
        items: [
            {
                title: 'All Use Cases',
                href: '/use-cases',
            },
            {
                title: 'Code Security',
                href: '/use-cases/code-security',
            },
            {
                title: 'Developer Onboarding',
                href: '/use-cases/onboarding',
            },
            {
                title: 'Incident Response',
                href: '/use-cases/incident-response',
            },
            {
                title: 'Code Reuse',
                href: '/use-cases/code-reuse',
            },
            {
                title: 'Code Health',
                href: '/use-cases/code-health',
            },
        ],
    },
    {
        section: 'Pricing',
        items: [
            {
                title: 'Pricing',
                href: '/pricing',
            },
        ],
    },
    {
        section: 'Docs',
        items: [
            {
                title: 'Docs',
                href: 'https://docs.sourcegraph.com',
            },
        ],
    },
]

export const footerLinks: NavLink[] = [
    {
        section: 'About Sourcegraph',
        items: [
            {
                title: 'Use cases',
                href: '/use-cases',
            },
            {
                title: 'Case studies',
                href: '/case-studies',
            },
            {
                title: 'Pricing',
                href: '/pricing',
            },
            {
                title: 'Sourcegraph overview',
                href: '/handouts/Sourcegraph-Overview.pdf',
            },
        ]
    },
    {
        section: 'Resources',
        items: [
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Changelog',
                href: 'https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md',
            },
            {
                title: 'Documentation',
                href: 'https://docs.sourcegraph.com',
            },
            {
                title: 'Learn',
                href: 'https://learn.sourcegraph.com',
            },
            {
                title: 'Podcast',
                href: '/podcast',
            },
            {
                title: 'Dev tools quiz',
                href: '/dev-tools-quiz',
            },
            {
                title: 'Community',
                href: '/community',
            },
        ]
    },
    {
        section: 'Company',
        items: [
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Careers - We\'re Hiring!',
                href: '/jobs',
            },
            {
                title: 'Contact',
                href: '/contact',
            },
            {
                title: 'Handbook',
                href: 'https://handbook.sourcegraph.com',
            },
            {
                title: 'News',
                href: '/news',
            },
            {
                title: 'Sourcegraph strategy',
                href: 'https://handbook.sourcegraph.com/company/strategy',
            },
        ]
    },
]

export const socialLinks: NavLink = {
    items: [
        {
            title: 'GitHub',
            href: 'https://github.com/sourcegraph',
            icon: <GithubIcon />
        },
        {
            title: 'Twitter',
            href: 'https://twitter.com/sourcegraph',
            icon: <TwitterIcon />
        },
        {
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/company/4803356/',
            icon: <LinkedinIcon />
        },
        {
            title: 'YouTube',
            href: 'https://www.youtube.com/c/Sourcegraph/featured',
            icon: <YouTubeIcon />
        },
        {
            title: 'Twitch',
            href: 'https://www.twitch.tv/sourcegraph',
            icon: <TwitchIcon />
        },
        {
            title: 'Spotify',
            href: 'https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587',
            icon: <SpotifyIcon />
        },
    ]
}

export const postscriptLinks: NavLink = {
    items: [
        {
            title: 'Terms',
            href: '/terms',
        },
        {
            title: 'Security',
            href: '/terms/security',
        },
        {
            title: 'Privacy',
            href: '/terms/privacy',
        },
    ]
}
