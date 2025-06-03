// app/admin/layout.tsx

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin Dashboard | God & Justice',
  description: 'Manage all your articles, programs, events, and vision content in one place.',
  openGraph: {
    title: 'Admin Dashboard | God & Justice',
    description: 'Admin panel for managing articles, programs, events, and vision.',
    type: 'website',
    images: [
      {
        url: 'https://yourdomain.com/images/admin-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Admin Panel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admin Dashboard | God & Justice',
    description: 'Admin control panel for managing content and settings.',
    images: ['https://yourdomain.com/images/admin-og-image.jpg'],
  },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Admin Control Panel</h1>
          <p className="text-gray-600 mt-2">Manage all content from a central location.</p>
        </header>
        {children}
      </div>
    </main>
  )
}