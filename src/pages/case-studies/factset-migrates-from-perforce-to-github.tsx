import { FunctionComponent } from 'react'

import { Layout, CaseStudyLayout, ContentSection, Blockquote } from '../../components'

export const CaseStudy: FunctionComponent = () => {
    const derrickFaunce = 'Derrick Faunce, Associate Director of Developer Services'

    return (
        <Layout
            meta={{
                title: 'FactSet migrates from Perforce to GitHub',
                description:
                    'FactSet case study. Learn how FactSet uses Sourcegraph after migrating from Perforce to GitHub.',
            }}
            className="navbar-dark tw-bg-black"
        >
            <CaseStudyLayout
                customer="FactSet"
                title="FactSet migrates from Perforce to GitHub"
                logo="/external-logos/factset-logo.svg"
                quote={{
                    text: 'With Sourcegraph, we were able to make a smooth transition from Perforce to GitHub.',
                    author: derrickFaunce,
                    image: '/case-studies/derrick-faunce.png',
                }}
            >
                <ContentSection background="white" slimWidth={true}>
                    <div className="row">
                        <div className="col">
                            <h3 className="tw-pb-1">Before Sourcegraph</h3>
                            <ul>
                                <li>
                                    Inability to search across repositories after monolith to microservices migration
                                </li>
                                <li>Lack of understanding of existing code led to unnecessary or redundant code</li>
                                <li>Difficult to ensure consistency across the organization</li>
                            </ul>

                            <h3 className="tw-pt-md tw-pb-1">After Sourcegraph</h3>
                            <ul>
                                <li>
                                    Able to search all code in any language, including C++, across all 12,000+
                                    repositories
                                </li>
                                <li>Eliminated duplicative efforts across the engineering team</li>
                                <li>Able to find and reuse examples from codebase for increased consistency</li>
                            </ul>
                        </div>

                        <div className="col">
                            <table>
                                <tbody>
                                    <tr>
                                        <th className="bg-light">Languages</th>
                                        <td>C++, Javascript, and Python</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Developers</th>
                                        <td>500+</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Code Host</th>
                                        <td>GitHub</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light"># Repos</th>
                                        <td>12,000</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-light">Extensions</th>
                                        <td>Lightstep, VS Code, Code Ownership</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <Blockquote
                        quote="With Sourcegraph, we were able to make a smooth transition from Perforce to GitHub."
                        author={derrickFaunce}
                    />

                    <h2 className="tw-pt-md tw-pb-1">Migrating from monolith to microservices</h2>
                    <p>
                        In 2019, FactSet's engineering team started a huge code migration project to transition from a
                        monolithic code repository in Perforce to microservices in GitHub. Part of the reason for
                        migrating involved recruiting and onboarding—new developers often hadn't even heard of Perforce
                        and didn't know how to use it. In addition, moving to a git-based system had technical benefits
                        for FactSet, including increased code stability, fewer failed deployments and broken builds, and
                        a more agile, incremental approach to software engineering.
                    </p>

                    <p>
                        The developer services team spearheaded the transition to GitHub and met weekly with developers
                        to provide updates and address issues. Soon after migrating the first 20+ repositories, the team
                        responsible for FactSet's market data platform, which ingests a huge amount of data from
                        different stock exchanges, brought a major problem to their attention: the team could no longer
                        search the code.
                    </p>

                    <p>
                        The market data application is structured with approximately 100 different children classes of
                        the same templates, repeated over and over. That structure is part of why the team relies so
                        heavily on code search, just to see exactly which instance of a class is being called and what
                        it is doing.
                    </p>

                    <p>
                        “Mid-migration, it became very clear that we had to find an efficient way to search code.
                        Thankfully, we discovered Sourcegraph,” said Derrick Faunce, Associate Director of Developer
                        Services at FactSet.
                    </p>

                    <h2 className="tw-pt-md tw-pb-1">Expanding throughout the organization</h2>
                    <p>
                        Initially, the developer services team deployed Sourcegraph to the engineers responsible for the
                        real-time news and quotes engine. But after receiving positive feedback, the team gave another
                        200+ developers access to Sourcegraph. A month later, they surveyed Sourcegraph users to see how
                        engaged they were with the product.
                    </p>

                    <p>
                        “The responses were heavily biased towards, ‘I'm using this every day, or even multiple times in
                        any given day,'” Faunce said. Now, over 500 FactSet developers use Sourcegraph.
                    </p>

                    <Blockquote
                        quote="For developers, Sourcegraph is a must-have tool一we need it at arm's length at all times."
                        author={derrickFaunce}
                    />

                    <p>
                        For a large, fast-paced organization like FactSet, code search capabilities are essential to
                        ensuring consistency as well as eliminating duplicative efforts.
                    </p>

                    <p>
                        “If I'm developing code for a library that might draw charts, for example, we don't want 30
                        different ways to draw a chart at FactSet. With Sourcegraph, I can search the code to find other
                        chart examples, and simply copy the code. This saves us time and ensures consistency.”
                    </p>

                    <p>
                        “Being able to have code exploration is a base requirement of efficient development,” said
                        Joseph Majesky, Software Engineer at FactSet.” Majesky was one of the developers who discovered
                        Sourcegraph during the transition from Perforce to GitHub.
                    </p>

                    <br />
                </ContentSection>
            </CaseStudyLayout>
        </Layout>
    )
}

export default CaseStudy
