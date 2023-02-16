import SignDirectionIcon from 'mdi-react/SignDirectionIcon'

import { Layout } from '../../components'

import styles from './404.module.scss'

const Custom404: React.FunctionComponent = () => (
    <Layout className="tw-bg-white">
        <div className={`${styles.errorPage} tw-flex tw-flex-col tw-items-center tw-justify-center tw-text-black`}>
            <div className={`${styles.circle} tw-rounded-full`}>
                <div className={`${styles.icon} tw-my-0 tw-mx-auto`}>
                    <SignDirectionIcon />
                </div>
            </div>

            <h1>404: Not Found</h1>
            <p>Sorry, the requested URL was not found.</p>
        </div>
    </Layout>
)

export default Custom404
