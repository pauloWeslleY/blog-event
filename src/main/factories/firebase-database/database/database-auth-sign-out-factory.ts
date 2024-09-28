import { DBFirebase, ISignOut } from '@/infra/firebase'
import { makeRemoteDatabase } from './index'

export const makeRemoteDatabaseAuthSignOut = (): ISignOut => {
  return DBFirebase.signOutAuth(makeRemoteDatabase().auth())
}
