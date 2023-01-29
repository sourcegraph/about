import { FunctionComponent } from 'react'

import classNames from 'classnames'
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon'

import { Badge } from '../Badge'

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
    disabledClear: boolean
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
    <div className="first-letter:tw-capitalize tw-mr-xs tw-mb-xs">
        <Badge text={text} onClick={onClick} color="white-outlined" size="large" checked={checked} />
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
    <div className="md:tw-grid md:tw-grid-cols-12 first-of-type:tw-mb-xs">
        <h6 className="tw-mb-xs md:tw-mb-0 md:tw-mr-5xl md:tw-col-span-2 lg:tw-whitespace-nowrap">{title}</h6>

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
 * @param props.disabledClear - boolean to disable the clear button
 */
export const Filters: FunctionComponent<Filters> = ({
    groups,
    setFilter,
    resetFilterGroup,
    resetFilterGroups,
    disabledClear,
}) => (
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
                className={classNames('tw-mb-sm tw-whitespace-nowrap', {
                    'tw-text-blurple-400 tw-cursor-pointer': !disabledClear,
                    'tw-text-gray-300': disabledClear,
                })}
                onClick={() => !disabledClear && resetFilterGroups()}
                onKeyDown={() => !disabledClear && resetFilterGroups()}
                role={(!disabledClear && 'button') || undefined}
                tabIndex={0}
            >
                <CloseCircleOutlineIcon size={24} className="tw-inline tw-mr-1 tw-align-top" />
                Clear
            </div>
        </div>
    </div>
)
