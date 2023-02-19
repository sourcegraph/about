import SignDirectionIcon from 'mdi-react/SignDirectionIcon'

import { Layout } from '../../components'

import styles from './404.module.scss'

const Custom404: React.FunctionComponent = () => (
    <Layout headerColorTheme="white">
        <div className={`${styles.errorPage} flex flex-col items-center justify-center text-black`}>
            <div className={`${styles.circle} rounded-full`}>
                <div className={`${styles.icon} my-0 mx-auto`}>
                    <SignDirectionIcon />
                </div>
            </div>

            <h1>404: Not Found</h1>
            <p>Sorry, the requested URL was not found.</p>
        </div>
    </Layout>
)

export default Custom404
