'use client'
import { ReactNode, useCallback, useEffect } from 'react'
import { Theme } from '@radix-ui/themes'
import { useUserStore } from '@/main/store'
import { getCookies } from '@/infra/cache/cookies'

export function AppProvider({ children }: { children: ReactNode }) {
  const { setUser } = useUserStore()

  const handleGetDataUserCookies = useCallback(async () => {
    const data = await getCookies()
    setUser(data)
  }, [setUser])

  useEffect(() => {
    handleGetDataUserCookies()
  }, [handleGetDataUserCookies])

  return (
    <Theme
      accentColor="violet"
      appearance="dark"
      grayColor="slate"
      radius="medium"
    >
      {children}
    </Theme>
  )
}
