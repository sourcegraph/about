import CityIcon from 'mdi-react/CityIcon'
import React from 'react'

export const EnterpriseReadySolution: React.FunctionComponent<{ className?: string }> = ({ className = '' }) => (
    <div className={className}>
        <div className="row justify-content-center">
            <div className="col-md-10">
                <CityIcon className="d-block mx-auto" style={{ width: '80px', height: '80px' }} />
                <h2 className="mt-4 display-4 text-center">Enterprise-ready</h2>
                <p className="text-center">
                    Sourcegraph is built for companies of all sizes, from startups that need a solid foundation for
                    growth, all the way to the largest enterprises with complex security, scaling, and deployment needs.
                </p>
            </div>
        </div>
        <div className="pt-5 row justify-content-between">
            <div className="col-md-4">
                <h4 className="mb-1 font-weight-light">Proven at scale</h4>
                <p>
                    10,000s of developers and repositories on Sourcegraph? You're in good company. Not at that scale?
                    You'll still benefit from the robustness.
                </p>
            </div>
            <div className="col-md-4">
                <h4 className="mb-1 font-weight-light">24/7 support</h4>
                <p>
                    We provide outstanding support whenever you need it, including deployment assistance and help
                    integrating custom dev tools with Sourcegraph.
                </p>
            </div>
            <div className="col-md-4">
                <h4 className="mb-1 font-weight-light">Deploy your way</h4>
                <p>
                    Self-manage your organization's Sourcegraph instance, or let us manage it for you (on our secure
                    infrastructure or your cloud provider sub-account).
                </p>
            </div>
        </div>
    </div>
)
