import React from 'react'

import { ContactPresalesSupportAction } from './ContactPresalesSupportAction'
import { RequestDemoAction } from './RequestDemoAction'
import { ViewDeveloperDocumentationAction } from './ViewDeveloperDocumentationAction'

const styles = {
    inner: `
        backgroundColor: 'rgba(0,0,0,1)',
        boxShadow: 'rgba(255,255,255,0.3) 0 0 30px 20px'
    `
}

export const GetSourcegraphNowActions: React.FunctionComponent = () => (
    <div className="d-flex justify-content-center w-100 pt-2 my-3">
        <div className={`flex-0 rounded rounded-lg py-4 px-6 ${styles.inner}`}>
            <RequestDemoAction className="mt-4" />
            <ContactPresalesSupportAction className="text-light mt-3" />
            <ViewDeveloperDocumentationAction className="text-light mt-2 mb-3" />
        </div>
    </div>
)
