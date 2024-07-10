import { DBFirebase, IAuth } from '@/data/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthSignUp = (): IAuth.SignUpAuth => {
  return DBFirebase.signUpAuth(makeRemoteDatabase().auth())
}
