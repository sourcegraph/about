import React, { FunctionComponent } from 'react'

import styles from './CodeCompletions.module.css'
import CodyAnswer from './components/CodyAnswer'
import { Commits } from './components/Commits'

const SummarizeCode: FunctionComponent = () => {
 
    const codyAnswer =
        'This code updates the `getTotal` function. Retrieve tax by calling\n`getTaxPercent` and applying it using a math equation.'

    return (
        <div>
            <div className={styles.slideIn}>
                <Commits />
            </div>

            <div style={{ position: 'relative', left: '100px', top: '-5px' }} className={styles.slideIn}>
                <CodyAnswer text={codyAnswer} width="510px" />
            </div>
        </div>
    )
}

export default SummarizeCode
