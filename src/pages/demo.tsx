import React, { FunctionComponent } from 'react'

import { TelemetryProps } from '../telemetry'

import DemoCodyPage from './demo/cody'

const Demo: FunctionComponent<TelemetryProps> = ({ telemetryRecorder }) => (
    <DemoCodyPage telemetryRecorder={telemetryRecorder} />
)

export default Demo
