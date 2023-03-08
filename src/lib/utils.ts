export const copy = async (text: string): Promise<void> => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(text)
    } else {
        /**
         * Warning: execCommand is deprecated but we use it as a fallback.
         * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
         */
        const element = document.createElement('textarea')
        document.body.append(element)
        element.value = text
        element.select()
        // eslint-disable-next-line etc/no-deprecated
        document.execCommand('copy')
        element.remove()
    }
}
