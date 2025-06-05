'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

// export function CTA() {
//   return (
//     <section className="relative w-full bg-gradient-to-br from-indigo-600 to-purple-600 py-16 px-6 text-white text-center overflow-hidden">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: 'easeOut' }}
//         viewport={{ once: true }}
//         className="max-w-2xl mx-auto"
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Be the Light. Join the Movement.
//         </h2>
//         <p className="text-lg mb-8">
//           Together, we can bring truth, compassion, and justice to the world. Stand with us.
//         </p>
//         <Link href="/donate">
//           <button className="bg-white text-purple-700 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
//             Donate Now
//           </button>
//         </Link>
//       </motion.div>
//     </section>
//   )
// }

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
        {/* 🌈 Animated gradient heading */}
        <h2
          className="text-3xl md:text-4xl font-extrabold mb-4
          animate-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-500
          bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.3)]"
        >
          Be the Light. Join the Movement.
        </h2>

        {/* ✨ Animated gradient subtext */}
        <p
          className="text-lg mb-8 animate-text bg-gradient-to-r from-green-300 via-cyan-400 to-purple-400
          bg-clip-text text-transparent drop-shadow-sm"
        >
          Together, we can bring truth, compassion, and justice to the world. Stand with us.
        </p>

        {/* 🔘 Button with gradient text */}
        <Link href="/donate">
          <button className="bg-white py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition duration-300">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 bg-clip-text text-transparent font-semibold text-lg animate-text">
              Donate Now
            </span>
          </button>
        </Link>
      </motion.div>
    </section>
  )
}