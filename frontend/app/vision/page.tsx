import { getVisionMetadata } from './generateMetadata'
import VisionContent from './VisionContent'

export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  return await getVisionMetadata()
}

export default function VisionPage() {
  return <VisionContent />
}