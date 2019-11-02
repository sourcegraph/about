import * as React from 'react'
import {
    CaseStudyPage,
    InContentBlockquote,
    MediaQuote,
    CaseStudyRequestDemoForm,
} from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'
import { Link } from 'gatsby'

export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title:
                'How Sourcegraph ensured production stability at Lyft during their monolith to microservices decomposition',
            description:
                'Learn how Sourcegraph code search helped Lyft ensured (largely) issue free production deploys during their monolith to microservices decomposition',
            image:
                "/case-studies/lyft-sourcegraph-case-study-og-embed.jpg', // TODO: Change to absolute URL prior to merging",
        }}
    >
        <CaseStudyPage
            customer="Lyft"
            title="How Sourcegraph ensured production stability at Lyft during their monolith to microservices decomposition"
            // OTHER TITLES
            // How Sourcegraph helped ensure production stability during the monolith to microservices decomposition
            // Monolith to microservices decomposition and how code search helped ensure production stability
            // How Sourcegraph ensured production stability at Lyft during their monolith to microservices decomposition
            // Ensuring production stability at Lyft during their monolith to microservices decomposition
            logo="/case-studies/lyft-logo.png"
            quote={{
                quote: "Sourcegraph code search helped ensure production stability throughout the monolith to microservices decomposition by verifying applications were no longer pointing at the monolith version of a service.",
                author: "Justin Phillips, Software Engineer, Lyft",
                image: "/case-studies/justin-phillips-lyft-square.jpg"
            }}
        >

            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        Lyft's mission is to improve people's lives with the world's best transportation. With over 30
                        million riders in 2018, Lyft's business is growing, as is the number of engineers, repositories,
                        and microservices. Effectively scaling and managing a large engineering organization requires an
                        elite set of development tools and practices to preserve efficiency, while protecting, and
                        enhancing code quality.
                    </p>

                    <InContentBlockquote
                        quote="Decomposition or migrating a service is a high risk endeavor, often involving changes in
hundreds of repositories, so a high level of accuracy is needed."
                        author="Justin Phillips, Software Engineer, Lyft"
                    />

                    <p>
                        Learn how Lyft used Sourcegraph code search to provide a company wide verification stage to
                        confirm all call sites to previous monolith code had been updated before deploying to
                        production.
                    </p>

                    <h2 className="pt-5 pb-1">From monolith to microservices</h2>

                    <p>
                        The largest refactoring effort in Lyft's 10 year history came in 2018 when the number one
                        company priority was the decomposition of the PHP monolith to microservices.
                    </p>

                    <p>
                        Performing such significant and wide-ranging code changes meant extensive analysis was required
                        to verify all call sites and references to the monolith has been updated. This meant
                        transforming monolioth code to consuming the new microservice API endpoints, which in many
                        cases, meant altering the API schema.
                    </p>

                    <InContentBlockquote
                        quote="Sourcegraph code search helped ensure production stability throughout the monolith to microservices decomposition by verifying applications were no longer pointing at the monolith version of a service."
                        author="Justin Phillips, Software Engineer"
                    />

                    {/*This case study demonstrates how Lyft used Sourcegraph code search to aid in the decomposition of their 10 year old PHP monolith to microservices.*/}

                    <p>
                        This wasn't simply slicing up the monolith by domain into separate services—it was also a
                        crucial opportunity to eliminate tech debt by removing dead code, deprecated libraries, and
                        unused API and database fields.
                    </p>

                    <InContentBlockquote
                        quote="During our decomp efforts we also spent time to refactor our APIs. Many of these apis were undocumented and lacked a formalized contract.
                    <br/><br/>
                    With the help of Sourcegraph, we were able to quickly look at all clients of an api and remove unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding up developer iteration time."
                        author="Justin Phillips, Software Engineer"
                    />

                    <h2 className="pt-5 pb-1">
                        The refactoring and the decomposition of legacy applications is constant
                    </h2>

                    <p>
                        With the confidence gained from the successful PHP monolith decomposition, new projects are
                        underway to reduce tech debt by more aggressively tackling migrations and the deprecation of
                        systems.
                    </p>

                    <InContentBlockquote
                        quote="Lyft teams are constantly innovating and building new systems, necessitating decomping and migrating off of older ones. Sourcegraph gives us the ability to search for & refactor references to deprecated services, libraries, URL patterns, and more across our 2k+ repositories, and the confidence that we're not leaving anyone behind.
                        <br/><br/>
                        Even before new systems are built, Sourcegraph makes it easy to survey & understand existing use cases to make sure we build the right thing, from features used by one team to services every team can leverage."
                        author="Aneesh Agrawal, Software Engineer"
                    />

                    <h2>Need help with your monolith to microservices migration?</h2>

                    <p>
                        Using Sourcegraph code search, Lyft software engineers were able to verify the migration and
                        deprecation of code from their monolith to microservices at scale, significantly reducing the
                        risk to production stability during deployment of the new microservices.
                    </p>

                    <p className="pb-5">
                        <Link to="/">
                            <button className="btn btn-outline-primary">Read more posts</button>
                        </Link>
                    </p>

                    {/*<p className="pb-5">Get in touch to learn more about how Sourcegraph can ensure an safe and efficient deployment plan for migrating you monolith to microservices.</p>*/}
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm />
    </Layout>
)) as React.FunctionComponent<any>
