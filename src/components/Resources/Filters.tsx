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
    <div className="mr-xs mb-xs first-letter:capitalize">
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
    <div className="first-of-type:mb-xs md:grid md:grid-cols-12">
        <h6 className="mb-xs md:col-span-2 md:mb-0 md:mr-5xl lg:whitespace-nowrap">{title}</h6>

        <div className="flex flex-wrap md:col-span-10">
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
    <div className="bg-gray-50 py-3xl px-sm">
        <div className="mx-auto flex max-w-[1062px]">
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
                className={classNames('mb-sm whitespace-nowrap', {
                    'cursor-pointer text-blurple-400': !disabledClear,
                    'text-gray-300': disabledClear,
                })}
                onClick={() => !disabledClear && resetFilterGroups()}
                onKeyDown={() => !disabledClear && resetFilterGroups()}
                role={(!disabledClear && 'button') || undefined}
                tabIndex={0}
            >
                <CloseCircleOutlineIcon size={24} className="mr-1 inline align-top" />
                Clear
            </div>
        </div>
    </div>
)
