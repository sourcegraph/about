import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { Layout, CustomerLogos, HubSpotForm } from '../../components'

import { slugs, slugData, type ContactPageProps } from './data'

/**
 * This is a contact page slug template. The data used to generate these pages
 * can be found in data.ts.
 */
const ContactPage: NextPage<ContactPageProps> = ({ title, description, masterFormName, formId }) => (
    <Layout
        minimal={true}
        meta={{
            title: `Sourcegraph - ${title}`,
            description,
        }}
    >
        <div className="bg-white text-dark">
            <div className="px-5 py-5 container-xl">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{title}</h1>
                        <h3 className="font-weight-light">{description}</h3>

                        <div className="mt-5">
                            <HubSpotForm masterFormName={masterFormName} formId={formId} chiliPiper={true} />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <CustomerLogos />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default ContactPage

export const getStaticPaths: GetStaticPaths = () => {
    if (!slugs) {
        return { paths: [{ params: { slug: ['404'] } }], fallback: false }
    }

    const paths = slugs.map(slug => ({ params: { slug: slug.split('/') } }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = ({ params }) => ({
    props: (params?.slug && slugData[params?.slug[0]]) || {},
})
