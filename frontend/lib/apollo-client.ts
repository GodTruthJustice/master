

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
const isServer = typeof window === 'undefined'

export const getClient = () => {
  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT || 'http://localhost:1337/graphql',
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }),
    cache: new InMemoryCache(),
  })
}