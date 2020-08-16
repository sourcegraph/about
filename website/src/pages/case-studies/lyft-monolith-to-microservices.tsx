import * as React from 'react'
import { CaseStudyPage, InContentBlockquote, CaseStudyRequestDemoForm } from '../../components/content/CaseStudyPage'
import { ContentSection } from '../../components/content/ContentSection'
import Layout from '../../components/Layout'

const justinPhilips = 'Justin Phillips, Software Engineer, Lyft'
export default ((props: any) => (
    <Layout
        location={props.location}
        meta={{
            title: 'Lyft ensures production stability during monolith to microservices transition',
            description:
                'Learn how Sourcegraph code search helped Lyft ensure (largely) issue-free production deploys during their monolith to microservices decomposition',
            // image: "https://about.sourcegraph.com/lyft-sourcegraph-case-study-og-embed.jpg"-pending approval
        }}
        className="navbar-dark bg-black"
    >
        <CaseStudyPage
            customer="Lyft"
            title="Lyft ensures production stability during monolith to microservices transition"
            logo="/external-logos/lyft-logo.svg"
            quote={{
                quote:
                    'Sourcegraph code search helped ensure production stability throughout the monolith to microservices decomposition by verifying applications were no longer pointing at the monolith version of a service.',
                author: justinPhilips,
                image: '/case-studies/justin-phillips-lyft.jpg',
            }}
            pdf="https://sourcegraphstatic.com/Lyft-Sourcegraph-case-study.pdf"
        >
            <ContentSection color="white" className="col-md-6">
                <div className="container">
                    <p>
                        Lyft's mission is to improve people's lives with the world's best transportation. With over 30
                        million riders in 2018, Lyft's business is growing, as are the numbers of engineers,
                        repositories, and microservices. Effectively scaling and managing a large engineering
                        organization requires an elite set of development tools and practices to preserve efficiency,
                        while protecting, and enhancing code quality.
                    </p>

                    <InContentBlockquote
                        quote="Decomposition or migrating a service is a high-risk endeavor, often involving changes in hundreds of repositories, so a high level of accuracy is needed."
                        author={justinPhilips}
                    />

                    <h2 className="pt-5 pb-1">From monolith to microservices</h2>

                    <p>
                        The largest refactoring effort in Lyft's 10-year history came in 2018 when the number one
                        company priority was the decomposition of the PHP monolith to microservices.
                    </p>

                    <p>
                        Performing such significant and wide-ranging code changes meant extensive analysis was required
                        to verify all call sites and references to the monolith had been updated. This meant
                        transforming monolith code to consuming the new microservice API endpoints, which in many cases,
                        meant altering an API schema.
                    </p>

                    <p>
                        This wasn't simply slicing up the monolith by domain into separate services—it was also a
                        crucial opportunity to eliminate tech debt by removing dead code, deprecated libraries, and
                        unused API and database fields.
                    </p>

                    <InContentBlockquote
                        quote="During our decomp efforts, we also spent time to refactor our APIs. Many of these APIs were undocumented and lacked a formalized contract.
                    <br/><br/>
                    With the help of Sourcegraph, we were able to quickly look at all clients of an API and remove unused attributes that lived in different repositories, ultimately simplifying our APIs and speeding up developer iteration time."
                        author={justinPhilips}
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
                        quote="Lyft teams are constantly innovating and building new systems, necessitating decomposing and migrating off of older ones. Sourcegraph gives us the ability to search for and refactor references to deprecated services, libraries, URL patterns, and more across our 2000+ repositories, and the confidence that we're not leaving anyone behind.
                        <br /><br />
                        “Sourcegraph makes it easy to survey and understand existing use cases to make sure we build the right thing."
                        author="Aneesh Agrawal, Software Engineer, Lyft"
                    />

                    <p className="pb-5">
                        Using Sourcegraph code search, Lyft software engineers were able to verify the migration and
                        deprecation of code from their monolith to microservices at scale, significantly reducing the
                        risk to production stability during deployment of the new microservices.
                    </p>
                </div>
            </ContentSection>
        </CaseStudyPage>
        <CaseStudyRequestDemoForm
            title="Need help with your monolith to microservices migration?"
            description="Sourcegraph Universal Code Search can ensure a safe and efficient deployment plan for migrating your monolith to microservices. Get in touch to schedule a demo."
        />
    </Layout>
)) as React.FunctionComponent<any>
