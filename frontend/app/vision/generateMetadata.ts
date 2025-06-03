// import { gql } from 'graphql-request'
import { gql } from '@apollo/client'
import { getClient } from '@/lib/apollo-client'

export async function getVisionMetadata() {
  const query = gql`
    query {
      vision {
        data {
          attributes {
            title
            summary
            coverImage {
              url
            }
          }
        }
      }
    }
  `

  // const { vision } = await getClient().request(query)
  const client = getClient()
  const { data } = await client.query({ query })
  const vision = data.vision?.data?.attributes

  const title = vision?.title || "Vision | God & Justice"
  const description = vision?.summary || "Our vision of a world filled with light, dignity, and compassion."
  const imageUrl = vision?.coverImage?.url || "https://yourdomain.com/default-vision.jpg"

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