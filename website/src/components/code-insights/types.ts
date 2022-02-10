import {
    LineChartContent as LineChartContentType,
    LineChartContent,
    LineChartSeries,
} from './components/line-chart/types'
import { ReactNode } from 'react'

interface SeriesWithQuery extends LineChartSeries<any> {
    query: ReactNode
    name: string
}

export enum CodeInsightExampleType {
    Search,
    Capture,
}

export interface SearchInsightData extends Omit<LineChartContentType<any, string>, 'chart' | 'series'> {
    title: ReactNode
    repositories: ReactNode
    series: SeriesWithQuery[]
}

export interface CaptureGroupInsightData extends Omit<LineChartContent<any, string>, 'chart'> {
    title: ReactNode
    repositories: ReactNode
    query: ReactNode
}
