/* eslint-disable react/forbid-dom-props */
import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodyAnswer from './components/CodyAnswer'
import { Commits } from './components/Commits'

const SummarizeCode: FunctionComponent = () => {
    const codyAnswer =
        'This commit enhances the `getTotal` function. Add tax calculation\nby calling `getTaxPercent` and applying it using a math equation.'

    return (
        <div>
            <div className={styles.slideIn}>
                <Commits />
            </div>

            <div style={{ position: 'relative', left: '40px', top: '-10px' }} className={styles.slideIn}>
                <CodyAnswer text={codyAnswer} width="520px" />
            </div>
        </div>
    )
}

export default SummarizeCode
