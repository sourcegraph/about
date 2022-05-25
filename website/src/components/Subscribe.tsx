import React from 'react'

class HubspotSubscribe extends React.Component {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        document.body.appendChild(script)

        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: '9e9cd4d5-7a88-47e0-97e2-93dd11348ae5',
                cssClass: 'subscribe-form',
                target: '#hubspotSubscribeForm',
            })
        })
    }
    public render(): JSX.Element {
        return (
            <div id="newsletter-signup-footer" className="newsletter-form-footer row">
                <h3 className="footer__newsletter-form-heading col-md-12 pt-5">Subscribe to our newsletter</h3>
                <div id="hubspotSubscribeForm" className="col-sm-12 col-md-6 col-lg-12"></div>
            </div>
        )
    }
}

export default HubspotSubscribe
