
import Breadcrumbs from '@/components/Breadcrumbs'
import { getClient } from '@/lib/apollo-client'
// import { gql } from 'graphql-request'
import { gql } from '@apollo/client'
import '@/styles/globals.css'

export default async function VisionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const query = gql`
    query {
      vision {
        data {
          attributes {
            background {
              url
            }
          }
        }
      }
    }
  `

  // const { vision } = await getClient().request(query)
  // const { vision } = await client.query({ query })
  const client = getClient()
  const { data } = await client.query({ query })
  const bgUrl = data.vision?.data?.attributes?.background?.url || ''

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 dark:bg-black/60"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="backdrop-blur-md bg-white/70 dark:bg-gray-900/80 rounded-xl p-6 shadow-xl">
        <Breadcrumbs/>
        {children}
      </div>
    </div>
  )
}