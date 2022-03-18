import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import React from 'react'

import { Layout } from '@components'

import styles from './404.module.scss'

const Custom404: React.FunctionComponent = () => (
    <Layout className="bg-white">
        <div className={`${styles.errorPage} d-flex flex-column align-items-center justify-content-center text-dark`}>
            <div className={`${styles.circle} rounded-circle`}>
                <div className={`${styles.icon} my-0 mx-auto`}>
                    <SignDirectionIcon />
                </div>
            </div>

            <h1>404: Not Found</h1>
            <p>Sorry, the requested URL was not found.</p>
        </div>
    </Layout>
)

export default Custom404
