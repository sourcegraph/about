declare global {
    interface Window {
        plausible?: (goal: string) => void
    }
}

export const plausible = (goal: string): void => {
    if (
        typeof window !== undefined &&
        typeof window.plausible === 'function'
    ) {
        window?.plausible(goal)
    }
}
