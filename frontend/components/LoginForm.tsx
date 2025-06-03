'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn('credentials', {
      email,
      password,
      redirect: true,
      callbackUrl: '/',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button type="submit" className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">
        Login
      </button>
    </form>
  )
}