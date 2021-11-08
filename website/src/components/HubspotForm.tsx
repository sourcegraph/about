import React, { useEffect } from 'react'

interface Props {
    portalId: string
    formId: string
    campaignId: string
}

const HubspotForm: React.FunctionComponent<Props> = ({ portalId, formId, campaignId }) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://js.hsforms.net/forms/v2.js'
        document.body.appendChild(script)

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    portalId: `${portalId}`,
                    formId: `${formId}`,
                    region: `na1`,
                    sfdcCampaignId: `${campaignId}`,
                    target: '#hubspotForm',
                })
            }
        })
    }, [])

    return (
        <div>
            <div id="hubspotForm"></div>
        </div>
    )
}

export default HubspotForm
