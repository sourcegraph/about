import { useState } from 'react'

import { TelemetryRecorder } from '@sourcegraph/telemetry'

import { resourceItems, Filter } from '.'

interface UseFilters {
    filterGroups: {
        title: string
        filters: Filter[]
    }[]
    setFilter: (groupTitle: string, { text, checked }: Filter) => void
    resetFilterGroup: (groupTitle: string) => void
    resetFilterGroups: () => void
}

interface UseFilterProps {
    telemetryRecorder: TelemetryRecorder<'', ''>
}

/**
 * This hook is used for getting, setting, and resetting filters
 * based on our resource items data.
 */
export const useFilters = ({ telemetryRecorder }: UseFilterProps): UseFilters => {
    const logResourceClickEvent = (groupTitle: string, type: string): void =>
        telemetryRecorder.recordEvent(`resources.filter.${groupTitle === 'Content Type' ? 'contentType' : 'subject'}`, 'toggle', { privateMetadata: { type }})


    const defaultFilterGroups = [
        {
            title: 'Content Type',
            filters: [...new Set(resourceItems.map(resource => resource.contentType))]
                .map((contentType): Filter => ({ text: contentType, checked: false }))
                .sort(),
        },
        {
            title: 'Subject',
            filters: [...new Set(resourceItems.flatMap(resource => resource.subjects))]
                .map((subject): Filter => ({ text: subject, checked: false }))
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
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            filters: filterGroups
                .find(group => group.title === groupTitle)!
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
        logResourceClickEvent(groupTitle, filter.text)
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
