'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-600 to-purple-600 py-16 px-6 text-white text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be the Light. Join the Movement.
        </h2>
        <p className="text-lg mb-8">
          Together, we can bring truth, compassion, and justice to the world. Stand with us.
        </p>
        <Link href="/donate">
          <button className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            Donate Now
          </button>
        </Link>
      </motion.div>
    </section>
  )
}