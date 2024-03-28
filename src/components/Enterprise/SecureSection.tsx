import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'

const enterpriseCardObjects = [
    {
        heading: 'Deployment options for every team',
        paragraph:
            'Choose Sourcegraph Cloud, our single-tenant cloud solution, or self-host Sourcegraph in your preferred environment.',
    },
    {
        heading: 'Admin usage analytics',
        paragraph: 'Admins can see anonymized, event-level usage analytics for each feature their teams are using.',
    },
    {
        heading: 'Granular user permissions',
        paragraph:
            'Sync repository permissions with GitHub, GitLab, Bitbucket Cloud, Gerrit, or Perforce. Alternatively, set your own custom, repository-level permissions.',
    },
    {
        heading: 'Authentication with SAML and code host OAuth',
        paragraph:
            'Admins can choose from multiple user authentication options, including SAML or OAuth via GitHub or GitLab.',
    },
    {
        heading: 'SCIM user provisioning',
        paragraph: 'Provision and de-provision users with SCIM for Okta and Azure Active Directory.',
    },
]

export const SecureSection: FunctionComponent = () => (
    <ContentSection className="flex flex-col py-0 md:gap-10" parentClassName="!py-0 md:!pt-[112px] !pt-8 md:px-[80px]">
        <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex basis-1/3 flex-col gap-6 p-10">
                <img src="/enterprise/security-brand-icon.svg" className="w-[51px]" alt="" />
                <Heading size="h2" className="!text-[52px] !leading-[62px] !tracking-[-1px]">
                    Secure
                </Heading>
            </div>
            {enterpriseCardObjects.slice(0, 2).map(({ heading, paragraph }) => (
                <EnterpriseCard key={heading} heading={heading} paragraph={paragraph} />
            ))}
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-0">
            {enterpriseCardObjects.slice(2).map(({ heading, paragraph }) => (
                <EnterpriseCard key={heading} heading={heading} paragraph={paragraph} />
            ))}
        </div>
    </ContentSection>
)

const EnterpriseCard: FunctionComponent<{ heading: string; paragraph: string }> = ({ heading, paragraph }) => (
    <div className="flex basis-1/3 flex-col gap-4 p-10">
        <Heading size="h4" className="!leading-[30px] !tracking-[-0.25px]">
            {heading}
        </Heading>
        <p className="mb-0 text-[18px] font-normal leading-[27px] -tracking-[0.25px]">{paragraph}</p>
    </div>
)
