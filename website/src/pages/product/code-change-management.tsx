import BuildIcon from 'mdi-react/BuildIcon'
import DeleteSweepIcon from 'mdi-react/DeleteSweepIcon'
import NotificationsActiveIcon from 'mdi-react/NotificationsActiveIcon'
import PlaylistAddCheckIcon from 'mdi-react/PlaylistAddCheckIcon'
import SecurityIcon from 'mdi-react/SecurityIcon'
import React from 'react'
import { Blockquote } from '../../components/Blockquote'
import { ContentPage } from '../../components/content/ContentPage'
import { ContentSection } from '../../components/content/ContentSection'
import { IconItem } from '../../components/IconItem'
import { Jumbotron } from '../../components/Jumbotron'
import Layout from '../../components/Layout'
import { CustomerLogosSection } from '../../components/product/CustomerLogosSection'
import { Vimeo } from '../../components/Vimeo'
import {
    RequestCodeChangeManagementDemoAction,
    RequestCodeChangeManagementDemoActionNow,
} from '../../css/components/actions/RequestDemoAction'
import { eventLogger } from '../../EventLogger'

const title = 'Code change management'
const description =
    'Run code change campaigns to remove legacy code, fix critical security issues, and pay down tech debt. Compute changes, create branches, and track pull requests across all affected repositories.'
const seeItInActionClicked = () => {
    eventLogger.trackCampaignsSeeItInActionButtonClicked()
}

export const CampaignsTable: React.FunctionComponent<{
    campaigns: string[]
}> = ({ campaigns }) => (
    <div className="pricing-table">
        <div id="code-search" className="pricing-table__item row border-bottom border-gray">
            <h5 className="col text-uppercase text-muted font-weight-bold">Example campaigns</h5>
        </div>

        {campaigns.map((campaign, i) => (
            <div className="pricing-table__item row border-bottom border-gray" key={i}>
                <div className="col-9 pricing-table__item-name">
                    <div className="p-2">{campaign}</div>
                </div>
                <div className="col-3 p-2 border-left border-gray text-center">
                    <svg
                        className="mdi-icon text-success"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                    </svg>
                </div>
            </div>
        ))}
    </div>
)

export default ((props: any) => (
    <Layout
        meta={{
            title,
            description,
        }}
        location={props.location}
    >
        <ContentPage
            title={title}
            className="code-change-management"
            titleClassName="code-change-management display-3"
            description={description}
            mainActions={
                <div className="d-flex flex-column align-items-center">
                    <RequestCodeChangeManagementDemoAction className="mt-3" />
                </div>
            }
        >
            <ContentSection color="white" className="pt-6 pb-2">
                <h2 className="display-3 mb-5">Leading dev teams invest heavily in code&nbsp;change&nbsp;management</h2>
                <div className="row justify-content-lg-center">
                    <div className="col text-center">
                        <a
                            className="btn btn-outline-primary rounded-lg active mb-5 px-6"
                            href="#see-it-in-action"
                            onClick={seeItInActionClicked}
                        >
                            See it in action
                        </a>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-md-6">
                        <Blockquote
                            quote="Google invests significant effort in maintaining code health to address some issues related to codebase complexity and dependency management. For instance, special tooling automatically detects and removes dead code, splits large refactorings, … and marks APIs as deprecated."
                            by={
                                <a
                                    href="https://cacm.acm.org/magazines/2016/7/204032-why-google-stores-billions-of-lines-of-code-in-a-single-repository/fulltext"
                                    target="_blank"
                                >
                                    Google paper in Communications of the ACM
                                </a>
                            }
                        />
                    </div>
                    <div className="col-md-6">
                        <Blockquote
                            quote='[At Facebook], analyzers participate as bots in code review, making automatic comments when an engineer submits a code modification. … [This automation] saw a 70% fix rate, where a more traditional "offline" or "batch" deployment (where bug lists are presented to engineers, outside their workflow) saw a 0% fix rate.'
                            by={
                                <a
                                    href="https://cacm.acm.org/magazines/2019/8/238344-scaling-static-analyses-at-facebook/fulltext"
                                    target="_blank"
                                >
                                    Facebook paper in Communications of the ACM
                                </a>
                            }
                        />
                    </div>
                </div>
                <h2 className="text-center display-4 mb-3 mt-4">
                    How code&nbsp;change&nbsp;campaigns help teams move quickly and safely
                </h2>
                <div className="row mt-4">
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={DeleteSweepIcon} color="brand-cyan">
                            <h4>Remove deprecated code and legacy systems</h4>
                            <p>
                                You need a way to improve and change APIs used across all of your organization's code,
                                to spend less time and effort in the migration period between the old and new API or
                                service.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={SecurityIcon} color="brand-purple">
                            <h4>Triage and follow-through on critical security issues</h4>
                            <p>
                                You need to be able to identify everywhere that a vulnerable package or API is used, and
                                open issues or pull requests on all affected projects. Then you can monitor the progress
                                of fixing, merging, and deploying.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={NotificationsActiveIcon} color="green">
                            <h4>Keep dependencies up-to-date</h4>
                            <p>
                                Keep your library dependencies <i>and how you use those libraries</i> up-to-date and
                                consistent across all of your organization's code, to avoid old bugs or security
                                problems in old dependencies, and problems arising from inconsistent dependency version
                                use across your codebase.
                            </p>
                        </IconItem>
                    </div>
                </div>
                <div className="row justify-content-lg-center">
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={PlaylistAddCheckIcon} color="brand-orange">
                            <h4>Deploy new static analysis gradually in the developer workflow</h4>
                            <p>
                                Increase adoption of linters and enable progressively stricter rules across all of your
                                organization's code, so you can continuously improve the quality of all of your code.
                                Developers will see diagnostics and fixes in their editor and on their code host to
                                gently nudge them toward adherence, and you can enforce rules after a certain time
                                period.
                            </p>
                        </IconItem>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <IconItem className="position-relative" icon={BuildIcon} color="blue">
                            <h4>Standardize build and deploy configuration</h4>
                            <p>
                                Keep the build and deployment configurations up-to-date and consistent across all of
                                your organization's code, so that you can iterate and deploy continuously and reliably
                                with DevOps self-sufficiency.
                            </p>
                        </IconItem>
                    </div>
                </div>
                <h2 id="easily-define-campaigns-track-progress" className="text-center display-4 mb-3 mt-4">
                    Easily run campaigns and track their progress
                </h2>
                <div className="container-fluid">
                    <div className="row mt-4 justify-content-md-center">
                        <div className="col-lg-10">
                            <p>
                                Sourcegraph lets you create campaigns, which compute diffs and create branches and pull
                                requests across multiple repositories. Use it for these common types of campaigns:
                            </p>
                        </div>
                        <div className="col-lg-8 mt-4">
                            <CampaignsTable
                                campaigns={[
                                    'Deprecate a Java artifact dependency',
                                    'Deprecate a package.json dependency (npm/yarn)',
                                    'Gradually enforce a new ESLint rule',
                                    'Require all files to have valid code owners',
                                    'Find-replace across multiple repositories',
                                    'Triage search results',
                                    'Track an existing collection of issues and pull requests',
                                ]}
                            />
                        </div>
                    </div>
                </div>

                <div className="row mt-5 justify-content-md-center">
                    <p className="col-lg-10">
                        When you create a campaign, Sourcegraph creates branches and pull requests as needed with the
                        correct reviewers and context—and keeps them up-to-date. You can track the progress of the
                        campaign with the burndown chart and see all related activity across all repositories. All this
                        makes completing the campaign as fast and painless as possible.
                    </p>
                </div>
            </ContentSection>
            <ContentSection color="white" className="py-3">
                <h2 id="see-it-in-action" className="text-center display-4 mt-5">
                    See it in action
                </h2>
                <div className="row justify-content-md-center">
                    <p className="text-center">
                        Watch how to use Sourcegraph to the deprecate a JavaScript library across 100+ repositories.
                    </p>
                </div>
                <Vimeo id={355392896} muted={false} className="mt-4" />
                <Vimeo id={355392936} muted={false} className="mt-5" />
            </ContentSection>
            <ContentSection color="white" className="pt-5 pb-3">
                <span id="customers" />
                <hr />
                <CustomerLogosSection className="mt-6 mb-4" />
            </ContentSection>
            <Jumbotron
                color="purple"
                className="request-campaigns-demo-footer py-4"
                logomark={false}
                title="Request a Sourcegraph code change management demo"
                description="With code change management, large-scale fixes and changes that previously took weeks or months can be completed in hours."
            >
                <RequestCodeChangeManagementDemoActionNow />
            </Jumbotron>
        </ContentPage>
    </Layout>
)) as React.FunctionComponent
