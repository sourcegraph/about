import { FunctionComponent, ReactNode } from 'react'

import Link from 'next/link'

import { Badge, ContentSection, Heading } from '.'

const codeHosts: string[] = [
    'GitLab.com',
    'GitLab Enterprise',
    'GitHub.com',
    'GitHub Enterprise',
    'Bitbucket Server',
    'Bitbucket Data Center',
    'Bitbucket Cloud',
    'Phabricator',
    'Gitolite',
    'Gerrit (coming soon)',
    'Perforce',
    'CVS',
    'Any Git-based code host',
]

const languages: string[] = [
    'Java',
    'Python',
    'Go',
    'JavaScript',
    'TypeScript',
    'C#',
    'C',
    'C++',
    'Swift',
    'Objective-C',
    'Kotlin',
    'Ruby',
    'Scala',
    'Rust',
    'Perl',
    'Dart',
    'Erlang',
    'COBOL',
    'Clojure',
    'Lisp',
    'Shell',
    'Terraform',
    'Lua',
    'GraphQL',
    'Thrift',
    'Protobuf',
    'YAML',
    'JSON',
    'Jsonnet',
    'R',
    'PHP',
    'Elixir',
    'Haskell',
    'PowerShell',
    'OCaml',
    'CUDA',
    'Pascal',
    'Verilog',
    'VHDL',
    'Groovy',
    'Tcl',
]

const tools: string[] = [
    'Chrome',
    'Firefox',
    'VS Code',
    'JetBrains',
    'Vim',
    'Emacs',
    'Atom',
    'Sublime Text',
    'Datadog',
    'Lightstep',
    'Sentry',
    'Codecov',
    'Jira',
    'npm',
    'SonarQube',
]

const deploymentOptions: string[] = [
    'Kubernetes cluster',
    'Amazon EKS or EC2',
    'Google GKE',
    'Microsoft Azure AKS',
    'Docker Compose',
    'Docker Compose in GCP',
]

const renderListItems = (items: string[]): ReactNode =>
    items.map((item: string) => (
        <li key={item} className="list-inline-item">
            <Badge text={item} size="small" breakWords={true} />
        </li>
    ))

export const IntegrationsSection: FunctionComponent = () => (
    <ContentSection background="white">
        <h2 className="mb-12">Works with your code, infrastructure, and tools</h2>

        <div className="grid grid-cols-1 gap-md lg:grid-cols-2">
            <div className="flex flex-col">
                <Heading size="h4" as="h3" className="mb-6 !text-[20px] !font-semibold !leading-7">
                    All your repositories + 2M open source (and counting)
                </Heading>

                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-lg">{renderListItems(codeHosts)}</ul>
                <Link href="mailto:feedback@sourcegraph.com" className="mt-2">
                    <Badge
                        text="Request one"
                        size="small"
                        className="w-fit hover:bg-violet-100 hover:text-violet-600"
                    />
                </Link>
            </div>

            <div className="flex flex-col">
                <Heading size="h4" as="h3" className="mb-6 !text-[20px] !font-semibold !leading-7">
                    All your languages
                </Heading>

                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-xl">{renderListItems(languages)}</ul>
                <Link href="mailto:feedback@sourcegraph.com" className="mt-2">
                    <Badge
                        text="Request one"
                        size="small"
                        className="w-fit hover:bg-violet-100 hover:text-violet-600"
                    />
                </Link>
            </div>

            <div className="flex flex-col">
                <Heading size="h4" as="h3" className="mb-6 !text-[20px] !font-semibold !leading-7">
                    All your tools
                </Heading>

                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-md">{renderListItems(tools)}</ul>
                <Link href="https://sourcegraph.com/docs/integration" target="_blank" className="mt-2">
                    <Badge text="See more" size="small" className="w-fit hover:bg-violet-100 hover:text-violet-600" />
                </Link>
            </div>

            <div className="flex flex-col">
                <Heading size="h4" as="h3" className="mb-6 !text-[20px] !font-semibold !leading-7">
                    Deployment options
                </Heading>
                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-md">
                    {renderListItems(deploymentOptions)}
                </ul>
                <Link href="https://sourcegraph.com/docs/admin/install" target="_blank" className="mt-2">
                    <Badge text="Learn more" size="small" className="w-fit hover:bg-violet-100 hover:text-violet-600" />
                </Link>
            </div>
        </div>
    </ContentSection>
)
