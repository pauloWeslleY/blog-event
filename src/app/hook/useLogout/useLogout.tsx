import { makeRemoteDatabaseAuthSignOut } from '@/main/factories/firebase-database'
import { useUserAuthStore } from '@/main/store'
import { deleteCookies } from '@/infra/cache/cookies'
import { UseLogoutProps } from './types'

export function useLogout(): UseLogoutProps {
  const userAuthSignOut = makeRemoteDatabaseAuthSignOut()
  const { setLogout } = useUserAuthStore()

  const handleLogout = async () => {
    console.log('first')
    await userAuthSignOut.signOut()
    deleteCookies()
    setLogout()
  }

  return { handleLogout }
}
