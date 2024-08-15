import { FunctionComponent } from 'react'

import { Layout } from '../../components'
import EventsList from '../../components/EventsList'

const EventsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Events',
            description: 'Join us for live events.',
        }}
        className="bg-gray-50"
    >
        <EventsList />
    </Layout>
)

export default EventsPage
