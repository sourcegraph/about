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
        <div className="bg-white text-black">
            <div className="mx-auto px-8 py-8 xl:container">
                <div className="grid grid-cols-1 gap-md md:grid-cols-2">
                    <div>
                        <h1>{title}</h1>
                        <h3 className="font-normal">{description}</h3>

                        <div className="mt-8">
                            <HubSpotForm masterFormName={masterFormName} formId={formId} chiliPiper={true} />
                        </div>
                    </div>

                    <div>
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
