import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { Layout, CustomerLogos, HubSpotForm, ContentSection } from '../../components'

import { slugs, slugData, type ContactPageProps } from './data'

/**
 * This is a contact page slug template. The data used to generate these pages
 * can be found in data.ts.
 */
const ContactPage: NextPage<ContactPageProps> = ({ title, description, masterFormName, formId }) => (
    <Layout
        meta={{
            title: `Sourcegraph - ${title}`,
            description,
        }}
        headerColorTheme="purple"
        className='sg-bg-radial-space'
    >
        <ContentSection className="relative md:pb-4">
            <div className="relative z-10 grid grid-cols-1 gap-md md:grid-cols-2">
                <div className='order-2 md:order-1'>
                    <CustomerLogos dark={true} monochrome={true} className="!bg-transparent" />
                </div>
                <div className='order-1 md:order-2 rounded-[10px] bg-gray-50 shadow-xl pt-6 pb-0 pl-6 pr-[1px] md:pt-12 md:pb-[13px] md:pl-16 md:pr-[30px]'>
                    <h2 className='mb-6 text-gray-700'>{title}</h2>
                    <h3 className="font-normal text-[18px] text-gray-500">{description}</h3>

                    <div className="mt-5">
                        <HubSpotForm masterFormName={masterFormName} formId={formId} chiliPiper={true} />
                    </div>
                </div>
            </div>
            <img className='absolute top-80 z-5 max-w-[80%] left-1/2 transform -translate-x-1/2' src='/backgrounds/background-contact.svg' alt='' aria-hidden={true}/>
        </ContentSection>
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
