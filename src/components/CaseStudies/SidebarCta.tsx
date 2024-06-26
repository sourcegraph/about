import Link from 'next/link'

const SidebarCta: React.FC = () => (
    <div className="sg-bg-code-search-cta mx-auto flex w-full flex-col rounded-lg py-12 px-6 text-center sm:items-center md:w-[378px] md:items-center md:text-left">
        <h2 className="pb-4 text-white ">Try Sourcegraph on your code</h2>
        <p className="pb-1 text-lg text-gray-200">
            Experience code intelligence with a free trial for you and your team, or search millions of open source
            repositories.
        </p>
        <Link
            className="btn btn-inverted-primary flex min-w-fit self-center rounded-md bg-white py-3 px-5 text-center text-base text-violet-500 hover:!bg-violet-400 md:self-start md:py-2 md:px-6"
            href="/demo"
        >
            Meet with a product expert
        </Link>
    </div>
)

export default SidebarCta
