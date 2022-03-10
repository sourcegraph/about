import Script from 'next/script'
import { FunctionComponent } from 'react'

interface EmbeddedHubSpotProps {
    portalId: string
    formId: string
    targetId: string
    region: string
    [index: string]: string
}

const EmbeddedHubSpot: FunctionComponent<EmbeddedHubSpotProps> = ({ portalId, formId, targetId, region }) => (
    <Script id={targetId}>{`
        window.hbspt.forms.create({
            portalId: '${portalId}',
            formId: '${formId}',
            target: '${targetId}',
            region: '${region ?? ''}',
        })
    `}</Script>
)

export default EmbeddedHubSpot
