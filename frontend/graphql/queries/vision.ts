
import { gql } from '@apollo/client';
export const GET_VISION = gql`
  query GetVision {
    visions {
      data {
        id
        attributes {
          title
          body
          coverImage {
            url
          }
        }
      }
    }
  }
`