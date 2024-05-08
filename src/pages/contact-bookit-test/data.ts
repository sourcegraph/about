import type { HubSpotFormProps } from '../../components'

export interface ContactBookKitTestPageProps extends HubSpotFormProps {
    title: string
    description: string
    form_submission_source?: string
}

interface SlugDataProps {
    [key: string]: ContactBookKitTestPageProps
}

/**
 * This data is used to generate different contact pages under [...slug].tsx
 * since they all share the same template.
 */
export const slugData: SlugDataProps = {
    'contact-bookit-test': {
        title: 'Contact us',
        description: 'Talk with a product specialist to learn more about Sourcegraph.',
        formId: '079b2630-456f-44be-b3db-817e2a71fad1',
    },
}

export const slugs: string[] = Object.keys(slugData)
