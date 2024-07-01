import { IAuth } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

export const makeRemoteDatabaseAuthSignUp = (): IAuth.SignUpAuth => {
  return DBFactory.signUpAuth()
}
