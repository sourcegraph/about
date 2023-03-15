import { FunctionComponent } from 'react'

import classNames from 'classnames'

import { Heading } from '../Heading'
import { HubSpotForm } from '../HubSpotForm'

import styles from './Starship.module.scss'

export const RegisterEmailSection: FunctionComponent = () => (
    <div className="flex-col">
        <Heading size="h4" className="text-white">
            Register for the event:
        </Heading>

        <div className={classNames('mx-auto mt-6 md:max-w-[491px] md:px-10', styles.container)}>
            <HubSpotForm
                formId="93419890-2b5e-4109-ad13-0fd2ee0c1607"
                inlineMessage="Thanks for registering for Starship! You will receive event updates and product announcements from Sourcegraph in your email."
            />
        </div>
    </div>
)
