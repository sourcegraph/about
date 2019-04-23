import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import { ProductPage } from '../../components/ProductPage'

const CodeSearch: React.FunctionComponent<any> = props => (
    <Layout location={props.location}>
        <ProductPage
            title="Code search and navigation"
            description="Code search is awesome"
            mainActions={
                <>
                    <a className="btn btn-primary" href="https://docs.sourcegraph.com/#quickstart">
                        Install
                    </a>
                </>
            }
        />
    </Layout>
)

export default CodeSearch
