'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { QueryClientProvider } from '@tanstack/react-query'
import { Theme } from '@radix-ui/themes'
import { makeQueryClient } from '@/main/factories/query'
import { useDatabase } from '@/app/hook'
import { useUserStore } from '@/main/store'
import { setCurrentUserAdapter } from '@/main/adapters/user-logged-adapter'
import { checkIsPublicRoute } from '@/main/functions'
import { PrivateRoute } from '@/main/proxy'

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const { user, loadUserLogged } = useUserStore()
  const { auth } = useDatabase()
  const pathname = usePathname()
  const isPublicPage = checkIsPublicRoute(pathname!)

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await loadUserLogged(user.uid)
      }
    })
  }, [loadUserLogged, auth])

  useEffect(() => {
    if (user) {
      setCurrentUserAdapter(user)
    }
  }, [user])

  return (
    <QueryClientProvider client={makeQueryClient()}>
      <Theme
        accentColor="violet"
        appearance="light"
        grayColor="slate"
        radius="full"
      >
        {isPublicPage && children}
        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </Theme>
    </QueryClientProvider>
  )
}
