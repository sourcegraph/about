import { FunctionComponent, useEffect } from 'react'

import { HubSpotFormProps, HubSpotForm } from './HubSpotForm'

const pixelScriptId = 'pixel-script'

export const HubSpotFormEmbed: FunctionComponent<HubSpotFormProps> = props => {
    useEffect(() => {
        addScriptForSubmitButton(`hsForm_${props.formId}`, 'HubSpotFormSubmitButton')
    }, [props.formId])

    return <HubSpotForm {...props} />
}

const addScriptForSubmitButton = (formId: string, buttonId: string): void => {
    const targetNode = document.querySelector('#form-target')
    const config: MutationObserverInit = { attributes: true, childList: true, subtree: true }

    const callback: MutationCallback = function (___, observer) {
        const form = document.querySelector(`#${formId}`) as HTMLFormElement
        if (form) {
            const button = form?.querySelector('input[type="submit"][value="Submit"]') as HTMLInputElement
            if (button && !document.querySelector(`#${buttonId}`)) {
                button.id = buttonId
                observer.disconnect()

                createScriptForSubmitButton(buttonId)
            }
        }
    }

    const observer = new MutationObserver(callback)

    if (targetNode) {
        observer.observe(targetNode, config)
    }
}

const createScriptForSubmitButton = (buttonId: string): void => {
    if (document.querySelector(`#${pixelScriptId}`)) {
        return
    }

    const script = document.createElement('script')
    script.async = true
    script.id = pixelScriptId
    script.type = 'text/javascript'

    script.innerHTML = `
        document.getElementById("${buttonId}").addEventListener("click",function() {
            !function(s,a,e,v,n,t,z) {
                if(s.saq)return;
                n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!s._saq)s._saq=n;
                n.push=n;
                n.loaded=!0;
                n.version='1.0';
                n.queue=[];
                t=a.createElement(e);
                t.async=!0;
                t.src=v;
                z=a.getElementsByTagName(e)[0];
                z.parentNode.insertBefore(t,z)
            }(window,document,'script','https://tags.srv.stackadapt.com/events.js');
            saq('conv', 'KGsR2v3IRYg4bqhsRm62Hc');
        });
        `

    document.head.append(script)

    const scriptCdn = document.createElement('script')
    scriptCdn.type = 'text/javascript'
    scriptCdn.src = '//js.hsforms.net/forms/embed/v2.js'
    document.head.append(scriptCdn)

    const hbsptScript = document.createElement('script')
    hbsptScript.async = true
    hbsptScript.id = pixelScriptId
    hbsptScript.innerHTML = `
        hbspt.forms.create({
            region: "na1",
            portalId: "2762526",
            formId: "255d54c8-65db-435e-b131-d8dc4ab9ea96"
        });
    `
    document.head.append(hbsptScript)
}
