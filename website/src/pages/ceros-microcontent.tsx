import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'

const CerosMicroContent: FunctionComponent<PageProps> = props => (
    <Layout location={props.location}>
        <Helmet>
            <script
                type="text/javascript"
                src="https://view.ceros.com/scroll-proxy.min.js"
                data-ceros-origin-domains="https://view.ceros.com/"
            />
        </Helmet>
        <div className="container py-3">
            <div
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
                id="experience-625dbfdb42f45"
                data-aspectratio="1.77777778"
                data-mobile-aspectratio="0.4"
            >
                <iframe
                    allowFullScreen
                    src="https://view.ceros.com/sourcegraph/test-microcontent?mobileHeightOverride=2000"
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
                    title="Test Microcontent"
                    scrolling="no"
                ></iframe>
            </div>
        </div>
    </Layout>
)

export default CerosMicroContent
