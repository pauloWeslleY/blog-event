import { makeRemoteDatabaseAuthSignOut } from '@/main/factories/firebase-database'
import { useUserStore } from '@/main/store'
import { deleteCookies } from '@/infra/cache/cookies'

export function useLogout() {
  const { setLogout } = useUserStore()

  async function handleLogout() {
    const userAuthSignOut = makeRemoteDatabaseAuthSignOut()
    await userAuthSignOut.signOut()
    deleteCookies()
    setLogout()
  }

  return { handleLogout }
}
