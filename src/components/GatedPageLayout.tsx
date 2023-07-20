import { FunctionComponent } from 'react'

import { ContentSection } from './ContentSection'
import { CustomerLogos } from './CustomerLogos'
import { Heading } from './Heading'
import { HubSpotForm } from './HubSpotForm'
import { Layout } from './Layout/Layout'

import styles from '../styles/CustomHubspotForm.module.scss'

interface Props {
    pageType: 'A' | 'B'
    type: string
    title: string
    description: string
    image: string
    outlineContent?: React.ReactNode
    formId: string
    formInlineMessage: string
    ogImage: string
}

export const GatedPageLayout: FunctionComponent<Props> = ({
    pageType,
    type,
    title,
    description,
    image,
    outlineContent,
    formId,
    formInlineMessage,
    ogImage,
}) => (
    <Layout
        meta={{
            title,
            description,
            image: ogImage,
        }}
        headerColorTheme="dark"
        childrenClassName="bg-gray-700"
        displayChildrenUnderNav={true}
    >
        {pageType === 'A' ? (
            <>
                <ContentSection
                    parentClassName="!py-0"
                    className="relative flex flex-col gap-[50px] pb-16 text-white md:flex-row xl:px-6"
                >
                    <div className="max-w-[703px] py-8">
                        <Heading size="h6" className="">
                            {type}
                        </Heading>
                        <Heading size="h1" className="mt-2 !text-[57px]">
                            {title}
                        </Heading>
                        <Heading size="h3" className="mt-8 max-w-[628px]">
                            {description}
                        </Heading>
                    </div>
                    <div className="sg-bg-whitepaper-image absolute bottom-[150px] top-0 right-0 hidden h-[490px] w-[510px] md:block" />
                    <img src={image} alt="Whitepaper" className="z-10 hidden md:block" />
                </ContentSection>
                <ContentSection
                    parentClassName="!py-0 relative z-10"
                    className="pt-16 pb-24 xl:px-6"
                    background="white"
                >
                    <div className="flex flex-col justify-between gap-6 md:flex-row">
                        <div className="max-w-[628px]">{outlineContent}</div>
                        <div className="w-full rounded-lg border border-gray-500 bg-gray-100 pt-10 pb-1 pl-8 md:max-w-[580px]">
                            <Heading size="h4" className="mb-6">
                                Download the whitepaper
                            </Heading>
                            <div className={styles.gatedPageForm}>
                                <HubSpotForm formId={formId} inlineMessage={formInlineMessage} />
                            </div>
                        </div>
                    </div>

                    <Heading size="h2" className="mx-auto mt-[96px] max-w-2xl text-center">
                        Sourcegraph is trusted by the world’s leading enterprises
                    </Heading>
                    <CustomerLogos monochrome={true} />
                </ContentSection>
            </>
        ) : (
            <ContentSection
                parentClassName="!py-0"
                className="flex flex-col justify-between gap-[50px] pb-16 md:flex-row xl:px-6"
            >
                <div className="relative flex max-w-[662px] flex-col gap-[64px] py-8 text-white">
                    <div>
                        <Heading size="h6" className="">
                            {type}
                        </Heading>
                        <Heading size="h1" className="mt-2 !text-[57px]">
                            {title}
                        </Heading>
                        <Heading size="h3" className="mt-8 max-w-[628px]">
                            {description}
                        </Heading>
                    </div>
                    <div className="sg-bg-whitepaper-image absolute bottom-[100px] hidden h-[490px] w-[510px] md:block" />
                    <img src={image} alt="Whitepaper" className="z-10 hidden max-h-[309px]  max-w-[464px] md:block" />
                </div>

                <div className="z-10 h-fit w-full rounded-lg border border-gray-500 bg-gray-100 pt-10 pb-1 pl-8 md:max-w-[580px]">
                    <Heading size="h4" className="mb-6 text-black">
                        Download the whitepaper
                    </Heading>
                    <div className={styles.gatedPageForm}>
                        <HubSpotForm formId={formId} inlineMessage={formInlineMessage} />
                    </div>
                </div>
            </ContentSection>
        )}
    </Layout>
)
