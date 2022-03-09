import { GetStaticProps } from 'next'

import TermPage, { PageProps, getStaticProps as getStaticPropsForSlug } from './[...slug]'

export const getStaticProps: GetStaticProps<PageProps> = async context =>
    getStaticPropsForSlug({ ...context, params: { slug: ['index'] } })

export default TermPage
