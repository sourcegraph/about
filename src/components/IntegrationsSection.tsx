import { FunctionComponent, ReactNode } from 'react'

import { buttonStyle, buttonLocation } from '../data/tracking'

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

const selfHostedOptions: string[] = [
    'Kubernetes cluster',
    'Amazon EKS or EC2',
    'Google GKE',
    'Microsoft Azure AKS',
    'Docker Compose',
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
            <div className="flex flex-col gap-y-6">
                <Heading size="h4" as="h3" className="!text-[20px] !font-semibold !leading-7">
                    All your repositories + 2M open source (and counting)
                </Heading>

                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-lg">{renderListItems(codeHosts)}</ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    title="Have a repository not covered here?"
                    className="text-lg font-normal text-violet-500 underline"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Have a repository not covered here?
                </a>
            </div>

            <div className="flex flex-col gap-y-6">
                <Heading size="h4" as="h3" className="!text-[20px] !font-semibold !leading-7">
                    All your languages
                </Heading>

                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-xl">{renderListItems(languages)}</ul>
                <a
                    href="mailto:feedback@sourcegraph.com"
                    title="Need a different language?"
                    className="text-lg font-normal text-violet-500 underline"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Need a different language?
                </a>
            </div>

            <div className="flex flex-col gap-y-6">
                <Heading size="h4" as="h3" className="!text-[20px] !font-semibold !leading-7">
                    All your tools
                </Heading>

                <ul className="ml-0 flex list-none flex-wrap gap-2 lg:max-w-md">{renderListItems(tools)}</ul>
                <a
                    href="https://docs.sourcegraph.com/integration"
                    title="See all integrations"
                    className="text-lg font-normal text-violet-500 underline"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    See all integrations
                </a>
            </div>

            <div className="flex flex-col gap-y-6">
                <Heading size="h4" as="h3" className="!text-[20px] !font-semibold !leading-7">
                    Deployment options
                </Heading>

                <ul className="ml-0 list-none">
                    <li className="list-inline-item text-wrap">
                        <Heading size="h5" as="h4" className="text-base !font-normal">
                            Self-hosted by you:
                        </Heading>
                        <ul className="m-0 mt-3.5 flex list-none flex-wrap gap-2 lg:max-w-sm">
                            {renderListItems(selfHostedOptions)}
                        </ul>
                    </li>

                    <li className="m-0 list-none">
                        <Heading size="h5" as="h4" className="mt-3 text-base !font-normal">
                            Managed and hosted by us:
                        </Heading>
                        <ul className="m-0 mt-3 flex list-none flex-wrap gap-2 lg:max-w-sm">
                            {renderListItems(['Docker Compose in GCP'])}
                        </ul>
                    </li>
                </ul>
                <a
                    href="https://docs.sourcegraph.com/admin/install"
                    title="Learn about deploying Sourcegraph"
                    className="text-lg font-normal text-violet-500 underline"
                    data-button-style={buttonStyle.text}
                    data-button-location={buttonLocation.body}
                    data-button-type="cta"
                >
                    Learn about deploying Sourcegraph
                </a>
            </div>
        </div>
    </ContentSection>
)
