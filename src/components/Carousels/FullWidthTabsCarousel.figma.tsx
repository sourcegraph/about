import React from 'react'

import figma from '@figma/code-connect'

import { ContentEnum, FullWidthTabsCarousel } from './fullWidthTabsCarousel'

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
    FullWidthTabsCarousel,
    'https://www.figma.com/design/o1QRtdQI0ozKq0n7ATrKlx/Marketing-DLS?node-id=15334-11151&m=dev',
    {
        props: {
            breakpoint: figma.enum('Breakpoint', {
                Desktop: 'desktop',
                Mobile: 'mobile',
            }),
            darkMode: figma.boolean('Dark mode'),
            content: figma.enum('Content', {
                Media: ContentEnum.Media,
                Copy: ContentEnum.Copy,
            }),
        },
        example: props => <FullWidthTabsCarousel items={[]} content={props.content} darkMode={props.darkMode} />,
    }
)
