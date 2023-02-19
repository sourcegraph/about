import { FunctionComponent } from 'react'

import { useRouter } from 'next/router'

import { Layout, GatedResourceLayout, ContentSection, Hero } from '../../components'
import { buttonStyle, buttonLocation } from '../../data/tracking'

const speakers = [
    {
        name: 'Joel Kwartler',
        title: 'Sourcegraph Product Manager, Code Insights',
        img: '/staff/joel-kwartler.png',
        bio: 'Joel is the Product Manager for Code Insights at Sourcegraph, and wants to bring the best practices of big data to the problems of big code. Joel has bounced around the startup + design world at places like Figma and IDEO, and got a bachelor’s in C.S. at Harvard. After hours, you might find him doing stand up, pretending he knows piano, or waking up way too early to take photographs. He’s made the Forbes 30 Under 30 List of Best Joel Kwartlers for 5 of the past 8 years.',
    },
    {
        name: 'Shawn King',
        title: 'Sourcegraph Customer Engineer',
        img: '/staff/shawn-king.png',
        bio: 'Shawn is a customer engineer at Sourcegraph. He has helped people use technology to get insights into their work his entire career. Coming from Microsoft and a startup called Intelligent InSites, Shawn has been able to support and provide metrics to many customers across different industries. Between the times when he’s helping customers, you can catch Shawn reading science fiction and enjoying time with his family.',
    },
]

const Webinar: FunctionComponent = () => {
    const router = useRouter()

    return (
        <Layout
            meta={{
                title: 'Sourcegraph Code Insights: Turning Metrics into Action',
                description:
                    'Join Sourcegraph Product Manager Joel Kwartler and Customer Engineer Shawn King to learn how to use Code Insights to turn your most pressing analytics questions into KPIs you can track with mere seconds of setup.',
            }}
            hero={
                <Hero
                    variant="marsCode"
                    title={'Sourcegraph Code Insights: \n Turning Metrics into Action'}
                    subtitle="How to track what really matters to you and your team"
                />
            }
        >
            <GatedResourceLayout
                title="Sourcegraph Code Insights: Turning Metrics into Action"
                speakers={speakers}
                formLabel="Watch the on-demand webinar"
                onFormSubmitted={() => {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    router.push({
                        pathname: router.pathname,
                        query: 'watch-now',
                    })
                }}
                description={
                    <section>
                        <p>
                            Learn how to use Code Insights to turn your most pressing analytics questions into KPIs you
                            can track with mere seconds of setup.
                        </p>
                        <p>
                            Code Insights lets you transform your code into a queryable database and create insights in
                            seconds for anything you can search for. You can track: migration progress, terraform
                            versions, component reuse, code smells, vulnerability indicators, language usage, CI
                            connections, documentation, ownership signals, and many more metrics found in your code.
                        </p>
                        <p>
                            But when you can quantifiably track everything in your codebase, from migrations to code
                            smells, how do you decide where to start?
                        </p>
                        <p>
                            In this interactive session, Sourcegraph Product Manager Joel Kwartler and Customer Engineer
                            Shawn King will teach you:
                        </p>
                        <ul>
                            <li className="mb-2">What Code Insights is and why it's important</li>
                            <li className="mb-2">
                                Best practices for getting started from top-tier engineering organizations
                            </li>
                            <li className="mb-2">
                                How to dive deeper into your data with advanced examples, including:
                            </li>
                            <ul>
                                <li className="mb-2">Metadata/config tracking</li>
                                <li className="mb-2">Commit signals</li>
                                <li className="mb-2">Making use of advanced Sourcegraph filters</li>
                                <li className="mb-2">
                                    Pattern tracking versions and licenses with regular expression capture groups
                                </li>
                            </ul>
                        </ul>
                    </section>
                }
                videoSrc="https://www.youtube.com/embed/dXKvetMozB0"
                learnMoreCTA={
                    <ContentSection className="flex flex-col items-center">
                        <h1 className="text-center">Want to learn more about Code Insights?</h1>
                        <a
                            className="btn btn-primary mt-6"
                            href="https://signup.sourcegraph.com"
                            title="Start for free"
                            data-button-style={buttonStyle.primary}
                            data-button-location={buttonLocation.body}
                            data-button-type="cta"
                        >
                            Start for free
                        </a>
                    </ContentSection>
                }
            />
        </Layout>
    )
}

export default Webinar
