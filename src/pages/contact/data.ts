import type { HubSpotFormProps } from '../../components'

export interface ContactPageProps extends HubSpotFormProps {
    title: string
    description: string
    form_submission_source?: string
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
        form_submission_source: 'request-info',
    },
    'request-info-gitlab': {
        title: 'Contact us',
        description: 'Talk with a product specialist to learn more about Sourcegraph.',
        masterFormName: 'contactMulti',
        form_submission_source: 'solutions-gitlab',
    },
    'request-info-bitbucket': {
        title: 'Contact us',
        description: 'Talk with a product specialist to learn more about Sourcegraph.',
        masterFormName: 'contactMulti',
        form_submission_source: 'solutions-bitbucket',
    },
    'request-trial': {
        title: 'Sign up for a free trial',
        description: 'To start your free Sourcegraph trial, tell us a bit about yourself.',
        masterFormName: 'contactMulti',
        form_submission_source: 'request-trial',
    },
    'team-pricing': {
        title: 'Team Pricing',
        masterFormName: 'contactMulti',
        description: 'Talk to a product specialist about upgrading to a Team plan.',
        formId: '3fd1217b-2505-4bd7-8a21-70ceb6931cb3',
    },
    pricing: {
        title: 'Contact us',
        masterFormName: 'contactMulti',
        description: 'Talk with a product specialist to learn more about Sourcegraph.',
        formId: 'c8c6536a-0a61-45aa-8811-935a587d7015',
    },
}

export const slugs: string[] = Object.keys(slugData)
