type ContentTypes = 'virtual event' | 'blog post' | 'guide' | 'customer story' | 'video'
type Subjects =
    | 'code security'
    | 'developer onboarding'
    | 'code health'
    | 'incident response'
    | 'code reuse'
    | 'product release'

export interface Resource {
    title: string
    description: string
    contentType: ContentTypes
    subjects: Subjects[]
    featured: boolean
    link: string
    publishDate: string
}

/**
 * These are our resources for the resources page.
 * Note: Published dates should be the first merged PR timestamp of a resource.
 */
export const resourceItems: Resource[] = [
    {
        featured: true,
        title: 'GitLab solution brief',
        link: '/guides/sourcegraph-gitlab-solution-brief.pdf',
        contentType: 'guide',
        subjects: [],
        description:
            "Sourecgraph's native GitLab integration helps developer build better software by freeing them up to focus on complex problems.",
        publishDate: '2023-03-08T17:32:24Z',
    },
    {
        featured: false,
        title: 'Developer velocity vs code security',
        link: '/guides/developer-velocity-vs-code-security.pdf',
        contentType: 'guide',
        subjects: ['code security'],
        description: 'Developer velocity vs code security: How organizations can invest in both',
        publishDate: '2022-10-06T17:32:24Z',
    },
    {
        featured: false,
        title: 'How DevOps teams can build data driven relationships with their code',
        link: '/guides/devops-data-driven-relationships-with-codebases.pdf',
        contentType: 'guide',
        subjects: ['code health'],
        description:
            'Track devops tooling and paved path practices across your entire codebase, from version spread to migrations and deprecations',
        publishDate: '2022-10-10T17:32:24Z',
    },
    {
        featured: false,
        title: 'HashiCorp streamlines cross-repository code search and fixes with Sourcegraph',
        link: '/guides/devops-data-driven-relationships-with-codebases.pdf',
        contentType: 'customer story',
        subjects: ['code reuse'],
        description: 'Learn how HashiCorp streamlines cross-repository code search and fixes with Sourcegraph.',
        publishDate: '2022-09-01T17:32:24Z',
    },
    {
        featured: false,
        title: 'Secure, easy, and scalable Sourcegraph Cloud managed instances for the enterprise',
        link: '/blog/enterprise-cloud',
        contentType: 'blog post',
        subjects: ['product release'],
        description:
            "We're launching Sourcegraph Cloud: secure, scalable, dedicated Sourcegraph on the cloud for your organization. Sourcegraph Cloud is the best way to start using Sourcegraph on your organization's code.",
        publishDate: '2022-09-27T17:32:24Z',
    },
    {
        featured: false,
        title: 'Sourcegraph 4.0',
        link: '/blog/release/4.0',
        contentType: 'blog post',
        subjects: ['product release'],
        description:
            'Announcing Sourcegraph 4.0. The latest release includes over a dozen updates and new features, and it is the first step toward Sourcegraph becoming a code intelligence platform.',
        publishDate: '2022-09-27T17:32:24Z',
    },
    {
        featured: true,
        title: 'From code search to a code intelligence platform',
        link: '/blog/code-search-to-code-intelligence',
        contentType: 'blog post',
        subjects: ['product release'],
        description:
            'Sourcegraph is starting to go beyond just code search, which helps you find matching lines in code. We want to help you find answers in code, and we call this code intelligence.',
        publishDate: '2022-09-27T17:32:24Z',
    },
    {
        featured: true,
        title: 'How Nutanix remediated log4j in 4 days',
        link: '/webinars/preparing-for-the-next-log4j',
        contentType: 'virtual event',
        subjects: ['code security'],
        description:
            'Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their codebase.',
        publishDate: '2022-05-17T17:32:24Z',
    },
    {
        featured: false,
        title: 'A dev’s thoughts on productivity',
        link: '/blog/developer-productivity-thoughts',
        contentType: 'blog post',
        subjects: ['developer onboarding'],
        description:
            'Sourcegraph co-founder and CTO Beyang Liu presents 5 charts to visualize why metrics-based measures of developer productivity miss the mark.',
        publishDate: '2022-05-10T18:00+02:00',
    },
    {
        featured: true,
        title: 'Cloud cost optimization (Part 1)',
        link: '/guides/cloud-cost-optimization-create-visibility.pdf',
        contentType: 'guide',
        subjects: ['code health'],
        description:
            'The first part in a four part series on how you can reduce cloud costs. This piece reviews the importance of creating visibility and practical ways you can do this.',
        publishDate: '2022-08-15T21:19:11Z',
    },
    {
        featured: false,
        title: 'Key traits of a Code Intelligence Platform',
        link: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
        contentType: 'guide',
        subjects: ['code security', 'developer onboarding', 'incident response', 'code reuse', 'code health'],
        description:
            "Sourcegraph's code intelligence platform does more than search. It helps developers save time and move faster, regardless of how complex your codebase is.",
        publishDate: '2022-07-12T16:37:10Z',
    },
    {
        featured: false,
        title: 'Sourcegraph vs GitHub code search',
        link: '/guides/transform-your-codebase-into-knowledge-actions-and-insights.pdf',
        contentType: 'guide',
        subjects: ['code security', 'developer onboarding', 'incident response', 'code reuse', 'code health'],
        description: 'Go beyond search and transform your entire codebase into knowledge, actions, and insights.',
        publishDate: '2022-08-03T13:12:47Z',
    },
    {
        featured: false,
        title: 'How Frontend Platform Teams can build a data-driven relationship with your codebase',
        link: '/guides/data-driven-relationships-with-codebases.pdf',
        contentType: 'guide',
        subjects: ['code health', 'developer onboarding', 'code security'],
        description: 'Learn how frontend platform engineers can use Sourcegraph to visualize project progress.',
        publishDate: '2022-07-28T20:11:11Z',
    },
    {
        featured: false,
        title: '3 things to know before building a custom, in-house code search tool',
        link: '/guides/things-to-know-before-building-a-code-search-tool.pdf',
        contentType: 'guide',
        subjects: ['code health', 'developer onboarding', 'code reuse'],
        description:
            'Your devs need code search to understand, fix, and automate across your company’s growing codebase. Three key questions to ask before building an in-house tool.',
        publishDate: '2022-07-08T18:31:09Z',
    },
    {
        featured: false,
        title: 'Shift left the good parts',
        link: '/shift-left-the-good-parts',
        contentType: 'blog post',
        subjects: ['code security'],
        description:
            "What does shift left actually mean? What's being shifted? Who's doing the shifting? How far left should we shift it?",
        publishDate: '2022-08-10T14:59:35Z',
    },
    {
        featured: false,
        title: 'Sourcegraph Code Insights: Turning Metrics into Action',
        link: '/webinars/code-insights-turning-your-metrics-into-action',
        contentType: 'virtual event',
        subjects: ['code health'],
        description:
            'Learn how to use Code Insights to turn your most pressing analytics questions into KPIs you can track with mere seconds of setup.',
        publishDate: '2022-05-17T18:01:30Z',
    },
    {
        featured: false,
        title: 'Gartner® Cool Vendors™ in Software Engineering: Enhancing Developer Productivity',
        link: '/2022-gartner-cool-vendors-in-software-engineering',
        contentType: 'guide',
        subjects: ['code security', 'developer onboarding', 'incident response', 'code reuse', 'code health'],
        description:
            'Learn how Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.',
        publishDate: '2022-06-03T16:46:58Z',
    },
    {
        featured: false,
        title: 'Continuous developer onboarding',
        link: '/guides/continuous-developer-onboarding',
        contentType: 'guide',
        subjects: ['developer onboarding'],
        description:
            'How continuous onboarding cultivates an environment that enables developers to build themselves as flexible and resilient engineers.',
        publishDate: '2022-03-24T18:43:23Z',
    },
    {
        featured: false,
        title: 'Less is more: How simplicity complements complexity in the pursuit of vulnerabilities',
        link: '/guides/fixing-vulnerabilities-less-is-more.pdf',
        contentType: 'guide',
        subjects: ['code security'],
        description:
            'When finding security vulnerabilities, simplicity is key. Learn how to decrease recovery time with a single search by improving tooling and processes.',
        publishDate: '2022-05-27T00:15:52Z',
    },
    {
        featured: false,
        title: 'How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities',
        link: '/guides/how-google-fixes-vulnerabilities',
        contentType: 'guide',
        subjects: ['code security'],
        description:
            'Code security at tech companies large and small: How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities.',
        publishDate: '2022-06-23T20:46:12Z',
    },
    {
        featured: false,
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        contentType: 'customer story',
        subjects: ['code security'],
        description:
            'Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their codebase.',
        publishDate: '2022-04-12T17:11:27Z',
    },
    {
        featured: false,
        title: 'Monolith-to-microservices',
        link: '/blog/monolith-microservices-migration',
        contentType: 'blog post',
        subjects: ['code security'],
        description:
            'We’ve helped some of the world’s best tech orgs do major architectural migrations. Here are 5 key elements for a successful monolith to microservices migration.',
        publishDate: '2022-04-28T18:00+02:00',
    },
    {
        featured: false,
        title: 'Sourcegraph product tour',
        link: '/videos/product-tour',
        contentType: 'video',
        subjects: ['code security', 'developer onboarding', 'incident response', 'code reuse', 'code health'],
        description: 'Find and fix code across your codebase fast with Sourcegraph. Watch this video to see how.',
        publishDate: '2022-09-15T00:00:00Z',
    },
    {
        featured: false,
        title: 'Sourcegraph overview',
        link: '/handouts/Sourcegraph-Overview.pdf',
        contentType: 'guide',
        subjects: ['code security', 'developer onboarding', 'incident response', 'code reuse', 'code health'],
        description:
            'Address security risks, onboard to a new codebase, identify the root cause of incidents, promote code reuse, improve code health, and more with Sourcegraph.',
        publishDate: '2022-03-08T23:02:35Z',
    },
    {
        featured: false,
        title: 'Onboard developers faster with Sourcegraph',
        link: '/guides/onboarding-overview.pdf',
        contentType: 'guide',
        subjects: ['developer onboarding'],
        description:
            'Decrease time to first commit for new developers, help existing engineers master your codebase, and fast-track full codebase understanding.',
        publishDate: '2022-07-20T18:12:51Z',
    },
    {
        featured: false,
        title: 'Promote code reuse with Sourcegraph',
        link: '/guides/code-reuse-overview.pdf',
        contentType: 'guide',
        subjects: ['code reuse'],
        description:
            'Find existing code libraries for reuse and avoid spending time on problems a teammate already solved for a more secure and coherent codebase.',
        publishDate: '2022-07-20T18:12:51Z',
    },
    {
        featured: false,
        title: 'Boost code health with Sourcegraph',
        link: '/guides/code-health-overview.pdf',
        contentType: 'guide',
        subjects: ['code health'],
        description:
            'Tackle refactoring efforts and tech debt from legacy systems with automated pull requests across your entire codebase to boost code health.',
        publishDate: '2022-07-20T18:12:51Z',
    },
    {
        featured: false,
        title: 'Resolve incidents faster with Sourcegraph',
        link: '/guides/incident-response-overview.pdf',
        contentType: 'guide',
        subjects: ['incident response'],
        description:
            'Identify the root cause of an incident, understand its potential impact, fix the issue everywhere in your codebase. Incident response from Sourcegraph.',
        publishDate: '2022-07-20T18:12:51Z',
    },
    {
        featured: false,
        title: 'Improve code security with Sourcegraph',
        link: '/guides/code-security-overview.pdf',
        contentType: 'guide',
        subjects: ['code security'],
        description: 'Search across all your repositories to find and resolve vulnerabilities in minutes, not days.',
        publishDate: '2022-07-20T18:12:51Z',
    },
    {
        featured: false,
        title: 'FactSet migrates from Perforce to GitHub',
        link: '/case-studies/factset-migrates-from-perforce-to-github',
        contentType: 'customer story',
        subjects: ['code reuse'],
        description: 'Learn how FactSet uses Sourcegraph after migrating from Perforce to GitHub.',
        publishDate: '2021-09-01T21:14:48Z',
    },
    {
        featured: false,
        title: 'Indeed keeps code up to date and accelerates development velocity',
        link: '/case-studies/indeed-accelerates-development-velocity',
        contentType: 'customer story',
        subjects: ['code security', 'code health'],
        description: 'Learn how Indeed keeps code up to date and accelerates development velocity.',
        publishDate: '2021-04-29T18:53:55Z',
    },
    {
        featured: false,
        title: 'Workiva reduces the time it takes to make large-scale code changes by 80%',
        link: '/case-studies/workiva-automates-large-scale-code-changes',
        contentType: 'customer story',
        subjects: ['code health'],
        description:
            'Learn how Workiva uses Sourcegraph Batch Changes to reduce the time it takes to make large-scale code updates by 80%.',
        publishDate: '2021-03-24T12:17:20Z',
    },
    {
        featured: false,
        title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications',
        link: '/case-studies/cern-reduces-technical-debt',
        contentType: 'customer story',
        subjects: ['code reuse', 'code health'],
        description:
            'Sourcegraph empowers developers at CERN to reuse existing code and manage mission-critical code changes with ease.',
        publishDate: '2020-12-24T19:26:20Z',
    },
    {
        featured: false,
        title: 'Criteo uses Sourcegraph universal code search to tackle Big Code',
        link: '/case-studies/criteo-tackles-big-code',
        contentType: 'customer story',
        subjects: ['code health'],
        description:
            'Sourcegraph provides Criteo the ability to cross boundaries of different codebases and languages authored by different people with different tools.',
        publishDate: '2020-10-27T18:12:04Z',
    },
    {
        featured: false,
        title: 'F5 streamlines collaboration for global and distributed software teams',
        link: '/case-studies/f5-streamlines-collaboration-globally',
        contentType: 'customer story',
        subjects: ['code health'],
        description:
            "With Sourcegraph, F5's global workforce can stay better connected and quickly solve problems across the entire codebase.",
        publishDate: '2020-10-12T22:15:04Z',
    },
    {
        featured: false,
        title: 'Convoy improves developer onboarding',
        link: '/case-studies/convoy-improved-on-boarding',
        contentType: 'customer story',
        subjects: ['developer onboarding', 'code health'],
        description: 'At Convoy, Sourcegraph helps improve the developer onboarding process.',
        publishDate: '2019-11-11T17:12:10Z',
    },
    {
        featured: false,
        title: 'Lyft ensures production stability during monolith to microservices transition',
        link: '/case-studies/lyft-monolith-to-microservices',
        contentType: 'customer story',
        subjects: ['code health'],
        description:
            'How Sourcegraph helped Lyft ensure (largely) issue-free production deploys during their monolith to microservices decomposition.',
        publishDate: '2019-12-13T22:35:29Z',
    },
    {
        featured: false,
        title: 'Quantcast adopts Sourcegraph for large-scale refactoring',
        link: '/case-studies/quantcast-large-scale-refactoring',
        contentType: 'customer story',
        subjects: ['code health', 'code reuse'],
        description:
            'How Sourcegraph enables Quantcast to do major refactors with confidence over thousands of repositories.',
        publishDate: '2019-08-06T20:36:42Z',
    },
    {
        featured: false,
        title: 'SoFi manages hundreds of microservices',
        link: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
        contentType: 'customer story',
        subjects: ['code health', 'code reuse'],
        description:
            'With Sourcegraph, SoFi can innovate and move quickly while keeping up with hundreds of microservices.',
        publishDate: '2019-11-21T22:22:32Z',
    },
    {
        featured: false,
        title: 'Thorn deprecates legacy code safely',
        link: '/case-studies/we-are-thorn',
        contentType: 'customer story',
        subjects: ['code health'],
        description:
            'How Sourcegraph code search enabled Thorn to systematically sunset legacy systems safely, removing huge amounts of tech debt in the process.',
        publishDate: '2019-06-25T01:10:08Z',
    },
]
