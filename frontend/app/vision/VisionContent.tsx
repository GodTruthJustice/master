'use client'

// import { useQuery } from '@apollo/client'
import { useClientQuery } from '@/lib/useClientQuery'
import { GET_VISION } from '@/graphql/queries/vision'

export default function VisionContent() {
  const { data, loading, error } = useClientQuery(GET_VISION)

  if (loading) return <p>Loading vision...</p>
  if (error) return <p>Error loading vision content.</p>

  const vision = data?.vision?.data?.attributes

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{vision?.title}</h1>
      <p className="text-lg text-gray-700">{vision?.content}</p>
    </div>
  )
}