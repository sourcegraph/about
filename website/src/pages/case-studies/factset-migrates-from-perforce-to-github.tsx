import * as React from 'react'
import { CaseStudyPage, InContentBlockquote, CaseStudyRequestDemoForm } from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

const derrickFaunce = 'Derrick Faunce, Associate Director of Developer Services'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'FactSet migrates from Perforce to GitHub',
            description:
                'FactSet provides financial data and software solutions for over 100,000 investment professionals around the world.',
            image: 'https://about.sourcegraph.com/sourcegraph-og.png',
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyPage
            customer="FactSet"
            title="FactSet migrates from Perforce to GitHub"
            logo="/external-logos/factset-logo.svg"
            quote={{
                quote: '',
                author: derrickFaunce,
                image: '/case-studies/',
            }}
        >
            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Languages</td>
                                    <td>C++, Javascript, and Python</td>
                                </tr>
                                <tr>
                                    <td>Developers</td>
                                    <td>500+</td>
                                </tr>
                                <tr>
                                    <td>Code Host</td>
                                    <td>Migration to GitHub</td>
                                </tr>
                                <tr>
                                    <td># Repos</td>
                                    <td>12,000</td>
                                </tr>
                                <tr>
                                    <td>Extensions (other tools)</td>
                                    <td>Lightstep, VS Code, Code Ownership</td>
                                </tr>
                            </tbody>
                        </table>
                    </p>

                    <h3 className="pt-5 pb-1">Before Sourcegraph</h3>
                    <ul>
                        <li>Inability to search across repositories after monolith to microservices migration</li>
                        <li>Lack of understanding of existing code led to unnecessary or redundant code</li>
                        <li>Difficult to ensure consistency across the organization</li>
                    </ul>

                    <h3 className="pt-5 pb-1">After Sourcegraph</h3>
                    <ul>
                        <li>Able to search all code in any language, including C++, across all 12,000+ repositories</li>
                        <li>Eliminated duplicative efforts across the engineering team</li>
                        <li>Able to find and reuse examples from codebase for increased consistency</li>
                    </ul>

                    <InContentBlockquote
                        quote="With Sourcegraph, we were able to make a smooth transition from Perforce to GitHub."
                        author={derrickFaunce}
                    />

                    <p>
                        FactSet provides financial data and software solutions for over 100,000 investment professionals
                        around the world.
                    </p>

                    <h2 className="pt-5 pb-1">Migrating from monolith to microservices</h2>
                    <p>
                        In 2019, FactSet’s engineering team started a huge code migration project to transition from a
                        monolithic code repository in Perforce to microservices in GitHub. Part of the reason for
                        migrating involved recruiting and onboarding—new developers often hadn’t even heard of Perforce
                        and didn’t know how to use it. In addition, moving to a git-based system had technical benefits
                        for FactSet, including increased code stability, fewer failed deployments and broken builds, and
                        a more agile, incremental approach to software engineering.
                    </p>

                    <p>
                        The developer services team spearheaded the transition to GitHub and met weekly with developers
                        to provide updates and address issues. Soon after migrating the first 20+ repositories, the team
                        responsible for FactSet’s market data platform, which ingests a huge amount of data from
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

                    <h2 className="pt-5 pb-1">Expanding throughout the organization</h2>
                    <p>
                        Initially, the developer services team deployed Sourcegraph to the engineers responsible for the
                        real-time news and quotes engine. But after receiving positive feedback, the team gave another
                        200+ developers access to Sourcegraph. A month later, they surveyed Sourcegraph users to see how
                        engaged they were with the product.
                    </p>

                    <p>
                        “The responses were heavily biased towards, ‘I’m using this every day, or even multiple times in
                        any given day,’” Faunce said. Now, over 500 FactSet developers use Sourcegraph.
                    </p>

                    <p className="font-weight-bold">
                        “For developers, Sourcegraph is a must-have tool一we need it at arm’s length at all times.” -
                        Derrick Faunce, Associate Director of Developer Services, at FactSet
                    </p>

                    <p>
                        For a large, fast-paced organization like FactSet, code search capabilities are essential to
                        ensuring consistency as well as eliminating duplicative efforts.
                    </p>

                    <p>
                        “If I’m developing code for a library that might draw charts, for example, we don’t want 30
                        different ways to draw a chart at FactSet. With Sourcegraph, I can search the code to find other
                        chart examples, and simply copy the code. This saves us time and ensures consistency.”
                    </p>

                    <p>
                        “Being able to have code exploration is a base requirement of efficient development,” said
                        Joseph Majesky, Software Engineer at FactSet.” Majesky was one of the developers who discovered
                        Sourcegraph during the transition from Perforce to GitHub.
                    </p>

                    <br />
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm demoFormURL="/contact/request-batch-changes-demo" />
    </Layout>
)) as React.FunctionComponent<any>
