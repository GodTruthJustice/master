

import { gql } from '@apollo/client';

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      data {
        id
        attributes {
          title
          description
          date
          location
          poster {
            url
          }
        }
      }
    }
  }
`