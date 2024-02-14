import { NextPage } from 'next'
import Link from 'next/link'

import { BackButton, Heading, Layout } from '../../components'
import SidebarCta from '../../components/Resources/SidebarCta'

const CodySecurityAndLegal: NextPage = () => {
    const meta = {
        title: 'Cody Security and Legal Whitepaper',
        // image,
        description:
            "This whitepaper covers the critical aspects of Cody's integration into enterprise environments, including security and legal considerations. Each section covers the current state, future state, and key discussion topics.",
        externalTitle: 'Cody Security and Legal Whitepaper',
        externalDescription:
            "This whitepaper covers the critical aspects of Cody's integration into enterprise environments, including security and legal considerations. Each section covers the current state, future state, and key discussion topics.",
        canonical: 'https://sourcegraph.com/whitepapers/cody-security-and-legal',
    }

    return (
        <Layout meta={meta}>
            <article className="mx-auto mb-xl max-w-screen-xl px-sm">
                <div className="container mx-auto pt-20 sm:pl-0">
                    <BackButton href="/resources" text="Resources" />
                </div>

                {/* <BlogHeader {...blogInfo} variant="post" />
                <PostTemplate post={post} content={content} className="mx-auto max-w-[840px]" /> */}
                <div className="mt-12">
                    <Heading as="h1" size="h1" className="!font-grotesk">
                        Cody Security and Legal Whitepaper
                    </Heading>
                </div>

                <div className="mt-14 flex flex-col gap-10 md:flex-row">
                    <div className="prose max-w-[80ch] prose-h2:font-semibold prose-a:text-violet-500 prose-a:no-underline hover:prose-a:text-violet-400 hover:prose-a:underline prose-ol:ml-0 prose-ul:ml-0 lg:prose-lg">
                        <p>This document was last updated on February 14, 2024, and covers Cody Enterprise.</p>
                        <p>
                            Sourcegraph Cody ("Cody") is a state-of-the-art AI coding assistant designed to help
                            software developers by answering code questions and generating code. Cody uses Large
                            Language Models (LLMs), Sourcegraph search, and Sourcegraph code intelligence to provide
                            accurate and context-specific results to developers, streamlining their workflow, reducing
                            the time spent on repetitive tasks, and improving the quality and consistency of their work.
                        </p>
                        <p>
                            Cody can be enabled on an organization’s Sourcegraph instance. Once Cody is turned on in a
                            Sourcegraph instance, any user can configure and use the Cody VS Code or JetBrains extension
                            - this does not require admin privilege.
                        </p>
                        <p>
                            This whitepaper covers the critical aspects of Cody's integration into enterprise
                            environments, including security and legal considerations. Each section covers the current
                            state, future state, and key discussion topics.
                        </p>
                        <p>
                            For information related to Cody features, usage, and administration, see the{' '}
                            <Link href="/cody">Cody product page</Link>
                            and <Link href="/cody/docs">Cody documentation</Link>. For general information about
                            Sourcegraph security, including our SOC 2 report, visit the{' '}
                            <Link href="https://security.sourcegraph.com">Sourcegraph security portal</Link>.
                        </p>
                        <h2>Architecture and data flow</h2>
                        <p>
                            Developers use Cody in the editor and in their organization's Sourcegraph instance's web
                            application. When developers use Cody, Cody communicates with the organization's Sourcegraph
                            instance and with a Large Language Model (LLM) API to return information to the user.
                        </p>
                        <h3>Components</h3>
                        <p>Cody currently consists of 3 components:</p>
                        <ul>
                            <li>Cody client</li>
                            <li>Sourcegraph instance</li>
                            <li>Large Language Model (LLM) API</li>
                        </ul>
                        <h4>Cody client</h4>
                        <p>
                            The Cody client is the application used by the user to interact with Cody, such as the Cody
                            VS Code extension or certain parts of the Sourcegraph web application.
                        </p>
                        <h4>Sourcegraph instance</h4>
                        <p>
                            The Sourcegraph instance is an organization's Sourcegraph Enterprise server, deployed either
                            self-hosted within the organization's network or in a dedicated single-tenant Sourcegraph
                            Cloud environment.
                        </p>
                        <h4>Large Language Model (LLM) API</h4>
                        <p>
                            The Large Language Model (LLM) is the model that accepts prompts and returns completions,
                            consisting of an answer or generated code. Cody currently offers multiple LLM options from
                            different providers, with Anthropic's Claude as the default LLM.
                        </p>
                        <h3>Data flow</h3>
                        <p>There is one main data flow type, interactive usage.</p>
                        <h4>Interactive usage</h4>
                        <p>
                            Interactive usage is when a user types a message to Cody or otherwise performs an explicit
                            action in their editor (such as "Ask Cody &gt; …") that types a message to Cody on their
                            behalf.
                        </p>
                        <h5>Components involved</h5>
                        <ul>
                            <li>Cody client</li>
                            <li>Sourcegraph instance (code context and completions API endpoints)</li>
                            <li>LLM API (completions API endpoint)</li>
                        </ul>
                        <h5>Data involved</h5>
                        <ul>
                            <li>User query</li>
                            <li>Code context (code and text file contents and other metadata)</li>
                            <li>Request header data (authentication and user identity)</li>
                        </ul>
                        <h5>Data retained</h5>
                        <ul>
                            <li>
                                Audit logs of user events are retained on the Sourcegraph instance and any external
                                logging destinations, according to the Sourcegraph site configuration.
                            </li>
                            <li>
                                No data (neither LLM inputs nor outputs) is retained by the LLM API or Embeddings
                                Service.
                            </li>
                        </ul>
                        <h5>Process</h5>
                        <ol>
                            <li>
                                To respond to a user request, the Cody client communicates with the Sourcegraph
                                instance's code context API to fetch code context that is relevant to the query.
                            </li>
                        </ol>
                        <ol>
                            <li>
                                For example, if the user asks Cody "What is the `foo` API?", the code context would
                                include files that the Sourcegraph instance determines are relevant to `foo`.
                            </li>
                            <li>
                                Permissions are enforced by Sourcegraph, so that users may only query in repositories or
                                receive file contents that their user account is permitted to view on the Sourcegraph
                                instance.
                            </li>
                        </ol>
                        <ol>
                            <li>The Cody client concatenates the user request and the code context into the prompt.</li>
                        </ol>
                        <ol>
                            <li>
                                For example, if the user asks Cody "What is the `foo` API?" and a single file `foo.java`
                                is deemed relevant to the query, the prompt would resemble the following simplified
                                example: "&lt;contents of foo.java&gt;\n\nWhat is the `foo` API?".
                            </li>
                        </ol>
                        <ol>
                            <li>The Cody client sends the prompt to the Sourcegraph instance's completions API.</li>
                            <li>
                                The Sourcegraph instance's completions API forwards the prompt to the LLM's completions
                                API.
                            </li>
                            <li>
                                The LLM's completions API returns completions to the Sourcegraph instance, which passes
                                it back to the Cody client.
                            </li>
                        </ol>
                        <h2>Data security, retention, and compliance</h2>
                        <p>
                            Cody is part of our Sourcegraph AI Platform, which holds a SOC 2 Type 2 attestation report.
                            When Cody is enabled and used, there are 3 components that interact with sensitive data:
                        </p>
                        <ul>
                            <li>Cody client</li>
                            <li>Sourcegraph instance</li>
                            <li>Large Language Model (LLM) API</li>
                        </ul>
                        <p>
                            Data security, retention, and compliance are discussed in the context of each component in
                            the following sections.
                        </p>
                        <h3>Cody client</h3>
                        <p>
                            The Cody client is the application used by the user to interact with Cody, such as the Cody
                            VS Code extension or certain parts of the Sourcegraph web application. This section only
                            refers to official Sourcegraph Cody clients, not any current or future unofficial clients.
                        </p>
                        <p>
                            All Cody clients respect the repository permissions configured on the Sourcegraph instance.
                            Cody never uses any information from unauthorized repositories to respond to a user. In some
                            cases, due to fundamental limitations of LLMs, Cody may falsely claim to have knowledge of
                            repositories that the user is not permitted to view. For example, if the user asks Cody
                            "What does &lt;secret repository&gt; do?" (where "&lt;secret repository&gt;" is a repository
                            that the user is not permitted to view), Cody may respond with a false but
                            confident-sounding response ("hallucination") that is not based on any actual knowledge of
                            the unauthorized information and thus does not present a security risk. Users can confirm
                            that Cody did not, in fact, access the claimed unauthorized repositories by viewing the list
                            of code context (if any) that Cody actually consulted in the Cody UI.
                        </p>
                        <p>
                            When using Cody via the VS Code extension, JetBrains extension, and the Sourcegraph web
                            application:
                        </p>
                        <ul>
                            <li>
                                The transcript of user-Cody interactions is stored in memory only and is not persisted.
                            </li>
                            <li>
                                The VS Code extension requires the user to specify the following in VS Code user or
                                workspace settings: the Sourcegraph URL, the name of the repositories to consult, and
                                other non-sensitive user preferences.
                            </li>
                            <li>
                                The VS Code extension stores the user's Sourcegraph access token in the VS Code secrets
                                store, which uses the operating system's standard secure keychain for secret storage.
                            </li>
                            <li>No other data is stored or retained on the client.</li>
                        </ul>
                        <h3>Sourcegraph instance</h3>
                        <p>
                            The Sourcegraph instance is an organization's Sourcegraph Enterprise server, either deployed
                            self-hosted within the organization's network or in a dedicated single-tenant Sourcegraph
                            Cloud environment. A user's Cody client accesses the Sourcegraph instance using an access
                            token, which the user generates on the Sourcegraph web application in their user settings
                            area. Administrators may view, audit, and revoke user access tokens at any time.
                        </p>
                        <p>
                            The Sourcegraph instance records audit logs of user interactions with Cody if the
                            administrator has enabled audit logs in the site configuration. These audit logs may reside
                            on the Sourcegraph instance and/or may be sent to a custom log destination if you integrate
                            your cluster with external log forwarders.
                        </p>
                        <p>
                            No other data is stored or retained on the Sourcegraph instance as a result of Cody usage.
                        </p>
                        <h3>Large Language Model (LLM) API</h3>
                        <p>
                            The Large Language Model (LLM) API accepts prompts and returns completions, consisting of an
                            answer or generated code.
                        </p>
                        <p>
                            Cody currently uses Anthropic's Claude as the default LLM. Cody sends requests from the
                            Sourcegraph instance to Anthropic's API, which resides at{' '}
                            <Link href="https://api.anthropic.com">https://api.anthropic.com</Link>. To reduce the risk
                            of data leakage and compliance concerns, Cody Enterprise offers:
                        </p>
                        <ul>
                            <li>
                                Zero data retention: Prompts (inputs) and results (outputs) are not retained or stored
                                by Anthropic. Prompts are only processed for the duration needed to return the results
                                and are permanently removed afterward.
                            </li>
                            <li>
                                No other data sharing: Prompts and results are not shared with any other third parties
                                for any purpose at any time.
                            </li>
                            <li>
                                No training based on your data: Prompts and results are not used to customize or train
                                Anthropic's models.
                            </li>
                            <li>
                                No PII: Anthropic does not receive any personally identifying information in the request
                                headers or metadata about the end user.
                            </li>
                        </ul>
                        <p>
                            These guarantees are currently stronger than those from any other vendor's competitive
                            offering.
                        </p>
                        <p>
                            If an administrator explicitly configures the Sourcegraph instance to use a different LLM
                            API (such as OpenAI or a self-hosted API-compatible LLM), w.we are unable to provide
                            assurances regarding data security by default. As part of our ‘Bring Your Own LLM’ feature,
                            agreements regarding data security would need to be negotiated on an individual basis with
                            the LLM provider.
                        </p>
                        <h2>Model provenance</h2>
                        <p>
                            Today's leading Large Language Models (LLMs), such as Anthropic Claude (the default LLM for
                            Cody) and OpenAI GPT-4, are trained using a diverse range of publicly available data. This
                            is an industry-standard approach to training AI models, which ensures that the model is
                            well-equipped to handle a wide variety of tasks and domains. However, there may be cases
                            where the LLM inadvertently generates code that is similar to code found in its training
                            data.
                        </p>
                        <p>
                            To mitigate this risk, Sourcegraph offers indemnification to enterprise customers for
                            intellectual property infringement caused by Cody. We are also working on developing tooling
                            for identifying potentially copied code. This will provide customers with the confidence
                            that the generated code complies with legal requirements and reduces the likelihood of
                            intellectual property infringement.
                        </p>
                        <p>
                            By continuously improving and refining our models and tools, we aim to provide a safe and
                            reliable coding assistant to software developers, while also respecting the intellectual
                            property rights of others in the industry.
                        </p>
                        <h2>Discussion topics</h2>
                        <p>
                            We are evaluating the following future improvements to Cody related to security and legal
                            requirements. Please discuss your organization's specific needs with us to get more
                            information about these possible future improvements.
                        </p>
                        <ul>
                            <li>Expanded support for self-hosted LLMs</li>
                            <li>Support for more LLM APIs</li>
                            <li>Ability to train and fine-tune models on custom datasets of code and documentation</li>
                            <li>Model provenance</li>
                            <li>Enforcement of coding standards and criteria in generated code</li>
                            <li>Insecure code detection (in generated code and existing code)</li>
                            <li>
                                Tracking when developers insert Cody suggestions into the codebase (with transcripts,
                                history, etc.)
                            </li>
                            <li>
                                Fine-grained restrictions on Cody usage on certain repositories, paths, file categories,
                                users, etc.
                            </li>
                            <li>
                                Filtering system for suggestions to omit insecure code, and fake-but-realistic-looking
                                PII
                            </li>
                        </ul>
                    </div>
                    <div className="flex-shrink">
                        <div className="sticky top-36">
                            <SidebarCta />
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    )
}

export default CodySecurityAndLegal
