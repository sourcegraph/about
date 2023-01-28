import { ReactNode } from 'react'

import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import SpotifyIcon from 'mdi-react/SpotifyIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import YouTubeIcon from 'mdi-react/YoutubeIcon'
import { FaDiscord as DiscordIcon } from 'react-icons/fa'

export interface NavLink {
    section: string
    items: {
        title: string
        href: string
        icon?: ReactNode
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
                title: 'Cloud',
                href: '/cloud',
            },
        ],
    },
    {
        section: 'Resources',
        items: [
            {
                title: 'All resources',
                href: '/resources',
            },
            {
                title: 'Blog',
                href: '/blog',
            },
            {
                title: 'Podcast',
                href: '/podcast',
            },
            {
                title: 'Case studies',
                href: '/case-studies',
            },
        ],
    },
    {
        section: 'Use cases',
        items: [
            {
                title: 'All use cases',
                href: '/use-cases',
            },
            {
                title: 'Code security',
                href: '/use-cases/code-security',
            },
            {
                title: 'Developer onboarding',
                href: '/use-cases/onboarding',
            },
            {
                title: 'Incident response',
                href: '/use-cases/incident-response',
            },
            {
                title: 'Code reuse',
                href: '/use-cases/code-reuse',
            },
            {
                title: 'Code health',
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
    {
        section: 'Sourcegraph',
        items: [
            {
                title: 'Search code',
                href: 'https://sourcegraph.com/search',
            },
        ],
    },
]

export const footerLinks: NavLink[] = [
    {
        section: 'About Sourcegraph',
        items: [
            {
                title: 'Case studies',
                href: '/case-studies',
            },
            {
                title: 'Use cases',
                href: '/use-cases',
            },
            {
                title: 'Pricing',
                href: '/pricing',
            },
            {
                title: 'Sourcegraph overview (PDF)',
                href: '/handouts/Sourcegraph-Overview.pdf',
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
                title: 'Docs',
                href: 'https://docs.sourcegraph.com',
            },
            {
                title: 'Changelog',
                href: 'https://sourcegraph.com/github.com/sourcegraph/sourcegraph/-/blob/CHANGELOG.md',
            },
            {
                title: 'Podcast',
                href: '/podcast',
            },
            {
                title: 'Community',
                href: '/community',
            },
        ],
    },
    {
        section: 'Company',
        items: [
            {
                title: 'About',
                href: '/about',
            },
            {
                title: 'Careers',
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
                title: 'Sourcegraph strategy',
                href: 'https://handbook.sourcegraph.com/company/strategy',
            },
        ],
    },
]

export const socialLinks: NavLink = {
    section: 'Socials',
    items: [
        {
            title: 'GitHub',
            href: 'https://github.com/sourcegraph',
            icon: <GithubIcon />,
        },
        {
            title: 'Twitter',
            href: 'https://twitter.com/sourcegraph',
            icon: <TwitterIcon />,
        },
        {
            title: 'Discord',
            href: 'https://discord.gg/s2qDtYGnAE',
            icon: <DiscordIcon size={24} />,
        },
        {
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/company/4803356/',
            icon: <LinkedinIcon />,
        },
        {
            title: 'YouTube',
            href: 'https://www.youtube.com/c/Sourcegraph/featured',
            icon: <YouTubeIcon />,
        },
        {
            title: 'Spotify',
            href: 'https://open.spotify.com/user/p3ntuomfda8r7czdbsgy36ogk?si=8095204aefc24587',
            icon: <SpotifyIcon />,
        },
    ],
}

export const postscriptLinks: NavLink = {
    section: 'Legal',
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
    ],
}
