import React, { useLayoutEffect } from 'react'
import Layout from '../../components/Layout'
import { eventLogger } from '../../EventLogger'

interface HubSpotForm {
    portalId: string
    formId: string
    targetId: string
    onFormSubmit?: () => void
}

export function createHubSpotForm({ portalId, formId, targetId, onFormSubmit }: HubSpotForm): void {
    const script = document.createElement('script')
    script.src = '//js.hsforms.net/forms/v2.js'
    const hubspot = document.getElementById(targetId)
    hubspot!.appendChild(script)
    script.addEventListener('load', () => {
        ;(window as any).hbspt.forms.create({
            portalId,
            formId,
            target: `#${targetId}`,
            onFormSubmit,
        })
    })
}


export default ((props: any) => {
    useLayoutEffect(() => {
        createHubSpotForm({
            portalId: '2762526',
            formId: 'd2425310-4f8c-4b6c-8b63-c4729912df82',
            targetId: 'hubspotContactForm',
            onFormSubmit: () => eventLogger.trackContactUsFormSubmitted(),
        })
    }, [])
    return (
        <Layout location={props.location} minimal={true}>
            <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js" />
            <div className="landing-page bg-white text-dark">
                <div className="container-lg py-6 px-5">
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-12"> 
                            <h1>Free ebook: Universal code search and intelligence</h1>
                            <h3>How to increase programming productivity and improve code quality</h3>
                            <p>&nbsp;</p>
                        </div>
                    </div>              
                    <div className="row flex-wrap-reverse">
                        <div className="col-md-4">
                            <p>By Quinn Slack and Beyang Liu</p>
                            <p>Highly productive engineering organizations make searching across massive codebases, comprehending unfamiliar code, and sharing institutional first-order concerns. To achieve this, engineering teams require a
                            tool that provides universal code search.</p>
                            
                            <p>With this ebook, you will learn:</p>
                            <ul>
                                <li>what is universal code search</li>
                                <li>top reasons developers rely on Sourcegraph</li>
                                <li>how to improve code reviews with code navigation</li>
                                <li>why engineering leaders need code search and intelligence for their teams</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <img src="/external-logos/sourcegraph-universal-code-search-ebook-v1.jpg" alt="Download: Universal Code Search and Intelligence" className="landing-page__img" />
                        </div>                 
                        <div className="col-md-4">
                            <h3 className="font-weight-light text-sans-serif">Get your free ebook.</h3>
                            <div className="form mt-5">
                                <div id="hubspotContactForm" className="d-flex justify-center" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}) as React.FunctionComponent<any>
