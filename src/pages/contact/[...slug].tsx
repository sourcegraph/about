import { useState } from 'react'

import classNames from 'classnames'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'

import { Layout, CustomerLogos, HubSpotForm, ContentSection } from '../../components'

import { slugs, slugData, type ContactPageProps } from './data'

/**
 * This is a contact page slug template. The data used to generate these pages
 * can be found in data.ts.
 */
const ContactPage: NextPage<ContactPageProps> = ({
    title,
    description,
    masterFormName,
    formId,
    form_submission_source,
}) => {
    const [formSubmitted, setFormSubmitted] = useState(false)

    return (
        <Layout
            meta={{
                title: `Sourcegraph - ${title}`,
                description,
            }}
            headerColorTheme="purple"
            className="sg-bg-radial-space"
        >
            <ContentSection className="relative md:pb-4">
                <div className="relative z-10 flex flex-col items-baseline gap-md md:flex-row">
                    <div className="order-2 flex-1 md:order-1">
                        <CustomerLogos dark={true} monochrome={true} className="!bg-transparent" />
                    </div>
                    <div className="order-1 w-full flex-1 rounded-[10px] bg-gray-50 pt-6 pl-6 pr-[1px] shadow-xl md:order-2 md:max-w-[624px] md:pt-12 md:pb-[13px] md:pl-16 md:pr-[30px]">
                        <h2 className="mb-6 text-gray-700">{title}</h2>
                        <h3 className="text-[18px] font-normal text-gray-500">{description}</h3>

                        <div
                            className={classNames('mt-5', {
                                'pb-[48px]': formSubmitted,
                            })}
                        >
                            <HubSpotForm
                                masterFormName={masterFormName}
                                formId={formId}
                                chiliPiper={false}
                                bookIt={true}
                                {...(form_submission_source && { form_submission_source })}
                                onFormSubmitted={() => setFormSubmitted(true)}
                            />
                        </div>
                    </div>
                </div>
                <img
                    className="z-5 absolute top-80 left-1/2 max-w-[80%] -translate-x-1/2 transform"
                    src="/backgrounds/background-contact.svg"
                    alt=""
                    aria-hidden={true}
                />
            </ContentSection>
        </Layout>
    )
}

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
