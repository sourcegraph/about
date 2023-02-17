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
        <div className="tw-bg-white tw-text-black">
            <div className="tw-px-8 tw-py-8 xl:tw-container tw-mx-auto">
                <div className="tw-grid tw-gap-md tw-grid-cols-1 md:tw-grid-cols-2">
                    <div>
                        <h1>{title}</h1>
                        <h3 className="tw-font-normal">{description}</h3>

                        <div className="tw-mt-8">
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
