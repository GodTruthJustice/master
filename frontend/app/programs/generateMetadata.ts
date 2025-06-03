// import { gql } from 'graphql-request'
import { gql } from '@apollo/client'
import { getClient } from '@/lib/apollo-client'

export async function getProgramsMetadata() {
  const query = gql`
    query {
      programs(pagination: { limit: 1 }) {
        data {
          attributes {
            title
            summary
            thumbnail {
              url
            }
          }
        }
      }
    }
  `

  // const { programs } = await getClient().request(query)
  // const program = programs?.data?.[0]?.attributes
  const { data } = await getClient().query({ query })
  const programs = data?.programs
  const attribute = programs?.data?.[0]?.attributes

  const title = attribute?.title || 'Programs | God & Justice'
  const description =
    attribute?.summary || 'Discover our impact-driven faith-based programs.'
  const imageUrl =
    attribute?.thumbnail?.url ||
    'https://your-default-domain.com/default-program.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl]
    }
  }
}