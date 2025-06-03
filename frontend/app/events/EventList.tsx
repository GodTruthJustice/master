'use client'

import { useQuery } from '@apollo/client'
import { GET_EVENTS } from '@/graphql/queries/events'

export default function EventList() {
  const { data, loading, error } = useQuery(GET_EVENTS)

  if (loading) return <p>Loading events...</p>
  if (error) return <p>Error loading events.</p>

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.events.data.map((event: any) => (
          <div key={event.id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{event.attributes.title}</h2>
            <p className="text-gray-600 text-sm">{event.attributes.date} @ {event.attributes.location}</p>
            <p className="mt-2">{event.attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}