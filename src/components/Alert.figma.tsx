import React from 'react'

import figma from '@figma/code-connect'

import { Alert } from './Alert'

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(Alert, 'https://www.figma.com/design/o1QRtdQI0ozKq0n7ATrKlx/Marketing-DLS?node-id=3284%3A20649', {
    props: {
        type: figma.enum('Type', {
            Default: 'default',
            'Additional content': 'additional-content',
            'Action buttons': 'action-buttons',
        }),
        icon: figma.boolean('Icon'),
        dismissButton: figma.boolean('Dismiss Button'),
        color: figma.enum('Color', {
            Success: 'success',
            Info: 'info',
            Warning: 'warning',
            Dark: 'dark',
            Danger: 'danger',
        }),
        darkmode: figma.boolean('Dark mode'),
    },
    example: props => (
        <Alert
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            type={props.type}
            color={props.color}
            darkmode={props.darkmode}
            dismissButton={props.dismissButton}
            icon={props.icon}
        >
            Alert
        </Alert>
    ),
})
