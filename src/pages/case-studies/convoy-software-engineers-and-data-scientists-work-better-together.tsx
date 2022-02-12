import { FunctionComponent } from 'react'

export const CaseStudy: FunctionComponent = () => ( 
    <div className="container">
        <p>
            Sourcegraph is transforming how engineers and data scientists collaborate, resulting in greater
            efficiency and improved data integrity. Sourcegraph's multi-repository company-wide code search
            and navigation enables data scientists to analyze and verify data transformation code
            independently, and at any time.
        </p>

        <p>
            With Sourcegraph, Convoy's data scientists can trace back how and when data is written to the
            databases and model endpoints are invoked. They can keep track of Convoy's ever-transforming
            data warehouse.
        </p>
 
        <h2 className="pt-5 pb-1">Avoiding expensive mistakes</h2>

        <p>
            Prior to using Sourcegraph, Convoy's engineers had to clone repos locally in order to find
            necessary data. This would cause problems, as Owen, a Senior Software Engineer, recalls:
        </p>

        <br />
    </div>
)

export default CaseStudy
