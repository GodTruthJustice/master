// lib/auth.ts
import { cookies } from 'next/headers'

export function isUserAuthenticated(): boolean {
  const token = cookies().get('jwt')?.value
  return !!token
}