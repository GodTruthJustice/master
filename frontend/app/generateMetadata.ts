
//app/generateMetadata.ts
import { gql } from '@apollo/client'
import { getClient } from '@/lib/apollo-client'
import { homepageData } from '@/lib/home-data'

const HOMEPAGE_META_QUERY = gql`
  query HomepageMeta {
    homepage {
      data {
        attributes {
          title
          description
          ogImage {
            url
          }
        }
      }
    }
  }
`

export async function getHomeMetadata() {
  try {
    const { data } = await getClient().query({ query: HOMEPAGE_META_QUERY })
    const attrs = data?.homepage?.data?.attributes

    const title = attrs?.title || 'God & Justice | A Beacon of Hope'
    const description = attrs?.description || 'Welcome to a new vision of truth, faith, and social justice.'
    const imageUrl = attrs?.ogImage?.url || homepageData.heroImage

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: 'https://yourdomain.com',
        siteName: 'God & Justice',
        images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
        type: 'website'
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [imageUrl]
      }
    }
  } catch (error) {
    console.error('Failed to fetch metadata:', error)
    return {
      title: 'God & Justice | A Beacon of Hope',
      description: 'Welcome to a new vision of truth, faith, and social justice.'
    }
  }
}