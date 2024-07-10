import { makeRemoteDatabaseAuthSignOut } from '@/main/factories/usecases'
import { logoutCurrentUserAdapter } from '@/main/adapters/user-logged-adapter'
import { useUserAuthStore } from '@/main/store'
import { deleteCookies } from '@/infra/cache/cookies'
import { UseLogoutProps } from './types'

const useLogout = (): UseLogoutProps => {
  const userAuthSignOut = makeRemoteDatabaseAuthSignOut()
  const { setLogout } = useUserAuthStore()

  const handleLogout = async () => {
    console.log('first')
    await userAuthSignOut.signOut()
    logoutCurrentUserAdapter()
    deleteCookies()
    setLogout()
  }

  return { handleLogout }
}

export { useLogout }
