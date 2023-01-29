import { FunctionComponent } from 'react'

import {
    Layout,
    StaffSpotlight,
    Hero,
    NewCaseStudyLayout,
    ContentSection,
    Blockquote,
    ThreeUpText,
    UseChallengeSolutionResults,
} from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const threeUpTextItems = [
    {
        subtitle: 'From 1 hr to 1 min',
        description:
            'Code Search enabled the team to find specific dependencies in minutes versus the hour it used to take manually searching.',
    },
    {
        subtitle: '4x faster',
        description:
            'Batch Changes sped up refactors by an estimated 4x and combated code ossification by making more large-scale changes possible.',
    },
    {
        subtitle: 'Instant results',
        description: 'Sourcegraph enabled HashiCorp to quickly identify and remove deprecated code.',
    },
]

export const CaseStudy: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'HashiCorp streamlines cross-repository code search and fixes with Sourcegraph',
            description:
                'HashiCorp case study. Learn how Hashicorp uses Sourcegraph to speed up large refactors by an estimated 4x and proactively eliminate unused code and technical debt.',
        }}
        hero={
            <Hero
                backButton={{
                    text: 'Case Studies',
                    link: '/case-studies',
                }}
                variant="venusCode"
                title={'HashiCorp streamlines \n cross-repository code search \n and fixes with Sourcegraph'}
                displayUnderNav={true}
            />
        }
    >
        <NewCaseStudyLayout customer="HashiCorp">
            <ContentSection background="white" slimWidth={true}>
                <div className="tw-mx-auto">
                    <Blockquote
                        quote="By its nature and capabilities, Sourcegraph can be a tool to reduce friction, speed up feedback loops, and improve developer velocity."
                        author="Bryce Kalow, Senior Web Engineer, HashiCorp"
                        logo={{
                            src: '/external-logos/hashicorp-logo.svg',
                            alt: 'HashiCorp',
                            href: 'https://www.hashicorp.com/',
                        }}
                        border={false}
                        largeText={true}
                    />
                </div>
            </ContentSection>

            <ContentSection>
                <UseChallengeSolutionResults
                    useCases={[{ text: 'Streamline code reuse', href: '/use-cases/code-reuse' }]}
                    challenges={[
                        {
                            text: 'Excessive time and effort spent manually searching for code across multiple repositories',
                        },
                        {
                            text: 'Lack of confidence in the complete, consistent rollout of updates across all apps, leading to the possibility of dependency drift',
                        },
                        {
                            text: 'Reluctance to address tech debt due to lack of efficient search capabilities',
                        },
                    ]}
                    solutions={[
                        {
                            text: 'Code Search simplifies and shortens cross-repository search, including pinpointing tech debt',
                            href: '/code-search',
                        },
                        {
                            text: 'Batch Changes provides a fast, automated, and repeatable process for rolling out updates',
                            href: '/batch-changes',
                        },
                    ]}
                    results={[
                        {
                            text: 'Code search enabled the team to map and manage dependencies across multiple teams and codebases.',
                        },
                        {
                            text: 'Batch Changes sped up big refactors by an estimated 4x and combatted code ossification by making more large-scale changes possible.',
                        },
                        {
                            text: 'Sourcegraph capabilities and insights encouraged the team to proactively eliminate unused code and technical debt.',
                        },
                        {
                            text: 'The Sourcegraph API helped drive adoption of a new component library.',
                        },
                    ]}
                />
            </ContentSection>

            <ContentSection background="white" slimWidth={true}>
                <div className="tw-mx-auto tw-pt-5xl">
                    <p className="tw-pt-3xl sm:tw-pt-5xl sm:tw-mt-0 tw-mt-5xl">
                        Every day, millions of developers and DevOps engineers rely on HashiCorp to efficiently
                        provision, manage, and secure their cloud infrastructure.{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://hashicorp.com"
                            title="HashiCorp"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            HashiCorp
                        </a>{' '}
                        is a company that has brought best-in-class developer experience to infrastructure teams through
                        its portfolio of tools which includes HashiCorp{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://terraform.io"
                            title="Terraform"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Terraform
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://vaultproject.io"
                            title="Vault"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Vault
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://nomadproject.io"
                            title="Nomad"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Nomad
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://consul.io"
                            title="Consul"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Consul
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://packer.io"
                            title="Packer"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Packer
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://boundaryproject.io"
                            title="Boundary"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Boundary
                        </a>
                        ,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://waypointproject.io"
                            title="Waypoint"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Waypoint
                        </a>
                        , and{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://vagrantup.com"
                            title="Vagrant"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Vagrant
                        </a>
                        , which together form a platform for automating cloud infrastructure. Just as HashiCorp
                        prioritizes developer experience for its users and customers, the internal developer experience
                        at HashiCorp enables it to produce industry-shifting tools.
                    </p>
                    <p>
                        Sourcegraph enables HashiCorp's engineering team to sustain its pace of innovation as the team
                        and codebase grow. Bryce Kalow, Senior Web Engineer and tech lead of the Web Platform team,
                        recalls four specific areas where Sourcegraph has helped his team:
                    </p>
                    <ol>
                        <li>Mapping and managing dependencies across multiple teams and codebases</li>
                        <li>
                            Speeding up big refactors by an estimated 4x and combating code ossification by making more
                            large-scale changes possible
                        </li>
                        <li>Eliminating unused code and technical debt</li>
                        <li>Driving adoption of a new component library</li>
                    </ol>
                    <h3 className="mt-6 mb-4 max-w-600">
                        HashiCorp saves time managing dependencies across multiple web properties
                    </h3>
                    <p>
                        Since the initial release of its first open-source dev tool,{' '}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://vagrantup.com"
                            title="Vagrant"
                            data-button-style={buttonStyle.text}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Vagrant
                        </a>
                        , HashiCorp has grown its product suite into a rich, integrated toolkit that covers nearly every
                        area of infrastructure management, from resource provisioning to container orchestration to
                        secrets management. As the product suite has expanded, so have its codebases. Prior to
                        Sourcegraph, it was difficult and time-consuming to manage and track dependencies across the
                        company’s websites.
                    </p>
                    <p>
                        According to Bryce, “Previously, searching repositories was a time-consuming, manual, and
                        repetitive process. If the team was trying to find, say, the version of a specific dependency,
                        like an npm package, it could take an hour or more to repeat that process across multiple
                        repositories. Now, with Sourcegraph, we just do a search query, find the dependency within a
                        minute, and can see that a particular version is used in these places across these different
                        repositories."
                    </p>
                    <p>
                        He adds, “Using Sourcegraph has resulted in some significant changes to the way we work at
                        HashiCorp.” Previously, changes would first require a lot of manual effort to build a mental
                        model of the adjacent parts of code that the author was unfamiliar with. Due to friction points,
                        developers often wouldn't acquire as thorough an understanding of the existing code as they
                        might like, which often meant late-cycle realizations and wasteful rework.
                    </p>
                    <p>
                        “With Sourcegraph, it's easier and less aggravating to grok the existing code, so you end up
                        getting a better understanding of it early, which saves a lot of time,” Bryce says. “All this
                        means we have more time to focus on useful work, like building a new component library.”
                    </p>

                    <h3 className="mt-6 mb-4">Web team accelerates developer velocity by an estimated 4X</h3>
                    <p>
                        Bryce’s team maintains a dozen different websites spread across different repositories. These
                        sites include hashicorp.com and each product’s reference documentation site. A major pain point
                        was making changes to core components and rolling them out. “Oftentimes some sites would be
                        missed, leading to UI inconsistencies and dependency drift across our apps.”
                    </p>
                    <p>
                        The task of keeping dependencies uniformly up to date was manual and mundane, a form of toil
                        that sucked up valuable engineering time that could be better spent on truly creative endeavors.
                    </p>
                    <p>
                        Today, the team uses Sourcegraph Batch Changes to automate such large-scale code changes. “Batch
                        Changes provides a very repeatable process to go into each app and, for example, run ‘npm
                        install’ or ‘npm upgrade’ and whatever additional updates need to be made to upgrade the
                        dependency. You wire up Batch Changes. You roll it out. It’s that simple, and it’s been really
                        great.”
                    </p>
                    <p>
                        In addition to dependency updates, another Batch Changes use case involves updating the alert
                        banners that HashiCorp uses on its websites to announce new features and releases. The alert
                        banner is configured by a static JSON file. Bryce notes, “Before Sourcegraph, when it was time
                        to change that banner, we had to tediously repeat the same process across all the properties.
                        Batch Changes allows us to automate these and other menial tasks, which saves us a lot of time.
                        Plus, when we have to do it again, we just update the content in Batch Changes and rerun it.”
                    </p>
                    <p>
                        Instead of one to two days to get a change rolled out, reviewed, and merged, Batch Changes cuts
                        that timeline to a few hours. Bryce estimates that Sourcegraph accelerates developer velocity
                        for changes impacting all apps by a factor of four.
                    </p>

                    <div className="tw-py-5xl">
                        <Blockquote
                            quote="Folks always want to address tech debt but rarely can make time for it. Sourcegraph gives us the ability to not just find tech debt, but really pinpoint it and then make it clear where it exists and how to address it at a high level."
                            author="Bryce Kalow, Senior Web Engineer, HashiCorp"
                            largeText={true}
                        />
                    </div>

                    <h3 className="mb-4">Visibility into code usage reduces technical debt</h3>
                    <p>
                        Like virtually all engineering organizations, HashiCorp’s Web Platform team fights a continual
                        battle with tech debt. According to Bryce, Sourcegraph was “transformative,” allowing the team
                        to determine instantly where deprecated code was still being used or referenced. Without
                        Sourcegraph, the only way to do this was to manually search through multiple repositories, which
                        took so long that the effort was rarely made. As a result, tech debt accrued unchecked over time
                        until it became a drag on the overall development process, akin to the "frog in boiling water"
                        effect.
                    </p>
                    <p>
                        With Sourcegraph, the team can complete large refactors and make sure every instance of a
                        pattern is updated. They can also check if a function or API is used infrequently or not at all,
                        helping to reduce the total size of the codebase while maintaining the same functionality.
                    </p>
                    <p>
                        “Folks always want to address tech debt but rarely can make time for it,” Bryce says. “The
                        capabilities and insights that Sourcegraph gives us make it much easier to track things like
                        deprecated APIs. With an approachable process, people are more inclined to fix outdated or
                        unused code. Equally important, Sourcegraph gives us the ability to not just find tech debt, but
                        really pinpoint it and then make it clear where it exists and how to address it at a high
                        level.”
                    </p>

                    <h3 className="mt-6 mb-4">Creating a new component library</h3>
                    <p>
                        The Web Platform team is building an open-source component library for Next.js called Swingset.
                        Bryce explains, “Our applications are already using Swingset. It enables us to document our
                        components and, through the Sourcegraph API, track usage of these components. We're using the
                        Sourcegraph API to pull usage data and present it in the component library UI. This way, we can
                        see when an application is running on an older version of a component and address that.”
                    </p>
                    <p>
                        He concludes, “Just as HashiCorp enables repeatable workflows and reduces toil when working with
                        infrastructure as code, Sourcegraph enables repeatable refactors and eliminates manual effort in
                        understanding source code. It blends in nicely with the way we ideally like to operate, as well
                        as with our philosophy and principles around enabling developer productivity.”
                    </p>
                </div>
            </ContentSection>

            <ContentSection parentClassName="sg-bg-gradient-saturn">
                <ThreeUpText items={threeUpTextItems} />
            </ContentSection>

            <ContentSection background="white">
                <div className="tw-max-w-4xl tw-mx-auto">
                    <StaffSpotlight
                        customer="HashiCorp"
                        about={
                            <>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://hashicorp.com"
                                    title="HashiCorp"
                                    data-button-style={buttonStyle.text}
                                    data-button-location={buttonLocation.body}
                                    data-button-type="cta"
                                >
                                    HashiCorp
                                </a>{' '}
                                (NASDAQ: HCP) is a provider of open-core software that developers use to manage cloud
                                infrastructure. Based in San Francisco, Calif., the company offers solutions including
                                Terraform, an infrastructure-as-code tool for managing cloud services, and Vault, a tool
                                for securing, storing, and controlling access to tokens, passwords, and API keys.
                                HashiCorp’s tools are downloaded tens of millions of times each year and are broadly
                                adopted by the Global 2000.
                            </>
                        }
                        staff={[
                            {
                                image: '/case-studies/bryce-kalow.png',
                                name: 'Bryce Kalow',
                                title: 'Senior Web Engineer and Tech Lead; Web Platform Team at HashiCorp',
                            },
                        ]}
                    />
                </div>
            </ContentSection>
        </NewCaseStudyLayout>
    </Layout>
)

export default CaseStudy
