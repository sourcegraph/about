import { SignDirectionIcon } from 'mdi-react'
import * as React from 'react'
import Layout from '../components/Layout'

export class NotFoundPage extends React.Component<any, {}> {
    public render(): JSX.Element {
        return (
            <Layout location={this.props.location}>
                <div className="error-page">
                    <div className="error-page__circle rounded-circle">
                        <div className="error-page__icon">
                            <SignDirectionIcon />
                        </div>
                    </div>
                    <h1>404: Not Found</h1>
                    <p>Sorry, the requested URL was not found.</p>
                </div>
            </Layout>
        )
    }
}

export default NotFoundPage
