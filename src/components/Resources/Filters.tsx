import { FunctionComponent } from 'react'

import classNames from 'classnames'
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon'

export interface Filter {
    text: string
    checked?: boolean
    onClick?: () => void
}

interface FilterGroup {
    title: string
    filters: Filter[]
    setFilter?: (groupTitle: string, { text, checked }: Filter) => void
}

interface Filters {
    groups: FilterGroup[]
    setFilter?: (groupTitle: string, { text, checked }: Filter) => void
}

/**
 * A Filter component displaying the filter type
 *
 * @param props - component props
 * @param props.text - the text for the filter
 * @param props.checked - the enabled/disabled status
 * @param props.onClick - the click function
 */
const Filter: FunctionComponent<Filter> = ({ text, checked = false, onClick }) => (
    <div
        className={classNames(
            'tw-py-[6px] tw-px-xs tw-text-sm tw-border tw-border-solid tw-border-gray-500 tw-rounded-lg tw-mr-xs tw-mb-xs hover:tw-bg-gray-500 hover:tw-text-white tw-cursor-pointer tw-transition-all tw-ease-out first-letter:tw-capitalize tw-font-mono',
            { 'tw-text-white tw-bg-gray-500': checked, 'tw-bg-white tw-text-gray-500': !checked }
        )}
        onClick={onClick}
        onKeyDown={onClick}
        role="button"
        tabIndex={0}
    >
        {text}
    </div>
)

/**
 * A Filter Group displaying the title of filters and filter pills
 *
 * @param props - component props
 * @param props.title - title of the filter group
 * @param props.filters - an array of filters
 * @param props.setFilter - function to set a filter
 */
const FilterGroup: FunctionComponent<FilterGroup> = ({ title, filters, setFilter }) => (
    <div className="md:tw-grid md:tw-grid-cols-12">
        <h6 className="tw-mb-xs md:tw-mb-0 md:tw-mr-5xl md:tw-col-span-2 tw-whitespace-nowrap">{title}</h6>

        <div className="tw-flex tw-flex-wrap md:tw-col-span-10">
            {filters.map(filter => (
                <Filter
                    key={filter.text}
                    text={filter.text}
                    checked={filter.checked}
                    onClick={() => setFilter(title, filter)}
                />
            ))}
            <Filter text="All" checked={filters.every(filter => !filter.checked)} />
        </div>
    </div>
)

/**
 * The Filters component that displays all filters.
 *
 * @param props - component props
 * @param props.groups - an array of filter groups
 * @param props.setFilter - function to set a filter
 */
export const Filters: FunctionComponent<Filters> = ({ groups, setFilter }) => (
    <div className="tw-bg-gray-50 tw-py-3xl tw-px-sm">
        <div className="tw-flex tw-max-w-screen-xl tw-mx-auto">
            <div>
                {groups.map(group => (
                    <FilterGroup key={group.title} title={group.title} filters={group.filters} setFilter={setFilter} />
                ))}
            </div>

            <div className="tw-text-blurple-400 tw-mb-sm tw-cursor-pointer tw-whitespace-nowrap">
                <CloseCircleOutlineIcon size={24} className="tw-inline tw-mr-1 tw-align-top" />
                Clear
            </div>
        </div>
    </div>
)
