
import { gql } from '@apollo/client';

export const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      data {
        id
        attributes {
          title
          summary
          details
          thumbnail {
            url
          }
        }
      }
    }
  }
`

// import { gql } from '@apollo/client'

// export const GET_PROGRAMS = gql`
//   query GetPrograms {
//     programs {
//       data {
//         id
//         attributes {
//           title
//           description
//           icon
//         }
//       }
//     }
//   }
// `