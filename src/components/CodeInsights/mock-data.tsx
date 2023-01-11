import React from 'react'

import { DATA_SERIES_COLORS } from './constants'
import { CaptureGroupInsightData, SearchInsightData } from './types'

import styles from './CodeInsightsExamples.module.scss'

export const LOG_4_J_INCIDENT_INSIGHT: SearchInsightData = {
    title: 'Log4j incident response',
    repositories: (
        <>
            <span className={styles.keyword}>repo:</span>https://github.com/wildcard-org/wc-repo
        </>
    ),
    data: [
        { x: new Date('August 1, 2021'), a: 0, b: 510 },
        { x: new Date('September 1, 2021'), a: 2, b: 440 },
        { x: new Date('October 1, 2021'), a: 35, b: 445 },
        { x: new Date('November 1, 2021'), a: 120, b: 460 },
        { x: new Date('December 1, 2021'), a: 100, b: 430 },
        { x: new Date('January 1, 2022'), a: 120, b: 410 },
        { x: new Date('February 1, 2022'), a: 1500, b: 200 },
    ],
    series: [
        {
            dataKey: 'a',
            name: 'Updated log4j',
            stroke: DATA_SERIES_COLORS.GREEN,
            query: (
                <>
                    <span className={styles.keyword}>lang:</span>gradle org\.apache\.logging\.log4j[\'"]
                    2\.(17)(\.[0-9]+) <span className={styles.keyword}>patterntype:</span>regexp{' '}
                    <span className={styles.keyword}>archived:</span>no <span className={styles.keyword}>fork:</span>no
                </>
            ),
        },
        {
            dataKey: 'b',
            name: 'Vulnerable log4j',
            stroke: DATA_SERIES_COLORS.RED,
            query: (
                <>
                    <span className={styles.keyword}>lang:</span>gradle org\.apache\.logging\.log4j[\'"]
                    2\.(0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16)(\.[0-9]+){' '}
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

export const SEARCH_INSIGHT_CSS_MODULES_EXAMPLES_DATA: SearchInsightData = {
    title: 'Migration to CSS modules',
    repositories: (
        <>
            <span className={styles.keyword}>repo:</span>https://github.com/wildcard-org/wc-repo
        </>
    ),
    data: [
        { x: new Date('May 7, 2021'), a: 88, b: 410 },
        { x: new Date('June 7, 2021'), a: 95, b: 410 },
        { x: new Date('July 7, 2021'), a: 110, b: 315 },
        { x: new Date('August 7, 2021'), a: 160, b: 180 },
        { x: new Date('September 7, 2021'), a: 310, b: 90 },
        { x: new Date('October 7, 2021'), a: 520, b: 45 },
        { x: new Date('November 7, 2021'), a: 700, b: 10 },
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

export const ALPINE_VERSIONS_INSIGHT: CaptureGroupInsightData = {
    title: 'Alpine versions over all repos',
    repositories: 'All repositories',
    query: (
        <>
            <span className={styles.keyword}>patterntype:</span>regexp FROM\s+alpine:([\d\.]+){' '}
            <span className={styles.keyword}>file:</span>Dockerfile
        </>
    ),
    data: [
        { x: new Date('May 7, 2021'), a: 100, b: 160, c: 90, d: 75, e: 85, f: 20, g: 150 },
        { x: new Date('June 7, 2021'), a: 90, b: 155, c: 95, d: 85, e: 80, f: 25, g: 155 },
        { x: new Date('July 7, 2021'), a: 85, b: 150, c: 110, d: 90, e: 60, f: 40, g: 165 },
        { x: new Date('August 7, 2021'), a: 85, b: 150, c: 125, d: 80, e: 50, f: 50, g: 165 },
        { x: new Date('September 7, 2021'), a: 70, b: 155, c: 125, d: 75, e: 45, f: 55, g: 160 },
        { x: new Date('October 7, 2021'), a: 50, b: 150, c: 145, d: 70, e: 35, f: 60, g: 155 },
        { x: new Date('November 7, 2021'), a: 35, b: 160, c: 175, d: 75, e: 45, f: 65, g: 145 },
    ],
    series: [
        {
            dataKey: 'a',
            name: '3.1',
            stroke: DATA_SERIES_COLORS.INDIGO,
        },
        {
            dataKey: 'b',
            name: '3.5',
            stroke: DATA_SERIES_COLORS.RED,
        },
        {
            dataKey: 'c',
            name: '3.15',
            stroke: DATA_SERIES_COLORS.GREEN,
        },
        {
            dataKey: 'd',
            name: '3.8',
            stroke: DATA_SERIES_COLORS.GRAPE,
        },
        {
            dataKey: 'e',
            name: '3.9',
            stroke: DATA_SERIES_COLORS.ORANGE,
        },
        {
            dataKey: 'f',
            name: '3.9.2',
            stroke: DATA_SERIES_COLORS.TEAL,
        },
        {
            dataKey: 'g',
            name: '3.14',
            stroke: DATA_SERIES_COLORS.PINK,
        },
    ],
    xAxis: {
        dataKey: 'x',
        scale: 'time' as const,
        type: 'number',
    },
}

export const DEPRECATED_API_USAGE_BY_TEAM: SearchInsightData = {
    title: 'Deprecated API usage by team',
    repositories: 'All repositories',
    data: [
        { x: new Date('August 1, 2021'), a: 165, b: 125, c: 50 },
        { x: new Date('September 1, 2021'), a: 180, b: 80, c: 70 },
        { x: new Date('October 1, 2021'), a: 125, b: 50, c: 75 },
        { x: new Date('November 1, 2021'), a: 80, b: 70, c: 60 },
        { x: new Date('December 1, 2021'), a: 120, b: 20, c: 55 },
        { x: new Date('January 1, 2022'), a: 140, b: 10, c: 55 },
        { x: new Date('February 1, 2022'), a: 100, b: 10, c: 45 },
    ],
    series: [
        {
            dataKey: 'a',
            name: 'Cloud',
            stroke: DATA_SERIES_COLORS.ORANGE,
            query: (
                <>
                    problemAPI <span className={styles.keyword}>file:</span>CloudDirectory{' '}
                    <span className={styles.keyword}>archived:</span>no <span className={styles.keyword}>fork</span>:no
                </>
            ),
        },
        {
            dataKey: 'b',
            name: 'Core App',
            stroke: DATA_SERIES_COLORS.CYAN,
            query: (
                <>
                    problemAPI <span className={styles.keyword}>file:</span>CoreDirectory{' '}
                    <span className={styles.keyword}>archived:</span>no <span className={styles.keyword}>fork:</span>no
                </>
            ),
        },
        {
            dataKey: 'c',
            name: 'Extensibility',
            stroke: DATA_SERIES_COLORS.GRAPE,
            query: (
                <>
                    problemAPI <span className={styles.keyword}>file:</span>ExtnDirectory{' '}
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

export const LINTER_OVERRIDES: SearchInsightData = {
    title: 'Linter override rules in all repos',
    repositories: 'All repositories',
    data: [
        { x: new Date('August 1, 2021'), a: 6800 },
        { x: new Date('September 1, 2021'), a: 12000 },
        { x: new Date('October 1, 2021'), a: 3200 },
        { x: new Date('November 1, 2021'), a: 3600 },
        { x: new Date('December 1, 2021'), a: 3000 },
        { x: new Date('January 1, 2022'), a: 3100 },
        { x: new Date('February 1, 2022'), a: 14500 },
    ],
    series: [
        {
            dataKey: 'a',
            name: 'Linter overrides',
            stroke: DATA_SERIES_COLORS.RED,
            query: (
                <>
                    <span className={styles.keyword}>file:</span>\.eslintignore .\n{' '}
                    <span className={styles.keyword}>patternType:</span>regexp{' '}
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

export const OPENSSL_PYTHON: SearchInsightData = {
    title: 'Find vulnerable OpenSSL versions in the Python Ecosystem',
    repositories: 'All repositories',
    data: [
        { x: new Date('October 28, 2022'), a: 385 },
        { x: new Date('October 29, 2022'), a: 385 },
        { x: new Date('October 30, 2022'), a: 386 },
        { x: new Date('November 01, 2022'), a: 386 },
        { x: new Date('November 02, 2022'), a: 378 },
        { x: new Date('November 05, 2022'), a: 378 },
        { x: new Date('November 07, 2022'), a: 367 },
    ],
    series: [
        {
            dataKey: 'a',
            name: 'pip/pipenv',
            stroke: DATA_SERIES_COLORS.BLUE,
            query: (
                <>
                    <span className={styles.keyword}>file:</span>requirements.*txt
                    cryptography(\s*[=~]=\s*(36\.|37\.|38\.0\.[0-2])){' '}
                    <span className={styles.keyword}>patternType:</span>regexp{' '}
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

export const REPOS_WITH_CI_SYSTEM: SearchInsightData = {
    title: '# of repos connected to the CI system',
    repositories: 'All repositories',
    data: [
        { x: new Date('August 1, 2021'), a: 60 },
        { x: new Date('September 1, 2021'), a: 60 },
        { x: new Date('October 1, 2021'), a: 120 },
        { x: new Date('November 1, 2021'), a: 80 },
        { x: new Date('December 1, 2021'), a: 200 },
        { x: new Date('January 1, 2022'), a: 325 },
        { x: new Date('February 1, 2022'), a: 480 },
    ],
    series: [
        {
            dataKey: 'a',
            name: 'Connected repos',
            stroke: DATA_SERIES_COLORS.GREEN,
            query: (
                <>
                    <span className={styles.keyword}>file:</span>\.circleci/config.yml{' '}
                    <span className={styles.keyword}>select:</span>repo{' '}
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
