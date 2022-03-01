import path from 'path'

import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'

import { getPages } from '@lib'
import { slugToTitleCase } from '@util'

interface CaseStudiesHomeProps {
    slugs: string[]
}

const CaseStudiesHome: NextPage<CaseStudiesHomeProps> = ({ slugs }) => (
    <>
        <div>
            <div>
                {slugs.map((slug: string) => (
                    <div key={slug} >
                        <Link href={`/case-studies/${slug}`} passHref={true}>
                            {slugToTitleCase(slug)}   
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
)

export const getStaticProps: GetStaticProps<CaseStudiesHomeProps> = async ({ preview = false }) => {
    const slugs = await getPages(path.join(process.cwd(), 'pages/case-studies'))

    return {
        props: {
            slugs,
            preview,
        },
    }
}

export default CaseStudiesHome
