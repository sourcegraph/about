export const slugToTitleCase = (string: string): string => {
    const capitalizedString = string.split('-').map((string: string) => {
        const regex = /[A-Z]/
        if (regex.test(string.charAt(1))) {
            return string
        }

        return string.charAt(0).toUpperCase() + string.slice(1)
    })

    return capitalizedString.join(' ')
}
