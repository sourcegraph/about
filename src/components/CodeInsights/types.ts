import { ReactNode } from 'react'

import {
    LineChartContent as LineChartContentType,
    LineChartContent,
    LineChartSeries,
} from './components/line-chart/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SeriesWithQuery extends LineChartSeries<any> {
    query: ReactNode
    name: string
}

export enum CodeInsightExampleType {
    Search,
    Capture,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SearchInsightData extends Omit<LineChartContentType<any, string>, 'chart' | 'series'> {
    title: ReactNode
    repositories: ReactNode
    series: SeriesWithQuery[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CaptureGroupInsightData extends Omit<LineChartContent<any, string>, 'chart'> {
    title: ReactNode
    repositories: ReactNode
    query: ReactNode
}
