import ProgramList from './ProgramList'
import { getProgramsMetadata } from './generateMetadata'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return await getProgramsMetadata()
}

export default function ProgramsPage() {
  return <ProgramList />
}
