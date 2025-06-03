// 'use client'

// import type { Metadata } from 'next'
// import { motion } from 'framer-motion'
// import Image from 'next/image'

// export const metadata: Metadata = {
//   title: 'Login | God & Justice',
//   description: 'Sign in to your account to manage content, programs, and more.',
//   openGraph: {
//     title: 'Login | God & Justice',
//     description: 'Access your dashboard and manage content securely.',
//     type: 'website',
//   },
// }

// export default function LoginLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
//       {/* Background Logo */}
//       <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
//         <Image
//           src="/logo.svg" // 🔁 Replace with your actual logo path
//           alt="God & Justice Logo Background"
//           width={500}
//           height={500}
//           className="w-80 h-80 object-contain"
//         />
//       </div>

//       {/* Glassmorphic login container */}
//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, ease: 'easeOut' }}
//           className="w-full max-w-md backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 transition-colors duration-300"
//         >
//           {children}
//         </motion.div>
//       </div>
//     </div>
//   )
// }


// import type { Metadata } from 'next'
// import LoginWrapper from '@/components/LoginWrapper
// // import Image from 'next/image'

// // ✅ 仍然保留 metadata 这里：
// export const metadata: Metadata = {
//   title: 'Login | God & Justice',
//   description: 'Sign in to your account to manage content, programs, and more.',
//   openGraph: {
//     title: 'Login | God & Justice',
//     description: 'Access your dashboard and manage content securely.',
//     type: 'website',
//   },
// }

// // ✅ 不使用 motion，保持为服务端组件
// export default function LoginLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
//       <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
//         <Image
//           src="/logo.svg"
//           alt="God & Justice Logo Background"
//           width={500}
//           height={500}
//           className="w-80 h-80 object-contain"
//         />
//       </div>

//       <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
//         <div className="w-full max-w-md backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 transition-colors duration-300">
//           {children}
//         </div>
//       </div>
//     </div>
//   )
// }


import type { Metadata } from 'next'
import LoginWrapper from '@/components/LoginWrapper'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Login | God & Justice',
  description: 'Sign in to your account to manage content, programs, and more.',
  openGraph: {
    title: 'Login | God & Justice',
    description: 'Access your dashboard and manage content securely.',
    type: 'website',
  },
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <LoginWrapper>{children}</LoginWrapper>
}