'use client'

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { APP_ROUTES } from '@/main/constants'
import { checkUserAuthenticated } from '@/main/functions'

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter()
  const isAuthenticated = checkUserAuthenticated()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(APP_ROUTES.public.login)
    }
  }, [isAuthenticated, router])

  return (
    <>
      {!isAuthenticated && null}
      {isAuthenticated && children}
    </>
  )
}

export { PrivateRoute }
