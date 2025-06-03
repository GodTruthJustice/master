// 'use client'

// import { useState } from 'react'
// import { signIn } from 'next-auth/react'

// export default function LoginPage() {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     await signIn('credentials', { email, password, redirect: true, callbackUrl: '/' })
//   }

//   return (
//     <div className="flex items-center justify-center h-screen px-4">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 border rounded shadow">
//         <h2 className="text-xl font-bold mb-4">Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="w-full mb-3 p-2 border rounded"
//         />
//         <button type="submit" className="w-full bg-primary text-white p-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   )
// }



// import LoginForm from '@/components/LoginForm'

// export default function LoginPage() {
//   return (
//     <div className="flex items-center justify-center h-screen px-4 bg-gray-50">
//       <LoginForm />
//     </div>
//   )
// }

// import dynamic from 'next/dynamic'

// // 动态导入 LoginForm，关闭 SSR，防止在服务端执行 useState 和 next-auth/react
// const LoginForm = dynamic(() => import('@/components/LoginForm'), { ssr: false })

// export default function LoginPage() {
//   return <LoginForm />
// }

'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
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
    <form onSubmit={handleSubmit} className="w-full max-w-sm p-6 border rounded shadow">
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
      <button type="submit" className="w-full bg-primary text-white p-2 rounded">
        Login
      </button>
    </form>
  )
}