import { Features } from '@interfaces/featureWalkthrough'

import batchChangesMp4 from '../pages/home/assets/animations/batch-changes.mp4'
import batchChangesWebm from '../pages/home/assets/animations/batch-changes.webm'
import codeInsightsMp4 from '../pages/home/assets/animations/code-insights.mp4'
import codeInsightsWebm from '../pages/home/assets/animations/code-insights.webm'
import codeIntelMp4 from '../pages/home/assets/animations/code-intel.mp4'
import codeIntelWebm from '../pages/home/assets/animations/code-intel.webm'
import codeSearchMp4 from '../pages/home/assets/animations/code-search.mp4'
import codeSearchWebm from '../pages/home/assets/animations/code-search.webm'

export const sourcegraphFeatures: Features[] = [
    {
        productFeature: 'code search',
        title: 'Find what you need: any code host, language, or repository',
        description:
            'Use Code Search to find what you need, across thousands of repositories and multiple code hosts, in milliseconds.',
        details: [
            'Search for snippets, commits, dependencies, or errors across your entire codebase',
            'Create code monitors to be alerted when known vulnerabilities or undesirable code is introduced',
            "Access all of your team's code in one place; never get stuck searching one repository or code host at a time",
        ],
        ctaLink: '/code-search',
        video: {
            mp4: codeSearchMp4,
            webm: codeSearchWebm,
        },
    },
    {
        productFeature: 'code intelligence',
        title: 'Navigate your codebase and your dependencies',
        description:
            'Follow symbol definitions and references across packages, dependencies, and repositories seamlessly.',
        details: [
            "Traverse your entire codebase with cross-repository 'Go to definition' and 'Find references'",
            'Navigate your code in your web browser to see any commit, on any branch, of any repository instantly',
            'Follow dependencies across repositories with confidence using precompiled data for speed and precision',
        ],
        ctaLink: 'https://docs.sourcegraph.com/code_intelligence',
        video: {
            mp4: codeIntelMp4,
            webm: codeIntelWebm,
        },
    },
    {
        productFeature: 'batch changes',
        title: 'Automate large-scale code changes',
        description: (
            <>
                Batch Changes allows you to automate code changes across your entire codebase. Move fast and fix things{' '}
                <em>safely</em>.
            </>
        ),
        details: [
            'Update legacy code, remove outdated patterns, and fix critical security issues across multiple repositories',
            'Track changes across your codebase without maintaining spreadsheets of places that need to be updated',
            'Automate fixing breaking changes introduced by library or package updates',
        ],
        ctaLink: '/batch-changes',
        video: {
            mp4: batchChangesMp4,
            webm: batchChangesWebm,
        },
    },
    {
        productFeature: 'code insights',
        title: 'Track what really matters to you and your team',
        description:
            'With Code Insights, know how different initiatives in your codebase are progressing in real time so you can make data-driven decisions.',
        details: [
            'Track migrations, code smells, ownership, and versions with fully customizable dashboards',
            'Ensure that security vulnerabilities and deprecated packages get completely removed from your codebase',
            'Create visualizations that update automatically, provide historical trends, and pull directly from the source of truth: the code itself',
        ],
        ctaLink: '/code-insights',
        video: {
            mp4: codeInsightsMp4,
            webm: codeInsightsWebm,
        },
    },
]
