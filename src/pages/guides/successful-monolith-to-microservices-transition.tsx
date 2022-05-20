import { FunctionComponent } from 'react'

import { Layout } from '@components'
import { useCerosScript } from '@hooks'

const MonolithToMicroservices: FunctionComponent = () => {
    useCerosScript()

    return (
        <Layout
            meta={{
                title: '5 key elements of successful monolith-to-microservices migrations',
                description:
                    'Employ the five key techniques that the best engineering organizations enable to successfully conduct major architectural transitions.',
            }}
        >
            <section
                // eslint-disable-next-line react/forbid-dom-props
                style={{
                    position: 'relative',
                    width: 'auto',
                    padding: '0 0 294.84%',
                    height: '0',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    margin: '0',
                    border: '0 none',
                }}
                id="experience-62855a111d5a6"
                data-aspectratio="0.33916269"
                data-mobile-aspectratio="0.14484881"
            >
                <iframe
                    allowFullScreen={true}
                    src="https://view.ceros.com/sourcegraph/successful-monolith-to-microservices?heightOverride=3774&mobileHeightOverride=5523"
                    // eslint-disable-next-line react/forbid-dom-props
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        margin: '0',
                        padding: '0',
                        border: '0 none',
                        height: '100%',
                        width: '100%',
                        minHeight: '100%',
                        minWidth: '100%',
                    }}
                    frameBorder="0"
                    className="ceros-experience"
                    title="5 key elements of successful monolith-to-microservices migrations with pages"
                    scrolling="no"
                />
            </section>
        </Layout>
    )
}

export default MonolithToMicroservices
