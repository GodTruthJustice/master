'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-600">God & Justice</Link>
        <nav className="hidden md:flex gap-6 text-gray-700">
          <Link href="/articles">Articles</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/vision">Vision</Link>
          <Link href="/events">Events</Link>
          <Link href="/login" className="font-semibold">Login</Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>☰</button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="md:hidden overflow-hidden bg-white border-t px-4 py-2"
          >
            <div className="flex flex-col gap-4">
              <Link href="/articles">Articles</Link>
              <Link href="/programs">Programs</Link>
              <Link href="/vision">Vision</Link>
              <Link href="/events">Events</Link>
              <Link href="/login" className="font-semibold">Login</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}