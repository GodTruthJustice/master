
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
      {/* <motion.div
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
          We are a movement of compassion, conscience, and courage—defending human dignity and building a better world together.
        </p>
        <Link href="/programs">
          <button className="bg-white text-indigo-700 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
            Explore Our Mission
          </button>
        </Link>
      </motion.div> */}

    {/* <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative z-10 max-w-5xl px-6 text-center drop-shadow-xl"
    >

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        <span className="bg-gradient-to-r from-yellow-300 via-pink-400 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]">
          GOD’s Truth & Fight for Justice
        </span>
      </h1>

  
      <p className="text-lg md:text-xl mb-10 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-md">
        We are a movement of compassion, conscience, and courage—
        <br className="hidden md:inline" />
        defending human dignity and building a better world together.
      </p>


      <Link href="/programs">
        <button className="bg-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 bg-clip-text text-transparent font-semibold text-lg">
            Explore Our Mission
          </span>
        </button>
      </Link>
    </motion.div> */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative z-10 max-w-5xl px-6 text-center drop-shadow-xl"
    >
      {/* 🌈 主标题：渐变流动字体 + 阴影 + 入场 */}
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        <span className="bg-gradient-to-r from-yellow-300 via-pink-500 to-indigo-500
          bg-clip-text text-transparent drop-shadow-[0_3px_10px_rgba(0,0,0,0.4)]
          animate-text"
        >
          GOD’s Truth & Fight for Justice
        </span>
      </h1>

      {/* ✨ 副标题：彩色流动文字，稍微细一点 */}
      <p className="text-lg md:text-xl mb-10
        bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500
        bg-clip-text text-transparent animate-text drop-shadow-md"
      >
        We are a movement of compassion, conscience, and courage—
        <br className="hidden md:inline" />
        defending human dignity and building a better world together.
      </p>

      {/* 🔘 按钮：文字渐变 + hover 效果 */}
      <Link href="/programs">
        <button className="bg-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400
            bg-clip-text text-transparent font-semibold text-lg animate-text"
          >
            Explore Our Mission
          </span>
        </button>
      </Link>
    </motion.div>


    </section>

  )
}