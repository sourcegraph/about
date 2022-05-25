import React from 'react'

export const SUPPORTED_PROGRAMMING_LANGUAGES_URL =
    'https://sourcegraph.com/extensions?query=category%3A%22Programming+languages%22'

export const SUPPORTED_PROGRAMMING_LANGUAGES_COUNT = 32

export const SupportedProgrammingLanguagesLink: React.FunctionComponent<{}> = () => (
    <a href={SUPPORTED_PROGRAMMING_LANGUAGES_URL} target="_blank">
        {SUPPORTED_PROGRAMMING_LANGUAGES_COUNT} programming languages
    </a>
)
