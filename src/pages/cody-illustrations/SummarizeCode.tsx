/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent, useEffect, useState } from 'react'

import styles from './CodeCompletions.module.css'
import CodyAnswer from './components/CodyAnswer'
import { Commits } from './components/Commits'

interface SummarizeCodeProps {
    answerDelay?: number
}

const SummarizeCode: FunctionComponent<SummarizeCodeProps> = ({ answerDelay = 0 }) => {
    const [shouldRender, setShouldRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setShouldRender(true)
        }, answerDelay * 1000)

        return () => clearTimeout(timer)
    }, [answerDelay])

    const codyAnswer =
        'This commit enhances the `getTotal` function. Add tax calculation\nby calling `getTaxPercent` and applying it using a math equation.'

    return (
        <div>
            <div className={styles.slideInFromRight}>
                <Commits />
            </div>

            {shouldRender && (
                <div style={{ position: 'relative', left: '40px', top: '-10px' }} className={styles.slideInFromRight}>
                    <CodyAnswer text={codyAnswer} width="520px" />
                </div>
            )}
        </div>
    )
}

export default SummarizeCode
