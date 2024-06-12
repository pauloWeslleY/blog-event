import { Auth } from 'firebase/auth'
import { makeRemoteDatabase } from '@/main/factories/usecases'

const useDatabase = (): { auth: Auth } => {
  const userAuth = makeRemoteDatabase()

  return {
    auth: userAuth.auth(),
  }
}

export { useDatabase }
