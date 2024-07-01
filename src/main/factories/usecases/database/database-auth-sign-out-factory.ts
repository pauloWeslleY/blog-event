import { IAuth } from '@/data/firebase'
import { DBFactory } from '@/data/factories'

export const makeRemoteDatabaseAuthSignOut = (): IAuth.SignOutAuth => {
  return DBFactory.signOutAuth()
}
