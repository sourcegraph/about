import { FunctionComponent, Fragment, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import ChevronDownIcon from 'mdi-react/ChevronDownIcon'
import ChevronUpIcon from 'mdi-react/ChevronUpIcon'

import { breakpoints } from '../../data/breakpoints'
import { useWindowWidth } from '../../hooks/windowWidth'
import { Badge } from '../Badge'
import { Heading } from '../Heading'

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
    isSmOrDown?: boolean
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
const Filter: FunctionComponent<Filter> = ({ text, checked = false, onClick }) => {
    const wordsToCapitalizeFirst = ['code monitoring']

    return (
        <Badge
            className={wordsToCapitalizeFirst.includes(text) ? 'first-letter:capitalize' : 'capitalize'}
            text={text}
            onClick={onClick}
            color="violet-outlined"
            size="large"
            checked={checked}
        />
    )
}

/**
 * A Filter Group displaying the title of filters and filter pills/dropdown menus
 *
 * @param props - component props
 * @param props.title - title of the filter group
 * @param props.filters - an array of filters
 * @param props.setFilter - function to set a filter
 * @param props.resetFilterGroup - function to reset a filter group by title
 */
const FilterGroup: FunctionComponent<FilterGroup> = ({ title, filters, setFilter, resetFilterGroup, isSmOrDown }) => (
    <>
        {isSmOrDown ? (
            <div className="flex w-full pb-8">
                <Menu as="div" className="relative w-full">
                    {({ open }) => (
                        <>
                            <Menu.Button className="mb-2 flex w-full items-center justify-between rounded-md border border-gray-300 py-2 px-3">
                                <p className="mb-0 text-gray-500 md:col-span-2 lg:whitespace-nowrap">{title}</p>
                                {open ? (
                                    <ChevronUpIcon className="ml-[1px] w-4 text-gray-500" />
                                ) : (
                                    <ChevronDownIcon className="ml-[1px] w-4  text-gray-500" />
                                )}
                            </Menu.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="flex flex-wrap gap-2">
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
                                </Menu.Items>
                            </Transition>
                        </>
                    )}
                </Menu>
            </div>
        ) : (
            <>
                <Heading size="h6" className="mb-4 pt-12 text-gray-700 md:col-span-2 lg:whitespace-nowrap">
                    {title === 'Subject' ? `FILTER ${title}` : `FILTER BY ${title}`}
                </Heading>
                <div className="flex flex-wrap gap-4">
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
            </>
        )}
    </>
)
/**
 * The Filters component that displays all filters.
 *
 * @param props - component props
 * @param props.groups - an array of filter groups
 * @param props.setFilter - function to set a filter
 * @param props.resetFilterGroup - function to reset a filter group by title
 * @param props.resetFilterGroups - function to reset filter groups back to default
 */
export const Filters: FunctionComponent<Filters> = ({ groups, setFilter, resetFilterGroup }) => {
    const [open, setOpen] = useState<boolean>(false)
    const windowWidth = useWindowWidth()
    const isSmOrDown = windowWidth < breakpoints.md

    return isSmOrDown ? (
        <>
            {!open ? (
                <button
                    type="button"
                    className="mt-8 mb-16 flex max-w-[159px] justify-between gap-4 text-[18px] font-semibold text-gray-700"
                    onClick={() => setOpen(true)}
                >
                    SHOW FILTER <ChevronDownIcon className="ml-[1px] w-4 text-gray-700" />
                </button>
            ) : (
                <button
                    type="button"
                    className="mt-8 flex max-w-[159px] justify-between gap-4 text-[18px] font-semibold text-gray-700"
                    onClick={() => setOpen(false)}
                >
                    HIDE FILTER <ChevronUpIcon className="ml-[1px] w-4 text-gray-700" />
                </button>
            )}
            {open && (
                <div className="mx-auto flex max-w-[1062px] flex-col gap-1 py-8 md:gap-12">
                    <p className="text-[18px] font-semibold text-gray-700">FILTER BY</p>
                    {groups
                        .sort((a, b) => (a.title > b.title ? 1 : -1))
                        .map(group => (
                            <FilterGroup
                                key={group.title}
                                title={group.title}
                                filters={group.filters}
                                setFilter={setFilter}
                                resetFilterGroup={resetFilterGroup}
                                isSmOrDown={isSmOrDown}
                            />
                        ))}
                </div>
            )}
        </>
    ) : (
        <div className="mx-auto flex max-w-[1062px] flex-col">
            {groups
                .sort((a, b) => (a.title > b.title ? 1 : -1))
                .map(group => (
                    <FilterGroup
                        key={group.title}
                        title={group.title}
                        filters={group.filters}
                        setFilter={setFilter}
                        resetFilterGroup={resetFilterGroup}
                        isSmOrDown={isSmOrDown}
                    />
                ))}
        </div>
    )
}
