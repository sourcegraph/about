import { GetStaticProps } from 'next'

import TermPage, { TermPageProps, getStaticProps as getStaticPropsForSlug } from './[...slug]'

export const getStaticProps: GetStaticProps<TermPageProps> = async context =>
    getStaticPropsForSlug({ ...context, params: { slug: ['index'] } })

export default TermPage
