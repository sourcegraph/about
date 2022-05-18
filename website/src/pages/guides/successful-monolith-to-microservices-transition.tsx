import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../../components/Layout'
import { useCerosScript } from '../../hooks/ceros'

const MonolithToMicroservices: FunctionComponent<PageProps> = props => {
    useCerosScript()

    return (
        <Layout
            location={props.location}
            meta={{
                title: '5 key elements of successful monolith-to-microservices migrations',
                description:
                    'Employ the five key techniques that the best engineering organizations enable to successfully conduct major architectural transitions.',
            }}
        >
            <section
                style={{
                    position: 'relative',
                    width: 'auto',
                    padding: '0 0 56.25%',
                    height: '0',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    margin: '0',
                    border: '0 none',
                }}
                id="experience-62855a111d5a6"
                data-aspectratio="1.77777778"
                data-mobile-aspectratio="0.83333333"
            >
                <iframe
                    allowFullScreen
                    src="https://view.ceros.com/sourcegraph/successful-monolith-to-microservices"
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
