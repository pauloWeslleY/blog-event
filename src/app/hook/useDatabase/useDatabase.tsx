import { Auth } from 'firebase/auth'
import { makeRemoteDatabase } from '@/main/factories/firebase-database'

export function useDatabase(): { auth: Auth } {
  const userAuth = makeRemoteDatabase()

  return {
    auth: userAuth.auth(),
  }
}
