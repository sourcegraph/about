type ContentTypes = 'virtual event' | 'blog post' | 'guide' | 'customer story' | 'video' | 'whitepaper'
type Subjects =
    | 'code security'
    | 'developer onboarding'
    | 'code health'
    | 'incident response'
    | 'code reuse'
    | 'product release'
    | 'code search'
    | 'code insights'
    | 'security'
    | 'batch changes'
    | 'onboarding'
    | 'developer productivity'
    | 'code intelligence'
    | 'cody'
    | 'code monitoring'
    | 'integrations'
    | 'code search'

export interface Resource {
    title: string
    description: string
    contentType: ContentTypes
    subjects: Subjects[]
    featured: boolean
    link: string
    publishDate: string
    keyword: string[]
}

/**
 * These are our resources for the resources page.
 * Note: Published dates should be the first merged PR timestamp of a resource.
 */
export const resourceItems: Resource[] = [
    {
        featured: true,
        title: 'Big Code in the AI era',
        link: '/big-code/big-code-in-ai-era',
        contentType: 'guide',
        subjects: [],
        description:
            'Developers are struggling more than ever with issues around tech debt, maintenance, collaboration, and scalability. But with the overnight AI boom, the pain of Big Code is only getting worse.',
        publishDate: '2023-06-16T17:32:24Z',
        keyword: ['Big Code', 'AI', 'Cody'],
    },
    {
        featured: false,
        title: 'Cody context architecture',
        link: '/whitepaper/cody-context-architecture.pdf',
        contentType: 'whitepaper',
        subjects: ['cody'],
        description:
            'Context awareness is key to the quality and precision of Cody. This paper outlines how Cody fetches the right context at the right time to answer queries.',
        publishDate: '2023-06-16T17:32:24Z',
        keyword: ['Cody', 'AI'],
    },
    {
        featured: false,
        title: "How Sourcegraph's AI platform powers Cody",
        link: '/whitepaper/how-sourcegraph-ai-platform-powers-cody.pdf',
        contentType: 'whitepaper',
        subjects: ['cody'],
        description:
            'Through a close look at what goes on under the hood of a typical user interaction with Cody you’ll learn how the platform gives Cody a unique advantage compared to other coding assistants today and how that advantage will grow in the future.',
        publishDate: '2023-06-16T17:32:24Z',
        keyword: ['Cody', 'AI'],
    },
    {
        featured: false,
        title: 'The Total Economic Impact™ of Sourcegraph code intelligence platform',
        link: '/forrester-total-economic-impact',
        contentType: 'guide',
        subjects: ['developer productivity', 'code insights', 'code monitoring'],
        description: 'A commissioned study conducted by Forrester Consulting on behalf of Sourcegraph',
        publishDate: '2023-06-16T17:32:24Z',
        keyword: ['Forrester', 'Gartner'],
    },
    {
        featured: false,
        title: 'Update to Neo Financial improves the developer experience with Sourcegraph',
        link: '/case-studies/neo-financial-improves-the-developer-experience-with-sourcegraph',
        contentType: 'customer story',
        subjects: ['code search', 'code insights'],
        description:
            'Learn how Neo Financial attacts and retains top engineering talent by providing a culture, and tools like Sourcegraph, that focus on improving the developer experience.',
        publishDate: '2023-06-16T17:32:24Z',
        keyword: ['Neo', 'Neo FInancial', 'code search', 'code insights'],
    },
    {
        featured: false,
        title: 'Sourcegraph for Platform Engineering',
        link: '/guide/Sourcegraph-for-platform-engineering.pdf',
        contentType: 'guide',
        subjects: ['code search', 'code insights', 'code reuse'],
        description:
            'Sourcegraph allows platform engineering teams to move faster and de -risk large -scale changes, while giving their leaders visibility into where initiatives really stand to meet OKRs.',
        publishDate: '2023-03-08T17:32:24Z',
        keyword: ['Platform engineering', 'code search', 'code insights', 'Tech debt', 'code reuse'],
    },
    {
        featured: false,
        title: 'GitLab solution brief',
        link: '/guides/sourcegraph-gitlab-solution-brief.pdf',
        contentType: 'guide',
        subjects: ['code search', 'batch changes', 'code insights', 'code monitoring', 'integrations'],
        description:
            "Sourecgraph's native GitLab integration helps developer build better software by freeing them up to focus on complex problems.",
        publishDate: '2023-03-08T17:32:24Z',
        keyword: ['GitLab', 'code search', 'batch changes', 'code insights', 'code monitoring', 'integrations'],
    },
    {
        featured: false,
        title: 'How Nutanix Remediated the Vulnerability in 4 Days',
        link: '/webinars/preparing-for-the-next-log4j',
        contentType: 'virtual event',
        subjects: ['security', 'code search'],
        description:
            'Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their codebase.',
        publishDate: '2022-05-17T17:32:24Z',
        keyword: ['security', 'code search', 'Log4j'],
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
        keyword: ['Cloud costs', 'Cost optimization', 'Visibility'],
    },
    {
        featured: false,
        title: 'Hashicorp customer story',
        link: '/case-studies/hashicorp-uses-sourcegraph-to-streamline-cross-repository-code-search',
        contentType: 'customer story',
        subjects: ['code search', 'code reuse', 'batch changes'],
        description: 'Learn how HashiCorp streamlines cross-repository code search and fixes with Sourcegraph.',
        publishDate: '2022-09-01T17:32:24Z',
        keyword: ['code search', 'code reuse', 'batch changes', 'Tech debt'],
    },
    {
        featured: false,
        title: 'How DevOps teams can build data driven relationships with their code',
        link: '/guides/devops-data-driven-relationships-with-codebases.pdf',
        contentType: 'guide',
        subjects: ['code insights'],
        description:
            'Track devops tooling and paved path practices across your entire codebase, from version spread to migrations and deprecations',
        publishDate: '2022-10-10T17:32:24Z',
        keyword: ['DevOps', 'code insights', 'Tech debt'],
    },
    {
        featured: false,
        title: 'Developer velocity vs code security',
        link: '/guides/developer-velocity-vs-code-security.pdf',
        contentType: 'guide',
        subjects: ['code security'],
        description: 'Developer velocity vs code security: How organizations can invest in both',
        publishDate: '2022-10-06T17:32:24Z',
        keyword: ['Velocity', 'security'],
    },
    {
        featured: false,
        title: 'Key traits of a Code Intelligence Platform',
        link: '/guides/key-traits-of-a-code-intelligence-platform.pdf',
        contentType: 'guide',
        subjects: ['code intelligence', 'code search', 'batch changes'],
        description:
            "Sourcegraph's code intelligence platform does more than search. It helps developers save time and move faster, regardless of how complex your codebase is.",
        publishDate: '2022-07-12T16:37:10Z',
        keyword: ['code intelligence', 'code search', 'batch changes'],
    },
    {
        featured: false,
        title: 'Go beyond search and transform your entire codebase into knowledge, actions, and insights.',
        link: '/guides/transform-your-codebase-into-knowledge-actions-and-insights.pdf',
        contentType: 'guide',
        subjects: ['code search'],
        description: 'Go beyond search and transform your entire codebase into knowledge, actions, and insights.',
        publishDate: '2022-08-03T13:12:47Z',
        keyword: ['code search', 'GitHub', 'Tool comparison'],
    },
    {
        featured: false,
        title: 'How Frontend Platform Teams can build a data-driven relationship with your codebase',
        link: '/guides/data-driven-relationships-with-codebases.pdf',
        contentType: 'guide',
        subjects: ['code insights'],
        description: 'Learn how frontend platform engineers can use Sourcegraph to visualize project progress.',
        publishDate: '2022-07-28T20:11:11Z',
        keyword: ['code insights'],
    },
    {
        featured: false,
        title: '3 things to know before building a custom, in-house code search tool',
        link: '/guides/things-to-know-before-building-a-code-search-tool.pdf',
        contentType: 'guide',
        subjects: ['code search'],
        description:
            'Your devs need code search to understand, fix, and automate across your company’s growing codebase. Three key questions to ask before building an in-house tool.',
        publishDate: '2022-07-08T18:31:09Z',
        keyword: ['code search', 'Build vs. buy'],
    },
    {
        featured: false,
        title: 'Sourcegraph Code Insights: Turning Metrics into Action',
        link: '/webinars/code-insights-turning-your-metrics-into-action',
        contentType: 'virtual event',
        subjects: ['code insights', 'code reuse'],
        description:
            'Learn how to use Code Insights to turn your most pressing analytics questions into KPIs you can track with mere seconds of setup.',
        publishDate: '2022-05-17T18:01:30Z',
        keyword: ['code insights', 'code reuse'],
    },
    {
        featured: false,
        title: 'Gartner® Cool Vendors™ in Software Engineering: Enhancing Developer Productivity',
        link: '/2022-gartner-cool-vendors-in-software-engineering',
        contentType: 'guide',
        subjects: ['security', 'developer productivity'],
        description:
            'Learn how Sourcegraph and other innovative tools help engineers and engineering leaders boost developer productivity while mitigating security risks.',
        publishDate: '2022-06-03T16:46:58Z',
        keyword: ['Analyst report', 'security', 'developer productivity'],
    },
    {
        featured: false,
        title: 'Continuous developer onboarding',
        link: '/guides/continuous-developer-onboarding',
        contentType: 'guide',
        subjects: ['developer productivity', 'onboarding'],
        description:
            'How continuous onboarding cultivates an environment that enables developers to build themselves as flexible and resilient engineers.',
        publishDate: '2022-03-24T18:43:23Z',
        keyword: ['developer productivity', 'onboarding'],
    },
    {
        featured: false,
        title: 'Less is more: How simplicity complements complexity in the pursuit of vulnerabilities',
        link: '/guides/fixing-vulnerabilities-less-is-more.pdf',
        contentType: 'guide',
        subjects: ['security', 'code search'],
        description:
            'When finding security vulnerabilities, simplicity is key. Learn how to decrease recovery time with a single search by improving tooling and processes.',
        publishDate: '2022-05-27T00:15:52Z',
        keyword: ['security', 'Log4j', 'code search'],
    },
    {
        featured: false,
        title: 'How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities',
        link: '/guides/how-google-fixes-vulnerabilities',
        contentType: 'guide',
        subjects: ['security', 'code search'],
        description:
            'Code security at tech companies large and small: How Google, Microsoft, Lyft, GitLab, and Atlassian find and fix vulnerabilities.',
        publishDate: '2022-06-23T20:46:12Z',
        keyword: ['security', 'Log4j', 'code search'],
    },
    {
        featured: false,
        title: 'Nutanix fixed Log4j quickly and confidently with Sourcegraph',
        link: '/case-studies/nutanix-fixed-log4j-with-sourcegraph',
        contentType: 'customer story',
        subjects: ['security', 'code search'],
        description:
            'Learn how Nutanix uses Sourcegraph to find and fix security vulnerabilities quickly across their codebase.',
        publishDate: '2022-04-12T17:11:27Z',
        keyword: ['security', 'Log4j', 'code search'],
    },
    {
        featured: false,
        title: 'Code Intelligence Platform - Product Tour',
        link: '/videos/product-tour',
        contentType: 'video',
        subjects: ['code intelligence', 'code search', 'batch changes'],
        description: 'Find and fix code across your codebase fast with Sourcegraph. Watch this video to see how.',
        publishDate: '2022-09-15T00:00:00Z',
        keyword: ['code intelligence', 'code search', 'batch changes'],
    },
    {
        featured: false,
        title: 'Onboard developers faster with Sourcegraph',
        link: '/guides/onboarding-overview.pdf',
        contentType: 'guide',
        subjects: ['onboarding', 'developer productivity'],
        description:
            'Decrease time to first commit for new developers, help existing engineers master your codebase, and fast-track full codebase understanding.',
        publishDate: '2022-07-20T18:12:51Z',
        keyword: ['onboarding', 'developer productivity'],
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
        keyword: ['code reuse'],
    },
    {
        featured: false,
        title: 'Boost code health with Sourcegraph',
        link: '/guides/code-health-overview.pdf',
        contentType: 'guide',
        subjects: ['batch changes', 'code reuse'],
        description:
            'Tackle refactoring efforts and tech debt from legacy systems with automated pull requests across your entire codebase to boost code health.',
        publishDate: '2022-07-20T18:12:51Z',
        keyword: ['batch changes', 'code reuse'],
    },
    {
        featured: false,
        title: 'Resolve incidents faster with Sourcegraph',
        link: '/guides/incident-response-overview.pdf',
        contentType: 'guide',
        subjects: ['security', 'code search'],
        description:
            'Identify the root cause of an incident, understand its potential impact, fix the issue everywhere in your codebase. Incident response from Sourcegraph.',
        publishDate: '2022-07-20T18:12:51Z',
        keyword: ['security', 'code search'],
    },
    {
        featured: false,
        title: 'Improve code security with Sourcegraph',
        link: '/guides/code-security-overview.pdf',
        contentType: 'guide',
        subjects: ['code search'],
        description: 'Search across all your repositories to find and resolve vulnerabilities in minutes, not days.',
        publishDate: '2022-07-20T18:12:51Z',
        keyword: ['code search'],
    },
    {
        featured: false,
        title: 'FactSet migrates from Perforce to GitHub',
        link: '/case-studies/factset-migrates-from-perforce-to-github',
        contentType: 'customer story',
        subjects: [],
        description: 'Learn how FactSet uses Sourcegraph after migrating from Perforce to GitHub.',
        publishDate: '2021-09-01T21:14:48Z',
        keyword: ['FactSet', 'perforce', 'GitHub', 'Code host migration'],
    },
    {
        featured: false,
        title: 'Indeed keeps code up to date and accelerates development velocity',
        link: '/case-studies/indeed-accelerates-development-velocity',
        contentType: 'customer story',
        subjects: ['developer productivity', 'batch changes'],
        description: 'Learn how Indeed keeps code up to date and accelerates development velocity.',
        publishDate: '2021-04-29T18:53:55Z',
        keyword: ['Indeed', 'developer productivity', 'batch changes', 'velocity'],
    },
    {
        featured: false,
        title: 'Workiva reduces the time it takes to make large-scale code changes by 80%',
        link: '/case-studies/workiva-automates-large-scale-code-changes',
        contentType: 'customer story',
        subjects: ['batch changes', 'code reuse'],
        description:
            'Learn how Workiva uses Sourcegraph batch changes to reduce the time it takes to make large-scale code updates by 80%.',
        publishDate: '2021-03-24T12:17:20Z',
        keyword: ['Workviva', 'batch changes', 'code reuse'],
    },
    {
        featured: false,
        title: 'Sourcegraph empowers CERN to tackle code reuse and code changes in mission-critical applications',
        link: '/case-studies/cern-reduces-technical-debt',
        contentType: 'customer story',
        subjects: ['code reuse', 'code search'],
        description:
            'Sourcegraph empowers developers at CERN to reuse existing code and manage mission-critical code changes with ease.',
        publishDate: '2020-12-24T19:26:20Z',
        keyword: ['CERN', 'code reuse', 'code search'],
    },
    {
        featured: false,
        title: 'Criteo uses Sourcegraph universal code search to tackle Big Code',
        link: '/case-studies/criteo-tackles-big-code',
        contentType: 'customer story',
        subjects: ['code search', 'developer productivity'],
        description:
            'Sourcegraph provides Criteo the ability to cross boundaries of different codebases and languages authored by different people with different tools.',
        publishDate: '2020-10-27T18:12:04Z',
        keyword: ['Criteo', 'Big Code', 'code search', 'developer productivity'],
    },
    {
        featured: false,
        title: 'F5 streamlines collaboration for global and distributed software teams',
        link: '/case-studies/f5-streamlines-collaboration-globally',
        contentType: 'customer story',
        subjects: ['developer productivity', 'code search'],
        description:
            "With Sourcegraph, F5's global workforce can stay better connected and quickly solve problems across the entire codebase.",
        publishDate: '2020-10-12T22:15:04Z',
        keyword: ['F5', 'developer productivity', 'code search'],
    },
    {
        featured: false,
        title: 'Convoy improves developer onboarding',
        link: '/case-studies/convoy-improved-on-boarding',
        contentType: 'customer story',
        subjects: ['onboarding', 'developer productivity'],
        description: 'At Convoy, Sourcegraph helps improve the developer onboarding process.',
        publishDate: '2019-11-11T17:12:10Z',
        keyword: ['Convoy', 'onboarding', 'developer productivity'],
    },
    {
        featured: false,
        title: 'Lyft ensures production stability during monolith to microservices transition',
        link: '/case-studies/lyft-monolith-to-microservices',
        contentType: 'customer story',
        subjects: [],
        description:
            'How Sourcegraph helped Lyft ensure (largely) issue-free production deploys during their monolith to microservices decomposition.',
        publishDate: '2019-12-13T22:35:29Z',
        keyword: ['Lyft', 'Monolith', 'microservices', 'Tech debt'],
    },
    {
        featured: false,
        title: 'Quantcast adopts Sourcegraph Universal code search for large scale refactoring',
        link: '/case-studies/quantcast-large-scale-refactoring',
        contentType: 'customer story',
        subjects: ['code monitoring', 'code search'],
        description:
            'How Sourcegraph enables Quantcast to do major refactors with confidence over thousands of repositories.',
        publishDate: '2019-08-06T20:36:42Z',
        keyword: ['Quantcast', 'code monitoring', 'GDPR Compliance', 'code search'],
    },
    {
        featured: false,
        title: 'SoFi manages hundreds of microservices',
        link: '/case-studies/sofi-moves-fast-on-hundreds-of-microservices',
        contentType: 'customer story',
        subjects: ['code search'],
        description:
            'With Sourcegraph, SoFi can innovate and move quickly while keeping up with hundreds of microservices.',
        publishDate: '2019-11-21T22:22:32Z',
        keyword: ['SoFi', 'code search'],
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
        keyword: ['Technical Debt', 'Legacy Code', 'Deprecation'],
    },
    {
        featured: false,
        title: 'Sourcegraph Professional Services Offerings',
        link: '/guides/professional-services-offerings.pdf',
        contentType: 'guide',
        subjects: [],
        description:
            'Sourcegraph Professional Services provides a suite of specialized services – technical and non-technical, consultative and hands-on – to help companies maximize the value of Sourcegraph through deep partnership',
        publishDate: '2023-07-05T00:00:00Z',
        keyword: [
            'services',
            'offerings',
            'customer service',
            'customer',
            'CE',
            'customer engineering',
            'professional services',
        ],
    },
]
