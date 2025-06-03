
import nextDynamic from 'next/dynamic'

export const dynamic = 'force-dynamic'

const AdminContent = nextDynamic(() => import('./AdminContent'), { ssr: false })

export default function AdminPage() {
  return <AdminContent />
}