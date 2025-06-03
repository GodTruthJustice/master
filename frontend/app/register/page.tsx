'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', password: '', username: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
  }

  return (
    <div className="flex items-center justify-center h-screen px-4">
      <form onSubmit={handleRegister} className="w-full max-w-sm p-6 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded"
        />
        <button type="submit" className="w-full bg-primary text-white p-2 rounded">
          Register
        </button>
      </form>
    </div>
  )
}