import { Link } from 'gatsby'
import React from 'react'

export const EbookUniversalCodeSearch: React.FunctionComponent<{}> = () => (
    <div className="row justify-content-md-center">
        <div className="col-md-3 text-center">
            <img
                src="/external-logos/sourcegraph-universal-code-search-ebook-v1.jpg"
                alt="Download: Universal Code Search and Intelligence"
                width="170"
                className="universal-code-search--glow"
            />
        </div>
        <div className="col-md-6">
            <h5>EBOOK</h5>
            <h3>Universal code search and intelligence</h3>
            <h5>How to increase programming productivity and improve code quality</h5>
            <Link
                className="btn btn-lg btn-outline-light universal-code-search__btn mt-3 font-weight-normal "
                to="/resources/universal-code-search-ebook/?utm_medium=organic_search&utm_source=about&utm_content=product"
            >
                Free download
            </Link>
        </div>
    </div>
)
