import React from 'react'

import { ParentSize } from '@visx/responsive'
import classNames from 'classnames'

import { CodeInsightsQueryBlock } from './components/CodeInsightsQueryBlock'
import { LegendBlock, LegendItem } from './components/legend/CodeInsightLegend'
import { getLineStroke } from './components/line-chart/constants'
import { LineChart } from './components/line-chart/LineChart'
import { LineChartSeries } from './components/line-chart/types'
import { View } from './components/view/View'
import { CaptureGroupInsightData, CodeInsightExampleType, SearchInsightData } from './types'

import styles from './CodeInsightsExamples.module.scss'

export type CodeInsightExampleProps = CodeInsightSearchExampleProps | CodeInsightCaptureExampleProps

export interface CodeInsightSearchExampleProps {
    type: CodeInsightExampleType.Search
    data: SearchInsightData
    className?: string
}

export interface CodeInsightCaptureExampleProps {
    type: CodeInsightExampleType.Capture
    data: CaptureGroupInsightData
    className?: string
}

export const CodeInsightExample: React.FunctionComponent<CodeInsightExampleProps> = props => {
    const { type } = props

    if (type === CodeInsightExampleType.Search) {
        return <CodeInsightSearchExample {...props} />
    }

    return <CodeInsightCaptureExample {...props} />
}

const CodeInsightSearchExample: React.FunctionComponent<CodeInsightSearchExampleProps> = props => {
    const { className, data } = props

    return (
        <View
            title={data.title}
            subtitle={<CodeInsightsQueryBlock className="mt-1">{data.repositories}</CodeInsightsQueryBlock>}
            className={classNames(className, styles.card)}
        >
            <div className={styles.chart}>
                <ParentSize className={styles.searchChart}>
                    {({ width, height }) => <LineChart {...data} width={width} height={height} />}
                </ParentSize>
            </div>

            <LegendBlock className={styles.legend}>
                {data.series.map(line => (
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    <LegendItem key={line.dataKey.toString()} color={getLineStroke<any>(line)}>
                        <span className={classNames(styles.legendMigrationItem, 'mr-2 shrink-0')}>{line.name}</span>
                        <CodeInsightsQueryBlock>{line.query}</CodeInsightsQueryBlock>
                    </LegendItem>
                ))}
            </LegendBlock>
        </View>
    )
}

const CodeInsightCaptureExample: React.FunctionComponent<CodeInsightCaptureExampleProps> = props => {
    const { className, data } = props

    return (
        <View
            title={data.title}
            subtitle={<CodeInsightsQueryBlock className="mt-1">All repositories</CodeInsightsQueryBlock>}
            className={classNames(className, styles.card)}
        >
            <div className={styles.captureGroup}>
                <div className={styles.chart}>
                    <ParentSize className={styles.chartContent}>
                        {({ width, height }) => <LineChart {...data} width={width} height={height} />}
                    </ParentSize>
                </div>

                <LegendBlock className={classNames(styles.legend, 'horizontal')}>
                    {data.series.map(line => (
                        <LegendItem key={line.dataKey.toString()} color={getLineStroke<LineChartSeries<string>>(line)}>
                            {line.name}
                        </LegendItem>
                    ))}
                </LegendBlock>
            </div>
            <CodeInsightsQueryBlock className="mt-2">{data.query}</CodeInsightsQueryBlock>
        </View>
    )
}
