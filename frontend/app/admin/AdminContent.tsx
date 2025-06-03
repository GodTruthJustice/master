'use client'

import { useClientQuery } from '@/lib/useClientQuery'
import { GET_ARTICLES } from '@/graphql/queries/articles'
import { GET_PROGRAMS } from '@/graphql/queries/programs'
import { GET_EVENTS } from '@/graphql/queries/events'
import { GET_VISION } from '@/graphql/queries/vision'

export default function AdminContent() {
  const { data: articlesData, loading: articlesLoading } = useClientQuery(GET_ARTICLES)
  const { data: programsData, loading: programsLoading } = useClientQuery(GET_PROGRAMS)
  const { data: eventsData, loading: eventsLoading } = useClientQuery(GET_EVENTS)
  const { data: visionData, loading: visionLoading } = useClientQuery(GET_VISION)

  const loading = articlesLoading || programsLoading || eventsLoading || visionLoading

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Admin Control Panel</h1>

      {loading ? (
        <p>Loading content...</p>
      ) : (
        <div className="grid gap-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Articles</h2>
            <ul className="space-y-2">
              {articlesData.articles.data.map((article: any) => (
                <li key={article.id} className="p-4 border rounded shadow-sm">
                  <h3 className="font-bold">{article.attributes.title}</h3>
                  <p className="text-sm text-gray-600">
                    {article.attributes.description?.slice(0, 100)}...
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Programs</h2>
            <ul className="space-y-2">
              {programsData.programs.data.map((program: any) => (
                <li key={program.id} className="p-4 border rounded shadow-sm">
                  <h3 className="font-bold">{program.attributes.title}</h3>
                  <p className="text-sm text-gray-600">
                    {program.attributes.description?.slice(0, 100)}...
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Events</h2>
            <ul className="space-y-2">
              {eventsData.events.data.map((event: any) => (
                <li key={event.id} className="p-4 border rounded shadow-sm">
                  <h3 className="font-bold">{event.attributes.title}</h3>
                  <p className="text-sm text-gray-600">
                    {event.attributes.date} @ {event.attributes.location}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Vision</h2>
            <div className="p-4 border rounded shadow-sm">
              <h3 className="font-bold">{visionData.vision.data.attributes.title}</h3>
              <p className="text-sm text-gray-600">
                {visionData.vision.data.attributes.content?.slice(0, 200)}...
              </p>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}