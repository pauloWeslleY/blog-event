import { UserCredential } from 'firebase/auth'
import { DBFirebase, ISignUp } from '@/infra/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthSignUp = (): ISignUp<UserCredential> => {
  return DBFirebase.signUpAuth(makeRemoteDatabase().auth())
}
