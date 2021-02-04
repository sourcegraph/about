import cookies from 'js-cookie'

export const SOURCEGRAPH_ANONYMOUS_ID_KEY = 'sourcegraphAnonymousUid'
export const SOURCEGRAPH_SOURCE_URL_KEY = 'sourcegraphSourceUrl'
export interface HubSpotForm {
    portalId: string
    formId: string
    targetId: string
    onFormSubmit?: (obj: { data: { name: string; value: string }[] }) => void
    onFormReady?: (form: HTMLElement) => void
}

export function createHubSpotForm({ portalId, formId, targetId, onFormSubmit, onFormReady }: HubSpotForm): void {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/v2.js'
    const hubspot = document.getElementById(targetId)
    hubspot!.appendChild(script)
    const anonymousId = cookies.get(SOURCEGRAPH_ANONYMOUS_ID_KEY)
    const firstSourceURL = cookies.get(SOURCEGRAPH_SOURCE_URL_KEY)
    script.addEventListener('load', () => {
        ;(window as any).hbspt.forms.create({
            portalId,
            formId,
            target: `#${targetId}`,
            onFormSubmit,
            onFormReady: (form: HTMLFormElement) => {
                // The `form` parameter is normally a jQuery wrapper around a form element.
                // We polyfill jQuery in gatsby-browser.js to return the form element directly.
                if (form) {
                    // We want to populate hidden fields in the form with values stored in cookies when the form loads.
                    const anonymousIdInput = form.querySelector<HTMLInputElement>('input[name="anonymous_user_id"]')
                    if (anonymousIdInput && anonymousIdInput.value === '') {
                        // Populate the hidden anonymous_user_id form field with the value from the sourcegraphAnonymousUid cookie.
                        anonymousIdInput.value = anonymousId || ''
                    }

                    const firstSourceURLInput = form.querySelector<HTMLInputElement>('input[name="first_source_url"]')
                    if (firstSourceURLInput && firstSourceURLInput.value === '') {
                        // Populate the hidden first_source_url form field with the value from the sourcegraphSourceUrl cookie.
                        firstSourceURLInput.value = firstSourceURL || ''
                    }
                }
                if (onFormReady) {
                    onFormReady(form)
                }
            },
        })
    })
}
