import { ReactNode } from 'react'

import {
    LineChartContentProps as LineChartContentTypeProps,
    LineChartContentProps,
    LineChartSeriesProps,
} from './components/line-chart/lineChartProps'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SeriesWithQueryProps extends LineChartSeriesProps<any> {
    query: ReactNode
    name: string
}

export enum CodeInsightExampleType {
    Search,
    Capture,
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface SearchInsightDataProps extends Omit<LineChartContentTypeProps<any, string>, 'chart' | 'series'> {
    title: ReactNode
    repositories: ReactNode
    series: SeriesWithQueryProps[]
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CaptureGroupInsightDataProps extends Omit<LineChartContentProps<any, string>, 'chart'> {
    title: ReactNode
    repositories: ReactNode
    query: ReactNode
}
