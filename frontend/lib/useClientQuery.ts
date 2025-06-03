'use client'

import { useQuery, QueryHookOptions, DocumentNode, OperationVariables } from '@apollo/client'

export function useClientQuery<TData = any, TVariables extends OperationVariables = OperationVariables>(
  query: DocumentNode,
  options?: QueryHookOptions<TData, TVariables>
) {
  const isServer = typeof window === 'undefined'
  return useQuery<TData, TVariables>(query, {
    skip: isServer || options?.skip,
    ...options,
  })
}