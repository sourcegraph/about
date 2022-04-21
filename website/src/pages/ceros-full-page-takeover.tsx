import React, { FunctionComponent } from 'react'
import { PageProps } from 'gatsby'

import Layout from '../components/Layout'

const CerosFullPageTakeover: FunctionComponent<PageProps> = props => (
    <Layout location={props.location}>
        <div className="container py-3">
            <div style={{ position: 'relative', width: 'auto', padding: '0 0 664.06%', height: '0', top: '0', left: '0', bottom: '0', right: '0', margin: '0', border: '0 none' }} id="experience-625dbfd57c7de" data-aspectratio="0.15058824" data-mobile-aspectratio="0.05080655">
                <iframe allowFullScreen src='//[view.ceros.com/sourcegraph/full-page?heightOverride=8500&mobileHeightOverride=15746](http://view.ceros.com/sourcegraph/full-page?heightOverride=8500&mobileHeightOverride=15746)' style={{ position: 'absolute', top: '0', left: '0', bottom: '0', right: '0', margin: '0', padding: '0', border: '0 none', height: '1px', width: '1px', minHeight: '100%', minWidth: '100%' }} frameBorder='0' className='ceros-experience' title='Test Full Page' scrolling='no'></iframe>
            </div>
            <script type="text/javascript" src="//[view.ceros.com/scroll-proxy.min.js](http://view.ceros.com/scroll-proxy.min.js)" data-ceros-origin-domains="[view.ceros.com](http://view.ceros.com/)"></script>
        </div>
    </Layout>
)

export default CerosFullPageTakeover
