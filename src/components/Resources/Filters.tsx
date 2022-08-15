import { FunctionComponent } from 'react'

import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon'

import { resourceItems } from '@components'

interface Filter {
    text: string
}

interface FilterGroup {
    title: string
    filters: string[]
}

/**
 * A Filter pill component displaying the filter type
 *
 * @param props - component props
 * @param props.text - The text of the filter
 */
const Filter: FunctionComponent<Filter> = ({ text }) => (
    <div className="tw-bg-white tw-text-gray-500 tw-py-[6px] tw-px-xs tw-text-sm tw-border tw-border-solid tw-border-gray-500 tw-rounded-lg tw-mr-xs tw-mb-xs hover:tw-bg-gray-500 hover:tw-text-white tw-cursor-pointer tw-transition-all tw-ease-out first-letter:tw-capitalize tw-font-mono">
        {text}
    </div>
)

/**
 * A Filter Group displaying the title of filters and filter pills
 *
 * @param props - component props
 * @param props.title - title of the filter group
 * @param props.filters - an array of filters
 */
const FilterGroup: FunctionComponent<FilterGroup> = ({ title, filters }) => (
    <div className="md:tw-grid md:tw-grid-cols-12">
        <h6 className="tw-mb-xs md:tw-mb-0 md:tw-mr-5xl md:tw-col-span-3 tw-whitespace-nowrap">{title}</h6>

        <div className="tw-flex tw-flex-wrap md:tw-col-span-9">
            {filters.map(filter => (
                <Filter key={filter} text={filter} />
            ))}
            <Filter text="All" />
        </div>
    </div>
)

/**
 * This is the Filters component that displays all filters.
 */
export const Filters: FunctionComponent = () => {
    const contentTypes = [...new Set(resourceItems.map(resource => resource.contentType))].sort()
    const subjects = [...new Set(resourceItems.flatMap(resource => resource.subjects))].sort()

    return (
        <div className="tw-bg-gray-50 tw-py-5xl tw-px-sm">
            <div className="tw-max-w-5xl tw-mx-auto">
                <div className="text-right tw-text-blurple-400 tw-mb-sm tw-cursor-pointer">
                    <CloseCircleOutlineIcon size={24} className="tw-inline tw-mr-1 tw-align-top" />
                    Clear
                </div>

                <FilterGroup title="Content Type" filters={contentTypes} />
                <FilterGroup title="Subject" filters={subjects} />
            </div>
        </div>
    )
}
