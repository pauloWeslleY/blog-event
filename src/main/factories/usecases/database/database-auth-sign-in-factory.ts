import { Auth, UserCredential } from 'firebase/auth'
import { ISignIn } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

type RemoteDatabaseAuthSignInType = ISignIn<Auth, ISignIn.Model<UserCredential>>

const makeRemoteDatabaseAuthSignIn = (): RemoteDatabaseAuthSignInType => {
  return DBFactory.signInAuth()
}

export { makeRemoteDatabaseAuthSignIn }
