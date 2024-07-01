import { IAuth } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

export const makeRemoteDatabaseAuthSignIn = (): IAuth.SignInAuth => {
  return DBFactory.signInAuth()
}
