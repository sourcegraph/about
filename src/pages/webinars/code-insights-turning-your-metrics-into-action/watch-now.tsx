import { FunctionComponent } from 'react'

import { useRouter } from 'next/router'

import { Layout, GatedResourceLayout } from '@components'

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
        >
            <GatedResourceLayout
                title="Sourcegraph Code Insights: Turning Metrics into Action"
                subtitle="How to track what really matters to you and your team"
                speakers={speakers}
                learnMoreCTA="Want to learn more about Code Insights?"
            />
        </Layout>
    )
}

export default Webinar
