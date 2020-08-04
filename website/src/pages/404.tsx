import SignDirectionIcon from 'mdi-react/SignDirectionIcon'
import * as React from 'react'
import Layout from '../components/Layout'

export class NotFoundPage extends React.Component<any, {}> {
    public render(): JSX.Element {
        return (
            <Layout location={this.props.location} className="bg-white">
                <div className="error-page text-dark">
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
