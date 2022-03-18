import Script from 'next/script'
import { FunctionComponent } from 'react'

interface EmbeddedHubSpotProps {
    portalId: string
    formId: string
    targetId: string
    region: string
    [index: string]: string
}

export const EmbeddedHubSpot: FunctionComponent<EmbeddedHubSpotProps> = ({ portalId, formId, targetId, region }) => (
    <Script id={targetId}>{`
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        document.head.append(script)
        script.addEventListener('load', () => {
            window.hbspt.forms.create({
                portalId: '${portalId}',
                formId: '${formId}',
                target: '${targetId}',
                region: '${region ?? ''}',
            })
        })
    `}</Script>
)
