import { ApolloClient, NormalizedCacheObject, from, HttpOptions, InMemoryCache, createHttpLink } from '@apollo/client'

import { ConcurrentRequestsLink } from './concurrent-request-link'

export type GraphQLClient = ApolloClient<NormalizedCacheObject>

interface GetGraphqlClientOptions {
    headers: HttpOptions['headers']
    isAuthenticated?: boolean
    baseUrl?: string
    credentials?: 'include' | 'omit' | 'same-origin'
}

export const GRAPHQL_URI = '/.api/graphql'

const customFetch: HttpOptions['fetch'] = (uri, options) => fetch(uri, options)

export function getHeaders(): { [name: string]: string } {
    // This is required for requests to be allowed by Sourcegraph's CORS rules.
    return {
        'X-Requested-With': 'Sourcegraph - chrome-extension vNO_VERSION',
    }
}

export const getGraphQLClient = (options: GetGraphqlClientOptions): GraphQLClient => {
    const { headers, credentials } = options
    const uri = GRAPHQL_URI

    const apolloClient = new ApolloClient({
        uri,
        cache: new InMemoryCache(),
        defaultOptions: {
            /**
             * The default `fetchPolicy` is `cache-first`, which returns a cached response
             * and doesn't trigger cache update. This is undesirable default behavior because
             * we want to keep our cache updated to avoid confusing the user with stale data.
             * `cache-and-network` allows us to return a cached result right away and then update
             * all consumers with the fresh data from the network request.
             */
            watchQuery: {
                fetchPolicy: 'cache-and-network',
            },
            /**
             * `client.query()` returns promise, so it can only resolve one response.
             * Meaning we cannot return the cached result first and then update it with
             * the response from the network as it's done in `client.watchQuery()`.
             * So we always need to make a network request to get data unless another
             * `fetchPolicy` is specified in the `client.query()` call.
             */
            query: {
                fetchPolicy: 'network-only',
            },
        },
        link: from([
            new ConcurrentRequestsLink(),
            createHttpLink({
                uri: ({ operationName }) => `${uri}?${operationName}`,
                headers,
                credentials,
                fetch: customFetch,
            }),
        ]),
    })

    return apolloClient
}

export const appolloClient = getGraphQLClient({ headers: getHeaders(), credentials: 'include' })
