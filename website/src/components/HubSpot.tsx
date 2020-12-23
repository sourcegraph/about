export interface HubSpotForm {
    portalId: string
    formId: string
    targetId: string
    onFormSubmit?: (obj: { data: { name: string; value: string }[] }) => void
    //  onFormSubmitted?: () => void
}

export function createHubSpotForm({ portalId, formId, targetId }: HubSpotForm): void {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/v2.js'
    const hubspot = document.getElementById(targetId)
    hubspot!.appendChild(script)
    script.addEventListener('load', () => {
        ; (window as any).hbspt.forms.create({
            portalId,
            formId,
            target: `#${targetId}`,
        })
    })
}
