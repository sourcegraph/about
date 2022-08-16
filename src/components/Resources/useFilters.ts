import { useState } from 'react'

import { resourceItems, Filter } from '@components'

interface UseFilters {
    filterGroups: {
        title: string
        filters: Filter[]
    }[]
    setFilter: (groupTitle: string, { text, checked }: Filter) => void
}

export const useFilters = (): UseFilters => {
    const [filterGroups, setFilterGroups] = useState([
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
    ])

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
        ].sort((a, b) => (a.title > b.title ? 1 : -1))

        setFilterGroups(updatedFilterGroups)
    }

    return { filterGroups, setFilter }
}
