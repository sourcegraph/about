import { FunctionComponent } from 'react'

import classNames from 'classnames'

import styles from './Chart.module.css'

interface ChartRow {
    name: string
    value: number
}

interface Props {
    rows: ChartRow[]
}

export const Chart: FunctionComponent<Props> = ({ rows }) => {
    const maxValue = Math.max(...rows.map(row => row.value))

    return (
        <div className={classNames(styles['chart-container'])}>
            {rows.map(({ name, value }, index) => (
                <>
                    {/* eslint-disable react/forbid-dom-props */}
                    <code className={styles['chart-text']} key={name + '-text'} style={{ gridRow: index + 1 }}>
                        {name}
                    </code>
                    {/* eslint-disable react/forbid-dom-props */}
                    <div
                        className={styles['chart-bar']}
                        key={name + '-bar'}
                        style={{
                            gridRow: index + 1,
                            width: ((value / maxValue) * 100).toString() + '%',
                        }}
                    >
                        <span>{(value / 1000000).toPrecision(2)}M vec/s</span>
                    </div>
                </>
            ))}
        </div>
    )
}
