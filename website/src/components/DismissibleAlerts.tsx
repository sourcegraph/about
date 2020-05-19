import CloseIcon from 'mdi-react/CloseIcon'
import * as React from 'react'
import Alert from 'react-bootstrap/Alert'

export class AlertDismissible extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props)
        this.state = {
            show: true,
        }
    }
    public render(): JSX.Element {
        const handleDismiss = () => this.setState({ show: false })
        if (this.state.show) {
            return (
                <div>
                    <Alert variant="danger" onClose={handleDismiss} dismissible={true}>
                        <p>Learn what is Universal Code Search. Register for April 16 online training.</p>
                        <button type="button" className="btn btn-icon" onClick={handleDismiss}>
                            <CloseIcon className="icon-inline" />
                        </button>
                    </Alert>
                </div>
            )
        }
    }
}
