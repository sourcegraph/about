export const formatDate = (string: string): string =>
    new Date(string).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
