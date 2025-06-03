'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LoginWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      {/* 背景 Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Image
          src="/logo.svg"
          alt="God & Justice Logo Background"
          width={500}
          height={500}
          className="w-80 h-80 object-contain"
        />
      </div>

      {/* 登录框 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-md backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 transition-colors duration-300"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}