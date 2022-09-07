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
    setFilter: (groupTitle: string, { text, checked }: Filter) => void
    resetFilterGroup: (groupTitle: string) => void
}

interface Filters {
    groups: {
        title: string
        filters: Filter[]
    }[]
    setFilter: (groupTitle: string, { text, checked }: Filter) => void
    resetFilterGroup: (groupTitle: string) => void
    resetFilterGroups: () => void
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
 * @param props.resetFilterGroup - function to reset a filter gorup by title
 */
const FilterGroup: FunctionComponent<FilterGroup> = ({ title, filters, setFilter, resetFilterGroup }) => (
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
            <Filter
                text="All"
                checked={filters.every(filter => !filter.checked)}
                onClick={() => resetFilterGroup(title)}
            />
        </div>
    </div>
)

/**
 * The Filters component that displays all filters.
 *
 * @param props - component props
 * @param props.groups - an array of filter groups
 * @param props.setFilter - function to set a filter
 * @param props.resetFilterGroup - function to reset a filter gorup by title
 * @param props.resetFilterGroups - function to reset filter groups back to default
 */
export const Filters: FunctionComponent<Filters> = ({ groups, setFilter, resetFilterGroup, resetFilterGroups }) => (
    <div className="tw-bg-gray-50 tw-py-3xl tw-px-sm">
        <div className="tw-flex tw-max-w-[1062px] tw-mx-auto">
            <div>
                {groups
                    .sort((a, b) => (a.title > b.title ? 1 : -1))
                    .map(group => (
                        <FilterGroup
                            key={group.title}
                            title={group.title}
                            filters={group.filters}
                            setFilter={setFilter}
                            resetFilterGroup={resetFilterGroup}
                        />
                    ))}
            </div>

            <div
                className="tw-text-blurple-400 tw-mb-sm tw-cursor-pointer tw-whitespace-nowrap"
                onClick={() => resetFilterGroups()}
                onKeyDown={() => resetFilterGroups()}
                role="button"
                tabIndex={0}
            >
                <CloseCircleOutlineIcon size={24} className="tw-inline tw-mr-1 tw-align-top" />
                Clear
            </div>
        </div>
    </div>
)
