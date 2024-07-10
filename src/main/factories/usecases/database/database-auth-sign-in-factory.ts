import { DBFirebase, IAuth } from '@/data/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthSignIn = (): IAuth.SignInAuth => {
  return DBFirebase.signInAuth(makeRemoteDatabase().auth())
}
