import type { HubSpotFormProps } from '../../components'

export interface ContactPageProps extends HubSpotFormProps {
    title: string
    description: string
}

interface SlugDataProps {
    [key: string]: ContactPageProps
}

/**
 * This data is used to generate different contact pages under [...slug].tsx
 * since they all share the same template.
 */
export const slugData: SlugDataProps = {
    'request-batch-changes-demo': {
        title: 'Schedule a Batch Changes demo',
        description: 'Learn how you can automate large-scale code changes with Sourcegraph Batch Changes.',
        masterFormName: 'contactMulti',
    },
    'request-code-insights-demo': {
        title: 'Schedule a Code Insights demo',
        description:
            'Learn how you can track and visualize trends in your entire codebase with Sourcegraph Code Insights.',
        masterFormName: 'contactMulti',
    },
    'request-info': {
        title: 'Contact us',
        description: 'Talk with a product specialist to learn more about Sourcegraph.',
        masterFormName: 'contactMulti',
    },
    'request-trial': {
        title: 'Sign up for a free trial',
        description: 'To start your free Sourcegraph trial, tell us a bit about yourself.',
        masterFormName: 'contactMulti',
    },
    'team-pricing': {
        title: 'Team Pricing',
        description: 'Talk to a product specialist about upgrading to a Team plan.',
        formId: '3fd1217b-2505-4bd7-8a21-70ceb6931cb3',
    },
}

export const slugs: string[] = Object.keys(slugData)
