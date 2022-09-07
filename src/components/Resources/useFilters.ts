import { useState } from 'react'

import { resourceItems, Filter } from '@components'

interface UseFilters {
    filterGroups: {
        title: string
        filters: Filter[]
    }[]
    setFilter: (groupTitle: string, { text, checked }: Filter) => void
    resetFilterGroup: (groupTitle: string) => void
    resetFilterGroups: () => void
}

export const useFilters = (): UseFilters => {
    const defaultFilterGroups = [
        {
            title: 'Content Type',
            filters: [...new Set(resourceItems.map(resource => resource.contentType))]
                .map(contentType => ({ text: contentType, checked: false }))
                .sort(),
        },
        {
            title: 'Subject',
            filters: [...new Set(resourceItems.flatMap(resource => resource.subjects))]
                .map(subject => ({ text: subject, checked: false }))
                .sort(),
        },
    ]

    const [filterGroups, setFilterGroups] = useState(defaultFilterGroups)

    /**
     * This sets a filter based on the group title
     *
     * @param groupTitle - the title of the filter group
     * @param filter - the filter to update
     */
    const setFilter = (groupTitle: string, filter: Filter): void => {
        const updatedFilterGroup = {
            title: groupTitle,
            filters: filterGroups
                // eslint-disable-next-line unicorn/prefer-array-find
                .filter(group => group.title === groupTitle)[0]
                .filters.map(ogFilter => {
                    if (ogFilter.text === filter.text) {
                        return { ...ogFilter, checked: !filter.checked }
                    }
                    return ogFilter
                }),
        }

        const updatedFilterGroups = [
            updatedFilterGroup,
            ...filterGroups.filter(filterGroup => filterGroup.title !== groupTitle),
        ]

        setFilterGroups(updatedFilterGroups)
    }

    /**
     * This resets a filter group by the group title
     *
     * @param groupTitle - the group title to reset the filter group
     */
    const resetFilterGroup = (groupTitle: string): void =>
        setFilterGroups([
            ...defaultFilterGroups.filter(filterGroup => filterGroup.title === groupTitle),
            ...filterGroups.filter(filterGroup => filterGroup.title !== groupTitle),
        ])

    /**
     * This resets all filter groups back to their default values
     */
    const resetFilterGroups = (): void => setFilterGroups(defaultFilterGroups)

    return { filterGroups, setFilter, resetFilterGroup, resetFilterGroups }
}
