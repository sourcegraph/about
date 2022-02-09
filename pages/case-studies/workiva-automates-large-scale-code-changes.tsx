import { FunctionComponent } from 'react'

export const CaseStudy: FunctionComponent = () => (
    <div className="container">
        <p>
            Founded in 2008, Workiva's platform enables thousands of enterprises around the world to manage
            and report business data. Over 3,000 businesses use Workiva to bring together everything their
            business needs—teammates, datasets, and data sources—so they can work better in the cloud.
        </p>

        <h2 className="pt-5 pb-1">Paying down tech debt</h2>

        <p>
            The Client Platform Team at Workiva is responsible for developing and maintaining the frameworks
            and shared libraries that all other products are built on. This includes a shared UI widget
            library and maintaining dozens of Dart packages to support Workiva’s entire engineering team.
        </p>

        <p>
            Any time they shipped a release for one of their packages, they’d also have to propagate it
            across 70+ repositories used by other teams to avoid breaking changes. While they developed
            their own internal tool to automate these changes, it required ongoing maintenance and didn't
            provide end-to-end visibility into the path to completion.
        </p>

        <p>
            Whenever a new version of a library came out, they’d either have to manually make the change
            across dozens of repositories, spend time improving their internal tool to help automate the
            process, or add the update to their backlog.
        </p>

        <h2 className="pt-5 pb-1">Automating large-scale updates with Batch Changes</h2>

        <p>
            As an organization that values paying down tech debt, Workiva’s Client Platform team started
            using Sourcegraph <a href="/batch-changes">Batch Changes</a> to help them efficiently propagate
            updates to dependencies across all of their repositories without any ongoing maintenance. The
            team has already used Batch Changes to:
        </p>

        <ul className="mt-3">
            <li>Propagate a new version of React to all frontend repositories</li>
            <li>Update API versions of Kubernetes resources</li>
            <li>Migrate to a new CDN while updating all code references</li>
            <li>Update UI component syntax as necessary to support a new version of the Dart language</li>
            <li>
                Run test batch changes to ensure that new Chrome web browser releases wouldn't result in any
                software failures
            </li>
        </ul>

        <h2 className="pt-5 pb-1">
            Workiva reduces the time it takes to make large-scale code changes by 80%
        </h2>

        <p>
            The Client Platform team has already used Batch Changes numerous times to propagate large-scale
            updates to the frameworks and shared libraries they maintain. In comparison to manually making
            these changes, Batch Changes reduces the time it takes to make large-scale code changes by 80%.
        </p>

        <p>
            Instead of spending time maintaining their internal tool, the Workiva team will be using Batch
            Changes going forward.
        </p>

        <br />
    </div>
)

export default CaseStudy
