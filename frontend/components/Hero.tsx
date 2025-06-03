
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { homepageData } from '@/lib/home-data'

export function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Fullscreen background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${homepageData.heroImage}')` }}
      />

      {/* Animated content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 max-w-4xl px-4 text-center text-white drop-shadow-lg"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            GOD’s Truth & Fight for Justice
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          {/* A nonprofit movement spreading hope, faith, and justice across the world. */}
          We are a movement of compassion, conscience, and courage—defending human dignity and building a better world together.
        </p>
        <Link href="/programs">
          <button className="bg-white text-indigo-700 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
            Explore Our Mission
          </button>
        </Link>
      </motion.div>
    </section>
  )
}