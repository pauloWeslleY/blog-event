'use server'
import { cookies } from 'next/headers'

export const checkUserAuthenticated = () => {
  const cookieStore = cookies()
  const userToken = cookieStore.has('token')
  return userToken
}
