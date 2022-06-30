export interface NavLinkProps {
    section: string
    items: {
        title: string
        href: string
    }[]
}

export const navLinks: NavLinkProps[] = [
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
