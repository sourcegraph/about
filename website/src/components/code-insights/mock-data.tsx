import { DATA_SERIES_COLORS } from './constants'
import { CaptureGroupInsightData, SearchInsightData } from './types'
import React from 'react'

import styles from './CodeInsightsExamples.module.scss'

export const SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA: SearchInsightData = {
    title: 'Migration to CSS modules',
    repositories: (
        <>
            <span className={styles.keyword}>repo:</span>github.com/awesomeOrg/examplerepo
        </>
    ),
    data: [
        { x: 1588965700286 - 4 * 24 * 60 * 60 * 1000, a: 88, b: 410 },
        { x: 1588965700286 - 3 * 24 * 60 * 60 * 1000, a: 95, b: 410 },
        { x: 1588965700286 - 2 * 24 * 60 * 60 * 1000, a: 110, b: 315 },
        { x: 1588965700286 - 1.5 * 24 * 60 * 60 * 1000, a: 160, b: 180 },
        { x: 1588965700286 - 1.3 * 24 * 60 * 60 * 1000, a: 310, b: 90 },
        { x: 1588965700286 - 1 * 24 * 60 * 60 * 1000, a: 520, b: 45 },
        { x: 1588965700286, a: 700, b: 10 },
    ],
    series: [
        {
            dataKey: 'a',
            name: 'CSS Modules',
            stroke: DATA_SERIES_COLORS.GREEN,
            query: (
                <>
                    <span className={styles.keyword}>type:</span>file <span className={styles.keyword}>lang:</span>scss{' '}
                    <span className={styles.keyword}>file:</span>module.scss{' '}
                    <span className={styles.keyword}>patterntype:</span>regexp{' '}
                    <span className={styles.keyword}>archived:</span>no <span className={styles.keyword}>fork:</span>no
                </>
            ),
        },
        {
            dataKey: 'b',
            name: 'Global CSS',
            stroke: DATA_SERIES_COLORS.RED,
            query: (
                <>
                    <span className={styles.keyword}>type:</span>file <span className={styles.keyword}>lang:</span>scss{' '}
                    <span className={styles.keyword}>-file:</span>module.scss{' '}
                    <span className={styles.keyword}>patterntype:</span>regexp{' '}
                    <span className={styles.keyword}>archived:</span>no <span className={styles.keyword}>fork:</span>no
                </>
            ),
        },
    ],
    xAxis: {
        dataKey: 'x',
        scale: 'time',
        type: 'number',
    },
}

export const CAPTURE_INSIGHT_TERRAFORM_EXAMPLES_DATA: CaptureGroupInsightData = {
    title: 'Terraform versions (present or most popular)',
    repositories: 'All repositories',
    query: (
        <>
            app.terraform.io/(.*)\\n version =(.*)([0-9].[0-9].[0-9])
            <span className={styles.keyword}>lang:</span>Terraform <span className={styles.keyword}>lang:</span>scss{' '}
            <span className={styles.keyword}>archived:</span>no <span className={styles.keyword}>fork:</span>no
        </>
    ),
    data: [
        { x: 1588965700286 - 6 * 24 * 60 * 60 * 1000, a: 200, b: 160, c: 150, d: 75, e: 45, f: 20 },
        { x: 1588965700286 - 5 * 24 * 60 * 60 * 1000, a: 200, b: 160, c: 150, d: 75, e: 60, f: 20 },
        { x: 1588965700286 - 4 * 24 * 60 * 60 * 1000, a: 200, b: 160, c: 150, d: 75, e: 45, f: 20 },
        { x: 1588965700286 - 3 * 24 * 60 * 60 * 1000, a: 200, b: 160, c: 150, d: 75, e: 45, f: 20 },
        { x: 1588965700286 - 2 * 24 * 60 * 60 * 1000, a: 200, b: 160, c: 150, d: 75, e: 45, f: 20 },
        { x: 1588965700286 - 1 * 24 * 60 * 60 * 1000, a: 200, b: 160, c: 150, d: 75, e: 45, f: 20 },
        { x: 1588965700286, a: 200, b: 160, c: 150, d: 75, e: 45, f: 20 },
    ],
    series: [
        {
            dataKey: 'a',
            name: '17.3.1',
            stroke: DATA_SERIES_COLORS.ORANGE,
        },
        {
            dataKey: 'b',
            name: '17.3.0',
            stroke: DATA_SERIES_COLORS.BLUE,
        },
        {
            dataKey: 'c',
            name: '17.2.0',
            stroke: DATA_SERIES_COLORS.RED,
        },
        {
            dataKey: 'd',
            name: '17.1.1',
            stroke: DATA_SERIES_COLORS.GREEN,
        },
        {
            dataKey: 'e',
            name: '17.1.0',
            stroke: DATA_SERIES_COLORS.CYAN,
        },
        {
            dataKey: 'f',
            name: '17.0.1',
            stroke: DATA_SERIES_COLORS.GRAPE,
        },
    ],
    xAxis: {
        dataKey: 'x',
        scale: 'time' as const,
        type: 'number',
    },
}
