import { FunctionComponent } from 'react'

import { ContentSection, Layout } from '../../components'

const WebinarsPage: FunctionComponent = () => (
    <Layout
        meta={{
            title: 'Sourcegraph Webinars',
            description: 'Join us for live events and webinars on coding with AI.',
            image: 'https://sourcegraph.com/assets/webinars/webinar-og.png',
        }}
        className="bg-gray-50"
    >
        <ContentSection>
            <div className="mt-10 flex flex-col gap-10 rounded-lg border border-gray-200 bg-white px-10 py-12">
                {/* left side */}

                {/* right side */}
                <div className="relative h-0 w-full overflow-hidden rounded pb-[105.25%]">
                    <iframe
                        title="Live Coding with AI"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfMHmJrqpg0SNpMxNyxUi2VPbGUBwvkrET1oLZun-bojaxrPA/viewform?embedded=true"
                        width="100%"
                        height="100%"
                        className="absolute left-0 top-0 h-full w-full overflow-hidden"
                    />
                </div>
            </div>
        </ContentSection>
    </Layout>
)

export default WebinarsPage
