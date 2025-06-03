import Breadcrumbs from '@/components/Breadcrumbs'
import { getClient } from '@/lib/apollo-client'
// import { gql } from 'graphql-request'
import { gql } from '@apollo/client'
import '@/styles/globals.css'

export default async function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const query = gql`
    query {
      programs(pagination: { limit: 1 }) {
        data {
          attributes {
            thumbnail {
              url
            }
          }
        }
      }
    }
  `

  // const { programs } = await getClient().request(query)
  const { data } = await getClient().query({ query })
  const programs = data?.programs
  const bgUrl = programs?.data?.[0]?.attributes?.thumbnail?.url || ''

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