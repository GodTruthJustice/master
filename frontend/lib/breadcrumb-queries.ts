
import { gql } from '@apollo/client'
import { DocumentNode } from 'graphql'

type QueryConfig = {
  query: DocumentNode
  getTitle: (data: any) => string | undefined
}

// 明确指定可以动态访问的结构
export const QUERY_MAP: Record<string, QueryConfig> = {
  programs: {
    query: gql`
      query GetProgramTitle($slug: String!) {
        programs(filters: { slug: { eq: $slug } }) {
          data {
            attributes {
              title
            }
          }
        }
      }
    `,
    getTitle: (data) => data?.programs?.data?.[0]?.attributes?.title,
  },
  articles: {
    query: gql`
      query GetArticleTitle($slug: String!) {
        articles(filters: { slug: { eq: $slug } }) {
          data {
            attributes {
              title
            }
          }
        }
      }
    `,
    getTitle: (data) => data?.articles?.data?.[0]?.attributes?.title,
  },
  events: {
    query: gql`
      query GetEventTitle($slug: String!) {
        events(filters: { slug: { eq: $slug } }) {
          data {
            attributes {
              title
            }
          }
        }
      }
    `,
    getTitle: (data) => data?.events?.data?.[0]?.attributes?.title,
  },
}