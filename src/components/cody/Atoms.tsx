import React, { FunctionComponent } from 'react'

import styles from './cody-illustrations/CodeCompletions.module.css'

export const Cursor: FunctionComponent = (): JSX.Element => <span className={styles.cursor} />

export const CodyLogo: FunctionComponent = (): JSX.Element => (
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.7002 4C17.9428 4 18.9502 5.00016 18.9502 6.23393L18.9502 10.2054C18.9502 11.4391 17.9428 12.4393 16.7002 12.4393C15.4576 12.4393 14.4502 11.4391 14.4502 10.2054L14.4502 6.23393C14.4502 5.00016 15.4576 4 16.7002 4Z"
            fill="white"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.44995 9.21293C2.44995 7.97917 3.45731 6.979 4.69995 6.979H8.69994C9.94258 6.979 10.9499 7.97917 10.9499 9.21293C10.9499 10.4467 9.94258 11.4469 8.69994 11.4469H4.69995C3.45731 11.4469 2.44995 10.4467 2.44995 9.21293Z"
            fill="white"
        />
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0774 15.716C22.8783 16.4713 22.9107 17.7282 22.1499 18.5233L21.442 19.2631C15.9025 25.0526 6.56334 24.9084 1.20783 18.9506C0.472334 18.1324 0.54415 16.8772 1.36824 16.1469C2.19232 15.4167 3.45661 15.488 4.19211 16.3062C7.9902 20.5314 14.6134 20.6337 18.542 16.5278L19.25 15.788C20.0107 14.9929 21.2766 14.9607 22.0774 15.716Z"
            fill="white"
        />
    </svg>
)
