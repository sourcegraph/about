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
                    padding: '0 0 286.02%',
                    height: '0',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    margin: '0',
                    border: '0 none',
                }}
                id="experience-627983184b4c8"
                data-aspectratio="0.34963125"
                data-mobile-aspectratio="0.14484881"
            >
                <iframe
                    allowFullScreen
                    src="https://view.ceros.com/sourcegraph/successful-monolith-to-microservices-transition?heightOverride=3661&mobileHeightOverride=5523"
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        bottom: '0',
                        right: '0',
                        margin: '0',
                        padding: '0',
                        border: '0 none',
                        height: '1px',
                        width: '1px',
                        minHeight: '100%',
                        minWidth: '100%',
                    }}
                    frameBorder="0"
                    className="ceros-experience"
                    title="5 key elements of successful monolith-to-microservices migrations"
                    scrolling="no"
                />
            </section>
        </Layout>
    )
}

export default MonolithToMicroservices
