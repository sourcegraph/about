import { FunctionComponent } from 'react'

import CartIcon from 'mdi-react/CartIcon'
import RocketLaunchIcon from 'mdi-react/RocketLaunchIcon'
import UploadIcon from 'mdi-react/UploadIcon'
import Link from 'next/link'

import { ContentSection, Layout, ThreeUpText } from '../../components'
import { BlogListItem } from '../../components/Blog/BlogListItem'

const threeUpTextItems = [
    {
        icon: <RocketLaunchIcon className="mx-auto mb-6 rounded bg-violet-200 p-2 text-violet-400" size={48} />,
        subtitle: <span className="mx-auto px-1 text-center text-white">Optimized to deploy and run on AWS</span>,
        description: (
            <p className="text-base text-white">
                Sourcegraph optimizes and tests its software to run in Customer Managed environments on AWS. Customers
                are able to run Sourcegraph in the same VPC as their code host and maximize the security of their
                software source code.
            </p>
        ),
    },
    {
        icon: <UploadIcon className="mx-auto mb-6 rounded bg-violet-200 p-2 text-violet-400" size={48} />,
        subtitle: <span className="mx-auto px-1 text-center text-white">Deploy via an AMI</span>,
        description: (
            <p className="text-base text-white">
                Sourcegraph{' '}
                <Link
                    href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instances-and-amis.html"
                    target="_blank"
                    className="text-white underline"
                >
                    Amazon Machine Images (AMIs)
                </Link>{' '}
                allow you to quickly deploy a production-ready Sourcegraph instance tuned to your organization's scale
                in just a few clicks. More information is available in Sourcegraph{' '}
                <Link
                    href="https://sourcegraph.com/docs/admin/deploy/machine-images/aws-ami"
                    target="_blank"
                    className="text-white underline"
                >
                    documentation
                </Link>
                .
            </p>
        ),
    },
    {
        icon: <CartIcon className="mx-auto mb-6 rounded bg-violet-200 p-2 text-violet-400" size={48} />,
        subtitle: <span className="mx-auto px-1 text-center text-white">Purchase via the AWS Marketplace</span>,
        description: (
            <p className="text-base text-white">
                AWS customers can purchase Sourcegraph directly through the{' '}
                <Link
                    href="https://aws.amazon.com/marketplace/seller-profile?id=36b4859a-d034-4079-89ed-2ac4d386df23"
                    target="_blank"
                    className="text-white underline"
                >
                    {' '}
                    AWS Marketplace{' '}
                </Link>
            </p>
        ),
    },
]

const caseStudies = [
    {
        heading: 'Case study',
        title: 'Workiva reduces the time it takes to make large-scale code changes',
        href: 'https://sourcegraph.com/case-studies/workiva-automates-large-scale-code-changes',
        description: (
            <p>
                Learn how Workiva uses Sourcegraph Batch Changes to reduce the time it takes to make large-scale code
                updates by 80%.
            </p>
        ),
        imageSrc: '/assets/aws/workiva.svg',
    },
]

const AWS: FunctionComponent = () => (
    <Layout
        headerColorTheme="purple"
        childrenClassName="sg-aws-mobile-bg-gradient md:sg-aws-bg-gradient"
        displayChildrenUnderNav={true}
        meta={{
            image: 'https://sourcegraph.com/assets/aws/sourcegraph_aws.png',
            title: 'AWS',
            description:
                'Sourcegraph has built AMI’s tailored to perform best on AWS—while taking advantage of AWS’s world-class security and scalability',
        }}
    >
        <ContentSection
            parentClassName="!py-0 !px-6 overflow-x-clip"
            className="grid grid-cols-1 gap-x-4 md:mt-[26px] md:grid-cols-2 md:px-6"
        >
            <div className="flex w-full max-w-[782px] flex-col">
                <h1 className="mb-6 text-white xl:w-[612px]">Sourcegraph is optimized to run on AWS</h1>

                <p className="mb-8 text-3xl text-gray-200 xl:w-[782px]">
                    Sourcegraph has invested heavily to develop an optimized customer experience on AWS. Sourcegraph has
                    built AMI’s tailored to perform best on AWS—while taking advantage of AWS’s world-class security and
                    scalability.
                </p>

                <Link
                    href="https://aws.amazon.com/marketplace/seller-profile?id=36b4859a-d034-4079-89ed-2ac4d386df23"
                    className="btn  btn-inverted-primary w-fit px-6 font-normal"
                    title="Visit the Marketplace"
                    target="_blank"
                >
                    Visit the Marketplace
                </Link>
            </div>
        </ContentSection>

        <div className="absolute right-0 ml-9 hidden h-[500px] w-full bg-[url('/assets/aws/hero_img.png')] bg-cover bg-center bg-no-repeat md:top-[110px] md:block md:w-[350px] lg:top-[191px] lg:w-[450px] xl:w-[500px]" />

        <ThreeUpText
            items={threeUpTextItems}
            className="mx-auto mt-16 max-w-screen-xl md:mt-44 md:px-6"
            wrapperClassName="!gap-6"
        />

        <ContentSection className="pt-16 pb-10 md:pt-[180px] md:pb-24" parentClassName="!py-0">
            <h2 className="mb-8 text-white md:mb-16">Successful customers</h2>
            {caseStudies.map(caseStudy => (
                <BlogListItem key={caseStudy.title} {...caseStudy} />
            ))}
        </ContentSection>

        <ContentSection className="flex flex-col items-center pb-16 md:pt-12 md:pb-28" parentClassName="!py-0">
            <h2 className="px-6 text-center text-white">Reach out to our partner team to learn more</h2>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row">
                <Link
                    href="mailto:partner@sourcegraph.com"
                    title="Get started with Cody"
                    className="btn btn-inverted-primary text-center"
                >
                    Contact us
                </Link>
                <Link
                    href="https://sourcegraph.com/search"
                    title="Search public code"
                    className="btn btn-outline-white"
                    target="_blank"
                >
                    Search public code
                </Link>
            </div>
        </ContentSection>
    </Layout>
)

export default AWS
