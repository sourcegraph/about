import React from 'react'
import { ContactPresalesSupportAction } from './ContactPresalesSupportAction'
import { GetStartedAction } from './GetStartedAction'
import { ViewDeveloperDocumentationAction } from './ViewDeveloperDocumentationAction'

export const GetSourcegraphNowActions: React.FunctionComponent<any> = () => (
    <div className="d-flex justify-content-center w-100 pt-2 mb-3">
        <div
            className="flex-0 rounded rounded-lg px-4"
            style={{
                backgroundColor: 'rgba(0,0,0,1)',
                boxShadow: 'rgba(255,255,255,0.3) 0 0 30px 20px',
            }}
        >
            <GetStartedAction className="mt-4" />
            <ContactPresalesSupportAction className="text-light mt-2" />
            <ViewDeveloperDocumentationAction className="text-light mt-1 mb-3" />
        </div>
    </div>
)
