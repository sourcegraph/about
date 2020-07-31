import { Link } from 'gatsby'
import GithubIcon from 'mdi-react/GithubIcon'
import LinkedinIcon from 'mdi-react/LinkedinIcon'
import TwitterIcon from 'mdi-react/TwitterIcon'
import * as React from 'react'

export const Footer: React.FunctionComponent<{ minimal?: boolean }> = ({ minimal }) =>
            <div className="footer__postscript d-flex justify-content-between pt-4 pb-2 small">
                <ul className="nav">
                    <li className="nav-item text-muted mr-3">&copy; 2020 Sourcegraph</li>
                    <li className="nav-item">
                        <Link to="/terms" className="nav-link">
                            Terms
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/security" className="nav-link">
                            Security
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/privacy" className="nav-link">
                            Privacy
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)
