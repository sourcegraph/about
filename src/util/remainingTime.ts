export const remainingTime = (
    launchDate: number
): { days: string; hours: string; minutes: string; seconds: string; launched: boolean } => {
    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const now = new Date().getTime()
    const remainingTime = launchDate - now

    return {
        days: Math.trunc(remainingTime / day)
            .toString()
            .padStart(2, '0'),
        hours: Math.trunc((remainingTime % day) / hour)
            .toString()
            .padStart(2, '0'),
        minutes: Math.trunc((remainingTime % hour) / minute)
            .toString()
            .padStart(2, '0'),
        seconds: Math.trunc((remainingTime % minute) / second)
            .toString()
            .padStart(2, '0'),
        launched: now > launchDate,
    }
}
