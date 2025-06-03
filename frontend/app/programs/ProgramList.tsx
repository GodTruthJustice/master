'use client'

// import { useQuery } from '@apollo/client'
import { useClientQuery } from '@/lib/useClientQuery'
import { GET_PROGRAMS } from '@/graphql/queries/programs'
import { ProgramCard } from '@/components/ProgramCard'

export default function ProgramList() {
  const { data, loading, error } = useClientQuery(GET_PROGRAMS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading programs.</p>

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Programs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.programs.data.map((program: any) => (
          <ProgramCard key={program.id}
            title={program.title}
            description={program.description}
            image={program.image}
            slug={program.slug}/>
        ))}
      </div>
    </div>
  )
}