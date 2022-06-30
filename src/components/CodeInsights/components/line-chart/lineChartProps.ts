import { MouseEvent } from 'react'

export interface LineChartContentProps<D extends object, XK extends keyof D> {
    chart: 'line'

    /** An array of data objects, with one element for each step on the X axis. */
    data: D[]

    /** The series (lines) of the chart. */
    series: LineChartSeriesProps<D>[]

    xAxis: ChartAxisProps<XK, D>
}

export interface LineChartSeriesProps<D> {
    /** The key in each data object for the values this line should be calculated from. */
    dataKey: keyof D

    /** The name of the line shown in the legend and tooltip. */
    name?: string

    /**
     * The link URLs for each data point.
     * A link URL should take the user to more details about the specific data point.
     */
    linkURLs?: Record<string | number, string> | string[]

    /** The CSS color of the line. */
    stroke?: string
}

export interface ChartAxisProps<K extends keyof D, D extends object> {
    /** The key in the data object. */
    dataKey: K

    /** The scale of the axis. */
    scale?: 'time' | 'linear'

    /** The type of the data key. */
    type: 'number' | 'category'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type YAccessor<Datum> = (data: Datum) => any

export interface LineChartSeriesWithDataProps<Datum> extends LineChartSeriesProps<Datum> {
    data: PointProps[]
}

export interface PointProps {
    x: Date | number
    y: number | null
}

/** Accessors map for getting values for x and y axes from datum object */
export interface AccessorsProps<Datum, Key extends keyof Datum> {
    x: (d: Datum) => Date | number
    y: Record<Key, YAccessor<Datum>>
}

export interface DatumZoneClickEventProps {
    originEvent: MouseEvent<unknown>
    link?: string
}

export type onDatumZoneClick = (event: DatumZoneClickEventProps) => void
