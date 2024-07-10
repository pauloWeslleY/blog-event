'use client'

import { ReactNode, useCallback, useEffect } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { Theme } from '@radix-ui/themes'
import { makeQueryClient } from '@/main/factories/query'
import { useUserAuthStore } from '@/main/store'
import { getCookies } from '@/infra/cache/cookies'

export function AppProvider({ children }: { children: ReactNode }) {
  const { setUserAuth } = useUserAuthStore()

  const handleGetDataUserCookies = useCallback(async () => {
    const data = await getCookies()
    setUserAuth(data)
  }, [setUserAuth])

  useEffect(() => {
    handleGetDataUserCookies()
  }, [handleGetDataUserCookies])

  return (
    <QueryClientProvider client={makeQueryClient()}>
      <Theme
        accentColor="violet"
        appearance="dark"
        grayColor="slate"
        radius="medium"
      >
        {children}
      </Theme>
    </QueryClientProvider>
  )
}
