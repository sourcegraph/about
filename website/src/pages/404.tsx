import { SignDirectionIcon } from 'mdi-react'
import * as React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
        <div className="error-page">
            <div className="error-page__circle rounded-circle">
                <div className="error-page__icon">
                    <SignDirectionIcon />
                </div>
            </div>
            <h1>404: Not Found</h1>
            <p>Sorry, the requested URL was not found.</p>
        </div>
)
export default NotFoundPage
