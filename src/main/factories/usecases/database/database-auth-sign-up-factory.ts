import { Auth, UserCredential } from 'firebase/auth'
import { ISignUp } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

type RemoteDatabaseAuthSignUpType = ISignUp<Auth, ISignUp.Model<UserCredential>>

const makeRemoteDatabaseAuthSignUp = (): RemoteDatabaseAuthSignUpType => {
  return DBFactory.signUpAuth()
}

export { makeRemoteDatabaseAuthSignUp }
