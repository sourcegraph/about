import { Link } from 'gatsby'
import LockIcon from 'mdi-react/LockIcon'
import React from 'react'
import { IconItem } from '../IconItem'

export const OpenSourcePrivacyFeatureItem: React.FunctionComponent<{}> = () => (
    <IconItem className="position-relative" icon={LockIcon} color="primary">
        <h4>Open source, self-managed, &amp; privacy-respectful</h4>
        <p>
            Sourcegraph is{' '}
            <a href="https://docs.sourcegraph.com/#quickstart" target="_blank">
                self-hosted
            </a>
            , so your code never leaves your network. And it's{' '}
            <a href="https://github.com/sourcegraph/sourcegraph" target="_blank">
                open source
            </a>{' '}
            (Apache 2.0), so you can verify this. (If you prefer not to self-manage your instance, we offer{' '}
            <Link to="/pricing">cloud-managed deployment</Link> too.)
        </p>
    </IconItem>
)
