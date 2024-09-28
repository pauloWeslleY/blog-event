import { UserCredential } from 'firebase/auth'
import { DBFirebase, ISignIn } from '@/infra/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthSignIn = (): ISignIn<UserCredential> => {
  return DBFirebase.signInAuth(makeRemoteDatabase().auth())
}
