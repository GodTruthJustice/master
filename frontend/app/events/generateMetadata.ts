// app/events/generateMetadata.ts
// import { gql } from 'graphql-request'
import { gql } from '@apollo/client'
import { getClient } from '@/lib/apollo-client'

export async function getEventsMetadata() {
  const query = gql`
    query {
      events(pagination: { limit: 1 }) {
        data {
          attributes {
            title
            description
            cover {
              url
            }
          }
        }
      }
    }
  `
  // const { events } = await getClient().request(query)
  const client = getClient()
  const { data } = await getClient().query({ query })
  const event = data?.events?.data?.[0]?.attributes

  const title = event?.title || 'Events | God & Justice'
  const description = event?.description || 'Explore upcoming events that bring light to the community.'
  const imageUrl = event?.cover?.url || 'https://your-default-domain.com/default-event.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}