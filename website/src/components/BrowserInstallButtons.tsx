import * as React from 'react'
import { eventLogger } from '../EventLogger'

export const CHROME_STORE_URL = 'https://docs.sourcegraph.com/integration/browser_extension'
export const FIREFOX_STORE_URL = 'https://docs.sourcegraph.com/integration/browser_extension'

export class BrowserInstallButtons extends React.PureComponent<{}, {}> {
    public render(): JSX.Element {
        return (
            <div className="py-2 d-flex flex-wrap">
                <div className="btn-group">
                    <a
                        onClick={this.trackInstallBrowserExtension}
                        target="_blank"
                        href={CHROME_STORE_URL}
                        className="mr-2"
                    >
                        <button type="button" className="btn btn-primary align-items-center">
                            <img height={25} className="pr-2" src="/integrations/chrome.svg" alt="Chrome" />
                            Chrome
                        </button>
                    </a>
                    <a onClick={this.trackInstallBrowserExtension} target="_blank" href={FIREFOX_STORE_URL}>
                        <button type="button" className="btn btn-primary align-items-center">
                            <img height={25} className="pr-2" src="/integrations/firefox.svg" alt="Firefox" />
                            Firefox
                        </button>
                    </a>
                </div>
            </div>
        )
    }

    private trackInstallBrowserExtension = () => {
        eventLogger.trackInstallBrowserExtensionCTAClicked('Homepage')
    }
}
