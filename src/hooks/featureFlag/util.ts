import { gql, useQuery } from '@apollo/client'

// A union of all feature flags we currently have.
export const FEATURE_FLAGS = ['ab-shortened-install-first-signup-flow-cody-2024-04'] as const

export type FeatureFlagName = typeof FEATURE_FLAGS[number]

export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }

/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string
    String: string
    Boolean: boolean
    Int: number
    Float: number
    /** An arbitrarily large integer encoded as a decimal string. */
    BigInt: string
    /**
     * An RFC 3339-encoded UTC date string, such as 1973-11-29T21:33:09Z. This value can be parsed into a
     * JavaScript Date using Date.parse. To produce this value from a JavaScript Date instance, use
     * Date#toISOString.
     */
    DateTime: string
    /** A Git object ID (SHA-1 hash, 40 hexadecimal characters). */
    GitObjectID: string
    /** A string that contains valid JSON, with additional support for //-style comments and trailing commas. */
    JSONCString: string
    /** A valid JSON value. */
    JSONValue: unknown
    /** A quadruple that represents all possible states of the published value: true, false, 'draft', or null. */
    PublishedValue: boolean | 'draft'
}

export interface OrgFeatureFlagOverridesResult {
    __typename?: 'Query'
    organizationFeatureFlagOverrides: {
        __typename?: 'FeatureFlagOverride'
        value: boolean
        namespace: { __typename?: 'Org'; id: string } | { __typename?: 'User'; id: string }
        targetFlag:
            | { __typename?: 'FeatureFlagBoolean'; name: string }
            | { __typename?: 'FeatureFlagRollout'; name: string }
    }[]
}

export type OrgFeatureFlagOverridesVariables = Exact<{ [key: string]: never }>

export interface EvaluateFeatureFlagResult {
    __typename?: 'Query'
    evaluateFeatureFlag: boolean | null
}

export type EvaluateFeatureFlagVariables = Exact<{
    flagName: Scalars['String']
}>

interface OrgFlagOverride {
    orgID: string
    flagName: string
    value: boolean
}

const buildFlagOverrideKey = (key: string): string => `featureFlagOverride-${key}`

export const getFeatureFlagOverride = (flagName: string): boolean | null => {
    if (typeof window !== 'undefined') {
        const overriddenValue = localStorage?.getItem(buildFlagOverrideKey(flagName))
        return overriddenValue === null ? null : overriddenValue === 'true'
    }
    return null
}

/**
 * // TODO: clarify why to use this if GQL already takes care of overrides?
 * Fetches all feature flag overrides for organizations that the current user is a member of
 */
export function useFlagsOverrides(): { data: OrgFlagOverride[]; loading: boolean } {
    const { data, loading } = useQuery<OrgFeatureFlagOverridesResult, OrgFeatureFlagOverridesVariables>(
        gql`
            query OrgFeatureFlagOverrides {
                organizationFeatureFlagOverrides {
                    namespace {
                        id
                    }
                    targetFlag {
                        ... on FeatureFlagBoolean {
                            name
                        }
                        ... on FeatureFlagRollout {
                            name
                        }
                    }
                    value
                }
            }
        `,
        { fetchPolicy: 'cache-and-network' }
    )

    if (!data) {
        return { data: [], loading }
    }

    return {
        data: data?.organizationFeatureFlagOverrides.map(value => ({
            orgID: value.namespace.id,
            flagName: value.targetFlag.name,
            value: value.value,
        })),
        loading,
    }
}
