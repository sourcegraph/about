import { FunctionComponent } from 'react'

import { ContentSection, Heading } from '..'

import { EnterpriseIcon } from './EnterpriseIcon'

const enterpriseDevPlatforms = [
    { src: '/enterprise/vscode.svg', alt: 'Visual Studio Code' },
    { src: '/enterprise/github.svg', alt: 'GitHub' },
    { src: '/enterprise/bitbucket.svg', alt: 'Bitbucket' },
    { src: '/enterprise/intellij.svg', alt: 'IntelliJ' },
    { src: '/enterprise/neovim.svg', alt: 'Neovim' },
    { src: '/enterprise/golang.svg', alt: 'Golang' },
    { src: '/enterprise/gerrit.svg', alt: 'Gerrit' },
    { src: '/enterprise/gitlab.svg', alt: 'GitLab' },
    { src: '/enterprise/perforce.svg', alt: 'Perforce' },
]

export const UniversalSection: FunctionComponent = () => (
    <ContentSection
        className="flex max-w-[1232px] flex-col justify-between overflow-hidden  rounded-2xl  border-1 border-gray-200 bg-white px-6 md:flex-row md:px-16"
        parentClassName="md:px-[80px] !py-0"
    >
        <div className="flex flex-col justify-center pt-16 !pb-12 md:w-[492px] md:py-16">
            <img alt="language models brand" className="mb-6 w-12" src="/enterprise/language-models-brand-icon.svg" />
            <Heading size="h1" className="mb-4">
                Universal
            </Heading>
            <p className="mb-0 text-[24px] leading-[30px] -tracking-[0.25px]">
                You don't have to compromise. Sourcegraph works with all major code hosts and IDEs to understand all
                your code.
            </p>
        </div>
        <div className="flex w-auto justify-center gap-[37px] md:gap-[31.97px]">
            <div className="relative bottom-[17px] flex flex-col gap-[25.21px]">
                {enterpriseDevPlatforms.slice(0, 3).map(({ src, alt }) => (
                    <EnterpriseIcon className="flex justify-center" key={alt} src={src} alt={alt} />
                ))}
            </div>
            <div className="relative flex flex-col gap-[25px] md:top-[21px]">
                {enterpriseDevPlatforms.slice(3, 6).map(({ src, alt }) => (
                    <EnterpriseIcon className="flex justify-center" key={alt} src={src} alt={alt} />
                ))}
            </div>
            <div className="relative bottom-[17px] flex flex-col gap-[25px]">
                {enterpriseDevPlatforms.slice(6).map(({ src, alt }) => (
                    <EnterpriseIcon className="flex justify-center" key={alt} src={src} alt={alt} />
                ))}
            </div>
        </div>
    </ContentSection>
)
