import { Link } from 'gatsby'
import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import * as React from 'react'

interface HeaderProps {
    isHome?: boolean
    isBlog?: boolean
    isProductPage?: boolean
    minimal?: boolean
    className?: string
}

export default class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false,
        }
    }

    componentDidMount() {
        const jquery = document.createElement('script');
        jquery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        jquery.async = true;
        document.body.appendChild(jquery);

        const script = document.createElement('script');
        script.innerHTML = '!function(e){var o=document.getElementsByTagName("script")[0];if("object"==typeof e.ClearbitForHubspot)return console.log("Clearbit For HubSpot included more than once"),!1;e.ClearbitForHubspot={},e.ClearbitForHubspot.forms=[],e.ClearbitForHubspot.addForm=function(o){var t=o[0];"function"==typeof e.ClearbitForHubspot.onFormReady?e.ClearbitForHubspot.onFormReady(t):e.ClearbitForHubspot.forms.push(t)};var t=document.createElement("script");t.async=!0,t.src="https://hubspot.clearbit.com/v1/forms/pk_a66b9ed76e62c713c06aab39bfae7234/forms.js",o.parentNode.insertBefore(t,o),e.addEventListener("message",function(o){if("hsFormCallback"===o.data.type&&"onFormReady"===o.data.eventName)if(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0)e.ClearbitForHubspot.addForm(document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'));else if(document.querySelectorAll("iframe.hs-form-iframe").length>0){document.querySelectorAll("iframe.hs-form-iframe").forEach(function(t){t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\').length>0&&e.ClearbitForHubspot.addForm(t.contentWindow.document.querySelectorAll(\'form[data-form-id="\'+o.data.id+\'"]\'))})}})}(window);';
        script.async = true;
        document.body.appendChild(script);
    }

    public toggle(): void {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    public render(): JSX.Element | null {
        return (
            <>
                {/* Temporary banner for batch changes */}
                {(this.props.isHome || this.props.isBlog) && (
                    <div className="d-flex align-items-center justify-content-center bg-purple text-white font-weight-bold p-2">
                        Introducing Batch Changes: Automate large-scale code changes.
                        <Link to="/batch-changes" className="ml-2 btn btn-sm btn-light">
                            Learn more
                        </Link>
                    </div>
                )}
                <nav className={`header navbar navbar-expand-md py-3 ${this.props.className || 'navbar-light'}`}>
                    <div className="container-lg px-0 px-lg-3">
                        <Link className="navbar-brand header__logo" to="/">
                            <span role="img" aria-label="Sourcegraph - Universal code search">
                                {' '}
                            </span>
                        </Link>
                        {!this.props.minimal && (
                            <>
                                <button
                                    className="navbar-toggler"
                                    data-toggle="collapse"
                                    data-target="#navcol-1"
                                    onClick={this.toggle}
                                >
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className={`collapse navbar-collapse justify-content-end ${
                                        this.state.isOpen ? 'show' : ''
                                    }`}
                                    id="navcol-1"
                                >
                                    <ul className="nav navbar-nav d-flex w-100">
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/customers"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Customers
                                            </Link>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://docs.sourcegraph.com"
                                            >
                                                Docs <ExternalLinkIcon className="icon-inline small ml-1" />
                                            </a>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link"
                                                to="/pricing"
                                                activeClassName="header__nav-link-active"
                                            >
                                                Pricing
                                            </Link>
                                        </li>
                                        <li className="flex-1">&nbsp;</li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <a
                                                className="header__nav-link nav-link"
                                                href="https://sourcegraph.com/sign-in"
                                                title="Search public code with Sourcegraph Cloud"
                                            >
                                                Sign in
                                            </a>
                                        </li>
                                        <li className="header__nav-item nav-item" role="presentation">
                                            <Link
                                                className="header__nav-link nav-link btn btn-outline-primary"
                                                to="/get-started"
                                                title="Get started with Sourcegraph"
                                            >
                                                Get started
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </nav>
            </>
        )
    }
}
