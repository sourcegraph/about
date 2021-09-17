import * as React from 'react'
import GetStarted from '../components/GetStarted'
import Layout from '../components/Layout'
import { CustomerLogosSectionAnimated } from '../components/product/CustomerLogosSectionAnimated'

export default class GetStarted1 extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
    }
    public render(): JSX.Element | null {
        return (
            <Layout
                location={this.props.location}
                meta={{
                    title: 'Get started with Sourcegraph',
                    description: 'Get started with Sourcegraph',
                    image: '/favicon.png',
                }}
                minimal={true}
                heroAndHeaderClassName="bg-gradient-green-blue"
            >
                <GetStarted />
                <div className="col-lg-12 pt-5">
                    <CustomerLogosSectionAnimated showButton={false} className="pt-5 pb-6 mb-2"/>
                </div>
            </Layout>
        )
    }
}
