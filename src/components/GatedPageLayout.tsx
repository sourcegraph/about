import { FunctionComponent } from 'react'

import { useRouter } from 'next/router'

import { ContentSection } from './ContentSection'
import { CustomerLogos } from './CustomerLogos'
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
    actionPage: 'cody-context-architecture' | 'ai-powers-cody' | 'big-code' | 'forrester-tei'
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
    ogImage,
    actionPage,
}) => {
    const router = useRouter()

    const onFormSubmitted = (): void => {
        router
            .push({
                pathname: `/resource-thank-you/${actionPage}`,
            })
            .catch(error => {
                console.error('Error pushing', error)
            })
    }
    return (
        <Layout
            meta={{
                title,
                description,
                image: ogImage,
            }}
            headerColorTheme="dark"
            className="bg-gray-700"
            heroAndHeaderClassName="!pt-[96px] md:!pt-[128px]"
        >
            {pageType === 'A' ? (
                <>
                    <ContentSection
                        parentClassName="!py-0"
                        className="relative flex flex-col gap-[50px] pb-16 text-white md:flex-row xl:px-6"
                    >
                        <div className="max-w-[703px] py-8">
                            <h6>{type}</h6>
                            <h1 className="mt-2">{title}</h1>
                            <h3 className="mt-8 max-w-[628px]">{description}</h3>
                        </div>
                        <div className="sg-bg-whitepaper-image absolute bottom-[150px] top-0 right-0 h-[490px] w-[300px] md:w-[510px]" />
                        <img src={image} alt="Whitepaper" className="z-10 hidden md:block" />
                    </ContentSection>
                    <ContentSection
                        parentClassName="!py-0 relative z-10"
                        className="pt-16 pb-4 md:pb-12 xl:px-6"
                        background="white"
                    >
                        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row">
                            <div className="max-w-[628px]">{outlineContent}</div>
                            <div className="w-full rounded-lg border border-gray-500 bg-gray-100 pt-10 pb-1 pl-8 md:max-w-[580px]">
                                <h4 className="mb-6">Download the whitepaper</h4>
                                <div className={styles.gatedPageForm}>
                                    <HubSpotForm
                                        formId={formId}
                                        onFormSubmitted={onFormSubmitted}
                                        overrideFormShorten={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <h2 className="mx-auto mt-[128px] max-w-2xl text-center md:mt-[96px]">
                            Sourcegraph is trusted by the world’s leading enterprises
                        </h2>
                        <CustomerLogos monochrome={true} />
                    </ContentSection>
                </>
            ) : (
                <ContentSection
                    parentClassName="!py-0"
                    className="flex flex-col justify-between gap-[96px] pb-16 md:flex-row md:gap-[50px] xl:px-6"
                >
                    <div className="relative flex max-w-[662px] flex-col gap-[64px] pt-8 text-white md:py-8">
                        <div>
                            <h6>{type}</h6>
                            <h1 className="mt-2 !text-[57px]">{title}</h1>
                            <h3 className="mt-8 max-w-[628px]">{description}</h3>
                        </div>
                        <div className="sg-bg-whitepaper-image absolute right-0 h-[490px] w-[300px] md:left-0 md:bottom-[100px] md:w-[510px]" />
                        <img
                            src={image}
                            alt="Whitepaper"
                            className="z-10 hidden max-h-[309px]  max-w-[464px] md:block"
                        />
                    </div>

                    <div className="z-10 h-fit w-full rounded-lg border border-gray-500 bg-gray-100 pt-10 pb-1 pl-8 md:max-w-[580px]">
                        <h4 className="mb-6 text-black">Download the whitepaper</h4>
                        <div className={styles.gatedPageForm}>
                            <HubSpotForm formId={formId} onFormSubmitted={onFormSubmitted} overrideFormShorten={true} />
                        </div>
                    </div>
                </ContentSection>
            )}
        </Layout>
    )
}
