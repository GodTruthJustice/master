import { getEventsMetadata } from './generateMetadata'
import EventList from './EventList'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return await getEventsMetadata()
}

export default function EventsPage() {
  return <EventList />
}