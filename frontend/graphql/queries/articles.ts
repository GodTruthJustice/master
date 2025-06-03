
import { gql } from '@apollo/client';
// import { gql } from 'graphql-request'

export const GET_ARTICLES = gql`
  query GetArticles {
    articles {
      data {
        id
        attributes {
          title
          excerpt
          content
          coverImage {
            url
          }
        }
      }
    }
  }
`
